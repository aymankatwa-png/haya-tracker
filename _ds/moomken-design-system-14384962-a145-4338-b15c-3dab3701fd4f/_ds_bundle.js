/* @ds-bundle: {"format":4,"namespace":"MoomkenDesignSystem_143849","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Logo","sourcePath":"components/core/Logo.jsx"},{"name":"StatBlock","sourcePath":"components/core/StatBlock.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"5ccdbe7f8911","components/core/Button.jsx":"f691ed552624","components/core/Card.jsx":"9f78117fb989","components/core/IconButton.jsx":"4e9e18866b43","components/core/Logo.jsx":"1350d8710002","components/core/StatBlock.jsx":"4db1bdf746d1","components/core/Tag.jsx":"5a8a12ea7f4b","components/feedback/Dialog.jsx":"96351ae98c8b","components/feedback/Toast.jsx":"050d48bee88e","components/feedback/Tooltip.jsx":"6d373d82a12a","components/forms/Checkbox.jsx":"6bf1632eccc9","components/forms/Input.jsx":"b5db2e87438a","components/forms/Radio.jsx":"cc0eefa4be38","components/forms/Select.jsx":"874c1c1d5e0f","components/forms/Switch.jsx":"ca6b360e767b","components/navigation/Tabs.jsx":"6f4856c4f02a"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.MoomkenDesignSystem_143849 = window.MoomkenDesignSystem_143849 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function Badge({
  tone = 'navy',
  children,
  style
}) {
  const tones = {
    navy: {
      background: 'var(--moomken-navy)',
      color: '#fff'
    },
    blue: {
      background: 'var(--blue-100)',
      color: 'var(--moomken-navy)'
    },
    orange: {
      background: 'var(--orange-100)',
      color: 'var(--orange-600)'
    },
    success: {
      background: '#E3F1E8',
      color: 'var(--success)'
    },
    danger: {
      background: '#F7E3E0',
      color: 'var(--danger)'
    }
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      height: 24,
      padding: '0 10px',
      borderRadius: 'var(--radius-pill)',
      font: '500 12px var(--font-latin)',
      letterSpacing: '.02em',
      ...tones[tone],
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  children,
  style,
  ...rest
}) {
  const base = {
    fontFamily: 'var(--font-latin)',
    fontWeight: 500,
    border: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    borderRadius: 'var(--radius-pill)',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    transition: 'background .15s ease,color .15s ease',
    opacity: disabled ? .5 : 1,
    textDecoration: 'none'
  };
  const sizes = {
    sm: {
      height: 'var(--control-h-sm)',
      padding: '0 18px',
      fontSize: 14
    },
    md: {
      height: 'var(--control-h)',
      padding: '0 26px',
      fontSize: 16
    }
  };
  const variants = {
    primary: {
      background: 'var(--action)',
      color: '#fff'
    },
    accent: {
      background: 'var(--accent)',
      color: '#fff'
    },
    secondary: {
      background: 'transparent',
      color: 'var(--action)',
      boxShadow: 'inset 0 0 0 2px var(--action)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--action)'
    },
    onDark: {
      background: '#fff',
      color: 'var(--moomken-navy)'
    }
  };
  const [hover, setHover] = React.useState(false);
  const hoverBg = {
    primary: 'var(--action-hover)',
    accent: 'var(--orange-600)',
    secondary: 'var(--navy-100)',
    ghost: 'var(--navy-100)',
    onDark: 'var(--moomken-ice)'
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      ...base,
      ...sizes[size],
      ...variants[variant],
      ...(hover && !disabled ? {
        background: hoverBg[variant]
      } : {}),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function Card({
  inverse = false,
  padding = 24,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: inverse ? 'var(--surface-inverse)' : 'var(--surface-card)',
      color: inverse ? 'var(--text-on-dark)' : 'var(--text-body)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-card)',
      padding,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function IconButton({
  label,
  size = 'md',
  variant = 'ghost',
  children,
  style,
  ...rest
}) {
  const d = size === 'sm' ? 36 : 44;
  const variants = {
    ghost: {
      background: 'transparent',
      color: 'var(--moomken-navy)'
    },
    solid: {
      background: 'var(--action)',
      color: '#fff'
    },
    onDark: {
      background: 'rgba(255,255,255,.12)',
      color: '#fff'
    }
  };
  const [hover, setHover] = React.useState(false);
  const hoverBg = {
    ghost: 'var(--navy-100)',
    solid: 'var(--action-hover)',
    onDark: 'rgba(255,255,255,.24)'
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": label,
    title: label,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: d,
      height: d,
      borderRadius: '50%',
      border: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      transition: 'background .15s ease',
      ...variants[variant],
      ...(hover ? {
        background: hoverBg[variant]
      } : {}),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Logo.jsx
try { (() => {
function Logo({
  variant = 'cyan',
  height = 48,
  base = '',
  style
}) {
  const src = {
    cyan: base + 'assets/logo-cyan.png',
    white: base + 'assets/logo-white.png',
    '3d': base + 'assets/logo-3d.png'
  };
  return /*#__PURE__*/React.createElement("img", {
    src: src[variant],
    alt: "Moomken \u2014 \u0645\u0646\u0638\u0645\u0629 \u0645\u0645\u0643\u0646",
    style: {
      height,
      width: 'auto',
      display: 'block',
      ...style
    }
  });
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/StatBlock.jsx
try { (() => {
function StatBlock({
  value,
  label,
  tone = 'navy',
  dir = 'ltr',
  style
}) {
  const colors = {
    navy: 'var(--moomken-navy)',
    blue: 'var(--moomken-blue)',
    orange: 'var(--moomken-orange)',
    onDark: '#fff'
  };
  return /*#__PURE__*/React.createElement("div", {
    dir: dir,
    style: {
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '900 44px/1 ' + (dir === 'rtl' ? 'var(--font-arabic)' : 'var(--font-latin)'),
      color: colors[tone]
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 14px/1.4 ' + (dir === 'rtl' ? 'var(--font-arabic)' : 'var(--font-latin)'),
      color: tone === 'onDark' ? 'var(--text-on-dark-muted)' : 'var(--text-muted)',
      marginTop: 8
    }
  }, label));
}
Object.assign(__ds_scope, { StatBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StatBlock.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function Tag({
  selected = false,
  children,
  onClick,
  style
}) {
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      height: 32,
      padding: '0 14px',
      borderRadius: 'var(--radius-pill)',
      font: '500 13px var(--font-latin)',
      cursor: onClick ? 'pointer' : 'default',
      border: '1px solid ' + (selected ? 'var(--moomken-navy)' : 'var(--border-strong)'),
      background: selected ? 'var(--moomken-navy)' : '#fff',
      color: selected ? '#fff' : 'var(--text-body)',
      transition: 'all .15s ease',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function Dialog({
  open = false,
  title,
  onClose,
  dir = 'ltr',
  children,
  footer,
  style
}) {
  if (!open) return null;
  const font = dir === 'rtl' ? 'var(--font-arabic)' : 'var(--font-latin)';
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(19,37,59,.55)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 100
    }
  }, /*#__PURE__*/React.createElement("div", {
    dir: dir,
    role: "dialog",
    "aria-modal": "true",
    onClick: e => e.stopPropagation(),
    style: {
      background: '#fff',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-raised)',
      width: 'min(480px,90vw)',
      padding: 32,
      fontFamily: font,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      font: '700 22px/1.25 ' + font,
      color: 'var(--text-heading)'
    }
  }, title), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Close",
    style: {
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      fontSize: 22,
      color: 'var(--text-muted)',
      lineHeight: 1
    }
  }, "\xD7")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      font: '400 15px/1.6 ' + font,
      color: 'var(--text-body)'
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24,
      display: 'flex',
      gap: 12,
      justifyContent: dir === 'rtl' ? 'flex-start' : 'flex-end'
    }
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function Toast({
  tone = 'info',
  dir = 'ltr',
  children,
  style
}) {
  const font = dir === 'rtl' ? 'var(--font-arabic)' : 'var(--font-latin)';
  const tones = {
    info: {
      bar: 'var(--moomken-blue)'
    },
    success: {
      bar: 'var(--success)'
    },
    warning: {
      bar: 'var(--warning)'
    },
    danger: {
      bar: 'var(--danger)'
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    dir: dir,
    role: "status",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 12,
      background: 'var(--moomken-navy)',
      color: '#fff',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-raised)',
      padding: '14px 18px',
      font: '400 14px/1.5 ' + font,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: tones[tone].bar,
      flexShrink: 0
    }
  }), children);
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function Tooltip({
  text,
  dir = 'ltr',
  children,
  style
}) {
  const [show, setShow] = React.useState(false);
  const font = dir === 'rtl' ? 'var(--font-arabic)' : 'var(--font-latin)';
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-block',
      ...style
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false)
  }, children, show && /*#__PURE__*/React.createElement("span", {
    dir: dir,
    role: "tooltip",
    style: {
      position: 'absolute',
      bottom: 'calc(100% + 8px)',
      left: '50%',
      transform: 'translateX(-50%)',
      background: 'var(--moomken-navy)',
      color: '#fff',
      padding: '6px 12px',
      borderRadius: 'var(--radius-sm)',
      font: '400 12px/1.4 ' + font,
      whiteSpace: 'nowrap',
      boxShadow: 'var(--shadow-card)',
      zIndex: 50
    }
  }, text));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  label,
  checked = false,
  onChange,
  dir = 'ltr',
  style
}) {
  const font = dir === 'rtl' ? 'var(--font-arabic)' : 'var(--font-latin)';
  return /*#__PURE__*/React.createElement("label", {
    dir: dir,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: 'pointer',
      font: '400 15px ' + font,
      color: 'var(--text-body)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => onChange && onChange(!checked),
    role: "checkbox",
    "aria-checked": checked,
    style: {
      width: 22,
      height: 22,
      borderRadius: 6,
      flexShrink: 0,
      border: '2px solid ' + (checked ? 'var(--moomken-navy)' : 'var(--border-strong)'),
      background: checked ? 'var(--moomken-navy)' : '#fff',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all .15s ease'
    }
  }, checked && /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 12 12"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2 6.5L4.8 9.2 10 3.5",
    stroke: "#fff",
    strokeWidth: "2.2",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), /*#__PURE__*/React.createElement("span", {
    onClick: () => onChange && onChange(!checked)
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function Input({
  label,
  placeholder,
  type = 'text',
  dir = 'ltr',
  value,
  onChange,
  invalid = false,
  hint,
  style
}) {
  const [focus, setFocus] = React.useState(false);
  const font = dir === 'rtl' ? 'var(--font-arabic)' : 'var(--font-latin)';
  return /*#__PURE__*/React.createElement("label", {
    dir: dir,
    style: {
      display: 'block',
      fontFamily: font,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      font: '500 13px/1.4 ' + font,
      color: 'var(--text-heading)',
      marginBottom: 6
    }
  }, label), /*#__PURE__*/React.createElement("input", {
    type: type,
    dir: dir,
    placeholder: placeholder,
    value: value,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: '100%',
      boxSizing: 'border-box',
      height: 'var(--control-h)',
      padding: '0 14px',
      borderRadius: 'var(--radius-md)',
      border: '1px solid ' + (invalid ? 'var(--danger)' : focus ? 'var(--focus-ring)' : 'var(--border-strong)'),
      outline: 'none',
      boxShadow: focus ? '0 0 0 3px var(--cyan-100)' : 'none',
      font: '400 15px ' + font,
      color: 'var(--text-body)',
      background: '#fff',
      transition: 'border-color .15s ease, box-shadow .15s ease'
    }
  }), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      font: '400 12px/1.4 ' + font,
      color: invalid ? 'var(--danger)' : 'var(--text-muted)',
      marginTop: 5
    }
  }, hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function Radio({
  label,
  checked = false,
  onChange,
  dir = 'ltr',
  style
}) {
  const font = dir === 'rtl' ? 'var(--font-arabic)' : 'var(--font-latin)';
  return /*#__PURE__*/React.createElement("label", {
    dir: dir,
    onClick: () => onChange && onChange(),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: 'pointer',
      font: '400 15px ' + font,
      color: 'var(--text-body)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    role: "radio",
    "aria-checked": checked,
    style: {
      width: 22,
      height: 22,
      borderRadius: '50%',
      flexShrink: 0,
      border: '2px solid ' + (checked ? 'var(--moomken-navy)' : 'var(--border-strong)'),
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all .15s ease'
    }
  }, checked && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: '50%',
      background: 'var(--moomken-navy)'
    }
  })), label);
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function Select({
  label,
  options = [],
  value,
  onChange,
  dir = 'ltr',
  placeholder,
  style
}) {
  const font = dir === 'rtl' ? 'var(--font-arabic)' : 'var(--font-latin)';
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    dir: dir,
    style: {
      display: 'block',
      fontFamily: font,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      font: '500 13px/1.4 ' + font,
      color: 'var(--text-heading)',
      marginBottom: 6
    }
  }, label), /*#__PURE__*/React.createElement("select", {
    dir: dir,
    value: value,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: '100%',
      height: 'var(--control-h)',
      padding: '0 12px',
      borderRadius: 'var(--radius-md)',
      border: '1px solid ' + (focus ? 'var(--focus-ring)' : 'var(--border-strong)'),
      outline: 'none',
      boxShadow: focus ? '0 0 0 3px var(--cyan-100)' : 'none',
      font: '400 15px ' + font,
      color: 'var(--text-body)',
      background: '#fff',
      cursor: 'pointer'
    }
  }, placeholder && /*#__PURE__*/React.createElement("option", {
    value: ""
  }, placeholder), options.map(o => typeof o === 'string' ? /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o
  }, o) : /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  label,
  on = false,
  onChange,
  dir = 'ltr',
  style
}) {
  const font = dir === 'rtl' ? 'var(--font-arabic)' : 'var(--font-latin)';
  return /*#__PURE__*/React.createElement("label", {
    dir: dir,
    onClick: () => onChange && onChange(!on),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: 'pointer',
      font: '400 15px ' + font,
      color: 'var(--text-body)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    role: "switch",
    "aria-checked": on,
    style: {
      width: 44,
      height: 26,
      borderRadius: 'var(--radius-pill)',
      background: on ? 'var(--moomken-navy)' : 'var(--border-strong)',
      position: 'relative',
      transition: 'background .15s ease',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 3,
      left: on ? 21 : 3,
      width: 20,
      height: 20,
      borderRadius: '50%',
      background: '#fff',
      boxShadow: '0 1px 3px rgba(19,37,59,.3)',
      transition: 'left .15s ease'
    }
  })), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  tabs = [],
  active,
  onChange,
  dir = 'ltr',
  style
}) {
  const font = dir === 'rtl' ? 'var(--font-arabic)' : 'var(--font-latin)';
  return /*#__PURE__*/React.createElement("div", {
    dir: dir,
    role: "tablist",
    style: {
      display: 'flex',
      gap: 4,
      borderBottom: '1px solid var(--border-subtle)',
      ...style
    }
  }, tabs.map(t => {
    const is = t === active;
    return /*#__PURE__*/React.createElement("button", {
      key: t,
      role: "tab",
      "aria-selected": is,
      onClick: () => onChange && onChange(t),
      style: {
        padding: '12px 18px',
        border: 'none',
        background: 'transparent',
        cursor: 'pointer',
        font: (is ? '700' : '400') + ' 15px ' + font,
        color: is ? 'var(--moomken-navy)' : 'var(--text-muted)',
        borderBottom: '3px solid ' + (is ? 'var(--moomken-orange)' : 'transparent'),
        marginBottom: -1,
        transition: 'color .15s ease'
      }
    }, t);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.StatBlock = __ds_scope.StatBlock;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
