module UpdateDepositInput = {
  [@bs.module "./UpdateDepositInput"] [@react.component]
  external make:
    (
      ~depositChange: string,
      ~updateDepositChange: ReactEvent.Form.t => (string, bool),
      ~isAddDeposit: bool,
      ~updateIsAddDeposit: bool => unit,
      ~onSubmitDepositChange: ReactEvent.Form.t => unit
    ) =>
    React.element =
    "default";
};

let getToDisplay = (label, value) =>
  React.string(
    label ++ ": " ++ value->Belt.Option.mapWithDefault("loading", a => a),
  );

[@gentype]
[@react.component]
let make = () => {
  let (depositChange, setDepositChange) = React.useState(() => "");
  let (isAddDeposit, setIsAddDeposit) = React.useState(() => true);

  let (depositFunc, txWithdrawObject) = ContractActions.useUpdateDeposit();
  let (withdrawFunc, txDepositObject) = ContractActions.useWithdrawDeposit();

  // let _availableDeposit =
  //   useDepositAbleToWithdrawWeiNew(currentUser)
  //   ->mapWithDefault("0", price => price);

  let onSubmitDepositChange = event => {
    ReactEvent.Form.preventDefault(event);
    let depositChangeWei = Web3Utils.toWei(depositChange, "ether");

    if (isAddDeposit) {
      depositFunc(depositChangeWei);
    } else {
      withdrawFunc(depositChangeWei);
    };
  };

  let updateDepositChange = event => {
    ReactEvent.Form.preventDefault(event);
    InputHelp.onlyUpdateIfPositiveFloat(
      depositChange,
      setDepositChange,
      event,
    );
  };
  let updateIsAddDeposit = isDeposit => {
    setIsAddDeposit(_ => isDeposit);
  };
  <TxTemplate txState=txDepositObject>
    <TxTemplate txState=txWithdrawObject>
      <UpdateDepositInput
        depositChange
        updateDepositChange
        isAddDeposit
        updateIsAddDeposit
        onSubmitDepositChange
      />
    </TxTemplate>
  </TxTemplate>;
};
