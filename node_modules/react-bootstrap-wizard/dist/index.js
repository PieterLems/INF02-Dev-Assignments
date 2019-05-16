"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactstrap = require("reactstrap");

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames4 = require("classnames");

var _classnames5 = _interopRequireDefault(_classnames4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactWizard = function (_React$Component) {
  _inherits(ReactWizard, _React$Component);

  function ReactWizard(props) {
    _classCallCheck(this, ReactWizard);

    var _this = _possibleConstructorReturn(this, (ReactWizard.__proto__ || Object.getPrototypeOf(ReactWizard)).call(this, props));

    var width = void 0;
    if (_this.props.steps.length === 1) {
      width = "100%";
    } else {
      if (window.innerWidth < 600) {
        if (_this.props.steps.length !== 3) {
          width = "50%";
        } else {
          width = 100 / 3 + "%";
        }
      } else {
        if (_this.props.steps.length === 2) {
          width = "50%";
        } else {
          width = 100 / 3 + "%";
        }
      }
    }
    _this.state = {
      currentStep: 0,
      highestStep: 0,
      color: _this.props.color !== undefined ? _this.props.color : "primary",
      nextButton: _this.props.steps.length > 1 ? true : false,
      previousButton: false,
      finishButton: _this.props.steps.length === 1 ? true : false,
      width: width,
      wizardData: _this.props.wizardData !== undefined ? _this.props.wizardData : {},
      movingTabStyle: {
        transition: "transform 0s"
      },
      progressbarStyle: {
        width: 100 / _this.props.steps.length / 2 + "%"
      }
    };
    _this.navigationStepChange = _this.navigationStepChange.bind(_this);
    _this.refreshAnimation = _this.refreshAnimation.bind(_this);
    _this.previousButtonClick = _this.previousButtonClick.bind(_this);
    _this.previousButtonClick = _this.previousButtonClick.bind(_this);
    _this.finishButtonClick = _this.finishButtonClick.bind(_this);
    return _this;
  }

  _createClass(ReactWizard, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.refreshAnimation(0);
      window.addEventListener("resize", this.updateWidth.bind(this));
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.isCancelled = true;
      window.removeEventListener("resize", this.updateWidth);
      var id = window.setTimeout(null, 0);
      while (id--) {
        window.clearTimeout(id);
      }
    }
  }, {
    key: "updateWidth",
    value: function updateWidth() {
      var _this2 = this;

      !this.isCancelled && setTimeout(function () {
        return _this2.refreshAnimation(_this2.state.currentStep);
      }, 200);
    }
  }, {
    key: "navigationStepChange",
    value: function navigationStepChange(key) {
      if (this.props.navSteps) {
        var validationState = true;
        if (this.props.validate && key > this.state.currentStep) {
          for (var i = this.state.currentStep; i < key; i++) {
            if (this.refs[this.props.steps[i].stepName].isValidated !== undefined && this.refs[this.props.steps[i].stepName].isValidated() === false) {
              validationState = false;
              break;
            }
          }
        }
        if (validationState) {
          this.setState({
            wizardData: _extends({}, this.state.wizardData, _defineProperty({}, this.props.steps[this.state.currentStep].stepName, this.refs[this.props.steps[this.state.currentStep].stepName].state)),
            currentStep: key,
            highestStep: key > this.state.highestStep ? key : this.state.highestStep,
            nextButton: this.props.steps.length > key + 1 ? true : false,
            previousButton: key > 0 ? true : false,
            finishButton: this.props.steps.length === key + 1 ? true : false
          });
          this.refreshAnimation(key);
        }
      }
    }
  }, {
    key: "nextButtonClick",
    value: function nextButtonClick() {
      if (this.props.validate && (this.refs[this.props.steps[this.state.currentStep].stepName].isValidated !== undefined && this.refs[this.props.steps[this.state.currentStep].stepName].isValidated() || this.refs[this.props.steps[this.state.currentStep].stepName].isValidated === undefined) || this.props.validate === undefined || !this.props.validate) {
        var key = this.state.currentStep + 1;
        this.setState({
          wizardData: _extends({}, this.state.wizardData, _defineProperty({}, this.props.steps[this.state.currentStep].stepName, this.refs[this.props.steps[this.state.currentStep].stepName].state)),
          currentStep: key,
          highestStep: key > this.state.highestStep ? key : this.state.highestStep,
          nextButton: this.props.steps.length > key + 1 ? true : false,
          previousButton: key > 0 ? true : false,
          finishButton: this.props.steps.length === key + 1 ? true : false
        });
        this.refreshAnimation(key);
      }
    }
  }, {
    key: "previousButtonClick",
    value: function previousButtonClick() {
      var key = this.state.currentStep - 1;
      if (key >= 0) {
        this.setState({
          wizardData: _extends({}, this.state.wizardData, _defineProperty({}, this.props.steps[this.state.currentStep].stepName, this.refs[this.props.steps[this.state.currentStep].stepName].state)),
          currentStep: key,
          highestStep: key > this.state.highestStep ? key : this.state.highestStep,
          nextButton: this.props.steps.length > key + 1 ? true : false,
          previousButton: key > 0 ? true : false,
          finishButton: this.props.steps.length === key + 1 ? true : false
        });
        this.refreshAnimation(key);
      }
    }
  }, {
    key: "finishButtonClick",
    value: function finishButtonClick() {
      var _this3 = this;

      if (this.props.validate === false && this.props.finishButtonClick !== undefined || this.props.validate && (this.refs[this.props.steps[this.state.currentStep].stepName].isValidated !== undefined && this.refs[this.props.steps[this.state.currentStep].stepName].isValidated() || this.refs[this.props.steps[this.state.currentStep].stepName].isValidated === undefined) && this.props.finishButtonClick !== undefined) {
        this.setState({
          progressbarStyle: {
            width: "100%"
          },
          wizardData: _extends({}, this.state.wizardData, _defineProperty({}, this.props.steps[this.state.currentStep].stepName, this.refs[this.props.steps[this.state.currentStep].stepName].state))
        }, function () {
          _this3.props.finishButtonClick(_this3.state.wizardData);
        });
      }
    }
  }, {
    key: "refreshAnimation",
    value: function refreshAnimation(index) {
      var total = this.props.steps.length;
      var li_width = 100 / total;

      var total_steps = this.props.steps !== undefined ? this.props.steps.length : 0;
      var move_distance = this.refs.wizard !== undefined ? this.refs.navStepsLi.children[0].clientWidth / total_steps : 0;
      var index_temp = index;
      var vertical_level = 0;

      var mobile_device = window.innerWidth < 600 && total > 3;

      if (mobile_device) {
        move_distance = this.refs.navStepsLi.children[0].clientWidth / 2;
        index_temp = index % 2;
        li_width = 50;
      }

      this.setState({ width: li_width + "%" });

      var step_width = move_distance;

      move_distance = move_distance * index_temp;

      if (mobile_device) {
        vertical_level = parseInt(index / 2);
        vertical_level = vertical_level * 38;
      }

      var movingTabStyle = {
        width: step_width,
        transform: "translate3d(" + move_distance + "px, " + vertical_level + "px, 0)",
        transition: "all 0.5s cubic-bezier(0.29, 1.42, 0.79, 1)"
      };
      this.setState({
        movingTabStyle: movingTabStyle,
        progressbarStyle: {
          width: move_distance + step_width / 2
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      return _react2.default.createElement(
        "div",
        { className: "wizard-container", ref: "wizard" },
        _react2.default.createElement(
          _reactstrap.Card,
          { className: "card card-wizard active", "data-color": this.state.color },
          this.props.title !== undefined || this.props.description !== undefined ? _react2.default.createElement(
            _reactstrap.CardHeader,
            {
              className: this.props.headerTextCenter !== undefined ? "text-center" : "",
              "data-background-color": this.state.color
            },
            this.props.title !== undefined ? _react2.default.createElement(
              _reactstrap.CardTitle,
              { tag: "h3" },
              this.props.title
            ) : null,
            this.props.description !== undefined ? _react2.default.createElement(
              "h3",
              { className: "description" },
              this.props.description
            ) : null,
            _react2.default.createElement(
              "div",
              { className: "wizard-navigation", ref: "navStepsLi" },
              _react2.default.createElement(
                "div",
                { className: "progress-with-circle" },
                _react2.default.createElement("div", {
                  className: "progress-bar",
                  role: "progressbar",
                  style: this.state.progressbarStyle
                })
              ),
              _react2.default.createElement(
                _reactstrap.Nav,
                { pills: true },
                this.props.steps.map(function (prop, key) {
                  return _react2.default.createElement(
                    _reactstrap.NavItem,
                    { key: key, style: { width: _this4.state.width } },
                    _react2.default.createElement(
                      _reactstrap.NavLink,
                      {
                        className: (0, _classnames5.default)({ active: key === _this4.state.currentStep }, { checked: key <= _this4.state.highestStep }),
                        onClick: function onClick() {
                          return _this4.navigationStepChange(key);
                        }
                      },
                      prop.stepIcon !== undefined && prop.stepIcon !== "" ? _react2.default.createElement("i", { className: prop.stepIcon }) : null,
                      _this4.props.progressbar ? _react2.default.createElement(
                        "p",
                        null,
                        prop.stepName
                      ) : prop.stepName
                    )
                  );
                })
              ),
              this.props.progressbar ? null : _react2.default.createElement(
                "div",
                { className: "moving-tab", style: this.state.movingTabStyle },
                this.props.steps[this.state.currentStep].stepIcon !== undefined && this.props.steps[this.state.currentStep].stepIcon !== "" ? _react2.default.createElement("i", {
                  className: this.props.steps[this.state.currentStep].stepIcon
                }) : null,
                this.props.steps[this.state.currentStep].stepName
              )
            )
          ) : null,
          _react2.default.createElement(
            _reactstrap.CardBody,
            null,
            _react2.default.createElement(
              _reactstrap.TabContent,
              { activeTab: this.state.currentStep },
              this.props.steps.map(function (prop, key) {
                return _react2.default.createElement(
                  _reactstrap.TabPane,
                  {
                    tabId: key,
                    key: key,
                    className: (0, _classnames5.default)("fade", {
                      show: _this4.state.currentStep === key
                    })
                  },
                  typeof prop.component === "function" ? _react2.default.createElement(prop.component, _extends({
                    ref: prop.stepName,
                    wizardData: _this4.state.wizardData
                  }, prop.stepProps)) : _react2.default.createElement(
                    "div",
                    { ref: prop.stepName },
                    prop.component
                  )
                );
              })
            )
          ),
          _react2.default.createElement(
            _reactstrap.CardFooter,
            null,
            _react2.default.createElement(
              "div",
              { style: { float: "right" } },
              this.state.nextButton ? _react2.default.createElement(
                _reactstrap.Button,
                {
                  className: (0, _classnames5.default)("btn-next", _defineProperty({}, this.props.nextButtonClasses, this.props.nextButtonClasses !== undefined)),
                  onClick: function onClick() {
                    return _this4.nextButtonClick();
                  }
                },
                this.props.nextButtonText !== undefined ? this.props.nextButtonText : "Next"
              ) : null,
              this.state.finishButton ? _react2.default.createElement(
                _reactstrap.Button,
                {
                  className: (0, _classnames5.default)("btn-finish d-inline-block", _defineProperty({}, this.props.finishButtonClasses, this.props.finishButtonClasses !== undefined)),
                  onClick: function onClick() {
                    return _this4.finishButtonClick();
                  }
                },
                this.props.finishButtonText !== undefined ? this.props.finishButtonText : "Finish"
              ) : null
            ),
            _react2.default.createElement(
              "div",
              { style: { float: "left" } },
              this.state.previousButton ? _react2.default.createElement(
                _reactstrap.Button,
                {
                  className: (0, _classnames5.default)("btn-previous", _defineProperty({}, this.props.previousButtonClasses, this.props.previousButtonClasses !== undefined)),
                  onClick: function onClick() {
                    return _this4.previousButtonClick();
                  }
                },
                this.props.previousButtonText !== undefined ? this.props.previousButtonText : "Previous"
              ) : null
            ),
            _react2.default.createElement("div", { className: "clearfix" })
          )
        )
      );
    }
  }]);

  return ReactWizard;
}(_react2.default.Component);

ReactWizard.defaultProps = {
  validate: false,
  previousButtonText: "Previous",
  finishButtonText: "Finish",
  nextButtonText: "Next",
  color: "primary",
  progressbar: false
};

ReactWizard.propTypes = {
  color: _propTypes2.default.oneOf(["primary", "green", "orange", "red", "blue"]),
  previousButtonClasses: _propTypes2.default.string,
  finishButtonClasses: _propTypes2.default.string,
  nextButtonClasses: _propTypes2.default.string,
  headerTextCenter: _propTypes2.default.bool,
  navSteps: _propTypes2.default.bool,
  validate: _propTypes2.default.bool,
  finishButtonClick: _propTypes2.default.func,
  previousButtonText: _propTypes2.default.node,
  finishButtonText: _propTypes2.default.node,
  nextButtonText: _propTypes2.default.node,
  title: _propTypes2.default.node,
  description: _propTypes2.default.node,
  progressbar: _propTypes2.default.bool,
  steps: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    stepName: _propTypes2.default.string.isRequired,
    stepIcon: _propTypes2.default.string,
    component: _propTypes2.default.func.isRequired,
    stepProps: _propTypes2.default.object
  })).isRequired
};

exports.default = ReactWizard;
