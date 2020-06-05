// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE

import * as Css from "bs-css-emotion/src/Css.js";
import * as Curry from "bs-platform/lib/es6/curry.js";
import * as React from "react";
import * as RimbleUi from "rimble-ui";
import * as Belt_Option from "bs-platform/lib/es6/belt_Option.js";
import * as UseDebounce from "use-debounce";
import * as Globals$WildCards from "../Globals.bs.js";
import * as CountDown$WildCards from "../CountDown.bs.js";

var inputStyle = Curry._1(Css.style, /* :: */[
      Css.width(/* `percent */[
            -119887163,
            100
          ]),
      /* [] */0
    ]);

var rightAlignText = Curry._1(Css.style, /* :: */[
      Css.textAlign(/* right */-379319332),
      /* [] */0
    ]);

var infoTooltipStyle = Curry._1(Css.style, /* :: */[
      Css.display(/* inlineBlock */-147785676),
      /* [] */0
    ]);

var infoIcon = React.createElement("div", {
      className: infoTooltipStyle
    }, React.createElement(RimbleUi.Icon, {
          name: "Info",
          color: "green",
          size: "16"
        }));

function BuyInput(Props) {
  var patronage = Props.patronage;
  var onSubmitBuy = Props.onSubmitBuy;
  var newPrice = Props.newPrice;
  var deposit = Props.deposit;
  var depositTimeInSeconds = Props.depositTimeInSeconds;
  var maxAvailableDeposit = Props.maxAvailableDeposit;
  var setNewPrice = Props.setNewPrice;
  var setDeposit = Props.setDeposit;
  var tokenIdName = Props.tokenIdName;
  var match = React.useState((function () {
          return newPrice;
        }));
  var setDepositSlider = match[1];
  React.useEffect((function () {
          Curry._1(setDepositSlider, (function (param) {
                  return deposit;
                }));
          
        }), /* tuple */[
        deposit,
        setDepositSlider
      ]);
  var match$1 = UseDebounce.useDebouncedCallback(setDeposit, 50, {
        maxWait: 500,
        leading: undefined,
        trailing: undefined
      });
  var debouncedSetDeposit = match$1[0];
  return React.createElement(React.Fragment, undefined, React.createElement(RimbleUi.Flex, {
                  children: React.createElement(RimbleUi.Box, {
                        p: 2,
                        mb: 2,
                        children: React.createElement(RimbleUi.Heading, {
                              children: Globals$WildCards.restr("Purchase " + tokenIdName)
                            })
                      })
                }), React.createElement(RimbleUi.Flex, {
                  children: null
                }, React.createElement(RimbleUi.Box, {
                      p: 2,
                      mb: 2,
                      children: null,
                      width: [
                        1,
                        0.5
                      ]
                    }, React.createElement(RimbleUi.Tooltip, {
                          message: "This is the amount of money you will receive if someone purchases " + (String(tokenIdName) + " from you."),
                          placement: "top",
                          children: React.createElement(RimbleUi.Text, {
                                children: null
                              }, Globals$WildCards.restr("Set " + (tokenIdName + "'s new for sale price:")), infoIcon)
                        }), React.createElement(RimbleUi.Input, {
                          type: "number",
                          placeholder: "Your Initial Sale Price",
                          className: inputStyle,
                          onChange: (function ($$event) {
                              return Curry._1(setNewPrice, Belt_Option.getWithDefault($$event.target.value, ""));
                            }),
                          value: newPrice
                        })), React.createElement(RimbleUi.Box, {
                      p: 2,
                      mb: 2,
                      children: null,
                      width: [
                        1,
                        0.5
                      ]
                    }, React.createElement(RimbleUi.Tooltip, {
                          message: "This is the monthly contribution that will go towards conservation of endangered tokenIds. This will be deducted continuously from your deposit",
                          placement: "top",
                          children: React.createElement(RimbleUi.Text, {
                                children: null,
                                className: rightAlignText
                              }, Globals$WildCards.restr("Your monthly contribution:"), infoIcon)
                        }), React.createElement("br", undefined), React.createElement(RimbleUi.Text, {
                          children: Globals$WildCards.restr(patronage),
                          className: rightAlignText
                        }))), React.createElement(RimbleUi.Flex, {
                  children: null,
                  alignItems: "center",
                  justifyContent: "center"
                }, React.createElement(RimbleUi.Box, {
                      p: 2,
                      mb: 2,
                      children: null,
                      width: [
                        1,
                        0.3
                      ]
                    }, React.createElement(RimbleUi.Tooltip, {
                          message: "The deposit is the funds that will be used to cover your monthly contribution.",
                          placement: "top",
                          children: React.createElement(RimbleUi.Text, {
                                children: null
                              }, Globals$WildCards.restr("Set your deposit:"), infoIcon)
                        }), React.createElement(RimbleUi.Input, {
                          type: "number",
                          placeholder: "Your Initial Deposit",
                          className: inputStyle,
                          onChange: (function ($$event) {
                              return Curry._1(setDeposit, Belt_Option.getWithDefault($$event.target.value, ""));
                            }),
                          value: deposit
                        })), React.createElement(RimbleUi.Box, {
                      p: 2,
                      mb: 2,
                      children: React.createElement(RimbleUi.Slider, {
                            value: match[0],
                            className: inputStyle,
                            onChange: (function ($$event) {
                                var value = Belt_Option.getWithDefault($$event.target.value, "");
                                Curry._1(setDepositSlider, (function (param) {
                                        return value;
                                      }));
                                return Curry._1(debouncedSetDeposit, value);
                              }),
                            min: "0.0001",
                            max: maxAvailableDeposit,
                            step: "0.0000001"
                          }),
                      width: [
                        1,
                        0.7
                      ]
                    })), React.createElement("p", undefined, Globals$WildCards.restr("This deposit will last " + (CountDown$WildCards.displayTimeLeftHours(depositTimeInSeconds) + " for your monthly contribution"))), React.createElement(RimbleUi.Flex, {
                  children: React.createElement(RimbleUi.Box, {
                        p: 2,
                        mb: 2,
                        children: React.createElement(RimbleUi.Button, {
                              children: Globals$WildCards.restr("Buy"),
                              onClick: (function (param) {
                                  return Curry._1(onSubmitBuy, undefined);
                                })
                            }),
                        width: [
                          1,
                          0.7
                        ]
                      })
                }));
}

var make = BuyInput;

export {
  inputStyle ,
  rightAlignText ,
  infoTooltipStyle ,
  infoIcon ,
  make ,
  
}
/* inputStyle Not a pure module */
