open RootProviderTypes;

type web3reactContext = {
  active: bool,
  activate:
    (Web3Connectors.injectedType, unit => unit, bool) => Promise.promise(unit),
  account: option(Web3.ethAddress),
  library: option(web3Library),
  chainId: option(int),
  deactivate: unit => unit,
};
[@bs.module "@web3-react/core"]
external useWeb3React: unit => web3reactContext = "useWeb3React";

module Web3ReactProvider = {
  [@bs.module "@web3-react/core"] [@react.component]
  external make:
    (~getLibrary: rawProvider => web3Library, ~children: React.element) =>
    React.element =
    "Web3ReactProvider";
};
[@bs.module "ethers"] [@bs.scope "providers"] [@bs.new]
external createWeb3Provider: rawProvider => web3Library = "Web3Provider";

let getLibrary = provider => {
  let library = createWeb3Provider(provider);

  let setPollingInterval: web3Library => web3Library = [%raw
    "lib => {lib.pollingInterval = 8000; return lib; }"
  ];
  setPollingInterval(library);
};

let initialState = {
  nonUrlState: NoExtraState,
  ethState: Disconnected,
  config: {
    stewardContractAddress: None,
    stewardAbi: None,
  },
};

let rec reducer = (prevState, action) =>
  switch (action) {
  | ClearNonUrlState => {...prevState, nonUrlState: NoExtraState}
  | LoadAddress(address, optBalance) =>
    let newState = {...prevState, ethState: Connected(address, optBalance)};
    switch (prevState.nonUrlState) {
    | LoginScreen(followOnAction) => reducer(newState, followOnAction)
    | _ => newState
    };
  | GoToWeb3Connect(action) =>
    switch (prevState.ethState) {
    | Connected(_, _) => reducer(prevState, action)
    | Disconnected => {...prevState, nonUrlState: LoginScreen(action)}
    }
  | GoToBuy(animal) =>
    switch (prevState.ethState) {
    | Connected(_, _) => {...prevState, nonUrlState: BuyScreen(animal)}
    | Disconnected => {...prevState, nonUrlState: LoginScreen(action)}
    }
  | GoToDepositUpdate =>
    switch (prevState.ethState) {
    | Connected(_, _) => {...prevState, nonUrlState: UpdateDepositScreen}
    | Disconnected => {...prevState, nonUrlState: LoginScreen(action)}
    }
  | GoToPriceUpdate(animal) =>
    switch (prevState.ethState) {
    | Connected(_, _) => {
        ...prevState,
        nonUrlState: UpdatePriceScreen(animal),
      }
    | Disconnected => {...prevState, nonUrlState: LoginScreen(action)}
    }
  | GoToUserVerification =>
    switch (prevState.ethState) {
    | Connected(_, _) => {...prevState, nonUrlState: UserVerificationScreen}
    | Disconnected => {...prevState, nonUrlState: LoginScreen(action)}
    }
  | Logout => {
      ...prevState,
      ethState: Disconnected,
      nonUrlState: NoExtraState,
    }
  | NoAction => {...prevState, nonUrlState: NoExtraState}
  // | _ => prevState
  };
module RootContext = {
  let context = React.createContext((initialState, _ => ()));
  // Create a provider component
  let make = React.Context.provider(context);

  // Tell bucklescript how to translate props into JS
  let makeProps = (~value, ~children, ()) => {
    "value": value,
    "children": children,
  };
};

module RootWithWeb3 = {
  [@react.component]
  let make =
      (
        ~children,
        ~stewardContractAddress: option(Web3.ethAddress),
        ~stewardAbi: option(Web3.abi),
      ) => {
    let (rootState, dispatch) =
      React.useReducer(
        reducer,
        {
          ...initialState,
          config: {
            stewardContractAddress,
            stewardAbi,
          },
        },
      );
    let context = useWeb3React();

    // This prevents repeated tries at logging in (or re-login after logout)
    let (triedLoginAlready, setTriedLoginAlready) =
      React.useState(() => false);
    React.useEffect5(
      () => {
        Web3Connectors.injected.isAuthorized()
        ->Promise.get(authorised =>
            if (authorised && !triedLoginAlready) {
              ignore(
                context.activate(Web3Connectors.injected, () => (), true)
                ->Promise.Js.catch(_ => {
                    setTriedLoginAlready(_ => true);
                    Promise.resolved();
                  }),
              );
              ();
            } else {
              setTriedLoginAlready(_ => true);
            }
          );
        switch (context.chainId) {
        | None => dispatch(Logout)
        | _ => ()
        };
        None;
      },
      // intentionally only running on mount (make sure it's only mounted once :))
      (
        context.activate,
        context.chainId,
        dispatch,
        setTriedLoginAlready,
        triedLoginAlready,
      ),
    );

    //// This will never fire when metamask logs out unfortunately https://stackoverflow.com/a/59215775/3103033
    // React.useEffect1(
    //   () => {
    //     if (context.active) {
    //       ();
    //     } else {
    //       dispatch(Logout);
    //     };
    //     None;
    //   },
    //   // run this if the status of "active" ever changes
    //   [|rootState.ethState|],
    // );

    // if the connection worked, wait until we get confirmation of that to flip the flag
    React.useEffect3(
      () => {
        !triedLoginAlready && context.active
          ? setTriedLoginAlready(_ => true) : ();

        None;
      },
      (triedLoginAlready, context.active, setTriedLoginAlready),
    );

    React.useEffect4(
      () => {
        switch (context.library, context.account) {
        | (Some(library), Some(account)) =>
          library.getBalance(. account)
          ->Promise.Js.catch(_ => {Promise.resolved(None)})
          ->Promise.get(newBalance => {
              dispatch(
                LoadAddress(
                  account,
                  newBalance->Belt.Option.flatMap(balance =>
                    Eth.make(balance.toString(.))
                  ),
                ),
              )
            });

          None;
        | _ => None
        }
      },
      (context.library, context.account, context.chainId, dispatch),
    );

    <RootContext value=(rootState, dispatch)> children </RootContext>;
  };
};
let useStewardContractAddress: unit => option(Web3.ethAddress) =
  () => {
    let (state, _) = React.useContext(RootContext.context);
    state.config.stewardContractAddress;
  };

let useStewardAbi: unit => option(Web3.abi) =
  () => {
    let (state, _) = React.useContext(RootContext.context);
    state.config.stewardAbi;
  };

let useCurrentUser: unit => option(Web3.ethAddress) =
  () => {
    let (state, _) = React.useContext(RootContext.context);
    switch (state.ethState) {
    | Connected(address, _balance) => Some(address)
    | Disconnected => None
    };
  };

let useIsAddressCurrentUser: Web3.ethAddress => bool =
  address => {
    let currentUser = useCurrentUser();
    switch (currentUser) {
    | Some(currentUserAddress) =>
      address->Js.String.toLowerCase
      == currentUserAddress->Js.String.toLowerCase
    | None => false
    };
  };

let useIsProviderSelected: unit => bool =
  () => {
    let (state, _) = React.useContext(RootContext.context);
    switch (state.ethState) {
    | Connected(_address, _balance) => true
    | Disconnected => false
    };
  };
let useEthBalance: unit => option(Eth.t) =
  () => {
    let (state, _) = React.useContext(RootContext.context);
    switch (state.ethState) {
    | Connected(_address, balance) => balance
    | Disconnected => None
    };
  };
let useNonUrlState: unit => nonUrlState =
  () => {
    let (state, _) = React.useContext(RootContext.context);
    state.nonUrlState;
  };
let useShowLogin: unit => bool =
  () => {
    let nonUrlRouting = useNonUrlState();
    switch (nonUrlRouting) {
    | LoginScreen(_) => true
    | UserVerificationScreen
    | UpdateDepositScreen
    | UpdatePriceScreen(_)
    | BuyScreen(_)
    | NoExtraState => false
    };
  };
let useNetworkId: unit => option(int) =
  () => {
    let context = useWeb3React();

    context.chainId;
  };
let useEtherscanUrl: unit => string =
  () => {
    let networkId = useNetworkId();

    switch (networkId) {
    | Some(5) => "goerli.etherscan.io"
    | _ => "etherscan.io"
    };
  };
let useDeactivateWeb3: (unit, unit) => unit =
  () => {
    let context = useWeb3React();

    context.deactivate;
  };
let useWeb3: unit => option(RootProviderTypes.web3Library) =
  () => {
    let context = useWeb3React();

    context.library;
  };

// TODO:: refactor `useGoToBuy`, `useGoToDepositUpdate`, `useGoToDepositUpdate` to come from a single function (basically do the same thing)
let useGoToBuy: (unit, Animal.t) => unit =
  () => {
    let (_, dispatch) = React.useContext(RootContext.context);
    animal => {
      dispatch(GoToBuy(animal));
    };
  };
let useGoToDepositUpdate: (unit, unit) => unit =
  () => {
    let (_, dispatch) = React.useContext(RootContext.context);
    () => {
      dispatch(GoToDepositUpdate);
    };
  };
let useGoToPriceUpdate: (unit, Animal.t) => unit =
  () => {
    let (_, dispatch) = React.useContext(RootContext.context);
    animal => {
      dispatch(GoToPriceUpdate(animal));
    };
  };
let useVerifyUser: (unit, unit) => unit =
  () => {
    let (_, dispatch) = React.useContext(RootContext.context);
    () => {
      dispatch(GoToUserVerification);
    };
  };
let useClearNonUrlState: (unit, unit) => unit =
  () => {
    let (_, dispatch) = React.useContext(RootContext.context);
    () => {
      dispatch(ClearNonUrlState);
    };
  };
let useConnectWeb3: (unit, RootProviderTypes.rootActions) => unit =
  () => {
    let (_, dispatch) = React.useContext(RootContext.context);
    action => {
      dispatch(GoToWeb3Connect(action));
    };
  };
let useCloseWeb3Login: (unit, unit) => unit =
  () => {
    let (_, dispatch) = React.useContext(RootContext.context);

    () => dispatch(ClearNonUrlState);
  };

let useClearNonUrlStateAndPushRoute: (unit, string) => unit =
  () => {
    let clearNonUrlState = useClearNonUrlState();
    url => {
      clearNonUrlState();
      ReasonReactRouter.push(url);
    };
  };

type connection =
  | Standby
  | Connected
  | Connecting
  | ErrorConnecting;

let useActivateConnector:
  unit => (connection, Web3Connectors.injectedType => unit) =
  () => {
    let context = useWeb3React();
    let (connectionStatus, setConnectionStatus) =
      React.useState(() => Standby);
    (
      connectionStatus,
      provider => {
        context.activate(provider, () => (), true)
        ->Promise.Js.catch(error => {
            Js.log("Error connecting to network:");
            Js.log(error);
            setConnectionStatus(_ => ErrorConnecting);
            Promise.resolved();
          })
        ->Promise.get(() => {setConnectionStatus(_ => Connected)});
        setConnectionStatus(_ => Connecting);
      },
    );
  };

[@react.component]
let make =
    (
      ~children,
      ~stewardContractAddress: option(Web3.ethAddress),
      ~stewardAbi: option(Web3.abi),
    ) => {
  <Web3ReactProvider getLibrary>
    <RootWithWeb3 stewardContractAddress stewardAbi>
      <UserProvider> <ThemeProvider> children </ThemeProvider> </UserProvider>
    </RootWithWeb3>
  </Web3ReactProvider>;
};
