// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE

import * as Css from "bs-css-emotion/src/Css.js";
import * as Curry from "bs-platform/lib/es6/curry.js";
import * as React from "react";
import * as Belt_Array from "bs-platform/lib/es6/belt_Array.js";
import * as Styles$WildCards from "./Styles.bs.js";
import * as RootProvider$WildCards from "./RootProvider.bs.js";
import * as Connectors from "./bindings/web3-react/connectors";

var connectors = Connectors.default;

function Login(Props) {
  var match = RootProvider$WildCards.useActivateConnector(undefined);
  var activateConnector = match[1];
  return React.createElement("div", undefined, React.createElement("p", undefined, "Use one of the wallet providers below. ", React.createElement("small", undefined, "(Not sure where to go from here? ", React.createElement("a", {
                          href: "https://blog.wildcards.world/how-to-buy-a-wildcard-web3-ethereum/",
                          rel: "noopener noreferrer",
                          target: "_blank"
                        }, React.createElement("span", {
                              className: Styles$WildCards.colorGreen
                            }, "Read this guide")), ")")), React.createElement("div", {
                  className: Curry._1(Css.style, /* :: */[
                        Css.display(/* grid */-999565626),
                        /* :: */[
                          Css.gridTemplateColumns(/* :: */[
                                /* `repeat */[
                                  108828507,
                                  /* tuple */[
                                    /* autoFit */494053794,
                                    /* `minmax */[
                                      -754859950,
                                      /* tuple */[
                                        Css.px(176),
                                        Css.fr(0.6)
                                      ]
                                    ]
                                  ]
                                ],
                                /* [] */0
                              ]),
                          /* :: */[
                            Css.maxWidth(Css.px(800)),
                            /* [] */0
                          ]
                        ]
                      ])
                }, Belt_Array.map(connectors, (function (connector) {
                        return React.createElement("div", {
                                    className: Curry._1(Css.style, /* :: */[
                                          Css.border(Css.px(1), /* solid */12956715, Css.rgba(195, 195, 195, 0.14)),
                                          /* :: */[
                                            Css.hover(/* [] */0),
                                            /* [] */0
                                          ]
                                        ]),
                                    onClick: (function (_e) {
                                        return Curry._1(activateConnector, connector.connector);
                                      })
                                  }, React.createElement("div", {
                                        className: Curry._1(Css.style, /* :: */[
                                              Css.margin(Css.px(8)),
                                              /* :: */[
                                                Css.display(/* flex */-1010954439),
                                                /* :: */[
                                                  Css.justifyContent(/* center */98248149),
                                                  /* :: */[
                                                    Css.alignItems(/* center */98248149),
                                                    /* :: */[
                                                      Css.flexDirection(Css.column),
                                                      /* :: */[
                                                        Css.cursor(/* pointer */-786317123),
                                                        /* :: */[
                                                          Css.borderRadius(Css.px(12)),
                                                          /* :: */[
                                                            Css.hover(/* :: */[
                                                                  Css.backgroundColor(Css.rgba(195, 195, 195, 0.14)),
                                                                  /* [] */0
                                                                ]),
                                                            /* :: */[
                                                              Css.transition(200, 0, Css.easeInOut, "background-color"),
                                                              /* [] */0
                                                            ]
                                                          ]
                                                        ]
                                                      ]
                                                    ]
                                                  ]
                                                ]
                                              ]
                                            ])
                                      }, React.createElement("div", {
                                            className: Curry._1(Css.style, /* :: */[
                                                  Css.width(Css.px(45)),
                                                  /* :: */[
                                                    Css.height(Css.px(45)),
                                                    /* [] */0
                                                  ]
                                                ])
                                          }, React.createElement("img", {
                                                className: Curry._1(Css.style, /* :: */[
                                                      Css.width(/* `percent */[
                                                            -119887163,
                                                            100
                                                          ]),
                                                      /* :: */[
                                                        Css.height(/* `percent */[
                                                              -119887163,
                                                              100
                                                            ]),
                                                        /* [] */0
                                                      ]
                                                    ]),
                                                alt: "MetaMask",
                                                src: connector.img
                                              })), React.createElement("div", {
                                            className: Curry._1(Css.style, /* :: */[
                                                  Css.fontSize(Css.px(24)),
                                                  /* :: */[
                                                    Css.fontWeight(/* `num */[
                                                          5496390,
                                                          700
                                                        ]),
                                                    /* :: */[
                                                      Css.marginTop(Css.em(0.5)),
                                                      /* [] */0
                                                    ]
                                                  ]
                                                ])
                                          }, connector.name), React.createElement("div", {
                                            className: Curry._1(Css.style, /* :: */[
                                                  Css.fontSize(Css.px(15)),
                                                  /* :: */[
                                                    Css.marginTop(Css.em(0.35)),
                                                    /* :: */[
                                                      Css.color(Css.rgb(169, 169, 188)),
                                                      /* [] */0
                                                    ]
                                                  ]
                                                ])
                                          }, connector.connectionPhrase)));
                      }))));
}

var make = Login;

export {
  connectors ,
  make ,
  
}
/* connectors Not a pure module */