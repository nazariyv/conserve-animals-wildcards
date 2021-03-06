// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE

import * as Css from "bs-css-emotion/src/Css.js";
import * as List from "bs-platform/lib/es6/list.js";
import * as Curry from "bs-platform/lib/es6/curry.js";
import * as Belt_List from "bs-platform/lib/es6/belt_List.js";
import * as Pervasives from "bs-platform/lib/es6/pervasives.js";

var backgroundImageGorilla = "/img/wildcardsimages/wild-jungle-background.png";

Curry._2(Css.$$global, "body", /* :: */[
      Css.margin(/* `px */[
            25096,
            0
          ]),
      /* :: */[
        Css.fontFamily(/* `custom */[
              1066567601,
              "Lato, Helvetica, sans-serif"
            ]),
        /* :: */[
          Css.overflowX(Css.hidden),
          /* :: */[
            Css.width(/* `percent */[
                  -119887163,
                  100
                ]),
            /* :: */[
              Css.position(/* relative */903134412),
              /* [] */0
            ]
          ]
        ]
      ]
    ]);

Curry._2(Css.$$global, "a", /* :: */[
      Css.color(Css.hex("303030")),
      /* :: */[
        Css.textDecoration(Css.none),
        /* [] */0
      ]
    ]);

Curry._2(Css.$$global, "a:hover", /* :: */[
      Css.textDecoration(Css.underline),
      /* [] */0
    ]);

Curry._2(Css.$$global, "a:active", /* :: */[
      Css.color(Css.hex("303030")),
      /* [] */0
    ]);

Curry._2(Css.$$global, "a:visited", /* :: */[
      Css.color(Css.hex("303030")),
      /* [] */0
    ]);

var app = Curry._1(Css.style, /* :: */[
      Css.boxSizing(/* borderBox */9307263),
      /* :: */[
        Css.fontSize(Css.px(16)),
        /* [] */0
      ]
    ]);

var textOnlyModalText = Curry._1(Css.style, /* :: */[
      Css.padding(Css.em(2)),
      /* [] */0
    ]);

function totalRaisedText(size) {
  return Curry._1(Css.style, /* :: */[
              Css.fontSize(Css.em(size)),
              /* [] */0
            ]);
}

var copyButton = Curry._1(Css.style, /* :: */[
      Css.$$float(/* right */-379319332),
      /* :: */[
        Css.zIndex(50),
        /* [] */0
      ]
    ]);

var centerItems = Curry._1(Css.style, /* :: */[
      Css.display(/* flex */-1010954439),
      /* :: */[
        Css.alignItems(Css.center),
        /* :: */[
          Css.width(/* `percent */[
                -119887163,
                100
              ]),
          /* [] */0
        ]
      ]
    ]);

var centerItemsMargin = Curry._1(Css.style, /* :: */[
      Css.display(Css.block),
      /* :: */[
        Css.margin(Css.auto),
        /* [] */0
      ]
    ]);

var translationSwitch = Curry._1(Css.style, /* :: */[
      Css.padding(Css.rem(0)),
      /* [] */0
    ]);

var topBody = Curry._1(Css.style, /* :: */[
      Css.justifyContent(/* spaceBetween */516682146),
      /* :: */[
        Css.media("(max-width: 831px)", /* :: */[
              Css.textAlign(Css.center),
              /* [] */0
            ]),
        /* :: */[
          Css.paddingLeft(Css.px(15)),
          /* :: */[
            Css.paddingRight(Css.px(15)),
            /* :: */[
              Css.maxWidth(Css.px(1200)),
              /* :: */[
                Css.margin(Css.auto),
                /* [] */0
              ]
            ]
          ]
        ]
      ]
    ]);

var header = Curry._1(Css.style, /* :: */[
      Css.position(Css.relative),
      /* [] */0
    ]);

var noMarginBottom = Curry._1(Css.style, /* :: */[
      Css.marginBottom(Css.px(0)),
      /* [] */0
    ]);

var noMarginTop = Curry._1(Css.style, /* :: */[
      Css.marginTop(Css.px(0)),
      /* [] */0
    ]);

var headerLogo = Curry._1(Css.style, /* :: */[
      Css.media("(max-width: 630px)", /* :: */[
            Css.textAlign(Css.center),
            /* :: */[
              Css.display(/* block */888960333),
              /* [] */0
            ]
          ]),
      /* [] */0
    ]);

var nav = Curry._1(Css.style, /* :: */[
      Css.position(Css.absolute),
      /* :: */[
        Css.maxWidth(Css.px(1200)),
        /* :: */[
          Css.zIndex(200),
          /* :: */[
            Css.top(Css.px(0)),
            /* :: */[
              Css.right(Css.px(0)),
              /* :: */[
                Css.left(Css.px(0)),
                /* :: */[
                  Css.margin2(Css.em(0), Css.auto),
                  /* [] */0
                ]
              ]
            ]
          ]
        ]
      ]
    ]);

var navBox = Curry._1(Css.style, /* :: */[
      Css.display(/* flex */-1010954439),
      /* :: */[
        Css.justifyContent(/* spaceBetween */516682146),
        /* :: */[
          Css.alignItems(Css.center),
          /* [] */0
        ]
      ]
    ]);

var navList = Curry._1(Css.style, /* :: */[
      Css.display(/* flex */-1010954439),
      /* :: */[
        Css.alignItems(/* center */98248149),
        /* :: */[
          Css.media("(max-width: 630px)", /* :: */[
                Css.display(Css.none),
                /* [] */0
              ]),
          /* :: */[
            Css.marginLeft(/* auto */-1065951377),
            /* :: */[
              Css.listStyle(/* none */-922086728, /* inside */501235708, /* none */-922086728),
              /* [] */0
            ]
          ]
        ]
      ]
    ]);

var positionRelative = Curry._1(Css.style, /* :: */[
      Css.position(Css.relative),
      /* [] */0
    ]);

function overlayImg(topPosition, leftPosition) {
  return Curry._1(Css.style, /* :: */[
              Css.position(Css.absolute),
              /* :: */[
                Css.zIndex(2),
                /* :: */[
                  Css.top(/* `percent */[
                        -119887163,
                        topPosition
                      ]),
                  /* :: */[
                    Css.left(/* `percent */[
                          -119887163,
                          leftPosition
                        ]),
                    /* :: */[
                      Css.width(/* `percent */[
                            -119887163,
                            20
                          ]),
                      /* :: */[
                        Css.height(/* `percent */[
                              -119887163,
                              20
                            ]),
                        /* :: */[
                          Css.minWidth(Css.px(50)),
                          /* :: */[
                            Css.minHeight(Css.px(50)),
                            /* [] */0
                          ]
                        ]
                      ]
                    ]
                  ]
                ]
              ]
            ]);
}

var overlayFlameImg = overlayImg(30, 0);

var overlayBadgeImg = overlayImg(60, 70);

var streakText = Curry._1(Css.style, /* :: */[
      Css.position(Css.absolute),
      /* :: */[
        Css.zIndex(100),
        /* :: */[
          Css.bottom(/* `percent */[
                -119887163,
                -10
              ]),
          /* :: */[
            Css.right(/* `percent */[
                  -119887163,
                  50
                ]),
            /* :: */[
              Css.transform(Css.translateX(/* `percent */[
                        -119887163,
                        50
                      ])),
              /* [] */0
            ]
          ]
        ]
      ]
    ]);

var flameImg = Curry._1(Css.style, /* :: */[
      Css.width(/* `percent */[
            -119887163,
            100
          ]),
      /* :: */[
        Css.maxWidth(Css.px(70)),
        /* [] */0
      ]
    ]);

var navListItem = Curry._1(Css.style, /* :: */[
      Css.display(Css.inlineBlock),
      /* [] */0
    ]);

var navListItemToggle = Curry._1(Css.style, /* :: */[
      Css.display(/* flex */-1010954439),
      /* :: */[
        Css.justifyContent(Css.center),
        /* :: */[
          Css.alignItems(Css.center),
          /* [] */0
        ]
      ]
    ]);

var someMarginRight = Curry._1(Css.style, /* :: */[
      Css.marginRight(Css.px(6)),
      /* [] */0
    ]);

var navListText = Curry._1(Css.style, /* :: */[
      Css.color(Css.rgb(136, 136, 136)),
      /* :: */[
        Css.padding(Css.rem(1)),
        /* :: */[
          Css.fontWeight(Css.bold),
          /* [] */0
        ]
      ]
    ]);

var leftTopHeader = Curry._1(Css.style, /* :: */[
      Css.position(Css.relative),
      /* :: */[
        Css.width(Css.px(550)),
        /* :: */[
          Css.maxWidth(Css.px(550)),
          /* :: */[
            Css.paddingTop(Css.px(70)),
            /* :: */[
              Css.paddingBottom(Css.px(70)),
              /* [] */0
            ]
          ]
        ]
      ]
    ]);

var centerText = Curry._1(Css.style, /* :: */[
      Css.textAlign(Css.center),
      /* [] */0
    ]);

var dappImagesCounteractOffset = Curry._1(Css.style, /* :: */[
      Css.marginLeft(/* `percent */[
            -119887163,
            4
          ]),
      /* [] */0
    ]);

var heading = Curry._1(Css.style, /* :: */[
      Css.fontSize(Css.em(3)),
      /* :: */[
        Css.media("(min-width: 768px)", /* :: */[
              Css.paddingTop(/* `rem */[
                    5691738,
                    3
                  ]),
              /* [] */0
            ]),
        /* [] */0
      ]
    ]);

var subHeading = Curry._1(Css.style, /* :: */[
      Css.fontSize(Css.em(1.8)),
      /* :: */[
        Css.fontWeight(/* `num */[
              5496390,
              200
            ]),
        /* [] */0
      ]
    ]);

var wildCardGreen = Css.rgb(107, 173, 62);

var wildCardBlue = Css.rgb(114, 199, 215);

var colorGreen = Curry._1(Css.style, /* :: */[
      Css.color(wildCardGreen),
      /* [] */0
    ]);

var colorBlue = Curry._1(Css.style, /* :: */[
      Css.color(wildCardBlue),
      /* [] */0
    ]);

var animalBox = Curry._1(Css.style, /* :: */[
      Css.marginRight(/* `percent */[
            -119887163,
            12
          ]),
      /* [] */0
    ]);

var ownedAnimalImg = Curry._1(Css.style, /* :: */[
      Css.position(Css.relative),
      /* :: */[
        Css.zIndex(1),
        /* :: */[
          Css.maxWidth(/* `percent */[
                -119887163,
                100
              ]),
          /* :: */[
            Css.textAlign(Css.center),
            /* [] */0
          ]
        ]
      ]
    ]);

var clickableLink = Curry._1(Css.style, /* :: */[
      Css.media("(max-width: 630px)", /* :: */[
            Css.width(/* `percent */[
                  -119887163,
                  100
                ]),
            /* [] */0
          ]),
      /* :: */[
        Css.cursor(/* pointer */-786317123),
        /* [] */0
      ]
    ]);

function headerImg(enlargement, scalar) {
  return Curry._1(Css.style, /* :: */[
              Css.position(/* relative */903134412),
              /* :: */[
                Css.zIndex(1),
                /* :: */[
                  Css.maxHeight(Css.px(500)),
                  /* :: */[
                    Css.maxWidth(/* `percent */[
                          -119887163,
                          100 * enlargement
                        ]),
                    /* :: */[
                      Css.left(/* `percent */[
                            -119887163,
                            -50 * (enlargement - 1)
                          ]),
                      /* :: */[
                        Css.transform(Css.scale(scalar, scalar)),
                        /* :: */[
                          Css.textAlign(Css.center),
                          /* :: */[
                            Css.transition(1000, 0, Css.ease, "all"),
                            /* :: */[
                              Css.hover(/* :: */[
                                    Css.filter(/* :: */[
                                          /* `saturate */[
                                            -29929489,
                                            150
                                          ],
                                          /* :: */[
                                            /* `brightness */[
                                              -445542959,
                                              110
                                            ],
                                            /* [] */0
                                          ]
                                        ]),
                                    /* :: */[
                                      Css.zIndex(2),
                                      /* :: */[
                                        Css.overflow(Css.visible),
                                        /* :: */[
                                          Css.transform(Css.scale(1.1 * scalar, 1.1 * scalar)),
                                          /* :: */[
                                            Css.transition(100, 0, Css.ease, "all"),
                                            /* [] */0
                                          ]
                                        ]
                                      ]
                                    ]
                                  ]),
                              /* [] */0
                            ]
                          ]
                        ]
                      ]
                    ]
                  ]
                ]
              ]
            ]);
}

var horizantalBlueTile = Curry._1(Css.style, /* :: */[
      Css.width(/* `percent */[
            -119887163,
            100
          ]),
      /* :: */[
        Css.padding2(Css.em(2), Css.em(0)),
        /* :: */[
          Css.backgroundColor(/* `hex */[
                5194459,
                "73c7d7ff"
              ]),
          /* :: */[
            Css.textAlign(/* center */98248149),
            /* [] */0
          ]
        ]
      ]
    ]);

var explainerLargeText = Curry._1(Css.style, /* :: */[
      Css.fontSize(Css.rem(2)),
      /* :: */[
        Css.color(/* `hex */[
              5194459,
              "486269"
            ]),
        /* :: */[
          Css.padding2(Css.em(0), Css.em(6)),
          /* :: */[
            Css.margin2(Css.em(0), Css.auto),
            /* :: */[
              Css.maxWidth(Css.px(1200)),
              /* :: */[
                Css.media("(max-width: 760px)", /* :: */[
                      Css.fontSize(Css.rem(1.2)),
                      /* :: */[
                        Css.padding2(Css.em(0), Css.em(2)),
                        /* [] */0
                      ]
                    ]),
                /* [] */0
              ]
            ]
          ]
        ]
      ]
    ]);

var explainerMediumText = Curry._1(Css.style, /* :: */[
      Css.media("(max-width: 760px)", /* :: */[
            Css.fontSize(Css.rem(1.1)),
            /* :: */[
              Css.padding2(Css.em(0), Css.em(2)),
              /* [] */0
            ]
          ]),
      /* :: */[
        Css.padding2(Css.em(0), Css.em(3)),
        /* :: */[
          Css.margin2(Css.em(0), Css.auto),
          /* :: */[
            Css.maxWidth(Css.px(1200)),
            /* :: */[
              Css.fontSize(Css.rem(1.6)),
              /* :: */[
                Css.color(/* `hex */[
                      5194459,
                      "486269"
                    ]),
                /* :: */[
                  Css.textAlign(/* center */98248149),
                  /* [] */0
                ]
              ]
            ]
          ]
        ]
      ]
    ]);

var boldExplainerText = Curry._1(Css.style, /* :: */[
      Css.color(/* `hex */[
            5194459,
            "303030"
          ]),
      /* :: */[
        Css.fontWeight(/* bold */-1055161979),
        /* [] */0
      ]
    ]);

var infoBackground = Curry._1(Css.style, /* :: */[
      Css.backgrounds(/* :: */[
            /* `linearGradient */[
              616379637,
              /* tuple */[
                Css.deg(0),
                /* :: */[
                  /* tuple */[
                    Css.zero,
                    /* `rgba */[
                      -878128972,
                      /* tuple */[
                        255,
                        255,
                        255,
                        0.2
                      ]
                    ]
                  ],
                  /* :: */[
                    /* tuple */[
                      Css.zero,
                      /* `rgba */[
                        -878128972,
                        /* tuple */[
                          255,
                          255,
                          255,
                          0.2
                        ]
                      ]
                    ],
                    /* [] */0
                  ]
                ]
              ]
            ],
            /* :: */[
              /* `url */[
                5843823,
                backgroundImageGorilla
              ],
              /* [] */0
            ]
          ]),
      /* :: */[
        Css.backgroundSize(/* cover */-899416265),
        /* :: */[
          Css.backgroundRepeat(/* noRepeat */-695430532),
          /* :: */[
            Css.height(/* `percent */[
                  -119887163,
                  100
                ]),
            /* [] */0
          ]
        ]
      ]
    ]);

var infoCardContainer = Curry._1(Css.style, /* :: */[
      Css.padding(/* `rem */[
            5691738,
            1
          ]),
      /* [] */0
    ]);

var infoCardStyles = Curry._1(Css.style, /* :: */[
      Css.margin(/* `rem */[
            5691738,
            4
          ]),
      /* :: */[
        Css.media("(max-width: 831px)", /* :: */[
              Css.margin(/* `rem */[
                    5691738,
                    0
                  ]),
              /* :: */[
                Css.textAlign(Css.center),
                /* [] */0
              ]
            ]),
        /* [] */0
      ]
    ]);

var animalImage = Curry._1(Css.style, /* :: */[
      Css.media("(max-width: 831px)", /* :: */[
            Css.display(Css.none),
            /* [] */0
          ]),
      /* [] */0
    ]);

var redDisclaimer = Curry._1(Css.style, /* :: */[
      Css.fontSize(/* `rem */[
            5691738,
            0.9
          ]),
      /* :: */[
        Css.color(/* `hex */[
              5194459,
              "e85723"
            ]),
        /* [] */0
      ]
    ]);

var floatingSignupBox = Curry._1(Css.style, /* :: */[
      Css.maxWidth(Css.px(900)),
      /* :: */[
        Css.margin2(Css.em(0), Css.auto),
        /* :: */[
          Css.backgroundColor(/* `hex */[
                5194459,
                "fff"
              ]),
          /* [] */0
        ]
      ]
    ]);

var floatingSignupBoxInner = Curry._1(Css.style, /* :: */[
      Css.margin2(Css.em(3), Css.auto),
      /* :: */[
        Css.padding(Css.em(3)),
        /* [] */0
      ]
    ]);

var emailSignupHeader = Curry._1(Css.style, /* :: */[
      Css.fontSize(Css.px(24)),
      /* [] */0
    ]);

var emailTextBox = Curry._1(Css.style, /* [] */0);

var inputElements = Curry._1(Css.style, /* :: */[
      Css.padding(Css.em(0.1)),
      /* [] */0
    ]);

var extraInfoFooterBox = Curry._1(Css.style, /* :: */[
      Css.textAlign(Css.center),
      /* :: */[
        Css.maxWidth(Css.px(600)),
        /* :: */[
          Css.backgroundColor(Css.rgb(107, 173, 62)),
          /* :: */[
            Css.margin2(Css.em(6), Css.auto),
            /* :: */[
              Css.position(Css.relative),
              /* [] */0
            ]
          ]
        ]
      ]
    ]);

var emoticonHeader = Curry._1(Css.style, /* :: */[
      Css.position(Css.absolute),
      /* :: */[
        Css.left(Css.px(0)),
        /* :: */[
          Css.right(Css.px(0)),
          /* :: */[
            Css.top(Css.px(0)),
            /* :: */[
              Css.margin(Css.auto),
              /* :: */[
                Css.transform(Css.translateY(/* `percent */[
                          -119887163,
                          -50
                        ])),
                /* :: */[
                  Css.textAlign(Css.center),
                  /* [] */0
                ]
              ]
            ]
          ]
        ]
      ]
    ]);

var emojiStyles = Curry._1(Css.style, /* :: */[
      Css.height(Css.px(55)),
      /* :: */[
        Css.maxHeight(/* `percent */[
              -119887163,
              100
            ]),
        /* :: */[
          Css.position(Css.relative),
          /* :: */[
            Css.verticalAlign(Css.middle),
            /* :: */[
              Css.bottom(Css.px(1)),
              /* [] */0
            ]
          ]
        ]
      ]
    ]);

var finalNoteContent = Curry._1(Css.style, /* :: */[
      Css.padding(Css.rem(1.5)),
      /* :: */[
        Css.margin(Css.ex(4)),
        /* [] */0
      ]
    ]);

var whiteText = Curry._1(Css.style, /* :: */[
      Css.important(Css.color(Css.white)),
      /* [] */0
    ]);

var linkPillBox = Curry._1(Css.style, /* :: */[
      Css.marginTop(Css.px(25)),
      /* :: */[
        Css.boxSizing(Css.borderBox),
        /* :: */[
          Css.minHeight(Css.px(25)),
          /* :: */[
            Css.fontSize(Css.px(14)),
            /* :: */[
              Css.borderRadius(Css.px(25)),
              /* :: */[
                Css.color(Css.hex("fff")),
                /* :: */[
                  Css.backgroundColor(Css.rgba(48, 48, 48, 0.12)),
                  /* [] */0
                ]
              ]
            ]
          ]
        ]
      ]
    ]);

var linkPillText = Curry._1(Css.style, /* :: */[
      Css.margin(Css.px(10)),
      /* :: */[
        Css.marginBottom(Css.px(1)),
        /* :: */[
          Css.color(Css.hex("fff")),
          /* [] */0
        ]
      ]
    ]);

var betaBanner = Curry._1(Css.style, /* :: */[
      Css.position(/* absolute */-1013592457),
      /* :: */[
        Css.left(/* `px */[
              25096,
              0
            ]),
        /* :: */[
          Css.top(/* `px */[
                25096,
                0
              ]),
          /* :: */[
            Css.width(/* `px */[
                  25096,
                  80
                ]),
            /* [] */0
          ]
        ]
      ]
    ]);

var loginButton = Curry._1(Css.style, /* :: */[
      Css.paddingLeft(/* `px */[
            25096,
            10
          ]),
      /* [] */0
    ]);

var forwardBackButton = Curry._1(Css.style, /* :: */[
      Css.width(/* `percent */[
            -119887163,
            100
          ]),
      /* :: */[
        Css.height(/* `em */[
              22632,
              5
            ]),
        /* [] */0
      ]
    ]);

function mergeStyles(styles) {
  return Belt_List.reduce(styles, "", (function (prev, next) {
                return prev + (" " + next);
              }));
}

var wrapText = Curry._1(Css.style, /* :: */[
      Css.overflowWrap(/* breakWord */1059921449),
      /* :: */[
        Css.wordWrap(/* breakWord */1059921449),
        /* [] */0
      ]
    ]);

var fiftyPercentWidth = Curry._1(Css.style, /* :: */[
      Css.width(/* `percent */[
            -119887163,
            50
          ]),
      /* [] */0
    ]);

var carousel = Curry._1(Css.style, /* :: */[
      Css.position(/* relative */903134412),
      /* :: */[
        Css.width(/* `percent */[
              -119887163,
              150
            ]),
        /* :: */[
          Css.left(/* `percent */[
                -119887163,
                -25
              ]),
          /* [] */0
        ]
      ]
    ]);

var invisibleGorilla = Curry._1(Css.style, /* :: */[
      Css.display(/* none */-922086728),
      /* [] */0
    ]);

function fadeOut(targetOpacity) {
  return Curry._1(Css.style, List.append(/* :: */[
                  Css.transition(2000, 0, Css.ease, "opacity"),
                  /* [] */0
                ], /* :: */[
                  Css.opacity(targetOpacity),
                  /* [] */0
                ]));
}

function carouselArrow(absolutePositionOpt, onLeft) {
  var absolutePosition = absolutePositionOpt !== undefined ? absolutePositionOpt : true;
  return Curry._1(Css.style, Pervasives.$at(/* :: */[
                  Css.cursor(/* pointer */-786317123),
                  /* :: */[
                    Css.padding(/* `px */[
                          25096,
                          20
                        ]),
                    /* :: */[
                      Css.color(Css.white),
                      /* :: */[
                        Css.backgroundColor(Css.hex("72c7d7")),
                        /* :: */[
                          Css.hover(Pervasives.$at(/* :: */[
                                    Css.backgroundColor(Css.hex("40b2c9")),
                                    /* [] */0
                                  ], onLeft ? /* :: */[
                                      Css.paddingLeft(/* `px */[
                                            25096,
                                            15
                                          ]),
                                      /* :: */[
                                        Css.paddingRight(/* `px */[
                                              25096,
                                              25
                                            ]),
                                        /* [] */0
                                      ]
                                    ] : /* :: */[
                                      Css.paddingRight(/* `px */[
                                            25096,
                                            15
                                          ]),
                                      /* :: */[
                                        Css.paddingLeft(/* `px */[
                                              25096,
                                              25
                                            ]),
                                        /* [] */0
                                      ]
                                    ])),
                          /* :: */[
                            Css.borderRadius(Css.px(4)),
                            /* :: */[
                              Css.zIndex(3),
                              /* [] */0
                            ]
                          ]
                        ]
                      ]
                    ]
                  ]
                ], absolutePosition ? /* :: */[
                    Css.position(Css.absolute),
                    /* :: */[
                      Css.transform(Css.translateX(/* `percent */[
                                -119887163,
                                -50
                              ])),
                      /* :: */[
                        onLeft ? Css.left(/* `percent */[
                                -119887163,
                                20
                              ]) : Css.left(/* `percent */[
                                -119887163,
                                80
                              ]),
                        /* [] */0
                      ]
                    ]
                  ] : /* [] */0));
}

export {
  backgroundImageGorilla ,
  app ,
  textOnlyModalText ,
  totalRaisedText ,
  copyButton ,
  centerItems ,
  centerItemsMargin ,
  translationSwitch ,
  topBody ,
  header ,
  noMarginBottom ,
  noMarginTop ,
  headerLogo ,
  nav ,
  navBox ,
  navList ,
  positionRelative ,
  overlayImg ,
  overlayFlameImg ,
  overlayBadgeImg ,
  streakText ,
  flameImg ,
  navListItem ,
  navListItemToggle ,
  someMarginRight ,
  navListText ,
  leftTopHeader ,
  centerText ,
  dappImagesCounteractOffset ,
  heading ,
  subHeading ,
  wildCardGreen ,
  wildCardBlue ,
  colorGreen ,
  colorBlue ,
  animalBox ,
  ownedAnimalImg ,
  clickableLink ,
  headerImg ,
  horizantalBlueTile ,
  explainerLargeText ,
  explainerMediumText ,
  boldExplainerText ,
  infoBackground ,
  infoCardContainer ,
  infoCardStyles ,
  animalImage ,
  redDisclaimer ,
  floatingSignupBox ,
  floatingSignupBoxInner ,
  emailSignupHeader ,
  emailTextBox ,
  inputElements ,
  extraInfoFooterBox ,
  emoticonHeader ,
  emojiStyles ,
  finalNoteContent ,
  whiteText ,
  linkPillBox ,
  linkPillText ,
  betaBanner ,
  loginButton ,
  forwardBackButton ,
  mergeStyles ,
  wrapText ,
  fiftyPercentWidth ,
  carousel ,
  invisibleGorilla ,
  fadeOut ,
  carouselArrow ,
  
}
/*  Not a pure module */
