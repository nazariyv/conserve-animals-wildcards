// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE

import * as Css from "bs-css-emotion/src/Css.js";
import * as Curry from "bs-platform/lib/es6/curry.js";
import * as React from "react";
import * as Js_dict from "bs-platform/lib/es6/js_dict.js";
import * as RimbleUi from "rimble-ui";
import * as Belt_Array from "bs-platform/lib/es6/belt_Array.js";
import * as Belt_Option from "bs-platform/lib/es6/belt_Option.js";
import * as Blockie$WildCards from "../bindings/ethereum-blockies-base64/Blockie.bs.js";
import * as Globals$WildCards from "../Globals.bs.js";
import * as RootProvider$WildCards from "../RootProvider.bs.js";
import * as UserProvider$WildCards from "../js/user-provider/UserProvider.bs.js";

function ProfileIcon(Props) {
  var clickActionOpt = Props.clickAction;
  var isMobileOpt = Props.isMobile;
  var clickAction = clickActionOpt !== undefined ? clickActionOpt : (function (param) {
        
      });
  var isMobile = isMobileOpt !== undefined ? isMobileOpt : false;
  var currentUser = RootProvider$WildCards.useCurrentUser(undefined);
  var networkIdOpt = RootProvider$WildCards.useNetworkId(undefined);
  var displayName = UserProvider$WildCards.useDisplayName(Belt_Option.mapWithDefault(currentUser, "loading", (function (a) {
              return a;
            })));
  var displayNameStr = UserProvider$WildCards.displayNameToString(displayName);
  var userAddressLowerCase = currentUser !== undefined ? currentUser.toLowerCase() : "0x0000000000000000000000000000000000000000";
  var optThreeBoxData = UserProvider$WildCards.use3BoxUserData(userAddressLowerCase);
  var optProfile = Globals$WildCards.$great$great$eq(optThreeBoxData, (function (a) {
          return a.profile;
        }));
  var profileImage = Belt_Option.mapWithDefault(Globals$WildCards.$great$great$eq(Globals$WildCards.$less$$great(Globals$WildCards.$great$great$eq(Globals$WildCards.$great$great$eq(optProfile, (function (a) {
                          return a.image;
                        })), (function (img) {
                      return Belt_Array.get(img, 0);
                    })), (function (a) {
                  return a.contentUrl;
                })), (function (content) {
              return Js_dict.get(content, "/");
            })), Blockie$WildCards.makeBlockie(userAddressLowerCase), (function (hash) {
          return "https://ipfs.infura.io/ipfs/" + hash;
        }));
  var message = networkIdOpt !== undefined ? (
      currentUser !== undefined ? displayNameStr : "Loading user"
    ) : "Connect to network";
  var profileIcon = React.createElement("img", {
        className: Curry._1(Css.style, /* :: */[
              Css.borderRadius(/* `percent */[
                    -119887163,
                    50
                  ]),
              /* :: */[
                Css.width(/* `px */[
                      25096,
                      40
                    ]),
                /* :: */[
                  Css.height(/* `px */[
                        25096,
                        40
                      ]),
                  /* :: */[
                    Css.marginLeft(/* `px */[
                          25096,
                          10
                        ]),
                    /* [] */0
                  ]
                ]
              ]
            ]),
        src: profileImage
      });
  var clearAndPush = RootProvider$WildCards.useClearNonUrlStateAndPushRoute(undefined);
  if (networkIdOpt !== undefined) {
    if (isMobile) {
      return React.createElement("div", {
                  className: Curry._1(Css.style, /* :: */[
                        Css.display(/* flex */-1010954439),
                        /* :: */[
                          Css.flexDirection(/* row */5693978),
                          /* [] */0
                        ]
                      ]),
                  onClick: (function (param) {
                      Curry._1(clickAction, undefined);
                      return Curry._1(clearAndPush, "#user/" + userAddressLowerCase);
                    })
                }, React.createElement("div", undefined, React.createElement("p", undefined, React.createElement("strong", undefined, Globals$WildCards.restr("View Your Profile:"))), React.createElement("p", undefined, Globals$WildCards.restr(message))), profileIcon);
    } else {
      return React.createElement(RimbleUi.Tooltip, {
                  message: message,
                  placement: "bottom",
                  children: React.createElement("div", {
                        onClick: (function (param) {
                            Curry._1(clickAction, undefined);
                            return Curry._1(clearAndPush, "#user/" + userAddressLowerCase);
                          })
                      }, profileIcon)
                });
    }
  } else {
    return null;
  }
}

var make = ProfileIcon;

export {
  make ,
  
}
/* Css Not a pure module */
