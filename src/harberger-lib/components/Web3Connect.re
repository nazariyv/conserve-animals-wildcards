open Globals;

let infoModalStyle =
  Css.(
    style([
      padding(rem(3.)),
      borderRadius(px(5)),
      width(px(640)),
      maxWidth(`vw(100.)),
    ])
  );

let useOpenModal = () => {
  let connectWeb3 = RootProvider.useConnectWeb3();

  () => {
    // ReasonReactRouter.push("#");
    connectWeb3(RootProviderTypes.NoAction);
  };
};

[@gentype]
[@react.component]
let make = (~clickAction=() => ()) => {
  let connectWeb3 = useOpenModal();
  let deactivateWeb3 = RootProvider.useDeactivateWeb3();
  let networkIdOpt = RootProvider.useNetworkId();

  let connectedNetworkName = networkId =>
    switch (networkId) {
    | 1 => {j|MAINNET\xa0|j}->React.string
    | 3 => {j|ROPSTEN\xa0|j}->React.string
    | 4 => {j|RINKEBY\xa0|j}->React.string
    | 5 => {j|GOERLI\xa0|j}->React.string
    | 42 => {j|KOVAN\xa0|j}->React.string
    | _ => {j|Unknown\xa0|j}->React.string
    };

  let web3Button =
    switch (networkIdOpt) {
    | Some(networkId) =>
      <Rimble.Button
        mainColor="#72C7D7"
        onClick={_e => {
          clickAction();
          deactivateWeb3();
        }}>
        {connectedNetworkName(networkId)}
        <Rimble.Icon name="ExitToApp" size="16px" />
      </Rimble.Button>
    | None =>
      <Rimble.Button
        mainColor="#72C7D7"
        onClick={_e => {
          clickAction();
          ReasonReactRouter.push("#");
          connectWeb3();
        }}>
        "Connect"->React.string
      </Rimble.Button>
    };

  <div className=Styles.loginButton> web3Button </div>;
};

module Modal = {
  [@gentype]
  [@react.component]
  let make = () => {
    let showLogin = RootProvider.useShowLogin();
    let closeLogin = RootProvider.useCloseWeb3Login();

    <Rimble.Modal isOpen=showLogin>
      <Rimble.Card className=infoModalStyle>
        <Rimble.Button.Text
          icononly=true
          icon="Close"
          color="moon-gray"
          position="absolute"
          top=0
          right=0
          m=3
          onClick={_ => closeLogin()}
        />
        <Rimble.Heading className=Styles.centerText>
          "Login"->restr
        </Rimble.Heading>
        <Login />
      </Rimble.Card>
    </Rimble.Modal>;
  };
};
