module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/[page].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  }).then(success => {
    if (!success) return;

    if (scroll) {
      // FIXME: proper route announcing at Router level, not Link:
      document.body.focus();
    }
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (false ? undefined : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true,
      locale: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      const valType = typeof props[key];

      if (key === 'as') {
        if (props[key] && valType !== 'string' && valType !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: valType
          });
        }
      } else if (key === 'locale') {
        if (props[key] && valType !== 'string') {
          throw createPropError({
            key,
            expected: '`string`',
            actual: valType
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && valType !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: valType
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/vercel/next.js/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(() => {
    const shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const localeDomain = (0, _router.getDomainLocale)(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router.addBasePath)((0, _router.addLocale)(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

var _default = requestIdleCallback;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/route-loader.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/client/route-loader.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/router/utils/get-asset-path-from-route */ "../next-server/lib/router/utils/get-asset-path-from-route"));

var _requestIdleCallback = _interopRequireDefault(__webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js")); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
}

function idleTimeout(ms, err) {
  return new Promise((_resolve, reject) => (0, _requestIdleCallback.default)(() => setTimeout(() => reject(err), ms)));
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return Promise.race([onBuildManifest, idleTimeout(MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')))]);
}

function getFilesForRoute(assetPrefix, route) {
  if (true) {
    return Promise.resolve({
      scripts: [assetPrefix + '/_next/static/chunks/pages' + encodeURI((0, _getAssetPathFromRoute.default)(route, '.js'))],
      // Styles are handled by `style-loader` in development:
      css: []
    });
  }

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route) {
      return withFuture(route, routes, async () => {
        try {
          const {
            scripts,
            css
          } = await getFilesForRoute(assetPrefix, route);
          const [, styles] = await Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
          const entrypoint = await Promise.race([this.whenEntrypoint(route), idleTimeout(MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`)))]);
          const res = Object.assign({
            styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        } catch (err) {
          return {
            error: err
          };
        }
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback.default)(() => this.loadRoute(route));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

var _default = createRouteLoader;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = _interopRequireDefault(__webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js"));

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) (0, _requestIdleCallback.default)(() => setVisible(true));
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.normalizeLocalePath = normalizeLocalePath;

function normalizeLocalePath(pathname, locales) {
  let detectedLocale; // first item will be empty string from splitting at first char

  const pathnameParts = pathname.split('/');
  (locales || []).some(locale => {
    if (pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
      detectedLocale = locale;
      pathnameParts.splice(1, 1);
      pathname = pathnameParts.join('/') || '/';
      return true;
    }

    return false;
  });
  return {
    pathname,
    detectedLocale
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _routeLoader = __webpack_require__(/*! ../../../client/route-loader */ "./node_modules/next/dist/client/route-loader.js");

var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js");

var _normalizeLocalePath = __webpack_require__(/*! ../i18n/normalize-locale-path */ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites-noop.js"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {}

  return false;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href); // Return because it cannot be routed by the Next.js router

  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils.getLocationOrigin)();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router.pathname, url, true);
  const origin = (0, _utils.getLocationOrigin)();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router.pathname, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

const manualScrollRestoration =  false && false;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;
    this.domainLocales = void 0;
    this.isReady = void 0;
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        initial: true,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic.isDynamicRoute)(_pathname) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || !autoExportDynamic && !self.location.search);

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    var _options$scroll;

    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    } // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated


    if (options._h) {
      this.isReady = true;
    } // Default to scroll reset behavior unless explicitly specified to be
    // `false`! This makes the behavior between using `Router#push` and a
    // `<Link />` consistent.


    options.scroll = !!((_options$scroll = options.scroll) != null ? _options$scroll : true);
    let localeChange = options.locale !== this.locale;

    if (false) { var _this$locales; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader.getClientBuildManifest)());
    } catch (err) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    }

    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1


    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    }

    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname); // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (false) {}

    if (!isLocalURL(as)) {
      if (true) {
        throw new Error(`Invalid href: "${url}" and as: "${as}", received relative href and external as` + `\nSee more info: https://err.sh/next.js/invalid-relative-url-external-as`);
      }

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://err.sh/vercel/next.js/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      let routeInfo = await this.getRouteInfo(route, pathname, query, as, resolvedAs, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);

            this._resolveHref(parsedHref, pages, false);

            if (pages.includes(parsedHref.pathname)) {
              const {
                url: newUrl,
                as: newAs
              } = prepareUrlAs(this, destination, destination);
              return this.change(method, newUrl, newAs, options);
            }
          }

          window.location.href = destination;
          return new Promise(() => {});
        } // handle SSG data 404


        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query, as, resolvedAs, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      } // shallow routing is only allowed for same page URL changes.


      const isValidShallowRoute = options.shallow && this.route === route;
      await this.set(route, pathname, query, cleanedAs, routeInfo, forcedScroll || (isValidShallowRoute || !options.scroll ? null : {
        x: 0,
        y: 0
      })).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader.isAssetError)(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, resolvedAs, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), resolvedAs, __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }

  _resolveHref(parsedHref, pages, applyBasePath = true) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(applyBasePath ? delBasePath(pathname) : pathname));

    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes


    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
          return true;
        }
      });
    }

    parsedHref.pathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)(parsedHref.pathname);
    return parsedHref;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages, false);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (true) {
      return;
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader._isSsg(url).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, asPath, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  const globalBase = new URL(true ? 'http://n' : undefined);
  const resolvedBase = base ? new URL(base, globalBase) : globalBase;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== globalBase.origin) {
    throw new Error(`invariant: invalid relative URL, router received ${url}`);
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(globalBase.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites-noop.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites-noop.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

function resolveRewrites() {}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) != null && _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/vercel/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/vercel/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/react-vertical-timeline-component/style.min.css":
/*!**********************************************************************!*\
  !*** ./node_modules/react-vertical-timeline-component/style.min.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/[page].js":
/*!*************************!*\
  !*** ./pages/[page].js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_pages_MainScrollPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/pages/MainScrollPage */ "./src/pages/MainScrollPage.jsx");
/* harmony import */ var _src_component_header_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/component/header/Header */ "./src/component/header/Header.jsx");
/* harmony import */ var _src_component_MetaHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/component/MetaHeader */ "./src/component/MetaHeader.jsx");
/* harmony import */ var _src_polyfill__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/polyfill */ "./src/polyfill.js");
/* harmony import */ var _src_App_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/App.css */ "./src/App.css");
/* harmony import */ var _src_App_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_src_App_css__WEBPACK_IMPORTED_MODULE_6__);


var _jsxFileName = "/home/meddou/projects/perso/meddou.com/pages/index.js";






function Index() {
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(_src_polyfill__WEBPACK_IMPORTED_MODULE_5__["default"]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_component_MetaHeader__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_component_header_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_pages_MainScrollPage__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/Image.jsx":
/*!***********************!*\
  !*** ./src/Image.jsx ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "/home/meddou/projects/perso/meddou.com/src/Image.jsx";


function Image({
  src,
  alt,
  className
}) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("picture", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("source", {
      srcSet: `${src}.webp`,
      type: "image/webp"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      draggable: "false",
      src: src,
      alt: alt || '',
      className: className
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Image);

/***/ }),

/***/ "./src/Location.js":
/*!*************************!*\
  !*** ./src/Location.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! query-string */ "query-string");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_0__);


class Location {
  static qs(router) {
    return query_string__WEBPACK_IMPORTED_MODULE_0___default.a.parse(window.location.search);
  }

  static pathname(router) {
    console.log('PATHNAME', router, Location.links[0].link);
    return router.query.page || Location.links[0].link;
  }

}

Location.links = [{
  link: 'home',
  label: 'Home'
}, {
  link: 'work',
  label: 'Work'
}, {
  link: 'skills',
  label: 'Skills'
}, {
  link: 'experiences',
  label: 'Experiences'
}];
/* harmony default export */ __webpack_exports__["default"] = (Location);

/***/ }),

/***/ "./src/VerticalTimeline.css":
/*!**********************************!*\
  !*** ./src/VerticalTimeline.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/WindowSize.js":
/*!***************************!*\
  !*** ./src/WindowSize.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class WindowSize {
  static getWidth() {
    return window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName('body')[0].clientWidth;
  }

  static isLarge() {
    return WindowSize.getWidth() >= WindowSize.ceil;
  }

  static isSafari() {
    return /constructor/i.test(window.HTMLElement) || (!window.safari || typeof window.safari !== 'undefined' && window.safari.pushNotification).toString() === '[object SafariRemoteNotification]';
  }

}

WindowSize.ceil = 812;
/* harmony default export */ __webpack_exports__["default"] = (WindowSize);

/***/ }),

/***/ "./src/component/MetaHeader.jsx":
/*!**************************************!*\
  !*** ./src/component/MetaHeader.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "/home/meddou/projects/perso/meddou.com/src/component/MetaHeader.jsx";



class MetaHeader extends react__WEBPACK_IMPORTED_MODULE_2__["Component"] {
  componentDidMount() {
    window.dataLayer = window.dataLayer || [];

    function gtag() {
      dataLayer.push(arguments);
    }

    gtag('js', new Date());
    gtag('config', 'UA-144659432-1');
  }

  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
        async: true,
        src: "https://www.googletagmanager.com/gtag/js?id=UA-144659432-1"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        charSet: "UTF-8"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "shortcut icon",
        href: "%PUBLIC_URL%/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:image",
        content: "%PUBLIC_URL%/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1, shrink-to-fit=no"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "theme-color",
        content: "#29154e"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "manifest",
        href: "%PUBLIC_URL%/manifest.json"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "robots",
        content: "noimageindex"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:description",
        content: "D\xE9veloppeur Freelance bas\xE9 \xE0 Marseille. Je vous accompagne dans la r\xE9alisation de votre projet num\xE9rique, site internet, application mobile."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "twitter:description",
        content: "D\xE9veloppeur Freelance bas\xE9 \xE0 Marseille. Je vous accompagne dans la r\xE9alisation de votre projet num\xE9rique, site internet, application mobile."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        description: true,
        name: "description",
        content: "D\xE9veloppeur Freelance bas\xE9 \xE0 Marseille. Je vous accompagne dans la r\xE9alisation de votre projet num\xE9rique, site internet, application mobile."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        href: "https://fonts.googleapis.com/css?family=Roboto:100,400|Major+Mono+Display|EB+Garamond|Oswald:700",
        rel: "stylesheet"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "Mehdi Meddour | D\xE9veloppeur Freelance WEB / MOBILE / LOGICIEL"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:title",
        content: "Mehdi Meddour | D\xE9veloppeur Freelance WEB / MOBILE / LOGICIEL"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "twitter:title",
        content: "Mehdi Meddour | D\xE9veloppeur Freelance WEB / MOBILE / LOGICIEL"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:site_name",
        content: "Mehdi Meddour"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:url",
        content: "https://meddou.com"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:type",
        content: "website"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "twitter:image",
        content: "https://meddou.com/images-webp/mehdi.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:image",
        content: "https://meddou.com/images-webp/mehdi.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (MetaHeader);

/***/ }),

/***/ "./src/component/ProgressRing.css":
/*!****************************************!*\
  !*** ./src/component/ProgressRing.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/component/ProgressRing.jsx":
/*!****************************************!*\
  !*** ./src/component/ProgressRing.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ProgressRing_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProgressRing.css */ "./src/component/ProgressRing.css");
/* harmony import */ var _ProgressRing_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ProgressRing_css__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "/home/meddou/projects/perso/meddou.com/src/component/ProgressRing.jsx";




class ProgressRing extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(props) {
    super(props);
    const {
      side
    } = this.props;
    this.circumference = side * 4;
  }

  render() {
    const {
      stroke,
      progress,
      side
    } = this.props;
    const strokeDashoffset = this.circumference - progress / 100 * this.circumference;
    const strokeColor = '#ffab00';
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
      style: {
        overflow: 'visible'
      },
      height: side,
      width: side,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("rect", {
        stroke: strokeColor,
        fill: "transparent",
        strokeWidth: stroke,
        strokeDasharray: `${this.circumference} ${this.circumference}`,
        style: {
          strokeDashoffset
        },
        width: side,
        height: side
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, this);
  }

}

ProgressRing.propTypes = {
  side: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired,
  stroke: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired,
  progress: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (ProgressRing);

/***/ }),

/***/ "./src/component/Scroller.jsx":
/*!************************************!*\
  !*** ./src/component/Scroller.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "/home/meddou/projects/perso/meddou.com/src/component/Scroller.jsx";



class Scroller extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(props) {
    super(props);
    this.containerRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createRef();
    this.sectionRefs = [];
    this.lastScrollTop = 0;
    this.isScrolling = false;
    this.canScroll = true;
    this.scrollTimeout = undefined;
    this.scrollTimer = undefined;
    this.canScrollTimeout = undefined;
    this.sections = react__WEBPACK_IMPORTED_MODULE_1___default.a.Children.map(props.children, child => {
      const ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createRef();
      this.sectionRefs.push(ref);
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        ref: ref,
        children: child
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 14
      }, this);
    });
    this.index = props.index || 0;
    this.nextIndex = props.index || 0;
    this.scrollTimerFx = this.scrollTimerFx.bind(this);
    console.log('IN CTOR');
  }

  componentDidMount() {
    this.container = window;
    console.log(this.index);
    this.scrollToElement(this.sectionRefs[this.index].current, this.index, false);
    this.bindListener();
  }

  componentDidUpdate() {
    const {
      index
    } = this.props;
    console.log(index, this.nextIndex);

    if (this.nextIndex !== index) {
      // this.index = index
      this.isScrolling = true;
      this.scrollToElement(this.sectionRefs[this.index].current, index);
    }
  }

  componentWillUnmount() {
    this.unbindListener();
    window.clearTimeout(this.scrollTimeout);
    window.clearTimeout(this.canScrollTimeout);
  }

  onScroll(e) {
    const scrollDirectionCoeff = this.getScrollDirection() === true ? 1 : -1;

    if (this.index + scrollDirectionCoeff < this.sectionRefs.length && this.index + scrollDirectionCoeff >= 0 && e.timeStamp >= 1000) {
      const nextIndex = this.index + scrollDirectionCoeff;
      const nextElement = this.sectionRefs[nextIndex].current.getBoundingClientRect();

      if (scrollDirectionCoeff === 1 || scrollDirectionCoeff === -1 && nextElement.top + nextElement.height >= 0) {
        e.preventDefault();
        e.stopPropagation();
        this.nextIndex = nextIndex;
        this.notifyOnScroll(nextIndex);
        this.scrollToElement(this.sectionRefs[nextIndex].current, nextIndex);
      }
    }
  }

  getContainerBounding() {
    return this.container.getBoundingClientRect();
  }

  getContainerScrollTop() {
    return this.container.scrollTop || window.pageYOffset || document.documentElement.scrollTop;
  }

  getScrollDirection() {
    const st = this.getContainerScrollTop();
    const ret = st > this.lastScrollTop;
    this.lastScrollTop = st <= 0 ? 0 : st;
    return ret;
  }

  scrollToElement(element, index, isSmooth = true) {
    const top = this.getContainerScrollTop();
    const elementRect = element.getBoundingClientRect(); // this.isScrolling = true

    this.container.scrollTo({
      behavior: isSmooth ? 'smooth' : 'instant',
      left: 0,
      top: top + elementRect.top
    });
    this.index = index;
    this.nextIndex = index;
    window.oldIndex = index;
  }

  notifyOnScroll(index) {
    const {
      onScroll
    } = this.props;

    if (onScroll) {
      onScroll(index);
    }
  }

  scrollTimerFx(e) {
    // console.log('IN SCROLL')
    if (this.canScroll) {
      /**
       * @LINK https://stackoverflow.com/questions/4620906/how-do-i-know-when-ive-stopped-scrolling
       */
      if (this.scrollTimer !== null) {
        clearTimeout(this.scrollTimer);
      }

      this.scrollTimer = setTimeout(() => {
        if (this.isScrolling) {
          // console.log('SCROLL END');
          this.canScroll = false;
          this.getScrollDirection();
          this.isScrolling = false;
          this.canScrollTimeout = window.setTimeout(() => {
            this.canScroll = true;
          }, 50);
        } else {
          // console.log('SCROLL START');
          this.isScrolling = true;
          this.onScroll(e);
        }
      }, 150);
    } else {
      this.getScrollDirection();
    }
  }

  bindListener() {
    this.container.addEventListener('scroll', this.scrollTimerFx);
  }

  unbindListener() {
    this.container.removeEventListener('scroll', this.scrollTimerFx);
  }

  render() {
    const {
      className
    } = this.props;
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      ref: this.containerRef,
      className: ['scroller-main-container', className || ''].join(' '),
      children: this.sections.map(child => child)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 7
    }, this);
  }

}

Scroller.propTypes = {
  index: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired,
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node.isRequired).isRequired,
  onScroll: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Scroller);

/***/ }),

/***/ "./src/component/description/Description.css":
/*!***************************************************!*\
  !*** ./src/component/description/Description.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/component/description/Description.jsx":
/*!***************************************************!*\
  !*** ./src/component/description/Description.jsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Description_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Description.css */ "./src/component/description/Description.css");
/* harmony import */ var _Description_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Description_css__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "/home/meddou/projects/perso/meddou.com/src/component/description/Description.jsx";




function Description({
  text,
  noMargin,
  style
}) {
  const eText = text.replace(/(?:\r\n|\r|\n)/g, '<br />');
  const classes = ['description'];

  if (noMargin) {
    classes.push('noMargin');
  }

  return (
    /*#__PURE__*/
    // eslint-disable-next-line
    Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      className: classes.join(' '),
      dangerouslySetInnerHTML: {
        __html: eText
      },
      style: style
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }, this)
  );
}

Description.propTypes = {
  text: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  noMargin: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,
  style: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.objectOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Description);

/***/ }),

/***/ "./src/component/footer/Footer.css":
/*!*****************************************!*\
  !*** ./src/component/footer/Footer.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/component/footer/Footer.jsx":
/*!*****************************************!*\
  !*** ./src/component/footer/Footer.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _medias_Medias__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../medias/Medias */ "./src/component/medias/Medias.jsx");
/* harmony import */ var _Footer_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Footer.css */ "./src/component/footer/Footer.css");
/* harmony import */ var _Footer_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Footer_css__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "/home/meddou/projects/perso/meddou.com/src/component/footer/Footer.jsx";




class Footer extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  static onProjectClick() {
    window.gtag('event', 'contact', {
      event_category: 'contact'
    });
  }

  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "footer-container",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "footer-button-container",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "submit",
          className: "basic-button",
          onClick: this.onProjectClick,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: "media-button",
            "aria-label": "Envie de me proposer un projet ?",
            href: "mailto:contact@meddou.com",
            children: "Me proposer un projet ?"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 88
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "copyright",
          children: "Copyright @ Mehdi Meddour"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        style: {
          width: 0,
          overflow: 'visible'
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_medias_Medias__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./src/component/header/Header.css":
/*!*****************************************!*\
  !*** ./src/component/header/Header.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/component/header/Header.jsx":
/*!*****************************************!*\
  !*** ./src/component/header/Header.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Location__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Location */ "./src/Location.js");
/* harmony import */ var _medias_Medias__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../medias/Medias */ "./src/component/medias/Medias.jsx");
/* harmony import */ var _Header_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Header.css */ "./src/component/header/Header.css");
/* harmony import */ var _Header_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Header_css__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "/home/meddou/projects/perso/meddou.com/src/component/header/Header.jsx";







class Header extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor() {
    super();
    this.state = {
      isCollapsed: false
    };
    this.links = _Location__WEBPACK_IMPORTED_MODULE_4__["default"].links;
    this.collapseIfTrue = this.collapseIfTrue.bind(this);
    this.collapse = this.collapse.bind(this);
    this.visibleId = 'home';
  }

  onLinkClick(link) {
    const {
      onLinkClick
    } = this.props;
    onLinkClick === null || onLinkClick === void 0 ? void 0 : onLinkClick(link.link);
  }

  collapse() {
    const {
      isCollapsed
    } = this.state;
    this.setState({
      isCollapsed: !isCollapsed
    });
  }

  collapseIfTrue() {
    const {
      isCollapsed
    } = this.state;

    if (isCollapsed === true) {
      this.collapse();
    }
  }

  componentDidMount() {
    this.visibleId = _Location__WEBPACK_IMPORTED_MODULE_4__["default"].pathname(this.props.router);
  }

  componentWillUpdate() {
    this.visibleId = _Location__WEBPACK_IMPORTED_MODULE_4__["default"].pathname(this.props.router);
  }

  render() {
    const {
      isCollapsed
    } = this.state;
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
      id: "header",
      className: isCollapsed === true ? 'collapsed' : '',
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        id: "header-logo-container",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          id: "header-first"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "header-logo-sub-container",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "header-logo-padding-top"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/images-webp/logo-header.png",
            id: "header-logo",
            alt: "Mehdi Meddour logo"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          id: "header-last"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        id: "header-button-container",
        children: [this.links.map((link, idx) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          "aria-label": link.link,
          href: `/${link.link}`,
          onClick: this.collapseIfTrue,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: `header-button ${idx === 0 ? 'first' : ''}
                ${idx >= this.links.length - 1 ? 'last' : ''}
                ${this.visibleId === link.link ? 'active' : ''}`,
            children: link.label
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 15
          }, this)
        }, link.link, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 13
        }, this)), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "header-media-container bp-small",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_medias_Medias__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        id: "header-hamburger-container",
        className: isCollapsed === true ? 'open' : '',
        onClick: this.collapse,
        type: "submit",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_3__["withRouter"])(Header));

/***/ }),

/***/ "./src/component/icon/Email.jsx":
/*!**************************************!*\
  !*** ./src/component/icon/Email.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Image */ "./src/Image.jsx");

var _jsxFileName = "/home/meddou/projects/perso/meddou.com/src/component/icon/Email.jsx";



function Email() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Image__WEBPACK_IMPORTED_MODULE_2__["default"], {
    src: "/images-webp/email.png",
    alt: "Email"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Email);

/***/ }),

/***/ "./src/component/icon/Github.jsx":
/*!***************************************!*\
  !*** ./src/component/icon/Github.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Image */ "./src/Image.jsx");

var _jsxFileName = "/home/meddou/projects/perso/meddou.com/src/component/icon/Github.jsx";



function Github() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Image__WEBPACK_IMPORTED_MODULE_2__["default"], {
    src: "/images-webp/github.png",
    alt: "Github"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Github);

/***/ }),

/***/ "./src/component/icon/Linkedin.jsx":
/*!*****************************************!*\
  !*** ./src/component/icon/Linkedin.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Image */ "./src/Image.jsx");

var _jsxFileName = "/home/meddou/projects/perso/meddou.com/src/component/icon/Linkedin.jsx";



function Linkedin() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Image__WEBPACK_IMPORTED_MODULE_2__["default"], {
    src: "/images-webp/linkedin.png",
    alt: "LinkedIn"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Linkedin);

/***/ }),

/***/ "./src/component/icon/Medium.jsx":
/*!***************************************!*\
  !*** ./src/component/icon/Medium.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Image */ "./src/Image.jsx");

var _jsxFileName = "/home/meddou/projects/perso/meddou.com/src/component/icon/Medium.jsx";



function Medium() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Image__WEBPACK_IMPORTED_MODULE_2__["default"], {
    src: "/images-webp/medium.png",
    alt: "Medium"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Medium);

/***/ }),

/***/ "./src/component/medias/Medias.css":
/*!*****************************************!*\
  !*** ./src/component/medias/Medias.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/component/medias/Medias.jsx":
/*!*****************************************!*\
  !*** ./src/component/medias/Medias.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _icon_Linkedin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icon/Linkedin */ "./src/component/icon/Linkedin.jsx");
/* harmony import */ var _icon_Github__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../icon/Github */ "./src/component/icon/Github.jsx");
/* harmony import */ var _icon_Email__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../icon/Email */ "./src/component/icon/Email.jsx");
/* harmony import */ var _icon_Medium__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../icon/Medium */ "./src/component/icon/Medium.jsx");
/* harmony import */ var _Medias_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Medias.css */ "./src/component/medias/Medias.css");
/* harmony import */ var _Medias_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Medias_css__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "/home/meddou/projects/perso/meddou.com/src/component/medias/Medias.jsx";







function Medias({
  className
}) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
    className: `media-button-container ${className || ''}`,
    style: {
      marginLeft: 'auto'
    },
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
      className: "media-button",
      "aria-label": "Email",
      href: "mailto:contact@meddou.com",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_icon_Email__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
      className: "media-button",
      "aria-label": "Linkedin",
      href: "https://www.linkedin.com/in/meddou",
      target: "_blank",
      rel: "noopener noreferrer",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_icon_Linkedin__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
      className: "media-button",
      "aria-label": "Github",
      href: "https://github.com/meddou",
      target: "_blank",
      rel: "noopener noreferrer",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_icon_Github__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
      className: "media-button",
      "aria-label": "Medium",
      href: "https://medium.com/@meddou",
      target: "_blank",
      rel: "noopener noreferrer",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_icon_Medium__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Medias);

/***/ }),

/***/ "./src/component/project/Project.css":
/*!*******************************************!*\
  !*** ./src/component/project/Project.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/component/project/Project.jsx":
/*!*******************************************!*\
  !*** ./src/component/project/Project.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Image */ "./src/Image.jsx");
/* harmony import */ var _Project_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Project.css */ "./src/component/project/Project.css");
/* harmony import */ var _Project_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Project_css__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "/home/meddou/projects/perso/meddou.com/src/component/project/Project.jsx";




class Project extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  static isWhite(c) {
    const rgb = parseInt(c, 16); // convert rrggbb to decimal

    const r = rgb >> 16 & 0xff; // extract red

    const g = rgb >> 8 & 0xff; // extract green

    const b = rgb >> 0 & 0xff; // extract blue

    const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b; // per ITU-R BT.709

    return luma >= 220;
  }

  render() {
    const {
      backgroundColor,
      backgroundImage,
      logo,
      name,
      isHoverable,
      fullSize
    } = this.props;
    const isWhite = backgroundColor ? Project.isWhite(backgroundColor.slice(1)) : false;
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: `rounded project-container ${fullSize ? 'full-size' : ''}`,
        style: {
          backgroundColor,
          backgroundImage
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Image__WEBPACK_IMPORTED_MODULE_2__["default"], {
          alt: name,
          className: "project-image",
          src: `/images-webp/project/${logo}-logo.png`
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 11
        }, this), isHoverable !== false && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "project-overlay",
          style: {
            backgroundColor,
            backgroundImage,
            color: isWhite ? 'black' : 'white'
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Project);

/***/ }),

/***/ "./src/component/project/ProjectOverlay.css":
/*!**************************************************!*\
  !*** ./src/component/project/ProjectOverlay.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/component/project/ProjectOverlay.jsx":
/*!**************************************************!*\
  !*** ./src/component/project/ProjectOverlay.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Image */ "./src/Image.jsx");
/* harmony import */ var _ProjectOverlay_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProjectOverlay.css */ "./src/component/project/ProjectOverlay.css");
/* harmony import */ var _ProjectOverlay_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ProjectOverlay_css__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "/home/meddou/projects/perso/meddou.com/src/component/project/ProjectOverlay.jsx";




function ProjectOverlay({
  isVisible,
  backgroundColor,
  inTransition,
  outTransition,
  name,
  logo
}) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
    children: isVisible && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      style: {
        backgroundColor
      },
      className: `project-background-overlay ${inTransition ? 'in' : ''}  ${outTransition ? 'out' : ''}`,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Image__WEBPACK_IMPORTED_MODULE_2__["default"], {
        src: `/images-webp/project/${logo}-logo-256x256.png`,
        alt: name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (ProjectOverlay);

/***/ }),

/***/ "./src/component/skill/Skill.css":
/*!***************************************!*\
  !*** ./src/component/skill/Skill.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/component/skill/Skill.jsx":
/*!***************************************!*\
  !*** ./src/component/skill/Skill.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Image */ "./src/Image.jsx");
/* harmony import */ var _ProgressRing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ProgressRing */ "./src/component/ProgressRing.jsx");
/* harmony import */ var _WindowSize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../WindowSize */ "./src/WindowSize.js");
/* harmony import */ var _Skill_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Skill.css */ "./src/component/skill/Skill.css");
/* harmony import */ var _Skill_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Skill_css__WEBPACK_IMPORTED_MODULE_5__);


var _jsxFileName = "/home/meddou/projects/perso/meddou.com/src/component/skill/Skill.jsx";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







class Skill extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor() {
    super();

    _defineProperty(this, "side", 0);

    _defineProperty(this, "largeSide", 0);

    _defineProperty(this, "smallSide", 0);

    _defineProperty(this, "largeStroke", 0);

    _defineProperty(this, "smallStroke", 0);

    this.largeSide = Math.floor(164 / 3.5);
    this.smallSide = Math.floor(this.largeSide / 1.6);
    this.largeStroke = Skill.getStroke(this.largeSide);
    this.smallStroke = Skill.getStroke(this.smallSide);
  }

  static getStroke(side) {
    return side * 12.5 / 164;
  }

  static calcExperienceSide(side) {
    return side / 2;
  }

  render() {
    const {
      isLittle,
      showExperience,
      backgroundColor,
      isSelected,
      logo,
      name,
      backgroundImage,
      experience
    } = this.props;
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      style: {
        position: 'relative'
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: `skill-super-container ${isLittle ? 'little' : ''} ${showExperience ? 'pr-marged' : ''}`,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: `
            rounded skill-container ${showExperience ? 'skill-container-with-pr' : ''}
            ${isSelected ? 'selected' : ''}
            ${isLittle ? 'little' : ''}`,
          style: {
            backgroundColor
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: `skill-sub-container ${isLittle ? 'little' : ''}`,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Image__WEBPACK_IMPORTED_MODULE_2__["default"], {
              alt: name,
              className: "skill-image",
              src: `/images-webp/skills/${logo}.png`
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 15
            }, this), !isLittle && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "skill-overlay",
              style: {
                backgroundColor,
                backgroundImage
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                className: "skill-overlay-text",
                children: name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 61,
                columnNumber: 21
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 19
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, this), showExperience && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            position: 'absolute',
            top: -Skill.calcExperienceSide(this.largeSide),
            right: Skill.calcExperienceSide(this.largeSide)
          },
          className: "bp-large",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "skill-experience-aside-container",
            style: {
              width: this.largeSide,
              height: this.largeSide
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "skill-pr-container",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ProgressRing__WEBPACK_IMPORTED_MODULE_3__["default"], {
                side: Math.floor(this.largeSide),
                stroke: this.largeStroke,
                progress: experience * 100 / 5
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 72,
                columnNumber: 51
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 72,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "skill-experience-aside-text-container",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "skill-experience-aside-text-num",
                children: experience
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 74,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "skill-experience-aside-text-years",
                children: experience > 1 ? 'ANNÉES' : 'ANNÉE'
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 75,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 73,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            position: 'absolute',
            top: -Skill.calcExperienceSide(this.smallSide),
            right: Skill.calcExperienceSide(this.smallSide)
          },
          className: "bp-small",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "skill-experience-aside-container",
            style: {
              width: this.smallSide,
              height: this.smallSide
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "skill-pr-container",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ProgressRing__WEBPACK_IMPORTED_MODULE_3__["default"], {
                side: Math.floor(this.smallSide),
                stroke: this.smallStroke,
                progress: experience * 100 / 5
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 82,
                columnNumber: 49
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "skill-experience-aside-text-container",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "skill-experience-aside-text-num",
                children: experience
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 84,
                columnNumber: 15
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "skill-experience-aside-text-years",
                children: experience > 1 ? 'ANNÉES' : 'ANNÉE'
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 85,
                columnNumber: 15
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 11
        }, this)]
      }, void 0, true)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Skill);

/***/ }),

/***/ "./src/component/title/Title.css":
/*!***************************************!*\
  !*** ./src/component/title/Title.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/component/title/Title.jsx":
/*!***************************************!*\
  !*** ./src/component/title/Title.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Title_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Title.css */ "./src/component/title/Title.css");
/* harmony import */ var _Title_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Title_css__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "/home/meddou/projects/perso/meddou.com/src/component/title/Title.jsx";



function Title({
  noMargin,
  text,
  myStyle
}) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
    className: `title ${noMargin ? '' : 'margin-top'}`,
    style: myStyle,
    children: text
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Title);

/***/ }),

/***/ "./src/data/experiances.json":
/*!***********************************!*\
  !*** ./src/data/experiances.json ***!
  \***********************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"title\":\"Freelancer\",\"date\":\"2017 - Actuel\",\"subtitle\":\"Marseille, France\",\"text\":\"Entrepreneur depuis 2017, je propose mes services de développement informatique pour la conception et réalisation de vos projets numériques.\",\"logo\":\"freelance.png\",\"company\":\"freelance\"},{\"title\":\"Master en informatique\",\"date\":\"2019\",\"subtitle\":\"Epitech Paris, France\",\"text\":\"Obtention d'un Master en Informatique à l'issue de ma dernière année à Epitech Paris.\\nRéalisation de la version Android d'<a href='/work/Agora'>AGORA</a>, projet de fin d'études qui est une application de mise en relation entre un porteur de projet et un talent pour concrétiser une idée.\",\"logo\":\"graduation.png\",\"company\":\"school\"},{\"title\":\"Epitech Barcelona\",\"date\":\"2017 - 2018\",\"subtitle\":\"Barcelone, Espagne\",\"text\":\"Année d'ouverture sur le monde professionnel centrée autour du Marketing et de la Finance à Epitech Barcelone.\\nRéalisation d'un projet de fin d'année visant à optimiser le trafic urbain via des sensors placés sur des feux rouges.\\nUtilisation de Haskell pour le développement de l'algorithme.\",\"logo\":\"graduation.png\",\"company\":\"school\"},{\"title\":\"Axis Immobilier\",\"date\":\"2017\",\"subtitle\":\"Marseille, France\",\"text\":\"Développement d'un ERP interne à l'entreprise utilisé par tout les employés.\\nIl centralise les informations de la société et facilite la communication entre les pôles.\\nL'ERP gère le suivi client de l'entreprise de la première prise de contact à la facturation du locataire.\\nUtilisation de PHP et Javascript natif pour le back et front ainsi que mySQL pour la base de données.\",\"logo\":\"axis.png\",\"company\":\"axis\",\"projectUrl\":\"/work/Intranet%20AXIS\"},{\"title\":\"Bachelor en informatique\",\"date\":\"2017\",\"subtitle\":\"Epitech Marseille, France\",\"text\":\"Epitech est une école d'informatique.\\nSa pédagogie alternative par l'immersion et et centré autour de projets m'a permit d'être autonome et d'apprendre à apprendre afin d'évoluer en premanance dans un secteur qui change tout autant.\\nPremière année: Réalisation de projets en ligne de commande en C.\\nDeuxième année: Réalisation de projets (Algorithmes, Jeux Vidéos) incluants Threading, réseau et GUI en C et C++.\\nTroisième année: Réalisation de projets avancés (Logiciel VOIP, Jeux Vidéo 3D en réseau, Intelligences artificielles) en C, C++, QT et de projets plus simples (Algorithmes, Jeux 2D) en Java, OCAML.\",\"logo\":\"graduation.png\",\"company\":\"school\"},{\"title\":\"Cloudindus\",\"date\":\"2015 - 2017\",\"subtitle\":\"Marseille, France\",\"text\":\"Développement d'un superviseur industriel / site internet IoT en technologies Web.\\nLe site permet à des particuliers aussi bien qu'à des professionnels d’interagir et consulter l'état de leurs objets connectés entre eux sur leur réseau.\\nLes interactions entre les objets peuvent être codée par l'utilisateur via l'interface du site.\\nIl permet aussi d'éditer un synoptique, la représentation graphique d'un objet, via un éditeur SVG présent directement sur le site.\\nUtilisation de MEAN Stack (MongoDB, Express, Angular 1.29, Node.js) pour le développement.\",\"logo\":\"cloudindus.png\",\"company\":\"cloudindus\",\"projectUrl\":\"/work/Cloudindus\"},{\"title\":\"Lycée Thiers\",\"date\":\"2014\",\"subtitle\":\"Marseille, France\",\"text\":\"Baccalauréat Scientifique.\",\"logo\":\"graduation.png\"}]");

/***/ }),

/***/ "./src/data/projects.json":
/*!********************************!*\
  !*** ./src/data/projects.json ***!
  \********************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"name\":\"kwote\",\"logo\":\"kwote\",\"backgroundColor\":\"#e0cbaa\",\"languages\":[\"Javascript\",\"NodeJS\",\"mySQL\",\"Angular\",\"Web\",\"Git\"],\"companies\":[\"freelancer\"],\"images\":[],\"description_project\":\"\\\"Kwote est un gestionnaire de risque à destination des ETI et PME.\\nIl s'appuie sur les data des entreprises, grâce à sa connexion avec leurs systèmes d'information offrant à l'utilisateur - directeur financier, credit manager ou dirigeant - des outils de gestion du risque client et de pilotage de la performance des contrats d'assurance-crédit associés à une brique de services dont des solutions de financement disruptives, de recouvrement en ligne, du scoring basé sur le comportement de paiement...\\\"\",\"description_mission\":\"<div>Développement de diverses connecteurs de récupération d'informations vers des sites externes (ATRADIUS, Euler Hermes).</div><div>Développement d'un module de relance de facture impayées comportant un système de planification et d'édition de templates.</div><div>Migration du site vers Angular 7 puis 8 puis 9.</div>\",\"recommandations\":[],\"start\":\"2018-08-01\",\"end\":null},{\"name\":\"arte\",\"logo\":\"arte\",\"backgroundColor\":\"#fd4600\",\"languages\":[\"Javascript\",\"PHP\",\"mySQL\",\"Web\",\"Git\",\"React\"],\"companies\":[\"freelancer\"],\"images\":[\"arte/1.png\",\"arte/2.png\",\"arte/3.png\",\"arte/4.png\"],\"description_project\":\"\\\"Média européen public responsable, ARTE s'engage sur des thématiques chères aux citoyens et citoyennes d’Europe : la lutte contre les inégalités, qu’elles soient sociales, culturelles, économiques, géographiques, liées au genre ou au handicap, ainsi que le développement durable.\\\"\",\"description_mission\":\"<div>Développement et optimisation de l'API relatif aux données de l'utilisateur (historique de visualisation, édition de compte ...).</div><div>Optimisation du player vidéo utilisé sur <a href='https://arte.tv' target='_blank'>arte.tv.</a></div>\",\"recommandations\":[],\"start\":\"2020-08-01\",\"end\":null,\"isVisible\":false},{\"name\":\"The Babel Community\",\"logo\":\"the-babel-community\",\"backgroundColor\":\"#000000\",\"languages\":[\"Javascript\",\"jQuery\",\"PHP\",\"Symfony\",\"mySQL\",\"Web\",\"Git\"],\"companies\":[\"freelancer\"],\"url\":\"https://thebabelcommunity.com\",\"images\":[\"the-babel-community/the_babel_community_1.jpg\",\"the-babel-community/the_babel_community_2.jpg\",\"the-babel-community/the_babel_community_3.jpg\",\"the-babel-community/the_babel_community_4.jpg\",\"the-babel-community/the_babel_community_5.jpg\",\"the-babel-community/the_babel_community_6.jpg\",\"the-babel-community/the_babel_community_7.png\",\"the-babel-community/the_babel_community_8.png\"],\"description_project\":\"\\\"The Babel Community c’est une oasis urbaine.\\nUn lieu refuge où, pour entrer dans la vie et conquérir la ville, de jeunes actifs collaborent et mutualisent.\\nIls y habitent, travaillent, font du sport, se rencontrent. Ils refont le monde autour d’un verre ou d’un plat et se divertissent.\\nEnsemble, ils coexistent et forment une communauté vivante : The Babel Community.\\\"\",\"description_mission\":\"<div>Développement du site vitrine de la résidence permettant de lister les services proposés et les biens actuellements disponibles. Le site permet aussi de planifier une visite ou une réservation d'appartement ainsi que de s'inscrire à un cours de sport ou réserver une table au restaurant.</div>\",\"recommandations\":[],\"start\":\"2018-10-01\",\"end\":\"2019-02-01\"},{\"name\":\"The Babel Zone\",\"logo\":\"the-babel-zone\",\"backgroundColor\":\"#000000\",\"languages\":[\"Javascript\",\"PHP\",\"Laravel\",\"mySQL\",\"Web\",\"PWA\",\"Git\",\"React\"],\"companies\":[\"freelancer\"],\"url\":\"https://thebabelcommunity.app\",\"images\":[\"the-babel-zone/the_babel_zone_1.png\",\"the-babel-zone/the_babel_zone_2.png\",\"the-babel-zone/the_babel_zone_3.png\",\"the-babel-zone/the_babel_zone_4.png\"],\"description_project\":\"\\\"The Babel Community c’est une oasis urbaine.\\nUn lieu refuge où, pour entrer dans la vie et conquérir la ville, de jeunes actifs collaborent et mutualisent.\\nIls y habitent, travaillent, font du sport, se rencontrent. Ils refont le monde autour d’un verre ou d’un plat et se divertissent.\\nEnsemble, ils coexistent et forment une communauté vivante : The Babel Community.\\\"\",\"description_mission\":\"<div>THE BABEL ZONE est une web-app à destination des locataires de la résidence. L'application leur permet d'interagir avec les services de cette dernière. Ils peuvent en effet, depuis l'application, commander un plat au restaurant, s'inscrire à un cours de sport ou encore réserver une salle de réunion. Développement de la totalité de l'application.</div>\",\"recommandations\":[],\"start\":\"2018-08-01\",\"end\":\"2019-05-01\"},{\"name\":\"Album Quiz\",\"logo\":\"album-quiz\",\"backgroundColor\":\"#00d3ee\",\"languages\":[\"React\",\"iOS\",\"Android\",\"Git\"],\"companies\":[\"freelancer\"],\"url\":\"https://play.google.com/store/apps/details?id=com.albumquiz&hl=fr\",\"images\":[\"album-quiz/1.png\",\"album-quiz/2.png\",\"album-quiz/3.png\",\"album-quiz/4.png\",\"album-quiz/5.png\",\"album-quiz/6.png\"],\"description_project\":\"Album Quiz | Rap Français est un quiz qui consiste à trouver un artiste depuis un titre d'album.<br/>Le jeu est centré autour de la musique urbaine Française.<br/>Plus de 3500 albums disponibles à travers 30 ans.\",\"description_mission\":\"<div>Développement du jeu sur Android, iOS.</div>\",\"recommandations\":[],\"start\":\"2019-03-01\",\"end\":\"2019-11-01\"},{\"name\":\"Cloudindus\",\"logo\":\"cloudindus\",\"backgroundColor\":\"#dadadd\",\"languages\":[\"Javascript\",\"NodeJS\",\"MongoDB\",\"Angular\",\"Web\",\"Git\"],\"companies\":[\"cloudindus\"],\"images\":[\"cloudindus/cloudindus_1.gif\",\"cloudindus/cloudindus_2.jpg\",\"cloudindus/cloudindus_3.jpg\",\"cloudindus/cloudindus_4.jpg\",\"cloudindus/cloudindus_5.png\"],\"description_project\":\"Cloudindus est un superviseur industriel / platforme de configuration d'objet IoT. Le site permet à des particuliers aussi bien qu'à des professionnels d’interagir et consulter l'état de leurs objets connectés entre eux sur leur réseau. Les interactions entre les objets peuvent être codée par l'utilisateur via l'interface du site. Il permet aussi d'éditer un synoptique, la représentation graphique d'un objet, via un éditeur SVG présent directement sur le site.\",\"recommandations\":[],\"start\":\"2015-05-01\",\"end\":\"2017-03-01\"},{\"name\":\"Intranet AXIS\",\"logo\":\"axis\",\"backgroundColor\":\"#FFFFFF\",\"languages\":[\"Javascript\",\"jQuery\",\"PHP\",\"mySQL\",\"Web\",\"Git\"],\"companies\":[\"axis\"],\"images\":[\"intranet-axis/intra_1.jpg\",\"intranet-axis/intra_2.jpg\",\"intranet-axis/intra_3.jpg\",\"intranet-axis/intra_4.jpg\",\"intranet-axis/intra_5.jpg\",\"intranet-axis/intra_6.jpg\"],\"description_project\":\"L'Intranet AXIS est un outil utilisé par la totalité des employés d'AXIS Immobilier pour centraliser les informations.\\nIl permet le suivi des cliens de la première prise de contact jusqu'a la réserversation et facturation d'un logement.\",\"description_mission\":\"<div>L'ERP offre la possibilité de crée / lire / modifier / supprimer des informations comme les prospects en cours , les réservations en cours, le mobilier dans les appartements, etc.</div>\",\"recommandations\":[],\"start\":\"2017-04-01\",\"end\":\"2017-09-01\"},{\"name\":\"Foody Basket\",\"logo\":\"foody-basket\",\"backgroundColor\":\"#fd8600\",\"languages\":[\"Lua\",\"Corona\",\"Android\",\"iOS\",\"Git\"],\"companies\":[\"freelancer\"],\"url\":\"https://play.google.com/store/apps/details?id=fr.hotmail.meddegivet.FoodyBasket\",\"images\":[\"foody-basket/in-game1.png\",\"foody-basket/league-fr.png\",\"foody-basket/menu-fr.png\",\"foody-basket/in-game2.png\",\"foody-basket/select-menu-fr.png\"],\"description_project\":\"Foody basket est un jeu mobile de junk-food jouant au basketball. Le jeu possède plus d'une dizaine de personnages, tous basés de célèbres plats de fast-food et entièrement customisables. Plusieurs modes de jeu sont disponibles, allant du match simple à un système de championnat.\",\"description_mission\":\"<div>Développement du jeu sur Android, iOS et Windows.</div>\",\"recommandations\":[],\"start\":\"2016-09-01\",\"end\":\"2017-04-01\"},{\"name\":\"The Babel Staff\",\"logo\":\"the-babel-staff\",\"backgroundColor\":\"#000000\",\"languages\":[\"React\",\"Javascript\",\"PHP\",\"Laravel\",\"mySQL\",\"Web\",\"PWA\",\"Git\"],\"companies\":[\"freelancer\"],\"images\":[\"the-babel-staff/the_babel_staff_1.jpg\",\"the-babel-staff/the_babel_staff_2.jpg\",\"the-babel-staff/the_babel_staff_3.jpg\",\"the-babel-staff/the_babel_staff_4.jpg\",\"the-babel-staff/the_babel_staff_5.jpg\"],\"description_project\":\"\\\"The Babel Community c’est une oasis urbaine.\\nUn lieu refuge où, pour entrer dans la vie et conquérir la ville, de jeunes actifs collaborent et mutualisent.\\nIls y habitent, travaillent, font du sport, se rencontrent. Ils refont le monde autour d’un verre ou d’un plat et se divertissent.\\nEnsemble, ils coexistent et forment une communauté vivante : The Babel Community.\\\"\",\"description_mission\":\"<div>THE BABEL STAFF est une web-app à destination du staff de la résidence (serveur, cuisine, service ménage ...) qui leur permet de gérer leurs taches journalière sous forme de ToDo. Développement de la totalité de l'application.</div>\",\"recommandations\":[],\"start\":\"2018-08-01\",\"end\":\"2019-05-01\",\"isVisible\":false},{\"name\":\"Presta Diagnostic\",\"logo\":\"prestadiagnostic\",\"backgroundColor\":\"#cfe7f8\",\"languages\":[\"Javascript\",\"PHP\",\"mySQL\",\"Laravel\",\"jQuery\",\"Web\",\"Git\"],\"companies\":[\"freelancer\"],\"url\":\"https://prestadiagnostic.com/\",\"images\":[\"prestadiagnostic/prestadiagnostic_2.png\",\"prestadiagnostic/prestadiagnostic_1.png\",\"prestadiagnostic/prestadiagnostic_3.png\"],\"description_project\":\"\\\"Prestadiagnostic.com est une plateforme internet vous permettant une mise en relation directe avec des diagnostiqueurs immobiliers proches de chez vous.\\\"\",\"description_mission\":\"<div>Redéveloppement du système de mise en relation entre un utilisateur et des diagnostiqueurs immobiliers.</div><div>Intégration Google Analytics.</div>\",\"recommandations\":[],\"start\":\"2020-06-01\",\"end\":\"2020-07-01\"},{\"name\":\"Agora\",\"logo\":\"agora\",\"backgroundColor\":\"#f9f9f9\",\"languages\":[\"Kotlin\",\"Android\",\"Git\"],\"companies\":[\"school\"],\"url\":\"https://play.google.com/store/apps/details?id=io.agora.agora\",\"images\":[\"agora/5.png\",\"agora/1.png\",\"agora/2.png\",\"agora/3.png\",\"agora/4.png\"],\"description_project\":\"Agora est une plateforme web et mobile dont l’objectif est de mettre en relation des personnes qui ont des compétences différentes, complémentaires, et qui veulent créer ainsi que développer de nouvelles idées en équipe. Avec Agora, vous pouvez former votre équipe autour de votre projet, ou rejoindre une équipe déjà formée en proposant votre savoir-faire.\\nL'application fournit les outils nécessaires pour le bon déroulement d’un projet : un rétro-planning, du stockage, un gestionnaire de tâches, etc.\",\"description_mission\":\"<div>Développement de l'application Android.</div>\",\"recommandations\":[],\"start\":\"2017-09-01\",\"end\":\"2019-03-01\"},{\"name\":\"Koodouble\",\"logo\":\"koodouble\",\"backgroundColor\":\"#e3a8c3\",\"languages\":[\"Angular\",\"Web\",\"Javascript\",\"NodeJS\",\"Git\",\"MongoDB\"],\"companies\":[\"freelancer\"],\"url\":\"https://www.koodouble.com\",\"images\":[],\"description_project\":\"\\\"KOODouble allège vos mensualités et vous permet de gagner jusqu’à 12000€ sur votre assurance de prêt.\\nKOODouble, c’est la garantie d’une assurance de prêt moins chère mais aussi d’une renégociation en toute simplicité, puisque KOOdouble s’occupe de TOUT : Résiliation de l’assurance actuelle, formalités auprès de la banque et adhésion.\\\"\",\"description_mission\":\"<div>Migration du projet vers Angular 8 puis Angular 9 puis 11.</div>\",\"recommandations\":[],\"start\":\"2018-02-01\",\"end\":\"2018-08-01\",\"isVisible\":false},{\"name\":\"Toocamp\",\"logo\":\"toocamp\",\"backgroundColor\":\"#0e4a68\",\"languages\":[\"Javascript\",\"NodeJS\",\"mySQL\",\"Web\",\"Git\"],\"companies\":[\"freelancer\"],\"url\":\"https://www.toocamp.com/\",\"images\":[\"toocamp/toocamp_1.jpg\",\"toocamp/toocamp_2.jpg\",\"toocamp/toocamp_3.jpg\",\"toocamp/toocamp_4.jpg\",\"toocamp/toocamp_5.png\"],\"description_project\":\"\\\"Portail du groupe Webedia, Toocamp est un site de contenus et services aux internautes, dédié aux vacances en camping.\\nSa mission : tout faire pour faciliter la recherche puis le choix d'un camping pour les vacanciers.\\nComment ? Grâce à des contenus produits par nos équipes, à une sélection des offres promotionnelles proposées par les campings et les tours opérateurs, à un moteur de recherche pour comparer la plupart des offres du marché, à des photos, vidéos, articles, avis internautes, et enfin grâce à nos sélections de campings.\\\"\",\"description_mission\":\"<div>Réalisation d'un système de traduction via des fichiers JSON ainsi que la mise en place de mini-sites destiné à différents pays.</div>\",\"recommandations\":[],\"start\":\"2018-06-01\",\"end\":\"2018-09-01\"},{\"name\":\"Fivorites\",\"logo\":\"fivorites\",\"backgroundColor\":\"#FFFFFF\",\"languages\":[\"Javascript\",\"NodeJS\",\"mySQL\",\"Web\",\"Git\"],\"companies\":[\"freelancer\"],\"url\":\"https://fivorites.com/\",\"images\":[\"fivorites/fivorites_1.jpg\",\"fivorites/fivorites_2.jpg\",\"fivorites/fivorites_3.jpg\",\"fivorites/fivorites_4.jpg\"],\"description_project\":\"\\\"Vous avez lu un super livre, vu un super film et vous avez envie de le faire savoir à vos amis ? Créez votre Top 5, Partagez-le avec vos amis et découvrez ce qu’ils ont aimés !\\nFivorites vous permet de saisir le TOP 5 films, séries, livres, musiques et BD de votre vie et du moment.\\\"\",\"description_mission\":\"<div>Réalisation de la data acquisition des médias du site via des scripts de récupération de contenu sur les API Deezer et iTunes.</div>\",\"recommandations\":[],\"start\":\"2018-09-01\",\"end\":\"2018-11-01\"},{\"name\":\"MateMeUp\",\"logo\":\"matemeup\",\"backgroundColor\":\"#b01515\",\"languages\":[\"Javascript\",\"NodeJS\",\"React\",\"jQuery\",\"Laravel\",\"PHP\",\"mySQL\",\"Git\",\"Web\"],\"companies\":[\"freelancer\"],\"url\":\"https://matemeup.com\",\"images\":[\"matemeup/matemeup_web_1.jpg\",\"matemeup/matemeup_web_2.jpg\",\"matemeup/matemeup_web_3.jpg\",\"matemeup/matemeup_web_4.jpg\"],\"description_project\":\"\\\"Le site matemeup.com a pour but de centraliser les outils nécessaires aux joueurs e-sport et plus globalement aux joueurs de jeux vidéos, de faciliter la création de liens et les rencontres tout en promouvant la sphère gaming qui s'y rapporte (diffuseurs, casteurs, vidéastes...).\\\"\",\"description_mission\":\"<div>Développement d'un système de chat en temps réel utilisant socket.io.</div><div>Développement d'un système de mur où les utilisateurs peuvent poster du texte et des images.</div><div>Développement d'un outil de matchmaking qui comporte un système de salon texuel et vocal avec la possibilité d'en créer, modifier et en supprimer.</div>\",\"recommandations\":[1],\"start\":\"2017-10-01\",\"end\":\"2018-01-01\"},{\"name\":\"MateMeUp Mobile\",\"logo\":\"matemeup\",\"backgroundColor\":\"#ec6464\",\"languages\":[\"Android\",\"iOS\",\"Java\",\"Swift\",\"Git\"],\"companies\":[\"freelancer\"],\"url\":\"https://github.com/meddou/matemeup_android\",\"images\":[\"matemeup-mobile/matemeup_mobile_1.jpg\",\"matemeup-mobile/matemeup_mobile_2.jpg\",\"matemeup-mobile/matemeup_mobile_3.jpg\",\"matemeup-mobile/matemeup_mobile_4.jpg\",\"matemeup-mobile/matemeup_mobile_5.jpg\"],\"description_project\":\"\\\"Le site matemeup.com a pour but de centraliser les outils nécessaires aux joueurs e-sport et plus globalement aux joueurs de jeux vidéos, de faciliter la création de liens et les rencontres tout en promouvant la sphère gaming qui s'y rapporte (diffuseurs, casteurs, vidéastes...).\\\"\",\"description_mission\":\"<div>Développement de la version Android et iOS du site incluant connexion / déconnexion, mur facebook-like ainsi qu'un chat en temps réel.</div>\",\"recommandations\":[1],\"start\":\"2018-02-01\",\"end\":\"2018-08-01\"},{\"name\":\"The Colivers\",\"logo\":\"the-colivers\",\"backgroundColor\":\"#d75347\",\"languages\":[\"Javascript\",\"PHP\",\"mySQL\",\"Web\",\"Git\"],\"companies\":[\"freelancer\"],\"url\":\"https://thecolivers.com/\",\"images\":[\"the-colivers/the-colivers_1.jpg\",\"the-colivers/the-colivers_2.jpg\",\"the-colivers/the-colivers_3.jpg\",\"the-colivers/the-colivers_4.jpg\"],\"description_project\":\"THE COLIVERS, anciennement L'AUBERGE, est une agence de location d'appartement en colocation.\",\"description_mission\":\"<div>Rebranding et refonte du design de l'ancien site L'AUBERGE vers la nouvelle marque <a href='https:/thecolivers.com' target='_blank'>THE COLIVERS</a>.\",\"recommandations\":[],\"start\":\"2018-02-01\",\"end\":\"2018-03-01\"},{\"name\":\"DeezDL\",\"logo\":\"deezdl\",\"backgroundColor\":\"#1e2121\",\"languages\":[\"Javascript\",\"Chrome\",\"Git\",\"Web\"],\"companies\":[\"freelancer\"],\"url\":\"https://chrome.google.com/webstore/detail/deezdl/ojkgeljdeihmnoamceidbdlcfogjlmmg\",\"images\":[\"deezdl/1.png\",\"deezdl/2.png\"],\"description_project\":\"<div>Réalisation d'une extension Google Chrome pour lier Deezer et des sites de téléchargements de musique.</div>\",\"recommandations\":[],\"isVisible\":true}]");

/***/ }),

/***/ "./src/data/skills.json":
/*!******************************!*\
  !*** ./src/data/skills.json ***!
  \******************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"name\":\"Web\",\"logo\":\"web\",\"experience\":5},{\"name\":\"Android\",\"logo\":\"android\",\"experience\":1},{\"name\":\"iOS\",\"logo\":\"ios\",\"experience\":1},{\"name\":\"Javascript\",\"logo\":\"javascript\",\"backgroundColor\":\"#efd81d\",\"experience\":4.5},{\"name\":\"NodeJS\",\"logo\":\"node\",\"backgroundColor\":\"#94b84d\",\"experience\":4},{\"name\":\"React\",\"logo\":\"react\",\"backgroundColor\":\"#61dafb\",\"experience\":2},{\"name\":\"Angular\",\"logo\":\"angular\",\"backgroundColor\":\"#c30e2e\",\"experience\":2},{\"name\":\"jQuery\",\"logo\":\"jquery\",\"backgroundColor\":\"#0865a6\",\"experience\":3,\"isFilterable\":false},{\"name\":\"PHP\",\"logo\":\"php\",\"backgroundColor\":\"#4d588e\",\"experience\":3},{\"name\":\"Laravel\",\"logo\":\"laravel\",\"backgroundColor\":\"#fb503b\",\"experience\":2},{\"name\":\"Symfony\",\"logo\":\"symfony\",\"backgroundColor\":\"#000000\",\"experience\":0.5,\"isFilterable\":false,\"isShowable\":false},{\"name\":\"Java\",\"logo\":\"java\",\"backgroundColor\":\"#096eb6\",\"experience\":0.5,\"isFilterable\":false},{\"name\":\"Kotlin\",\"logo\":\"kotlin\",\"backgroundColor\":\"#4680de\",\"experience\":1,\"isFilterable\":false},{\"name\":\"Swift\",\"logo\":\"swift\",\"backgroundColor\":\"#f36938\",\"experience\":0.5,\"isFilterable\":false},{\"name\":\"C\",\"logo\":\"c\",\"backgroundColor\":\"#7f8b99\",\"experience\":3,\"isFilterable\":false},{\"name\":\"C++\",\"logo\":\"c++\",\"backgroundColor\":\"#004482\",\"experience\":3,\"isFilterable\":false},{\"name\":\"Corona\",\"logo\":\"corona\",\"backgroundColor\":\"#f47e20\",\"experience\":1,\"isFilterable\":false,\"isShowable\":false},{\"name\":\"Git\",\"logo\":\"git\",\"backgroundColor\":\"#f05033\",\"experience\":6,\"isFilterable\":false,\"isShowable\":false},{\"name\":\"Chrome\",\"logo\":\"chrome\",\"backgroundColor\":\"#49ae48\",\"experience\":0.5,\"isFilterable\":false,\"isShowable\":false},{\"name\":\"Electron\",\"logo\":\"electron\",\"backgroundColor\":\"#6bdefb\",\"experience\":0.5,\"isFilterable\":false,\"isShowable\":false},{\"name\":\"PWA\",\"logo\":\"PWA\",\"backgroundColor\":\"#5a0fc8\",\"experience\":0.5,\"isFilterable\":false,\"isShowable\":false},{\"name\":\"mySQL\",\"logo\":\"mysql\",\"backgroundColor\":\"#00546b\",\"experience\":4,\"isShowable\":false},{\"name\":\"MongoDB\",\"logo\":\"mongo\",\"backgroundColor\":\"#69b23f\",\"experience\":1,\"isShowable\":false},{\"name\":\"Lua\",\"logo\":\"lua\",\"backgroundColor\":\"#000080\",\"experience\":1}]");

/***/ }),

/***/ "./src/layout/item/Item.css":
/*!**********************************!*\
  !*** ./src/layout/item/Item.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/layout/item/Item.jsx":
/*!**********************************!*\
  !*** ./src/layout/item/Item.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Item_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Item.css */ "./src/layout/item/Item.css");
/* harmony import */ var _Item_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Item_css__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "/home/meddou/projects/perso/meddou.com/src/layout/item/Item.jsx";



function Item({
  onClick,
  style,
  children
}) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
    className: "item",
    onClick: onClick,
    style: style,
    type: "submit",
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Item);

/***/ }),

/***/ "./src/layout/row/Row.css":
/*!********************************!*\
  !*** ./src/layout/row/Row.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/layout/row/Row.jsx":
/*!********************************!*\
  !*** ./src/layout/row/Row.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Row_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Row.css */ "./src/layout/row/Row.css");
/* harmony import */ var _Row_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Row_css__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "/home/meddou/projects/perso/meddou.com/src/layout/row/Row.jsx";



function Row({
  spaceAroundMob,
  noWrap,
  className,
  center,
  style,
  customRef,
  children
}) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: `
      row
      ${spaceAroundMob ? 'row-space-around-mob' : ''}
      ${noWrap ? 'noWrap' : ''}
      ${className || ''}
      ${center ? 'row-center' : ''}`,
    style: style,
    ref: customRef,
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Row);

/***/ }),

/***/ "./src/pages/BasicPage.css":
/*!*********************************!*\
  !*** ./src/pages/BasicPage.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/pages/BasicPage.jsx":
/*!*********************************!*\
  !*** ./src/pages/BasicPage.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _BasicPage_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BasicPage.css */ "./src/pages/BasicPage.css");
/* harmony import */ var _BasicPage_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_BasicPage_css__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "/home/meddou/projects/perso/meddou.com/src/pages/BasicPage.jsx";



class BasicPage extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  // eslint-disable-next-line
  renderContent() {
    return undefined;
  }

  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "basic-page",
      style: this.style,
      children: this.renderContent()
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (BasicPage);

/***/ }),

/***/ "./src/pages/Experience.jsx":
/*!**********************************!*\
  !*** ./src/pages/Experience.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_vertical_timeline_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-vertical-timeline-component */ "react-vertical-timeline-component");
/* harmony import */ var react_vertical_timeline_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_vertical_timeline_component__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Image */ "./src/Image.jsx");
/* harmony import */ var _component_title_Title__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../component/title/Title */ "./src/component/title/Title.jsx");
/* harmony import */ var _component_description_Description__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../component/description/Description */ "./src/component/description/Description.jsx");
/* harmony import */ var _services_Experiance__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/Experiance */ "./src/services/Experiance.js");
/* harmony import */ var _BasicPage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./BasicPage */ "./src/pages/BasicPage.jsx");
/* harmony import */ var react_vertical_timeline_component_style_min_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-vertical-timeline-component/style.min.css */ "./node_modules/react-vertical-timeline-component/style.min.css");
/* harmony import */ var react_vertical_timeline_component_style_min_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_vertical_timeline_component_style_min_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _VerticalTimeline_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../VerticalTimeline.css */ "./src/VerticalTimeline.css");
/* harmony import */ var _VerticalTimeline_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_VerticalTimeline_css__WEBPACK_IMPORTED_MODULE_10__);

var _jsxFileName = "/home/meddou/projects/perso/meddou.com/src/pages/Experience.jsx";











class Experience extends _BasicPage__WEBPACK_IMPORTED_MODULE_8__["default"] {
  constructor(props) {
    super(props);
    this.state = {
      experiances: _services_Experiance__WEBPACK_IMPORTED_MODULE_7__["default"].get()
    };
    this.style = {
      paddingBottom: 0
    };
  }

  renderContent() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "sub-basic-page experience-page",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "experience-background"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        style: {
          paddingTop: '64px'
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_component_title_Title__WEBPACK_IMPORTED_MODULE_5__["default"], {
          text: "Mes exp\xE9riences",
          noMargin: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_vertical_timeline_component__WEBPACK_IMPORTED_MODULE_3__["VerticalTimeline"], {
        layout: "1-column",
        children: this.state.experiances.map((experiance, idx) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_vertical_timeline_component__WEBPACK_IMPORTED_MODULE_3__["VerticalTimelineElement"], {
          className: `vertical-timeline-element ${idx === 0 ? 'element-content-first' : ''}`,
          date: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "link",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: experiance.date
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 19
            }, this), experiance.projectUrl ? ' | ' : '', experiance.projectUrl && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
              href: experiance.projectUrl,
              className: "vertical-timeline-element-link",
              children: "VOIR LE PROJET"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 19
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 17
          }, this),
          iconStyle: {
            background: '#331c5d',
            color: '#fff'
          },
          icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Image__WEBPACK_IMPORTED_MODULE_4__["default"], {
            src: `images-webp/experiances/${experiance.logo}`,
            alt: experiance.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 17
          }, this),
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
            className: "vertical-timeline-element-title",
            children: experiance.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
            className: "vertical-timeline-element-subtitle",
            children: experiance.subtitle
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_component_description_Description__WEBPACK_IMPORTED_MODULE_6__["default"], {
            text: experiance.text
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 15
          }, this)]
        }, experiance.title, true, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 13
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Experience);

/***/ }),

/***/ "./src/pages/Landing.css":
/*!*******************************!*\
  !*** ./src/pages/Landing.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/pages/Landing.jsx":
/*!*******************************!*\
  !*** ./src/pages/Landing.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _component_medias_Medias__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../component/medias/Medias */ "./src/component/medias/Medias.jsx");
/* harmony import */ var _layout_row_Row__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../layout/row/Row */ "./src/layout/row/Row.jsx");
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Image */ "./src/Image.jsx");
/* harmony import */ var _component_description_Description__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../component/description/Description */ "./src/component/description/Description.jsx");
/* harmony import */ var _BasicPage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./BasicPage */ "./src/pages/BasicPage.jsx");
/* harmony import */ var _Landing_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Landing.css */ "./src/pages/Landing.css");
/* harmony import */ var _Landing_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_Landing_css__WEBPACK_IMPORTED_MODULE_8__);

var _jsxFileName = "/home/meddou/projects/perso/meddou.com/src/pages/Landing.jsx";









class Landing extends _BasicPage__WEBPACK_IMPORTED_MODULE_7__["default"] {
  // because i'm lazy :)
  static getAge() {
    const birthday = +new Date('1996-11-14');
    return (Date.now() - birthday) / 31557600000;
  }

  static isDay() {
    const date = new Date();
    const hours = date.getHours();
    return hours >= 6 && hours < 17;
  } // eslint-disable-next-line


  renderContent() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "landing-container",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "landing-background"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "info-container",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "main-text-container",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
            className: "first-text",
            children: [Landing.isDay() ? 'Bonjour' : 'Bonsoir', ", je suis Mehdi."]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
            children: "D\xE9veloppeur Freelance WEB / MOBILE."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            style: {
              marginTop: '8px'
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_component_description_Description__WEBPACK_IMPORTED_MODULE_6__["default"], {
              style: {
                fontSize: '1.75em',
                margin: '2em 0'
              },
              text: "Mes exp\xE9riences \xE0 travers une multitude de technologies m'ont permis d\u2019acqu\xE9rir une expertise des langages de d\xE9veloppement de site internet et d'application mobile.<br/>Je vous accompagne dans la r\xE9alisation de votre projet de sa conception \xE0 sa livraison."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_layout_row_Row__WEBPACK_IMPORTED_MODULE_4__["default"], {
            className: "media-container-row",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "link",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
                href: "/work",
                children: "Voir mes projets"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 50,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 49,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_component_medias_Medias__WEBPACK_IMPORTED_MODULE_3__["default"], {
              className: "bp-large"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        style: {
          alignSelf: 'center',
          zIndex: 2
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Image__WEBPACK_IMPORTED_MODULE_5__["default"], {
          src: "/images-webp/mehdi.png",
          className: "landing-avatar-image",
          alt: "Mehdi Meddour"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Landing);

/***/ }),

/***/ "./src/pages/MainScrollPage.css":
/*!**************************************!*\
  !*** ./src/pages/MainScrollPage.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/pages/MainScrollPage.jsx":
/*!**************************************!*\
  !*** ./src/pages/MainScrollPage.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Landing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Landing */ "./src/pages/Landing.jsx");
/* harmony import */ var _ProjectList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ProjectList */ "./src/pages/ProjectList.jsx");
/* harmony import */ var _Skill__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Skill */ "./src/pages/Skill.jsx");
/* harmony import */ var _Experience__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Experience */ "./src/pages/Experience.jsx");
/* harmony import */ var _component_Scroller__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../component/Scroller */ "./src/component/Scroller.jsx");
/* harmony import */ var _component_footer_Footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../component/footer/Footer */ "./src/component/footer/Footer.jsx");
/* harmony import */ var _Location__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Location */ "./src/Location.js");
/* harmony import */ var _MainScrollPage_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./MainScrollPage.css */ "./src/pages/MainScrollPage.css");
/* harmony import */ var _MainScrollPage_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_MainScrollPage_css__WEBPACK_IMPORTED_MODULE_10__);

var _jsxFileName = "/home/meddou/projects/perso/meddou.com/src/pages/MainScrollPage.jsx";











class MainScrollPage extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(props) {
    super(props);
    this.pageIds = _Location__WEBPACK_IMPORTED_MODULE_9__["default"].links.map(l => l.link);
    this.onScroll = this.onScroll.bind(this);
    this.pathname = _Location__WEBPACK_IMPORTED_MODULE_9__["default"].pathname(props.router);
  }

  componentWillUpdate() {
    this.pathname = _Location__WEBPACK_IMPORTED_MODULE_9__["default"].pathname(this.props.router);
  }

  onScroll(index) {
    const {
      router
    } = this.props;
    router.push(`/${this.pageIds[index]}`, undefined, {
      shallow: true
    });
  }

  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_component_Scroller__WEBPACK_IMPORTED_MODULE_7__["default"], {
      className: "main-scroller",
      onScroll: this.onScroll,
      index: this.pageIds.indexOf(this.pathname),
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        id: "scroll-home-container",
        className: "children",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Landing__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        id: "scroll-work-container",
        className: "children",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ProjectList__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        id: "scroll-skills-container",
        className: "children",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Skill__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        id: "scroll-experiences-container",
        className: "children",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Experience__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_component_footer_Footer__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, this);
  }

} // MainScrollPage.propTypes = {
//   history: PropTypes.objectOf(PropTypes.any).isRequired,
// }


/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(MainScrollPage));

/***/ }),

/***/ "./src/pages/ProjectList.css":
/*!***********************************!*\
  !*** ./src/pages/ProjectList.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/pages/ProjectList.jsx":
/*!***********************************!*\
  !*** ./src/pages/ProjectList.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Location__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Location */ "./src/Location.js");
/* harmony import */ var _data_projects_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data/projects.json */ "./src/data/projects.json");
var _data_projects_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/projects.json */ "./src/data/projects.json", 1);
/* harmony import */ var _component_title_Title__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../component/title/Title */ "./src/component/title/Title.jsx");
/* harmony import */ var _component_project_Project__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../component/project/Project */ "./src/component/project/Project.jsx");
/* harmony import */ var _component_project_ProjectOverlay__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../component/project/ProjectOverlay */ "./src/component/project/ProjectOverlay.jsx");
/* harmony import */ var _component_skill_Skill__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../component/skill/Skill */ "./src/component/skill/Skill.jsx");
/* harmony import */ var _layout_row_Row__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../layout/row/Row */ "./src/layout/row/Row.jsx");
/* harmony import */ var _layout_item_Item__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../layout/item/Item */ "./src/layout/item/Item.jsx");
/* harmony import */ var _BasicPage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./BasicPage */ "./src/pages/BasicPage.jsx");
/* harmony import */ var _services_Skill__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../services/Skill */ "./src/services/Skill.js");
/* harmony import */ var _BasicPage_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./BasicPage.css */ "./src/pages/BasicPage.css");
/* harmony import */ var _BasicPage_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_BasicPage_css__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _ProjectList_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ProjectList.css */ "./src/pages/ProjectList.css");
/* harmony import */ var _ProjectList_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_ProjectList_css__WEBPACK_IMPORTED_MODULE_14__);

var _jsxFileName = "/home/meddou/projects/perso/meddou.com/src/pages/ProjectList.jsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
















class ProjectListPage extends _BasicPage__WEBPACK_IMPORTED_MODULE_11__["default"] {
  constructor(props) {
    super(props);
    this.hasMoreSkill = false;
    this.projects = _data_projects_json__WEBPACK_IMPORTED_MODULE_4__.filter(p => p.isVisible !== false);
    this.skills = _services_Skill__WEBPACK_IMPORTED_MODULE_12__["default"].getFilterable();
    this.filters = [];
    this.filtersGroup = ['iOS', 'NodeJS', 'Angular', 'Laravel', 'MongoDB', 'C++'];
    this.state = {
      projects: this.projects.slice(0),
      skills: this.skills.slice(0),
      selectedProject: undefined
    };
  }

  addSkillFromQS() {
    const paramSkills = _Location__WEBPACK_IMPORTED_MODULE_3__["default"].qs(this.props.router).skill ? ProjectListPage.skillToArray(_Location__WEBPACK_IMPORTED_MODULE_3__["default"].qs(this.props.router).skill) : [];
    const newSkills = this.state.skills.slice(0);
    let paramSkillObj;

    const skillCmp = second => first => first.name === second;

    if (paramSkills && paramSkills.length > 0) {
      for (let i = 0; i < paramSkills.length; i += 1) {
        paramSkillObj = _services_Skill__WEBPACK_IMPORTED_MODULE_12__["default"].getFromName(paramSkills[i]);

        if (newSkills.findIndex(skillCmp(paramSkills[i])) === -1) {
          if (this.hasMoreSkill === false) {
            this.filtersGroup.unshift(paramSkills[i]);
            this.hasMoreSkill = true;
          }

          newSkills.unshift(paramSkillObj);
          this.setState({
            skills: newSkills
          });
        }
      }
    }
  }

  hasSkills(toFind) {
    for (let i = 0; i < toFind.length; i += 1) {
      if (this.filters.indexOf(toFind[i]) === -1) {
        return false;
      }
    }

    return true;
  }

  filterFromQS(needClearFilters = false) {
    const paramSkills = _Location__WEBPACK_IMPORTED_MODULE_3__["default"].qs(this.props.router).skill;

    if (paramSkills && !this.hasSkills(ProjectListPage.skillToArray(paramSkills))) {
      if (needClearFilters) {
        this.filters = [];
      }

      this.filterProjects(paramSkills);
    }
  }

  componentDidMount() {
    this.addSkillFromQS();
    this.filterFromQS();
  }

  componentDidUpdate() {
    this.addSkillFromQS();
    this.filterFromQS(true);
  }

  static fmtSkills(skill) {
    if (skill) {
      if (Array.isArray(skill)) {
        return skill;
      }

      return [skill];
    }

    return [];
  }

  static skillToArray(skill) {
    const skills = this.fmtSkills(skill);
    return skills.map(mSkill => decodeURIComponent(mSkill));
  }

  filterProjects(skill, needToUpdateUrl = false) {
    const filtered = [];
    const skills = ProjectListPage.skillToArray(skill);
    let idx;
    let isMatching = true;

    for (let k = 0; k < skills.length; k += 1) {
      idx = this.filters.indexOf(skills[k]);

      if (skills[k] && idx === -1) {
        this.filters.push(skills[k]);
      } else if (skills[k]) {
        this.filters.splice(idx, 1);
      }
    }

    for (let i = 0; i < this.projects.length; i += 1) {
      isMatching = true;

      for (let j = 0; j < this.filters.length; j += 1) {
        if (this.projects[i].languages.indexOf(this.filters[j]) === -1) {
          isMatching = false;
          break;
        }
      }

      if (isMatching) {
        filtered.push(this.projects[i]);
      }
    }

    if (needToUpdateUrl) {
      this.props.router.replace(`/work?${this.filters.map(f => `skill=${encodeURIComponent(f)}`).join('&')}`);
    }

    this.setState({
      projects: filtered
    });
  }

  getSkillGrouped() {
    const grouped = this.state.skills.slice(0);
    const groups = [{
      group: [],
      id: -1
    }];

    for (let i = 0; i < grouped.length; i += 1) {
      groups[groups.length - 1].group.push(grouped[i]);

      if (this.filtersGroup.indexOf(grouped[i].name) !== -1) {
        groups.push({
          group: [],
          id: groups.length
        });
      }
    }

    return groups;
  }

  goToProject(project, e) {
    e.preventDefault();
    this.setState({
      selectedProject: project
    }, () => {
      setTimeout(() => {
        window.projectListToProjectTransition = true;
        this.props.router.push(`/work/${project.name}`, undefined, {
          shallow: true
        });
      }, 500);
    });
  }

  clearFilters(e) {
    e.preventDefault();
    this.props.router.replace('/work');
    this.filters = [];
    this.filterProjects(undefined);
  }

  renderContent() {
    const fakeProjects = new Array(10).map((v, idx) => _objectSpread(_objectSpread({}, this.projects[0]), {}, {
      name: `fake|${idx}`
    }));
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "sub-basic-page project-list-container",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "project-background"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 191,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        style: {
          paddingTop: '64px'
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_component_title_Title__WEBPACK_IMPORTED_MODULE_5__["default"], {
          text: "Mes projets",
          noMargin: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 194,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 193,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_layout_row_Row__WEBPACK_IMPORTED_MODULE_9__["default"], {
        style: {
          marginTop: '16px'
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_layout_row_Row__WEBPACK_IMPORTED_MODULE_9__["default"], {
          className: "filter-container bp-large",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            type: "submit",
            className: "filter-text",
            style: {
              cursor: `${this.filters.length > 0 ? 'pointer' : 'normal'}`
            },
            onClick: this.clearFilters.bind(this),
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "subTitle",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                style: {
                  visibility: this.filters.length > 0 ? 'visible' : 'hidden'
                },
                children: "(X) "
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 200,
                columnNumber: 17
              }, this), "FILTRES"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 199,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 198,
            columnNumber: 13
          }, this), this.getSkillGrouped().map(group => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_layout_row_Row__WEBPACK_IMPORTED_MODULE_9__["default"], {
            className: "filter-row",
            children: group.group.map(skill => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_layout_item_Item__WEBPACK_IMPORTED_MODULE_10__["default"], {
              onClick: () => this.filterProjects(skill.name, true),
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_component_skill_Skill__WEBPACK_IMPORTED_MODULE_8__["default"], {
                name: skill.name,
                backgroundImage: skill.backgroundImage,
                backgroundColor: skill.backgroundColor,
                logo: skill.logo,
                experience: skill.experience,
                isSelected: this.filters.indexOf(skill.name) !== -1,
                isLittle: true
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 208,
                columnNumber: 21
              }, this)
            }, skill.name, false, {
              fileName: _jsxFileName,
              lineNumber: 207,
              columnNumber: 19
            }, this))
          }, group.id, false, {
            fileName: _jsxFileName,
            lineNumber: 205,
            columnNumber: 15
          }, this))]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 197,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_layout_row_Row__WEBPACK_IMPORTED_MODULE_9__["default"], {
          center: true,
          className: "project-list-container",
          children: [this.state.projects.map(project => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            type: "submit",
            onClick: e => this.goToProject(project, e),
            className: "project-child-container",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_layout_item_Item__WEBPACK_IMPORTED_MODULE_10__["default"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_component_project_Project__WEBPACK_IMPORTED_MODULE_6__["default"], {
                backgroundColor: project.backgroundColor,
                backgroundImage: project.backgroundImage,
                name: project.name,
                logo: project.logo
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 227,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 226,
              columnNumber: 17
            }, this)
          }, project.name, false, {
            fileName: _jsxFileName,
            lineNumber: 225,
            columnNumber: 15
          }, this)), this.state.projects.length === 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "no-project-text-container",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              role: "img",
              "aria-label": "Pas de projet",
              className: "emoji-container",
              children: "\uD83D\uDE25"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 238,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("sub", {
              children: "Aucun projet"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 239,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 237,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 223,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 196,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_component_project_ProjectOverlay__WEBPACK_IMPORTED_MODULE_7__["default"], {
        inTransition: true,
        isVisible: !!this.state.selectedProject,
        backgroundColor: this.state.selectedProject ? this.state.selectedProject.backgroundColor : undefined,
        logo: this.state.selectedProject ? this.state.selectedProject.logo : undefined
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 244,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 7
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(ProjectListPage));

/***/ }),

/***/ "./src/pages/Skill.jsx":
/*!*****************************!*\
  !*** ./src/pages/Skill.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _component_title_Title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../component/title/Title */ "./src/component/title/Title.jsx");
/* harmony import */ var _component_skill_Skill__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../component/skill/Skill */ "./src/component/skill/Skill.jsx");
/* harmony import */ var _layout_row_Row__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../layout/row/Row */ "./src/layout/row/Row.jsx");
/* harmony import */ var _layout_item_Item__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../layout/item/Item */ "./src/layout/item/Item.jsx");
/* harmony import */ var _BasicPage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./BasicPage */ "./src/pages/BasicPage.jsx");
/* harmony import */ var _services_Skill__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/Skill */ "./src/services/Skill.js");
/* harmony import */ var _WindowSize__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../WindowSize */ "./src/WindowSize.js");
/* harmony import */ var _SkillPage_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./SkillPage.css */ "./src/pages/SkillPage.css");
/* harmony import */ var _SkillPage_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_SkillPage_css__WEBPACK_IMPORTED_MODULE_11__);

var _jsxFileName = "/home/meddou/projects/perso/meddou.com/src/pages/Skill.jsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













function FakeContainer({
  children
}) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 5
  }, this);
}

FakeContainer.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node.isRequired).isRequired
};

class SkillPage extends _BasicPage__WEBPACK_IMPORTED_MODULE_8__["default"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "Container", FakeContainer);

    this.skills = _services_Skill__WEBPACK_IMPORTED_MODULE_9__["default"].getShowable();
    this.fakeSkills = new Array(10).map((v, idx) => _objectSpread(_objectSpread({}, this.skills[0]), {}, {
      name: `fake|${idx}`
    }));
  }

  componentDidMount() {
    this.Container = _WindowSize__WEBPACK_IMPORTED_MODULE_10__["default"].isLarge() ? next_link__WEBPACK_IMPORTED_MODULE_3___default.a : FakeContainer;
  }

  renderContent() {
    const Container = this.Container;
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "sub-basic-page",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "skill-background"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        style: {
          paddingTop: '64px'
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_component_title_Title__WEBPACK_IMPORTED_MODULE_4__["default"], {
          text: "Mes skills",
          noMargin: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "subtext-container",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "experiance-preview"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          style: {
            fontSize: '22px',
            textTransform: 'uppercase'
          },
          children: "Ann\xE9es d'exp\xE9rience"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_layout_row_Row__WEBPACK_IMPORTED_MODULE_6__["default"], {
        style: {
          marginTop: '64px'
        },
        center: true,
        children: [this.skills.map(skill => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_layout_item_Item__WEBPACK_IMPORTED_MODULE_7__["default"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Container, {
            to: `/work?skill=${encodeURIComponent(skill.name)}`,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_component_skill_Skill__WEBPACK_IMPORTED_MODULE_5__["default"], {
              name: skill.name,
              backgroundColor: skill.backgroundColor,
              backgroundImage: skill.backgroundImage,
              experience: skill.experience,
              logo: skill.logo,
              showExperience: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 15
          }, this)
        }, skill.name, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 13
        }, this)), this.fakeSkills.map(skill => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_layout_item_Item__WEBPACK_IMPORTED_MODULE_7__["default"], {
          style: {
            visibility: 'hidden',
            height: '0px'
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
            href: `/work?skill=${encodeURIComponent(skill.name)}`,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_component_skill_Skill__WEBPACK_IMPORTED_MODULE_5__["default"], {
              name: skill.name,
              backgroundColor: skill.backgroundColor,
              backgroundImage: skill.backgroundImage,
              experience: skill.experience,
              logo: skill.logo,
              showExperience: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 79,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 15
          }, this)
        }, skill.name, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 13
        }, this))]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (SkillPage);

/***/ }),

/***/ "./src/pages/SkillPage.css":
/*!*********************************!*\
  !*** ./src/pages/SkillPage.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/polyfill.js":
/*!*************************!*\
  !*** ./src/polyfill.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! smoothscroll-polyfill */ "smoothscroll-polyfill");
/* harmony import */ var smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var intersection_observer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! intersection-observer */ "intersection-observer");
/* harmony import */ var intersection_observer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(intersection_observer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js */ "core-js");
/* harmony import */ var core_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js__WEBPACK_IMPORTED_MODULE_2__);




const polyfill = () => smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_0___default.a.polyfill();

/* harmony default export */ __webpack_exports__["default"] = (polyfill);

/***/ }),

/***/ "./src/services/Experiance.js":
/*!************************************!*\
  !*** ./src/services/Experiance.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data_experiances_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/experiances.json */ "./src/data/experiances.json");
var _data_experiances_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/experiances.json */ "./src/data/experiances.json", 1);


class ExperienceService {
  static get() {
    return _data_experiances_json__WEBPACK_IMPORTED_MODULE_0__;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (ExperienceService);

/***/ }),

/***/ "./src/services/Skill.js":
/*!*******************************!*\
  !*** ./src/services/Skill.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data_skills_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/skills.json */ "./src/data/skills.json");
var _data_skills_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/skills.json */ "./src/data/skills.json", 1);


class SkillService {
  static get() {
    return _data_skills_json__WEBPACK_IMPORTED_MODULE_0__;
  }

  static getShowable() {
    return _data_skills_json__WEBPACK_IMPORTED_MODULE_0__.filter(skill => skill.isShowable !== false);
  }

  static getFilterable() {
    return _data_skills_json__WEBPACK_IMPORTED_MODULE_0__.filter(skill => skill.isFilterable !== false);
  }

  static getFromName(name) {
    return _data_skills_json__WEBPACK_IMPORTED_MODULE_0__.find(skill => skill.name === name);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (SkillService);

/***/ }),

/***/ "core-js":
/*!**************************!*\
  !*** external "core-js" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js");

/***/ }),

/***/ "intersection-observer":
/*!****************************************!*\
  !*** external "intersection-observer" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("intersection-observer");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "query-string":
/*!*******************************!*\
  !*** external "query-string" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("query-string");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-vertical-timeline-component":
/*!****************************************************!*\
  !*** external "react-vertical-timeline-component" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-vertical-timeline-component");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "smoothscroll-polyfill":
/*!****************************************!*\
  !*** external "smoothscroll-polyfill" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("smoothscroll-polyfill");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9saW5rLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JlcXVlc3QtaWRsZS1jYWxsYmFjay50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JvdXRlLWxvYWRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3VzZS1pbnRlcnNlY3Rpb24udHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvd2l0aC1yb3V0ZXIudHN4Iiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9taXR0LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9mb3JtYXQtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3F1ZXJ5c3RyaW5nLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMtbm9vcC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0ltYWdlLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvTG9jYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1dpbmRvd1NpemUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC9NZXRhSGVhZGVyLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50L1Byb2dyZXNzUmluZy5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC9TY3JvbGxlci5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC9kZXNjcmlwdGlvbi9EZXNjcmlwdGlvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC9mb290ZXIvRm9vdGVyLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50L2hlYWRlci9IZWFkZXIuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnQvaWNvbi9FbWFpbC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC9pY29uL0dpdGh1Yi5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC9pY29uL0xpbmtlZGluLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50L2ljb24vTWVkaXVtLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50L21lZGlhcy9NZWRpYXMuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnQvcHJvamVjdC9Qcm9qZWN0LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50L3Byb2plY3QvUHJvamVjdE92ZXJsYXkuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnQvc2tpbGwvU2tpbGwuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnQvdGl0bGUvVGl0bGUuanN4Iiwid2VicGFjazovLy8uL3NyYy9sYXlvdXQvaXRlbS9JdGVtLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0L3Jvdy9Sb3cuanN4Iiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9CYXNpY1BhZ2UuanN4Iiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9FeHBlcmllbmNlLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvTGFuZGluZy5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL01haW5TY3JvbGxQYWdlLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvUHJvamVjdExpc3QuanN4Iiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9Ta2lsbC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BvbHlmaWxsLmpzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9FeHBlcmlhbmNlLmpzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9Ta2lsbC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaW50ZXJzZWN0aW9uLW9ic2VydmVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicXVlcnktc3RyaW5nXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXZlcnRpY2FsLXRpbWVsaW5lLWNvbXBvbmVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInNtb290aHNjcm9sbC1wb2x5ZmlsbFwiIl0sIm5hbWVzIjpbInByZWZldGNoZWQiLCJyb3V0ZXIiLCJlcnIiLCJjdXJMb2NhbGUiLCJvcHRpb25zIiwiaHJlZiIsImV2ZW50IiwidGFyZ2V0IiwiZSIsIm5vZGVOYW1lIiwiaXNNb2RpZmllZEV2ZW50Iiwic2Nyb2xsIiwiYXMiLCJyZXBsYWNlIiwic3VjY2VzcyIsImRvY3VtZW50IiwiYXJncyIsImtleSIsImV4cGVjdGVkIiwiYWN0dWFsIiwicmVxdWlyZWRQcm9wc0d1YXJkIiwicmVxdWlyZWRQcm9wcyIsIk9iamVjdCIsInByb3BzIiwiY3JlYXRlUHJvcEVycm9yIiwiXyIsIm9wdGlvbmFsUHJvcHNHdWFyZCIsInNoYWxsb3ciLCJwYXNzSHJlZiIsInByZWZldGNoIiwibG9jYWxlIiwib3B0aW9uYWxQcm9wcyIsInZhbFR5cGUiLCJoYXNXYXJuZWQiLCJSZWFjdCIsImNvbnNvbGUiLCJwIiwicGF0aG5hbWUiLCJyZXNvbHZlZEFzIiwiY2hpbGRyZW4iLCJjaGlsZCIsIkNoaWxkcmVuIiwiY2hpbGRSZWYiLCJyb290TWFyZ2luIiwic2V0UmVmIiwiZWwiLCJzZXRJbnRlcnNlY3Rpb25SZWYiLCJzaG91bGRQcmVmZXRjaCIsImlzVmlzaWJsZSIsImlzUHJlZmV0Y2hlZCIsImNoaWxkUHJvcHMiLCJyZWYiLCJvbkNsaWNrIiwibGlua0NsaWNrZWQiLCJwcmlvcml0eSIsImxvY2FsZURvbWFpbiIsIkxpbmsiLCJwYXRoIiwibm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2giLCJwcm9jZXNzIiwicmVxdWVzdElkbGVDYWxsYmFjayIsInNlbGYiLCJzdGFydCIsIkRhdGUiLCJzZXRUaW1lb3V0IiwiY2IiLCJkaWRUaW1lb3V0IiwidGltZVJlbWFpbmluZyIsIk1hdGgiLCJNU19NQVhfSURMRV9ERUxBWSIsImVudHJ5IiwibWFwIiwiUHJvbWlzZSIsInByb20iLCJyZXNvbHZlIiwicmVzb2x2ZXIiLCJmdXR1cmUiLCJnZW5lcmF0b3IiLCJ2YWx1ZSIsImxpbmsiLCJ3aW5kb3ciLCJjYW5QcmVmZXRjaCIsImhhc1ByZWZldGNoIiwicmVzIiwiQVNTRVRfTE9BRF9FUlJPUiIsIlN5bWJvbCIsInNjcmlwdCIsInJlamVjdCIsIm1hcmtBc3NldEVycm9yIiwic3JjIiwib25CdWlsZE1hbmlmZXN0IiwiaWRsZVRpbWVvdXQiLCJzY3JpcHRzIiwiYXNzZXRQcmVmaXgiLCJlbmNvZGVVUkkiLCJjc3MiLCJnZXRDbGllbnRCdWlsZE1hbmlmZXN0IiwibWFuaWZlc3QiLCJyb3V0ZSIsImFsbEZpbGVzIiwidiIsImVudHJ5cG9pbnRzIiwibG9hZGVkU2NyaXB0cyIsInN0eWxlU2hlZXRzIiwicm91dGVzIiwiYXBwZW5kU2NyaXB0IiwiZmV0Y2giLCJ0ZXh0IiwiY29udGVudCIsIndoZW5FbnRyeXBvaW50Iiwid2l0aEZ1dHVyZSIsIm9uRW50cnlwb2ludCIsImZuIiwiZXhwb3J0cyIsImNvbXBvbmVudCIsImVycm9yIiwiaW5wdXQiLCJvbGQiLCJsb2FkUm91dGUiLCJnZXRGaWxlc0ZvclJvdXRlIiwiZW50cnlwb2ludCIsImNuIiwibmF2aWdhdG9yIiwib3V0cHV0IiwicHJlZmV0Y2hWaWFEb20iLCJjcmVhdGVSb3V0ZUxvYWRlciIsInNpbmdsZXRvblJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJ1cmxQcm9wZXJ0eUZpZWxkcyIsInJvdXRlckV2ZW50cyIsImNvcmVNZXRob2RGaWVsZHMiLCJnZXQiLCJSb3V0ZXIiLCJmaWVsZCIsImdldFJvdXRlciIsImV2ZW50RmllbGQiLCJfc2luZ2xldG9uUm91dGVyIiwibWVzc2FnZSIsInN0YWNrIiwiUm91dGVyQ29udGV4dCIsImNyZWF0ZVJvdXRlciIsIl9yb3V0ZXIiLCJpbnN0YW5jZSIsIkFycmF5IiwiaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJpc0Rpc2FibGVkIiwiZGlzYWJsZWQiLCJ1bm9ic2VydmUiLCJvYnNlcnZlIiwic2V0VmlzaWJsZSIsImNyZWF0ZU9ic2VydmVyIiwiZWxlbWVudHMiLCJvYnNlcnZlciIsIm9ic2VydmVycyIsImlkIiwiZW50cmllcyIsImNhbGxiYWNrIiwiQ29tcG9zZWRDb21wb25lbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJXaXRoUm91dGVyV3JhcHBlciIsIm5hbWUiLCJwYXRobmFtZVBhcnRzIiwibG9jYWxlcyIsImRldGVjdGVkTG9jYWxlIiwiYWxsIiwib24iLCJvZmYiLCJlbWl0IiwiaGFuZGxlciIsImJhc2VQYXRoIiwiY2FuY2VsbGVkIiwicHJlZml4IiwicGF0aE5vUXVlcnlIYXNoIiwicXVlcnlJbmRleCIsImhhc2hJbmRleCIsImFkZFBhdGhQcmVmaXgiLCJ1cmwiLCJsb2NhdGlvbk9yaWdpbiIsInJlc29sdmVkIiwiaGFzQmFzZVBhdGgiLCJpbnRlcnBvbGF0ZWRSb3V0ZSIsImR5bmFtaWNSZWdleCIsImR5bmFtaWNHcm91cHMiLCJkeW5hbWljTWF0Y2hlcyIsImFzUGF0aG5hbWUiLCJwYXJhbXMiLCJwYXJhbSIsInJlcGxhY2VkIiwicmVwZWF0Iiwib3B0aW9uYWwiLCJzZWdtZW50IiwiZW5jb2RlVVJJQ29tcG9uZW50IiwicmVzdWx0IiwiZmlsdGVyZWRRdWVyeSIsInF1ZXJ5IiwiYmFzZSIsInVybEFzU3RyaW5nIiwiaXNMb2NhbFVSTCIsInJlc29sdmVBcyIsImZpbmFsVXJsIiwiaW50ZXJwb2xhdGVkQXMiLCJpbnRlcnBvbGF0ZUFzIiwiaGFzaCIsIm9taXRQYXJtc0Zyb21RdWVyeSIsInJlc29sdmVkSHJlZiIsIm9yaWdpbiIsInJlc29sdmVIcmVmIiwiaHJlZkhhZE9yaWdpbiIsImFzSGFkT3JpZ2luIiwic3RyaXBPcmlnaW4iLCJwcmVwYXJlZFVybCIsImFkZEJhc2VQYXRoIiwicHJlcGFyZWRBcyIsIm1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uIiwiU1NHX0RBVEFfTk9UX0ZPVU5EIiwiY3JlZGVudGlhbHMiLCJhdHRlbXB0cyIsImZldGNoUmV0cnkiLCJkYXRhIiwibm90Rm91bmQiLCJpc1NlcnZlclJlbmRlciIsImNvbnN0cnVjdG9yIiwiYXNQYXRoIiwiY29tcG9uZW50cyIsInNkYyIsInN1YiIsImNsYyIsInBhZ2VMb2FkZXIiLCJfYnBzIiwiZXZlbnRzIiwiX3dyYXBBcHAiLCJpc1NzciIsImlzRmFsbGJhY2siLCJfaW5GbGlnaHRSb3V0ZSIsIl9zaGFsbG93IiwiZGVmYXVsdExvY2FsZSIsImRvbWFpbkxvY2FsZXMiLCJpc1JlYWR5IiwiX2lkeCIsInN0YXRlIiwiaW5pdGlhbCIsIl9fTl9TU0ciLCJpbml0aWFsUHJvcHMiLCJfX05fU1NQIiwiQ29tcG9uZW50IiwiYXV0b0V4cG9ydER5bmFtaWMiLCJyZWxvYWQiLCJiYWNrIiwicHVzaCIsInByZXBhcmVVcmxBcyIsImxvY2FsZUNoYW5nZSIsIlNUIiwicGVyZm9ybWFuY2UiLCJyb3V0ZVByb3BzIiwiYWRkTG9jYWxlIiwiZGVsQmFzZVBhdGgiLCJjbGVhbmVkQXMiLCJkZWxMb2NhbGUiLCJwYXJzZWQiLCJwYWdlcyIsIl9fcmV3cml0ZXMiLCJtZXRob2QiLCJwYXJzZWRBcyIsInJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwic2hvdWxkSW50ZXJwb2xhdGUiLCJtaXNzaW5nUGFyYW1zIiwicm91dGVJbmZvIiwiZGVzdGluYXRpb24iLCJwYXJzZWRIcmVmIiwibm90Rm91bmRSb3V0ZSIsImFwcENvbXAiLCJpc1ZhbGlkU2hhbGxvd1JvdXRlIiwiZm9yY2VkU2Nyb2xsIiwieCIsInkiLCJjaGFuZ2VTdGF0ZSIsIl9fTiIsImlkeCIsImJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IiLCJwYWdlIiwiZXhpc3RpbmdSb3V0ZUluZm8iLCJjYWNoZWRSb3V0ZUluZm8iLCJyZXF1aXJlIiwiaXNWYWxpZEVsZW1lbnRUeXBlIiwiZGF0YUhyZWYiLCJzZXQiLCJiZWZvcmVQb3BTdGF0ZSIsIm9ubHlBSGFzaENoYW5nZSIsIm5ld0hhc2giLCJvbGRVcmxOb0hhc2giLCJvbGRIYXNoIiwic2Nyb2xsVG9IYXNoIiwiaWRFbCIsIm5hbWVFbCIsInVybElzTmV3IiwiX3Jlc29sdmVIcmVmIiwiYXBwbHlCYXNlUGF0aCIsImNsZWFuUGF0aG5hbWUiLCJpc1NzZyIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsIl9nZXREYXRhIiwiX2dldFN0YXRpY0RhdGEiLCJmZXRjaE5leHREYXRhIiwiX2dldFNlcnZlckRhdGEiLCJBcHBUcmVlIiwiY3R4IiwiYWJvcnRDb21wb25lbnRMb2FkIiwibm90aWZ5Iiwic2xhc2hlZFByb3RvY29scyIsInByb3RvY29sIiwidXJsT2JqIiwiaG9zdCIsImF1dGgiLCJob3N0bmFtZSIsIlN0cmluZyIsInF1ZXJ5c3RyaW5nIiwic2VhcmNoIiwiVEVTVF9ST1VURSIsImdsb2JhbEJhc2UiLCJyZXNvbHZlZEJhc2UiLCJzZWFyY2hQYXJhbXMiLCJpc05hTiIsIml0ZW0iLCJzdHJpbmdpZnlVcmxRdWVyeVBhcmFtIiwic2VhcmNoUGFyYW1zTGlzdCIsInJlIiwiZGVjb2RlIiwiZGVjb2RlVVJJQ29tcG9uZW50Iiwic2x1Z05hbWUiLCJnIiwiZ3JvdXBzIiwibSIsInN0ciIsInNlZ21lbnRzIiwibm9ybWFsaXplZFJvdXRlIiwiZ3JvdXBJbmRleCIsInBhcmFtZXRlcml6ZWRSb3V0ZSIsInBhcnNlUGFyYW1ldGVyIiwicG9zIiwiZXNjYXBlUmVnZXgiLCJyb3V0ZUtleUNoYXJDb2RlIiwicm91dGVLZXlDaGFyTGVuZ3RoIiwiZ2V0U2FmZVJvdXRlS2V5Iiwicm91dGVLZXkiLCJpIiwicm91dGVLZXlzIiwibmFtZWRQYXJhbWV0ZXJpemVkUm91dGUiLCJjbGVhbmVkS2V5IiwiaW52YWxpZEtleSIsInBhcnNlSW50IiwibmFtZWRSZWdleCIsInVzZWQiLCJwb3J0IiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJBcHAiLCJnZXREaXNwbGF5TmFtZSIsInBhZ2VQcm9wcyIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJpc1Jlc1NlbnQiLCJ1cmxPYmplY3RLZXlzIiwiU1AiLCJJbmRleCIsInVzZUVmZmVjdCIsInBvbHlmaWxsIiwiSW1hZ2UiLCJhbHQiLCJjbGFzc05hbWUiLCJMb2NhdGlvbiIsInFzIiwicGFyc2UiLCJsb2NhdGlvbiIsImxvZyIsImxpbmtzIiwibGFiZWwiLCJXaW5kb3dTaXplIiwiZ2V0V2lkdGgiLCJpbm5lcldpZHRoIiwiZG9jdW1lbnRFbGVtZW50IiwiY2xpZW50V2lkdGgiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImlzTGFyZ2UiLCJjZWlsIiwiaXNTYWZhcmkiLCJ0ZXN0IiwiSFRNTEVsZW1lbnQiLCJzYWZhcmkiLCJwdXNoTm90aWZpY2F0aW9uIiwidG9TdHJpbmciLCJNZXRhSGVhZGVyIiwiY29tcG9uZW50RGlkTW91bnQiLCJkYXRhTGF5ZXIiLCJndGFnIiwiYXJndW1lbnRzIiwicmVuZGVyIiwiUHJvZ3Jlc3NSaW5nIiwic2lkZSIsImNpcmN1bWZlcmVuY2UiLCJzdHJva2UiLCJwcm9ncmVzcyIsInN0cm9rZURhc2hvZmZzZXQiLCJzdHJva2VDb2xvciIsIm92ZXJmbG93IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwibnVtYmVyIiwiaXNSZXF1aXJlZCIsIlNjcm9sbGVyIiwiY29udGFpbmVyUmVmIiwiY3JlYXRlUmVmIiwic2VjdGlvblJlZnMiLCJsYXN0U2Nyb2xsVG9wIiwiaXNTY3JvbGxpbmciLCJjYW5TY3JvbGwiLCJzY3JvbGxUaW1lb3V0IiwidW5kZWZpbmVkIiwic2Nyb2xsVGltZXIiLCJjYW5TY3JvbGxUaW1lb3V0Iiwic2VjdGlvbnMiLCJpbmRleCIsIm5leHRJbmRleCIsInNjcm9sbFRpbWVyRngiLCJiaW5kIiwiY29udGFpbmVyIiwic2Nyb2xsVG9FbGVtZW50IiwiY3VycmVudCIsImJpbmRMaXN0ZW5lciIsImNvbXBvbmVudERpZFVwZGF0ZSIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwidW5iaW5kTGlzdGVuZXIiLCJjbGVhclRpbWVvdXQiLCJvblNjcm9sbCIsInNjcm9sbERpcmVjdGlvbkNvZWZmIiwiZ2V0U2Nyb2xsRGlyZWN0aW9uIiwibGVuZ3RoIiwidGltZVN0YW1wIiwibmV4dEVsZW1lbnQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0b3AiLCJoZWlnaHQiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsIm5vdGlmeU9uU2Nyb2xsIiwiZ2V0Q29udGFpbmVyQm91bmRpbmciLCJnZXRDb250YWluZXJTY3JvbGxUb3AiLCJzY3JvbGxUb3AiLCJwYWdlWU9mZnNldCIsInN0IiwicmV0IiwiZWxlbWVudCIsImlzU21vb3RoIiwiZWxlbWVudFJlY3QiLCJzY3JvbGxUbyIsImJlaGF2aW9yIiwibGVmdCIsIm9sZEluZGV4IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJqb2luIiwiYXJyYXlPZiIsIm5vZGUiLCJmdW5jIiwiRGVzY3JpcHRpb24iLCJub01hcmdpbiIsInN0eWxlIiwiZVRleHQiLCJjbGFzc2VzIiwiX19odG1sIiwic3RyaW5nIiwiYm9vbCIsIm9iamVjdE9mIiwiYW55IiwiRm9vdGVyIiwib25Qcm9qZWN0Q2xpY2siLCJldmVudF9jYXRlZ29yeSIsIndpZHRoIiwiSGVhZGVyIiwiaXNDb2xsYXBzZWQiLCJjb2xsYXBzZUlmVHJ1ZSIsImNvbGxhcHNlIiwidmlzaWJsZUlkIiwib25MaW5rQ2xpY2siLCJzZXRTdGF0ZSIsImNvbXBvbmVudFdpbGxVcGRhdGUiLCJ3aXRoUm91dGVyIiwiRW1haWwiLCJHaXRodWIiLCJMaW5rZWRpbiIsIk1lZGl1bSIsIk1lZGlhcyIsIm1hcmdpbkxlZnQiLCJQcm9qZWN0IiwiaXNXaGl0ZSIsImMiLCJyZ2IiLCJyIiwiYiIsImx1bWEiLCJiYWNrZ3JvdW5kQ29sb3IiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJsb2dvIiwiaXNIb3ZlcmFibGUiLCJmdWxsU2l6ZSIsInNsaWNlIiwiY29sb3IiLCJQcm9qZWN0T3ZlcmxheSIsImluVHJhbnNpdGlvbiIsIm91dFRyYW5zaXRpb24iLCJTa2lsbCIsImxhcmdlU2lkZSIsImZsb29yIiwic21hbGxTaWRlIiwibGFyZ2VTdHJva2UiLCJnZXRTdHJva2UiLCJzbWFsbFN0cm9rZSIsImNhbGNFeHBlcmllbmNlU2lkZSIsImlzTGl0dGxlIiwic2hvd0V4cGVyaWVuY2UiLCJpc1NlbGVjdGVkIiwiZXhwZXJpZW5jZSIsInBvc2l0aW9uIiwicmlnaHQiLCJUaXRsZSIsIm15U3R5bGUiLCJJdGVtIiwiUm93Iiwic3BhY2VBcm91bmRNb2IiLCJub1dyYXAiLCJjZW50ZXIiLCJjdXN0b21SZWYiLCJCYXNpY1BhZ2UiLCJyZW5kZXJDb250ZW50IiwiRXhwZXJpZW5jZSIsImV4cGVyaWFuY2VzIiwiRXhwZXJpYW5jZVNlcnZpY2UiLCJwYWRkaW5nQm90dG9tIiwicGFkZGluZ1RvcCIsImV4cGVyaWFuY2UiLCJkYXRlIiwicHJvamVjdFVybCIsImJhY2tncm91bmQiLCJ0aXRsZSIsInN1YnRpdGxlIiwiTGFuZGluZyIsImdldEFnZSIsImJpcnRoZGF5Iiwibm93IiwiaXNEYXkiLCJob3VycyIsImdldEhvdXJzIiwibWFyZ2luVG9wIiwiZm9udFNpemUiLCJtYXJnaW4iLCJhbGlnblNlbGYiLCJ6SW5kZXgiLCJNYWluU2Nyb2xsUGFnZSIsInBhZ2VJZHMiLCJsIiwiaW5kZXhPZiIsIlByb2plY3RMaXN0UGFnZSIsImhhc01vcmVTa2lsbCIsInByb2plY3RzIiwiUHJvamVjdHMiLCJmaWx0ZXIiLCJza2lsbHMiLCJTa2lsbFNlcnZpY2UiLCJnZXRGaWx0ZXJhYmxlIiwiZmlsdGVycyIsImZpbHRlcnNHcm91cCIsInNlbGVjdGVkUHJvamVjdCIsImFkZFNraWxsRnJvbVFTIiwicGFyYW1Ta2lsbHMiLCJza2lsbCIsInNraWxsVG9BcnJheSIsIm5ld1NraWxscyIsInBhcmFtU2tpbGxPYmoiLCJza2lsbENtcCIsInNlY29uZCIsImZpcnN0IiwiZ2V0RnJvbU5hbWUiLCJmaW5kSW5kZXgiLCJ1bnNoaWZ0IiwiaGFzU2tpbGxzIiwidG9GaW5kIiwiZmlsdGVyRnJvbVFTIiwibmVlZENsZWFyRmlsdGVycyIsImZpbHRlclByb2plY3RzIiwiZm10U2tpbGxzIiwiaXNBcnJheSIsIm1Ta2lsbCIsIm5lZWRUb1VwZGF0ZVVybCIsImZpbHRlcmVkIiwiaXNNYXRjaGluZyIsImsiLCJzcGxpY2UiLCJqIiwibGFuZ3VhZ2VzIiwiZiIsImdldFNraWxsR3JvdXBlZCIsImdyb3VwZWQiLCJncm91cCIsImdvVG9Qcm9qZWN0IiwicHJvamVjdCIsInByb2plY3RMaXN0VG9Qcm9qZWN0VHJhbnNpdGlvbiIsImNsZWFyRmlsdGVycyIsImZha2VQcm9qZWN0cyIsImN1cnNvciIsInZpc2liaWxpdHkiLCJGYWtlQ29udGFpbmVyIiwiU2tpbGxQYWdlIiwiZ2V0U2hvd2FibGUiLCJmYWtlU2tpbGxzIiwiQ29udGFpbmVyIiwidGV4dFRyYW5zZm9ybSIsInNtb290aHNjcm9sbCIsIkV4cGVyaWVuY2VTZXJ2aWNlIiwiZXhw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SUFBdEMsQ0FBUDtBQUNEOztBQWZnQjs7QUFrQkpzWiwyRUFBZixFOzs7Ozs7Ozs7OztBQ3BCQSxvQzs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSw4RDs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSxrRCIsImZpbGUiOiJwYWdlcy9bcGFnZV0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL1twYWdlXS5qc1wiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTsiLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gIGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDtcbiAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuICBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gICAgcmV0dXJuIGNhY2hlO1xuICB9O1xuXG4gIHJldHVybiBjYWNoZTtcbn1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XG4gIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7XG5cbiAgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7XG4gICAgcmV0dXJuIGNhY2hlLmdldChvYmopO1xuICB9XG5cbiAgdmFyIG5ld09iaiA9IHt9O1xuICB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDtcblxuICAgICAgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO1xuXG4gIGlmIChjYWNoZSkge1xuICAgIGNhY2hlLnNldChvYmosIG5ld09iaik7XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJpbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4sIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgYWRkQmFzZVBhdGgsXG4gIGFkZExvY2FsZSxcbiAgZ2V0RG9tYWluTG9jYWxlLFxuICBpc0xvY2FsVVJMLFxuICBOZXh0Um91dGVyLFxuICBQcmVmZXRjaE9wdGlvbnMsXG4gIHJlc29sdmVIcmVmLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuaW1wb3J0IHsgdXNlSW50ZXJzZWN0aW9uIH0gZnJvbSAnLi91c2UtaW50ZXJzZWN0aW9uJ1xuXG50eXBlIFVybCA9IHN0cmluZyB8IFVybE9iamVjdFxudHlwZSBSZXF1aXJlZEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IG5ldmVyIDogS1xufVtrZXlvZiBUXVxudHlwZSBPcHRpb25hbEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IEsgOiBuZXZlclxufVtrZXlvZiBUXVxuXG5leHBvcnQgdHlwZSBMaW5rUHJvcHMgPSB7XG4gIGhyZWY6IFVybFxuICBhcz86IFVybFxuICByZXBsYWNlPzogYm9vbGVhblxuICBzY3JvbGw/OiBib29sZWFuXG4gIHNoYWxsb3c/OiBib29sZWFuXG4gIHBhc3NIcmVmPzogYm9vbGVhblxuICBwcmVmZXRjaD86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2Vcbn1cbnR5cGUgTGlua1Byb3BzUmVxdWlyZWQgPSBSZXF1aXJlZEtleXM8TGlua1Byb3BzPlxudHlwZSBMaW5rUHJvcHNPcHRpb25hbCA9IE9wdGlvbmFsS2V5czxMaW5rUHJvcHM+XG5cbmNvbnN0IHByZWZldGNoZWQ6IHsgW2NhY2hlS2V5OiBzdHJpbmddOiBib29sZWFuIH0gPSB7fVxuXG5mdW5jdGlvbiBwcmVmZXRjaChcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIG9wdGlvbnM/OiBQcmVmZXRjaE9wdGlvbnNcbik6IHZvaWQge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgfHwgIXJvdXRlcikgcmV0dXJuXG4gIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gIC8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbiAgLy8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuICAvLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3RcbiAgLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG4gIHJvdXRlci5wcmVmZXRjaChocmVmLCBhcywgb3B0aW9ucykuY2F0Y2goKGVycikgPT4ge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH0pXG4gIGNvbnN0IGN1ckxvY2FsZSA9XG4gICAgb3B0aW9ucyAmJiB0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgIT09ICd1bmRlZmluZWQnXG4gICAgICA/IG9wdGlvbnMubG9jYWxlXG4gICAgICA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlXG5cbiAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXMgKyAoY3VyTG9jYWxlID8gJyUnICsgY3VyTG9jYWxlIDogJycpXSA9IHRydWVcbn1cblxuZnVuY3Rpb24gaXNNb2RpZmllZEV2ZW50KGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50KTogYm9vbGVhbiB7XG4gIGNvbnN0IHsgdGFyZ2V0IH0gPSBldmVudC5jdXJyZW50VGFyZ2V0IGFzIEhUTUxBbmNob3JFbGVtZW50XG4gIHJldHVybiAoXG4gICAgKHRhcmdldCAmJiB0YXJnZXQgIT09ICdfc2VsZicpIHx8XG4gICAgZXZlbnQubWV0YUtleSB8fFxuICAgIGV2ZW50LmN0cmxLZXkgfHxcbiAgICBldmVudC5zaGlmdEtleSB8fFxuICAgIGV2ZW50LmFsdEtleSB8fCAvLyB0cmlnZ2VycyByZXNvdXJjZSBkb3dubG9hZFxuICAgIChldmVudC5uYXRpdmVFdmVudCAmJiBldmVudC5uYXRpdmVFdmVudC53aGljaCA9PT0gMilcbiAgKVxufVxuXG5mdW5jdGlvbiBsaW5rQ2xpY2tlZChcbiAgZTogUmVhY3QuTW91c2VFdmVudCxcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIHJlcGxhY2U/OiBib29sZWFuLFxuICBzaGFsbG93PzogYm9vbGVhbixcbiAgc2Nyb2xsPzogYm9vbGVhbixcbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2Vcbik6IHZvaWQge1xuICBjb25zdCB7IG5vZGVOYW1lIH0gPSBlLmN1cnJlbnRUYXJnZXRcblxuICBpZiAobm9kZU5hbWUgPT09ICdBJyAmJiAoaXNNb2RpZmllZEV2ZW50KGUpIHx8ICFpc0xvY2FsVVJMKGhyZWYpKSkge1xuICAgIC8vIGlnbm9yZSBjbGljayBmb3IgYnJvd3NlcuKAmXMgZGVmYXVsdCBiZWhhdmlvclxuICAgIHJldHVyblxuICB9XG5cbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgLy8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG4gIGlmIChzY3JvbGwgPT0gbnVsbCkge1xuICAgIHNjcm9sbCA9IGFzLmluZGV4T2YoJyMnKSA8IDBcbiAgfVxuXG4gIC8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxuICByb3V0ZXJbcmVwbGFjZSA/ICdyZXBsYWNlJyA6ICdwdXNoJ10oaHJlZiwgYXMsIHtcbiAgICBzaGFsbG93LFxuICAgIGxvY2FsZSxcbiAgICBzY3JvbGwsXG4gIH0pLnRoZW4oKHN1Y2Nlc3M6IGJvb2xlYW4pID0+IHtcbiAgICBpZiAoIXN1Y2Nlc3MpIHJldHVyblxuICAgIGlmIChzY3JvbGwpIHtcbiAgICAgIC8vIEZJWE1FOiBwcm9wZXIgcm91dGUgYW5ub3VuY2luZyBhdCBSb3V0ZXIgbGV2ZWwsIG5vdCBMaW5rOlxuICAgICAgZG9jdW1lbnQuYm9keS5mb2N1cygpXG4gICAgfVxuICB9KVxufVxuXG5mdW5jdGlvbiBMaW5rKHByb3BzOiBSZWFjdC5Qcm9wc1dpdGhDaGlsZHJlbjxMaW5rUHJvcHM+KSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgZnVuY3Rpb24gY3JlYXRlUHJvcEVycm9yKGFyZ3M6IHtcbiAgICAgIGtleTogc3RyaW5nXG4gICAgICBleHBlY3RlZDogc3RyaW5nXG4gICAgICBhY3R1YWw6IHN0cmluZ1xuICAgIH0pIHtcbiAgICAgIHJldHVybiBuZXcgRXJyb3IoXG4gICAgICAgIGBGYWlsZWQgcHJvcCB0eXBlOiBUaGUgcHJvcCBcXGAke2FyZ3Mua2V5fVxcYCBleHBlY3RzIGEgJHthcmdzLmV4cGVjdGVkfSBpbiBcXGA8TGluaz5cXGAsIGJ1dCBnb3QgXFxgJHthcmdzLmFjdHVhbH1cXGAgaW5zdGVhZC5gICtcbiAgICAgICAgICAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgID8gXCJcXG5PcGVuIHlvdXIgYnJvd3NlcidzIGNvbnNvbGUgdG8gdmlldyB0aGUgQ29tcG9uZW50IHN0YWNrIHRyYWNlLlwiXG4gICAgICAgICAgICA6ICcnKVxuICAgICAgKVxuICAgIH1cblxuICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgY29uc3QgcmVxdWlyZWRQcm9wc0d1YXJkOiBSZWNvcmQ8TGlua1Byb3BzUmVxdWlyZWQsIHRydWU+ID0ge1xuICAgICAgaHJlZjogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3QgcmVxdWlyZWRQcm9wczogTGlua1Byb3BzUmVxdWlyZWRbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgcmVxdWlyZWRQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNSZXF1aXJlZFtdXG4gICAgcmVxdWlyZWRQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc1JlcXVpcmVkKSA9PiB7XG4gICAgICBpZiAoa2V5ID09PSAnaHJlZicpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHByb3BzW2tleV0gPT0gbnVsbCB8fFxuICAgICAgICAgICh0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ3N0cmluZycgJiYgdHlwZW9mIHByb3BzW2tleV0gIT09ICdvYmplY3QnKVxuICAgICAgICApIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICBhY3R1YWw6IHByb3BzW2tleV0gPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgcHJvcHNba2V5XSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgIGNvbnN0IF86IG5ldmVyID0ga2V5XG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wc0d1YXJkOiBSZWNvcmQ8TGlua1Byb3BzT3B0aW9uYWwsIHRydWU+ID0ge1xuICAgICAgYXM6IHRydWUsXG4gICAgICByZXBsYWNlOiB0cnVlLFxuICAgICAgc2Nyb2xsOiB0cnVlLFxuICAgICAgc2hhbGxvdzogdHJ1ZSxcbiAgICAgIHBhc3NIcmVmOiB0cnVlLFxuICAgICAgcHJlZmV0Y2g6IHRydWUsXG4gICAgICBsb2NhbGU6IHRydWUsXG4gICAgfSBhcyBjb25zdFxuICAgIGNvbnN0IG9wdGlvbmFsUHJvcHM6IExpbmtQcm9wc09wdGlvbmFsW10gPSBPYmplY3Qua2V5cyhcbiAgICAgIG9wdGlvbmFsUHJvcHNHdWFyZFxuICAgICkgYXMgTGlua1Byb3BzT3B0aW9uYWxbXVxuICAgIG9wdGlvbmFsUHJvcHMuZm9yRWFjaCgoa2V5OiBMaW5rUHJvcHNPcHRpb25hbCkgPT4ge1xuICAgICAgY29uc3QgdmFsVHlwZSA9IHR5cGVvZiBwcm9wc1trZXldXG5cbiAgICAgIGlmIChrZXkgPT09ICdhcycpIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gJiYgdmFsVHlwZSAhPT0gJ3N0cmluZycgJiYgdmFsVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGUsXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdsb2NhbGUnKSB7XG4gICAgICAgIGlmIChwcm9wc1trZXldICYmIHZhbFR5cGUgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2AnLFxuICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIGtleSA9PT0gJ3JlcGxhY2UnIHx8XG4gICAgICAgIGtleSA9PT0gJ3Njcm9sbCcgfHxcbiAgICAgICAga2V5ID09PSAnc2hhbGxvdycgfHxcbiAgICAgICAga2V5ID09PSAncGFzc0hyZWYnIHx8XG4gICAgICAgIGtleSA9PT0gJ3ByZWZldGNoJ1xuICAgICAgKSB7XG4gICAgICAgIGlmIChwcm9wc1trZXldICE9IG51bGwgJiYgdmFsVHlwZSAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYGJvb2xlYW5gJyxcbiAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgIGNvbnN0IF86IG5ldmVyID0ga2V5XG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIFRoaXMgaG9vayBpcyBpbiBhIGNvbmRpdGlvbmFsIGJ1dCB0aGF0IGlzIG9rIGJlY2F1c2UgYHByb2Nlc3MuZW52Lk5PREVfRU5WYCBuZXZlciBjaGFuZ2VzXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG4gICAgY29uc3QgaGFzV2FybmVkID0gUmVhY3QudXNlUmVmKGZhbHNlKVxuICAgIGlmIChwcm9wcy5wcmVmZXRjaCAmJiAhaGFzV2FybmVkLmN1cnJlbnQpIHtcbiAgICAgIGhhc1dhcm5lZC5jdXJyZW50ID0gdHJ1ZVxuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAnTmV4dC5qcyBhdXRvLXByZWZldGNoZXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiB2aWV3cG9ydC4gVGhlIHByZWZldGNoIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgbmVlZGVkLiBNb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9wcmVmZXRjaC10cnVlLWRlcHJlY2F0ZWQnXG4gICAgICApXG4gICAgfVxuICB9XG4gIGNvbnN0IHAgPSBwcm9wcy5wcmVmZXRjaCAhPT0gZmFsc2VcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCBwYXRobmFtZSA9IChyb3V0ZXIgJiYgcm91dGVyLnBhdGhuYW1lKSB8fCAnLydcblxuICBjb25zdCB7IGhyZWYsIGFzIH0gPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCBbcmVzb2x2ZWRIcmVmLCByZXNvbHZlZEFzXSA9IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5ocmVmLCB0cnVlKVxuICAgIHJldHVybiB7XG4gICAgICBocmVmOiByZXNvbHZlZEhyZWYsXG4gICAgICBhczogcHJvcHMuYXNcbiAgICAgICAgPyByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuYXMpXG4gICAgICAgIDogcmVzb2x2ZWRBcyB8fCByZXNvbHZlZEhyZWYsXG4gICAgfVxuICB9LCBbcGF0aG5hbWUsIHByb3BzLmhyZWYsIHByb3BzLmFzXSlcblxuICBsZXQgeyBjaGlsZHJlbiwgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsLCBsb2NhbGUgfSA9IHByb3BzXG5cbiAgLy8gRGVwcmVjYXRlZC4gV2FybmluZyBzaG93biBieSBwcm9wVHlwZSBjaGVjay4gSWYgdGhlIGNoaWxkcmVuIHByb3ZpZGVkIGlzIGEgc3RyaW5nICg8TGluaz5leGFtcGxlPC9MaW5rPikgd2Ugd3JhcCBpdCBpbiBhbiA8YT4gdGFnXG4gIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgY2hpbGRyZW4gPSA8YT57Y2hpbGRyZW59PC9hPlxuICB9XG5cbiAgLy8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG4gIGNvbnN0IGNoaWxkOiBhbnkgPSBDaGlsZHJlbi5vbmx5KGNoaWxkcmVuKVxuICBjb25zdCBjaGlsZFJlZjogYW55ID0gY2hpbGQgJiYgdHlwZW9mIGNoaWxkID09PSAnb2JqZWN0JyAmJiBjaGlsZC5yZWZcblxuICBjb25zdCBbc2V0SW50ZXJzZWN0aW9uUmVmLCBpc1Zpc2libGVdID0gdXNlSW50ZXJzZWN0aW9uKHtcbiAgICByb290TWFyZ2luOiAnMjAwcHgnLFxuICB9KVxuICBjb25zdCBzZXRSZWYgPSBSZWFjdC51c2VDYWxsYmFjayhcbiAgICAoZWw6IEVsZW1lbnQpID0+IHtcbiAgICAgIHNldEludGVyc2VjdGlvblJlZihlbClcbiAgICAgIGlmIChjaGlsZFJlZikge1xuICAgICAgICBpZiAodHlwZW9mIGNoaWxkUmVmID09PSAnZnVuY3Rpb24nKSBjaGlsZFJlZihlbClcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGNoaWxkUmVmID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIGNoaWxkUmVmLmN1cnJlbnQgPSBlbFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBbY2hpbGRSZWYsIHNldEludGVyc2VjdGlvblJlZl1cbiAgKVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHNob3VsZFByZWZldGNoID0gaXNWaXNpYmxlICYmIHAgJiYgaXNMb2NhbFVSTChocmVmKVxuICAgIGNvbnN0IGN1ckxvY2FsZSA9XG4gICAgICB0eXBlb2YgbG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IGxvY2FsZSA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlXG4gICAgY29uc3QgaXNQcmVmZXRjaGVkID1cbiAgICAgIHByZWZldGNoZWRbaHJlZiArICclJyArIGFzICsgKGN1ckxvY2FsZSA/ICclJyArIGN1ckxvY2FsZSA6ICcnKV1cbiAgICBpZiAoc2hvdWxkUHJlZmV0Y2ggJiYgIWlzUHJlZmV0Y2hlZCkge1xuICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywge1xuICAgICAgICBsb2NhbGU6IGN1ckxvY2FsZSxcbiAgICAgIH0pXG4gICAgfVxuICB9LCBbYXMsIGhyZWYsIGlzVmlzaWJsZSwgbG9jYWxlLCBwLCByb3V0ZXJdKVxuXG4gIGNvbnN0IGNoaWxkUHJvcHM6IHtcbiAgICBvbk1vdXNlRW50ZXI/OiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIG9uQ2xpY2s6IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgaHJlZj86IHN0cmluZ1xuICAgIHJlZj86IGFueVxuICB9ID0ge1xuICAgIHJlZjogc2V0UmVmLFxuICAgIG9uQ2xpY2s6IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2hpbGQucHJvcHMub25DbGljayhlKVxuICAgICAgfVxuICAgICAgaWYgKCFlLmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgbGlua0NsaWNrZWQoZSwgcm91dGVyLCBocmVmLCBhcywgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsLCBsb2NhbGUpXG4gICAgICB9XG4gICAgfSxcbiAgfVxuXG4gIGNoaWxkUHJvcHMub25Nb3VzZUVudGVyID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICBpZiAoIWlzTG9jYWxVUkwoaHJlZikpIHJldHVyblxuICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSlcbiAgICB9XG4gICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywgeyBwcmlvcml0eTogdHJ1ZSB9KVxuICB9XG5cbiAgLy8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4gIC8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuICBpZiAocHJvcHMucGFzc0hyZWYgfHwgKGNoaWxkLnR5cGUgPT09ICdhJyAmJiAhKCdocmVmJyBpbiBjaGlsZC5wcm9wcykpKSB7XG4gICAgY29uc3QgY3VyTG9jYWxlID1cbiAgICAgIHR5cGVvZiBsb2NhbGUgIT09ICd1bmRlZmluZWQnID8gbG9jYWxlIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGVcblxuICAgIGNvbnN0IGxvY2FsZURvbWFpbiA9IGdldERvbWFpbkxvY2FsZShcbiAgICAgIGFzLFxuICAgICAgY3VyTG9jYWxlLFxuICAgICAgcm91dGVyICYmIHJvdXRlci5sb2NhbGVzLFxuICAgICAgcm91dGVyICYmIHJvdXRlci5kb21haW5Mb2NhbGVzXG4gICAgKVxuXG4gICAgY2hpbGRQcm9wcy5ocmVmID1cbiAgICAgIGxvY2FsZURvbWFpbiB8fFxuICAgICAgYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGFzLCBjdXJMb2NhbGUsIHJvdXRlciAmJiByb3V0ZXIuZGVmYXVsdExvY2FsZSkpXG4gIH1cblxuICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCBjaGlsZFByb3BzKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5rXG4iLCIvKipcbiAqIFJlbW92ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBpZiB0aGVyZSBpcyBvbmUuIFByZXNlcnZlcyB0aGUgcm9vdCBwYXRoIGAvYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLmVuZHNXaXRoKCcvJykgJiYgcGF0aCAhPT0gJy8nID8gcGF0aC5zbGljZSgwLCAtMSkgOiBwYXRoXG59XG5cbi8qKlxuICogTm9ybWFsaXplcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGFjY29yZGluZyB0byB0aGUgYHRyYWlsaW5nU2xhc2hgIG9wdGlvblxuICogaW4gYG5leHQuY29uZmlnLmpzYC5cbiAqL1xuZXhwb3J0IGNvbnN0IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoID0gcHJvY2Vzcy5lbnYuX19ORVhUX1RSQUlMSU5HX1NMQVNIXG4gID8gKHBhdGg6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gICAgICBpZiAoL1xcLlteL10rXFwvPyQvLnRlc3QocGF0aCkpIHtcbiAgICAgICAgcmV0dXJuIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpXG4gICAgICB9IGVsc2UgaWYgKHBhdGguZW5kc1dpdGgoJy8nKSkge1xuICAgICAgICByZXR1cm4gcGF0aFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHBhdGggKyAnLydcbiAgICAgIH1cbiAgICB9XG4gIDogcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2hcbiIsInR5cGUgUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZSA9IGFueVxudHlwZSBSZXF1ZXN0SWRsZUNhbGxiYWNrT3B0aW9ucyA9IHtcbiAgdGltZW91dDogbnVtYmVyXG59XG50eXBlIFJlcXVlc3RJZGxlQ2FsbGJhY2tEZWFkbGluZSA9IHtcbiAgcmVhZG9ubHkgZGlkVGltZW91dDogYm9vbGVhblxuICB0aW1lUmVtYWluaW5nOiAoKSA9PiBudW1iZXJcbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICByZXF1ZXN0SWRsZUNhbGxiYWNrOiAoXG4gICAgICBjYWxsYmFjazogKGRlYWRsaW5lOiBSZXF1ZXN0SWRsZUNhbGxiYWNrRGVhZGxpbmUpID0+IHZvaWQsXG4gICAgICBvcHRzPzogUmVxdWVzdElkbGVDYWxsYmFja09wdGlvbnNcbiAgICApID0+IFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGVcbiAgfVxufVxuXG5jb25zdCByZXF1ZXN0SWRsZUNhbGxiYWNrID1cbiAgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmLnJlcXVlc3RJZGxlQ2FsbGJhY2spIHx8XG4gIGZ1bmN0aW9uIChcbiAgICBjYjogKGRlYWRsaW5lOiBSZXF1ZXN0SWRsZUNhbGxiYWNrRGVhZGxpbmUpID0+IHZvaWRcbiAgKTogTm9kZUpTLlRpbWVvdXQge1xuICAgIGxldCBzdGFydCA9IERhdGUubm93KClcbiAgICByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBjYih7XG4gICAgICAgIGRpZFRpbWVvdXQ6IGZhbHNlLFxuICAgICAgICB0aW1lUmVtYWluaW5nOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIE1hdGgubWF4KDAsIDUwIC0gKERhdGUubm93KCkgLSBzdGFydCkpXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgIH0sIDEpXG4gIH1cblxuZXhwb3J0IGRlZmF1bHQgcmVxdWVzdElkbGVDYWxsYmFja1xuIiwiaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQ2xpZW50QnVpbGRNYW5pZmVzdCB9IGZyb20gJy4uL2J1aWxkL3dlYnBhY2svcGx1Z2lucy9idWlsZC1tYW5pZmVzdC1wbHVnaW4nXG5pbXBvcnQgZ2V0QXNzZXRQYXRoRnJvbVJvdXRlIGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZSdcbmltcG9ydCByZXF1ZXN0SWRsZUNhbGxiYWNrIGZyb20gJy4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrJ1xuXG4vLyAzLjhzIHdhcyBhcmJpdHJhcmlseSBjaG9zZW4gYXMgaXQncyB3aGF0IGh0dHBzOi8vd2ViLmRldi9pbnRlcmFjdGl2ZVxuLy8gY29uc2lkZXJzIGFzIFwiR29vZFwiIHRpbWUtdG8taW50ZXJhY3RpdmUuIFdlIG11c3QgYXNzdW1lIHNvbWV0aGluZyB3ZW50XG4vLyB3cm9uZyBiZXlvbmQgdGhpcyBwb2ludCwgYW5kIHRoZW4gZmFsbC1iYWNrIHRvIGEgZnVsbCBwYWdlIHRyYW5zaXRpb24gdG9cbi8vIHNob3cgdGhlIHVzZXIgc29tZXRoaW5nIG9mIHZhbHVlLlxuY29uc3QgTVNfTUFYX0lETEVfREVMQVkgPSAzODAwXG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgX19CVUlMRF9NQU5JRkVTVD86IENsaWVudEJ1aWxkTWFuaWZlc3RcbiAgICBfX0JVSUxEX01BTklGRVNUX0NCPzogRnVuY3Rpb25cbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIExvYWRlZEVudHJ5cG9pbnRTdWNjZXNzIHtcbiAgY29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gIGV4cG9ydHM6IGFueVxufVxuZXhwb3J0IGludGVyZmFjZSBMb2FkZWRFbnRyeXBvaW50RmFpbHVyZSB7XG4gIGVycm9yOiB1bmtub3duXG59XG5leHBvcnQgdHlwZSBSb3V0ZUVudHJ5cG9pbnQgPSBMb2FkZWRFbnRyeXBvaW50U3VjY2VzcyB8IExvYWRlZEVudHJ5cG9pbnRGYWlsdXJlXG5cbmV4cG9ydCBpbnRlcmZhY2UgUm91dGVTdHlsZVNoZWV0IHtcbiAgaHJlZjogc3RyaW5nXG4gIGNvbnRlbnQ6IHN0cmluZ1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIExvYWRlZFJvdXRlU3VjY2VzcyBleHRlbmRzIExvYWRlZEVudHJ5cG9pbnRTdWNjZXNzIHtcbiAgc3R5bGVzOiBSb3V0ZVN0eWxlU2hlZXRbXVxufVxuZXhwb3J0IGludGVyZmFjZSBMb2FkZWRSb3V0ZUZhaWx1cmUge1xuICBlcnJvcjogdW5rbm93blxufVxuZXhwb3J0IHR5cGUgUm91dGVMb2FkZXJFbnRyeSA9IExvYWRlZFJvdXRlU3VjY2VzcyB8IExvYWRlZFJvdXRlRmFpbHVyZVxuXG5leHBvcnQgdHlwZSBGdXR1cmU8Vj4gPSB7XG4gIHJlc29sdmU6IChlbnRyeXBvaW50OiBWKSA9PiB2b2lkXG4gIGZ1dHVyZTogUHJvbWlzZTxWPlxufVxuZnVuY3Rpb24gd2l0aEZ1dHVyZTxUPihcbiAga2V5OiBzdHJpbmcsXG4gIG1hcDogTWFwPHN0cmluZywgRnV0dXJlPFQ+IHwgVD4sXG4gIGdlbmVyYXRvcj86ICgpID0+IFByb21pc2U8VD5cbik6IFByb21pc2U8VD4ge1xuICBsZXQgZW50cnk6IEZ1dHVyZTxUPiB8IFQgfCB1bmRlZmluZWQgPSBtYXAuZ2V0KGtleSlcbiAgaWYgKGVudHJ5KSB7XG4gICAgaWYgKCdmdXR1cmUnIGluIGVudHJ5KSB7XG4gICAgICByZXR1cm4gZW50cnkuZnV0dXJlXG4gICAgfVxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZW50cnkpXG4gIH1cbiAgbGV0IHJlc29sdmVyOiAoZW50cnlwb2ludDogVCkgPT4gdm9pZFxuICBjb25zdCBwcm9tOiBQcm9taXNlPFQ+ID0gbmV3IFByb21pc2U8VD4oKHJlc29sdmUpID0+IHtcbiAgICByZXNvbHZlciA9IHJlc29sdmVcbiAgfSlcbiAgbWFwLnNldChrZXksIChlbnRyeSA9IHsgcmVzb2x2ZTogcmVzb2x2ZXIhLCBmdXR1cmU6IHByb20gfSkpXG4gIHJldHVybiBnZW5lcmF0b3JcbiAgICA/IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbiAgICAgIGdlbmVyYXRvcigpLnRoZW4oKHZhbHVlKSA9PiAocmVzb2x2ZXIodmFsdWUpLCB2YWx1ZSkpXG4gICAgOiBwcm9tXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUm91dGVMb2FkZXIge1xuICB3aGVuRW50cnlwb2ludChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxSb3V0ZUVudHJ5cG9pbnQ+XG4gIG9uRW50cnlwb2ludChyb3V0ZTogc3RyaW5nLCBleGVjdXRlOiAoKSA9PiB1bmtub3duKTogdm9pZFxuICBsb2FkUm91dGUocm91dGU6IHN0cmluZyk6IFByb21pc2U8Um91dGVMb2FkZXJFbnRyeT5cbiAgcHJlZmV0Y2gocm91dGU6IHN0cmluZyk6IFByb21pc2U8dm9pZD5cbn1cblxuZnVuY3Rpb24gaGFzUHJlZmV0Y2gobGluaz86IEhUTUxMaW5rRWxlbWVudCk6IGJvb2xlYW4ge1xuICB0cnkge1xuICAgIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJylcbiAgICByZXR1cm4gKFxuICAgICAgLy8gZGV0ZWN0IElFMTEgc2luY2UgaXQgc3VwcG9ydHMgcHJlZmV0Y2ggYnV0IGlzbid0IGRldGVjdGVkXG4gICAgICAvLyB3aXRoIHJlbExpc3Quc3VwcG9ydFxuICAgICAgKCEhd2luZG93Lk1TSW5wdXRNZXRob2RDb250ZXh0ICYmICEhKGRvY3VtZW50IGFzIGFueSkuZG9jdW1lbnRNb2RlKSB8fFxuICAgICAgbGluay5yZWxMaXN0LnN1cHBvcnRzKCdwcmVmZXRjaCcpXG4gICAgKVxuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG5jb25zdCBjYW5QcmVmZXRjaDogYm9vbGVhbiA9IGhhc1ByZWZldGNoKClcblxuZnVuY3Rpb24gcHJlZmV0Y2hWaWFEb20oXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgbGluaz86IEhUTUxMaW5rRWxlbWVudFxuKTogUHJvbWlzZTxhbnk+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXMsIHJlaikgPT4ge1xuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBsaW5rW3JlbD1cInByZWZldGNoXCJdW2hyZWZePVwiJHtocmVmfVwiXWApKSB7XG4gICAgICByZXR1cm4gcmVzKClcbiAgICB9XG5cbiAgICBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpXG5cbiAgICAvLyBUaGUgb3JkZXIgb2YgcHJvcGVydHkgYXNzaWdubWVudCBoZXJlIGlzIGludGVudGlvbmFsOlxuICAgIGlmIChhcykgbGluayEuYXMgPSBhc1xuICAgIGxpbmshLnJlbCA9IGBwcmVmZXRjaGBcbiAgICBsaW5rIS5jcm9zc09yaWdpbiA9IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU4hXG4gICAgbGluayEub25sb2FkID0gcmVzXG4gICAgbGluayEub25lcnJvciA9IHJlalxuXG4gICAgLy8gYGhyZWZgIHNob3VsZCBhbHdheXMgYmUgbGFzdDpcbiAgICBsaW5rIS5ocmVmID0gaHJlZlxuXG4gICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChsaW5rKVxuICB9KVxufVxuXG5jb25zdCBBU1NFVF9MT0FEX0VSUk9SID0gU3ltYm9sKCdBU1NFVF9MT0FEX0VSUk9SJylcbi8vIFRPRE86IHVuZXhwb3J0XG5leHBvcnQgZnVuY3Rpb24gbWFya0Fzc2V0RXJyb3IoZXJyOiBFcnJvcik6IEVycm9yIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlcnIsIEFTU0VUX0xPQURfRVJST1IsIHt9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNBc3NldEVycm9yKGVycj86IEVycm9yKTogYm9vbGVhbiB8IHVuZGVmaW5lZCB7XG4gIHJldHVybiBlcnIgJiYgQVNTRVRfTE9BRF9FUlJPUiBpbiBlcnJcbn1cblxuZnVuY3Rpb24gYXBwZW5kU2NyaXB0KFxuICBzcmM6IHN0cmluZyxcbiAgc2NyaXB0PzogSFRNTFNjcmlwdEVsZW1lbnRcbik6IFByb21pc2U8dW5rbm93bj4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpXG5cbiAgICAvLyBUaGUgb3JkZXIgb2YgcHJvcGVydHkgYXNzaWdubWVudCBoZXJlIGlzIGludGVudGlvbmFsLlxuICAgIC8vIDEuIFNldHVwIHN1Y2Nlc3MvZmFpbHVyZSBob29rcyBpbiBjYXNlIHRoZSBicm93c2VyIHN5bmNocm9ub3VzbHlcbiAgICAvLyAgICBleGVjdXRlcyB3aGVuIGBzcmNgIGlzIHNldC5cbiAgICBzY3JpcHQub25sb2FkID0gcmVzb2x2ZVxuICAgIHNjcmlwdC5vbmVycm9yID0gKCkgPT5cbiAgICAgIHJlamVjdChtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHNjcmlwdDogJHtzcmN9YCkpKVxuXG4gICAgLy8gMi4gQ29uZmlndXJlIHRoZSBjcm9zcy1vcmlnaW4gYXR0cmlidXRlIGJlZm9yZSBzZXR0aW5nIGBzcmNgIGluIGNhc2UgdGhlXG4gICAgLy8gICAgYnJvd3NlciBiZWdpbnMgdG8gZmV0Y2guXG4gICAgc2NyaXB0LmNyb3NzT3JpZ2luID0gcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTiFcblxuICAgIC8vIDMuIEZpbmFsbHksIHNldCB0aGUgc291cmNlIGFuZCBpbmplY3QgaW50byB0aGUgRE9NIGluIGNhc2UgdGhlIGNoaWxkXG4gICAgLy8gICAgbXVzdCBiZSBhcHBlbmRlZCBmb3IgZmV0Y2hpbmcgdG8gc3RhcnQuXG4gICAgc2NyaXB0LnNyYyA9IHNyY1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KVxuICB9KVxufVxuXG5mdW5jdGlvbiBpZGxlVGltZW91dDxUPihtczogbnVtYmVyLCBlcnI6IEVycm9yKTogUHJvbWlzZTxUPiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgoX3Jlc29sdmUsIHJlamVjdCkgPT5cbiAgICByZXF1ZXN0SWRsZUNhbGxiYWNrKCgpID0+IHNldFRpbWVvdXQoKCkgPT4gcmVqZWN0KGVyciksIG1zKSlcbiAgKVxufVxuXG4vLyBUT0RPOiBzdG9wIGV4cG9ydGluZyBvciBjYWNoZSB0aGUgZmFpbHVyZVxuLy8gSXQnZCBiZSBiZXN0IHRvIHN0b3AgZXhwb3J0aW5nIHRoaXMuIEl0J3MgYW4gaW1wbGVtZW50YXRpb24gZGV0YWlsLiBXZSdyZVxuLy8gb25seSBleHBvcnRpbmcgaXQgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsdHkgd2l0aCB0aGUgYHBhZ2UtbG9hZGVyYC5cbi8vIE9ubHkgY2FjaGUgdGhpcyByZXNwb25zZSBhcyBhIGxhc3QgcmVzb3J0IGlmIHdlIGNhbm5vdCBlbGltaW5hdGUgYWxsIG90aGVyXG4vLyBjb2RlIGJyYW5jaGVzIHRoYXQgdXNlIHRoZSBCdWlsZCBNYW5pZmVzdCBDYWxsYmFjayBhbmQgcHVzaCB0aGVtIHRocm91Z2hcbi8vIHRoZSBSb3V0ZSBMb2FkZXIgaW50ZXJmYWNlLlxuZXhwb3J0IGZ1bmN0aW9uIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKTogUHJvbWlzZTxDbGllbnRCdWlsZE1hbmlmZXN0PiB7XG4gIGlmIChzZWxmLl9fQlVJTERfTUFOSUZFU1QpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHNlbGYuX19CVUlMRF9NQU5JRkVTVClcbiAgfVxuXG4gIGNvbnN0IG9uQnVpbGRNYW5pZmVzdDogUHJvbWlzZTxDbGllbnRCdWlsZE1hbmlmZXN0PiA9IG5ldyBQcm9taXNlPFxuICAgIENsaWVudEJ1aWxkTWFuaWZlc3RcbiAgPigocmVzb2x2ZSkgPT4ge1xuICAgIC8vIE1hbmRhdG9yeSBiZWNhdXNlIHRoaXMgaXMgbm90IGNvbmN1cnJlbnQgc2FmZTpcbiAgICBjb25zdCBjYiA9IHNlbGYuX19CVUlMRF9NQU5JRkVTVF9DQlxuICAgIHNlbGYuX19CVUlMRF9NQU5JRkVTVF9DQiA9ICgpID0+IHtcbiAgICAgIHJlc29sdmUoc2VsZi5fX0JVSUxEX01BTklGRVNUKVxuICAgICAgY2IgJiYgY2IoKVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIFByb21pc2UucmFjZShbXG4gICAgb25CdWlsZE1hbmlmZXN0LFxuICAgIGlkbGVUaW1lb3V0PENsaWVudEJ1aWxkTWFuaWZlc3Q+KFxuICAgICAgTVNfTUFYX0lETEVfREVMQVksXG4gICAgICBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoJ0ZhaWxlZCB0byBsb2FkIGNsaWVudCBidWlsZCBtYW5pZmVzdCcpKVxuICAgICksXG4gIF0pXG59XG5cbmludGVyZmFjZSBSb3V0ZUZpbGVzIHtcbiAgc2NyaXB0czogc3RyaW5nW11cbiAgY3NzOiBzdHJpbmdbXVxufVxuZnVuY3Rpb24gZ2V0RmlsZXNGb3JSb3V0ZShcbiAgYXNzZXRQcmVmaXg6IHN0cmluZyxcbiAgcm91dGU6IHN0cmluZ1xuKTogUHJvbWlzZTxSb3V0ZUZpbGVzPiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoe1xuICAgICAgc2NyaXB0czogW1xuICAgICAgICBhc3NldFByZWZpeCArXG4gICAgICAgICAgJy9fbmV4dC9zdGF0aWMvY2h1bmtzL3BhZ2VzJyArXG4gICAgICAgICAgZW5jb2RlVVJJKGdldEFzc2V0UGF0aEZyb21Sb3V0ZShyb3V0ZSwgJy5qcycpKSxcbiAgICAgIF0sXG4gICAgICAvLyBTdHlsZXMgYXJlIGhhbmRsZWQgYnkgYHN0eWxlLWxvYWRlcmAgaW4gZGV2ZWxvcG1lbnQ6XG4gICAgICBjc3M6IFtdLFxuICAgIH0pXG4gIH1cbiAgcmV0dXJuIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKS50aGVuKChtYW5pZmVzdCkgPT4ge1xuICAgIGlmICghKHJvdXRlIGluIG1hbmlmZXN0KSkge1xuICAgICAgdGhyb3cgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9va3VwIHJvdXRlOiAke3JvdXRlfWApKVxuICAgIH1cbiAgICBjb25zdCBhbGxGaWxlcyA9IG1hbmlmZXN0W3JvdXRlXS5tYXAoXG4gICAgICAoZW50cnkpID0+IGFzc2V0UHJlZml4ICsgJy9fbmV4dC8nICsgZW5jb2RlVVJJKGVudHJ5KVxuICAgIClcbiAgICByZXR1cm4ge1xuICAgICAgc2NyaXB0czogYWxsRmlsZXMuZmlsdGVyKCh2KSA9PiB2LmVuZHNXaXRoKCcuanMnKSksXG4gICAgICBjc3M6IGFsbEZpbGVzLmZpbHRlcigodikgPT4gdi5lbmRzV2l0aCgnLmNzcycpKSxcbiAgICB9XG4gIH0pXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVJvdXRlTG9hZGVyKGFzc2V0UHJlZml4OiBzdHJpbmcpOiBSb3V0ZUxvYWRlciB7XG4gIGNvbnN0IGVudHJ5cG9pbnRzOiBNYXA8XG4gICAgc3RyaW5nLFxuICAgIEZ1dHVyZTxSb3V0ZUVudHJ5cG9pbnQ+IHwgUm91dGVFbnRyeXBvaW50XG4gID4gPSBuZXcgTWFwKClcbiAgY29uc3QgbG9hZGVkU2NyaXB0czogTWFwPHN0cmluZywgUHJvbWlzZTx1bmtub3duPj4gPSBuZXcgTWFwKClcbiAgY29uc3Qgc3R5bGVTaGVldHM6IE1hcDxzdHJpbmcsIFByb21pc2U8Um91dGVTdHlsZVNoZWV0Pj4gPSBuZXcgTWFwKClcbiAgY29uc3Qgcm91dGVzOiBNYXA8XG4gICAgc3RyaW5nLFxuICAgIEZ1dHVyZTxSb3V0ZUxvYWRlckVudHJ5PiB8IFJvdXRlTG9hZGVyRW50cnlcbiAgPiA9IG5ldyBNYXAoKVxuXG4gIGZ1bmN0aW9uIG1heWJlRXhlY3V0ZVNjcmlwdChzcmM6IHN0cmluZyk6IFByb21pc2U8dW5rbm93bj4ge1xuICAgIGxldCBwcm9tOiBQcm9taXNlPHVua25vd24+IHwgdW5kZWZpbmVkID0gbG9hZGVkU2NyaXB0cy5nZXQoc3JjKVxuICAgIGlmIChwcm9tKSB7XG4gICAgICByZXR1cm4gcHJvbVxuICAgIH1cblxuICAgIC8vIFNraXAgZXhlY3V0aW5nIHNjcmlwdCBpZiBpdCdzIGFscmVhZHkgaW4gdGhlIERPTTpcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihgc2NyaXB0W3NyY149XCIke3NyY31cIl1gKSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpXG4gICAgfVxuXG4gICAgbG9hZGVkU2NyaXB0cy5zZXQoc3JjLCAocHJvbSA9IGFwcGVuZFNjcmlwdChzcmMpKSlcbiAgICByZXR1cm4gcHJvbVxuICB9XG5cbiAgZnVuY3Rpb24gZmV0Y2hTdHlsZVNoZWV0KGhyZWY6IHN0cmluZyk6IFByb21pc2U8Um91dGVTdHlsZVNoZWV0PiB7XG4gICAgbGV0IHByb206IFByb21pc2U8Um91dGVTdHlsZVNoZWV0PiB8IHVuZGVmaW5lZCA9IHN0eWxlU2hlZXRzLmdldChocmVmKVxuICAgIGlmIChwcm9tKSB7XG4gICAgICByZXR1cm4gcHJvbVxuICAgIH1cblxuICAgIHN0eWxlU2hlZXRzLnNldChcbiAgICAgIGhyZWYsXG4gICAgICAocHJvbSA9IGZldGNoKGhyZWYpXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICBpZiAoIXJlcy5vaykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdHlsZXNoZWV0OiAke2hyZWZ9YClcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHJlcy50ZXh0KCkudGhlbigodGV4dCkgPT4gKHsgaHJlZjogaHJlZiwgY29udGVudDogdGV4dCB9KSlcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICB0aHJvdyBtYXJrQXNzZXRFcnJvcihlcnIpXG4gICAgICAgIH0pKVxuICAgIClcbiAgICByZXR1cm4gcHJvbVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB3aGVuRW50cnlwb2ludChyb3V0ZTogc3RyaW5nKSB7XG4gICAgICByZXR1cm4gd2l0aEZ1dHVyZShyb3V0ZSwgZW50cnlwb2ludHMpXG4gICAgfSxcbiAgICBvbkVudHJ5cG9pbnQocm91dGU6IHN0cmluZywgZXhlY3V0ZTogKCkgPT4gdW5rbm93bikge1xuICAgICAgUHJvbWlzZS5yZXNvbHZlKGV4ZWN1dGUpXG4gICAgICAgIC50aGVuKChmbikgPT4gZm4oKSlcbiAgICAgICAgLnRoZW4oXG4gICAgICAgICAgKGV4cG9ydHM6IGFueSkgPT4gKHtcbiAgICAgICAgICAgIGNvbXBvbmVudDogKGV4cG9ydHMgJiYgZXhwb3J0cy5kZWZhdWx0KSB8fCBleHBvcnRzLFxuICAgICAgICAgICAgZXhwb3J0czogZXhwb3J0cyxcbiAgICAgICAgICB9KSxcbiAgICAgICAgICAoZXJyKSA9PiAoeyBlcnJvcjogZXJyIH0pXG4gICAgICAgIClcbiAgICAgICAgLnRoZW4oKGlucHV0OiBSb3V0ZUVudHJ5cG9pbnQpID0+IHtcbiAgICAgICAgICBjb25zdCBvbGQgPSBlbnRyeXBvaW50cy5nZXQocm91dGUpXG4gICAgICAgICAgZW50cnlwb2ludHMuc2V0KHJvdXRlLCBpbnB1dClcbiAgICAgICAgICBpZiAob2xkICYmICdyZXNvbHZlJyBpbiBvbGQpIG9sZC5yZXNvbHZlKGlucHV0KVxuICAgICAgICB9KVxuICAgIH0sXG4gICAgbG9hZFJvdXRlKHJvdXRlOiBzdHJpbmcpIHtcbiAgICAgIHJldHVybiB3aXRoRnV0dXJlPFJvdXRlTG9hZGVyRW50cnk+KHJvdXRlLCByb3V0ZXMsIGFzeW5jICgpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCB7IHNjcmlwdHMsIGNzcyB9ID0gYXdhaXQgZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCwgcm91dGUpXG4gICAgICAgICAgY29uc3QgWywgc3R5bGVzXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgIGVudHJ5cG9pbnRzLmhhcyhyb3V0ZSlcbiAgICAgICAgICAgICAgPyBbXVxuICAgICAgICAgICAgICA6IFByb21pc2UuYWxsKHNjcmlwdHMubWFwKG1heWJlRXhlY3V0ZVNjcmlwdCkpLFxuICAgICAgICAgICAgUHJvbWlzZS5hbGwoY3NzLm1hcChmZXRjaFN0eWxlU2hlZXQpKSxcbiAgICAgICAgICBdIGFzIGNvbnN0KVxuXG4gICAgICAgICAgY29uc3QgZW50cnlwb2ludDogUm91dGVFbnRyeXBvaW50ID0gYXdhaXQgUHJvbWlzZS5yYWNlKFtcbiAgICAgICAgICAgIHRoaXMud2hlbkVudHJ5cG9pbnQocm91dGUpLFxuICAgICAgICAgICAgaWRsZVRpbWVvdXQ8Um91dGVMb2FkZXJFbnRyeT4oXG4gICAgICAgICAgICAgIE1TX01BWF9JRExFX0RFTEFZLFxuICAgICAgICAgICAgICBtYXJrQXNzZXRFcnJvcihcbiAgICAgICAgICAgICAgICBuZXcgRXJyb3IoYFJvdXRlIGRpZCBub3QgY29tcGxldGUgbG9hZGluZzogJHtyb3V0ZX1gKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApLFxuICAgICAgICAgIF0pXG4gICAgICAgICAgY29uc3QgcmVzOiBSb3V0ZUxvYWRlckVudHJ5ID0gT2JqZWN0LmFzc2lnbjxcbiAgICAgICAgICAgIHsgc3R5bGVzOiBSb3V0ZVN0eWxlU2hlZXRbXSB9LFxuICAgICAgICAgICAgUm91dGVFbnRyeXBvaW50XG4gICAgICAgICAgPih7IHN0eWxlcyB9LCBlbnRyeXBvaW50KVxuICAgICAgICAgIHJldHVybiAnZXJyb3InIGluIGVudHJ5cG9pbnQgPyBlbnRyeXBvaW50IDogcmVzXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIHJldHVybiB7IGVycm9yOiBlcnIgfVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG4gICAgcHJlZmV0Y2gocm91dGU6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL0dvb2dsZUNocm9tZUxhYnMvcXVpY2tsaW5rL2Jsb2IvNDUzYTY2MWZhMWZhOTQwZTJkMmUwNDQ0NTIzOThlMzhjNjdhOThmYi9zcmMvaW5kZXgubWpzI0wxMTUtTDExOFxuICAgICAgLy8gTGljZW5zZTogQXBhY2hlIDIuMFxuICAgICAgbGV0IGNuXG4gICAgICBpZiAoKGNuID0gKG5hdmlnYXRvciBhcyBhbnkpLmNvbm5lY3Rpb24pKSB7XG4gICAgICAgIC8vIERvbid0IHByZWZldGNoIGlmIHVzaW5nIDJHIG9yIGlmIFNhdmUtRGF0YSBpcyBlbmFibGVkLlxuICAgICAgICBpZiAoY24uc2F2ZURhdGEgfHwgLzJnLy50ZXN0KGNuLmVmZmVjdGl2ZVR5cGUpKSByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKClcbiAgICAgIH1cbiAgICAgIHJldHVybiBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LCByb3V0ZSlcbiAgICAgICAgLnRoZW4oKG91dHB1dCkgPT5cbiAgICAgICAgICBQcm9taXNlLmFsbChcbiAgICAgICAgICAgIGNhblByZWZldGNoXG4gICAgICAgICAgICAgID8gb3V0cHV0LnNjcmlwdHMubWFwKChzY3JpcHQpID0+IHByZWZldGNoVmlhRG9tKHNjcmlwdCwgJ3NjcmlwdCcpKVxuICAgICAgICAgICAgICA6IFtdXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICByZXF1ZXN0SWRsZUNhbGxiYWNrKCgpID0+IHRoaXMubG9hZFJvdXRlKHJvdXRlKSlcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKFxuICAgICAgICAgIC8vIHN3YWxsb3cgcHJlZmV0Y2ggZXJyb3JzXG4gICAgICAgICAgKCkgPT4ge31cbiAgICAgICAgKVxuICAgIH0sXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUm91dGVMb2FkZXJcbiIsIi8qIGdsb2JhbCB3aW5kb3cgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSb3V0ZXIsIHsgTmV4dFJvdXRlciB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgUm91dGVyQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dCdcblxudHlwZSBDbGFzc0FyZ3VtZW50czxUPiA9IFQgZXh0ZW5kcyBuZXcgKC4uLmFyZ3M6IGluZmVyIFUpID0+IGFueSA/IFUgOiBhbnlcblxudHlwZSBSb3V0ZXJBcmdzID0gQ2xhc3NBcmd1bWVudHM8dHlwZW9mIFJvdXRlcj5cblxudHlwZSBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IFJvdXRlciB8IG51bGxcbiAgcmVhZHlDYWxsYmFja3M6IEFycmF5PCgpID0+IGFueT5cbiAgcmVhZHkoY2I6ICgpID0+IGFueSk6IHZvaWRcbn1cblxuZXhwb3J0IHsgUm91dGVyLCBOZXh0Um91dGVyIH1cblxuZXhwb3J0IHR5cGUgU2luZ2xldG9uUm91dGVyID0gU2luZ2xldG9uUm91dGVyQmFzZSAmIE5leHRSb3V0ZXJcblxuY29uc3Qgc2luZ2xldG9uUm91dGVyOiBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IG51bGwsIC8vIGhvbGRzIHRoZSBhY3R1YWwgcm91dGVyIGluc3RhbmNlXG4gIHJlYWR5Q2FsbGJhY2tzOiBbXSxcbiAgcmVhZHkoY2I6ICgpID0+IHZvaWQpIHtcbiAgICBpZiAodGhpcy5yb3V0ZXIpIHJldHVybiBjYigpXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLnJlYWR5Q2FsbGJhY2tzLnB1c2goY2IpXG4gICAgfVxuICB9LFxufVxuXG4vLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG5jb25zdCB1cmxQcm9wZXJ0eUZpZWxkcyA9IFtcbiAgJ3BhdGhuYW1lJyxcbiAgJ3JvdXRlJyxcbiAgJ3F1ZXJ5JyxcbiAgJ2FzUGF0aCcsXG4gICdjb21wb25lbnRzJyxcbiAgJ2lzRmFsbGJhY2snLFxuICAnYmFzZVBhdGgnLFxuICAnbG9jYWxlJyxcbiAgJ2xvY2FsZXMnLFxuICAnZGVmYXVsdExvY2FsZScsXG4gICdpc1JlYWR5Jyxcbl1cbmNvbnN0IHJvdXRlckV2ZW50cyA9IFtcbiAgJ3JvdXRlQ2hhbmdlU3RhcnQnLFxuICAnYmVmb3JlSGlzdG9yeUNoYW5nZScsXG4gICdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxcbiAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAnaGFzaENoYW5nZVN0YXJ0JyxcbiAgJ2hhc2hDaGFuZ2VDb21wbGV0ZScsXG5dXG5jb25zdCBjb3JlTWV0aG9kRmllbGRzID0gW1xuICAncHVzaCcsXG4gICdyZXBsYWNlJyxcbiAgJ3JlbG9hZCcsXG4gICdiYWNrJyxcbiAgJ3ByZWZldGNoJyxcbiAgJ2JlZm9yZVBvcFN0YXRlJyxcbl1cblxuLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgJ2V2ZW50cycsIHtcbiAgZ2V0KCkge1xuICAgIHJldHVybiBSb3V0ZXIuZXZlbnRzXG4gIH0sXG59KVxuXG51cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKChmaWVsZDogc3RyaW5nKSA9PiB7XG4gIC8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2UsIHdlIG5lZWQgdG8gcmV0dXJuXG4gIC8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuICAvLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbiAgLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgZmllbGQsIHtcbiAgICBnZXQoKSB7XG4gICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdIGFzIHN0cmluZ1xuICAgIH0sXG4gIH0pXG59KVxuXG5jb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkOiBzdHJpbmcpID0+IHtcbiAgLy8gV2UgZG9uJ3QgcmVhbGx5IGtub3cgdGhlIHR5cGVzIGhlcmUsIHNvIHdlIGFkZCB0aGVtIGxhdGVyIGluc3RlYWRcbiAgOyhzaW5nbGV0b25Sb3V0ZXIgYXMgYW55KVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICB9XG59KVxuXG5yb3V0ZXJFdmVudHMuZm9yRWFjaCgoZXZlbnQ6IHN0cmluZykgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCkgPT4ge1xuICAgIFJvdXRlci5ldmVudHMub24oZXZlbnQsICguLi5hcmdzKSA9PiB7XG4gICAgICBjb25zdCBldmVudEZpZWxkID0gYG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZyhcbiAgICAgICAgMVxuICAgICAgKX1gXG4gICAgICBjb25zdCBfc2luZ2xldG9uUm91dGVyID0gc2luZ2xldG9uUm91dGVyIGFzIGFueVxuICAgICAgaWYgKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YClcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGAke2Vyci5tZXNzYWdlfVxcbiR7ZXJyLnN0YWNrfWApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9KVxufSlcblxuZnVuY3Rpb24gZ2V0Um91dGVyKCk6IFJvdXRlciB7XG4gIGlmICghc2luZ2xldG9uUm91dGVyLnJvdXRlcikge1xuICAgIGNvbnN0IG1lc3NhZ2UgPVxuICAgICAgJ05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nICtcbiAgICAgICdZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBpbnNpZGUgdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbidcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBFeHBvcnQgdGhlIHNpbmdsZXRvblJvdXRlciBhbmQgdGhpcyBpcyB0aGUgcHVibGljIEFQSS5cbmV4cG9ydCBkZWZhdWx0IHNpbmdsZXRvblJvdXRlciBhcyBTaW5nbGV0b25Sb3V0ZXJcblxuLy8gUmVleHBvcnQgdGhlIHdpdGhSb3V0ZSBIT0NcbmV4cG9ydCB7IGRlZmF1bHQgYXMgd2l0aFJvdXRlciB9IGZyb20gJy4vd2l0aC1yb3V0ZXInXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VSb3V0ZXIoKTogTmV4dFJvdXRlciB7XG4gIHJldHVybiBSZWFjdC51c2VDb250ZXh0KFJvdXRlckNvbnRleHQpXG59XG5cbi8vIElOVEVSTkFMIEFQSVNcbi8vIC0tLS0tLS0tLS0tLS1cbi8vIChkbyBub3QgdXNlIGZvbGxvd2luZyBleHBvcnRzIGluc2lkZSB0aGUgYXBwKVxuXG4vLyBDcmVhdGUgYSByb3V0ZXIgYW5kIGFzc2lnbiBpdCBhcyB0aGUgc2luZ2xldG9uIGluc3RhbmNlLlxuLy8gVGhpcyBpcyB1c2VkIGluIGNsaWVudCBzaWRlIHdoZW4gd2UgYXJlIGluaXRpbGl6aW5nIHRoZSBhcHAuXG4vLyBUaGlzIHNob3VsZCAqKm5vdCoqIHVzZSBpbnNpZGUgdGhlIHNlcnZlci5cbmV4cG9ydCBjb25zdCBjcmVhdGVSb3V0ZXIgPSAoLi4uYXJnczogUm91dGVyQXJncyk6IFJvdXRlciA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yb3V0ZXIgPSBuZXcgUm91dGVyKC4uLmFyZ3MpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKChjYikgPT4gY2IoKSlcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzID0gW11cblxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnQgZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcjogUm91dGVyKTogTmV4dFJvdXRlciB7XG4gIGNvbnN0IF9yb3V0ZXIgPSByb3V0ZXIgYXMgYW55XG4gIGNvbnN0IGluc3RhbmNlID0ge30gYXMgYW55XG5cbiAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcykge1xuICAgIGlmICh0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV0gPT09ICdvYmplY3QnKSB7XG4gICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBPYmplY3QuYXNzaWduKFxuICAgICAgICBBcnJheS5pc0FycmF5KF9yb3V0ZXJbcHJvcGVydHldKSA/IFtdIDoge30sXG4gICAgICAgIF9yb3V0ZXJbcHJvcGVydHldXG4gICAgICApIC8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IF9yb3V0ZXJbcHJvcGVydHldXG4gIH1cblxuICAvLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG4gIGluc3RhbmNlLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICBjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgaW5zdGFuY2VbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgICByZXR1cm4gX3JvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgcmVxdWVzdElkbGVDYWxsYmFjayBmcm9tICcuL3JlcXVlc3QtaWRsZS1jYWxsYmFjaydcblxudHlwZSBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXQgPSBQaWNrPEludGVyc2VjdGlvbk9ic2VydmVySW5pdCwgJ3Jvb3RNYXJnaW4nPlxudHlwZSBVc2VJbnRlcnNlY3Rpb24gPSB7IGRpc2FibGVkPzogYm9vbGVhbiB9ICYgVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0XG50eXBlIE9ic2VydmVDYWxsYmFjayA9IChpc1Zpc2libGU6IGJvb2xlYW4pID0+IHZvaWRcbnR5cGUgT2JzZXJ2ZXIgPSB7XG4gIGlkOiBzdHJpbmdcbiAgb2JzZXJ2ZXI6IEludGVyc2VjdGlvbk9ic2VydmVyXG4gIGVsZW1lbnRzOiBNYXA8RWxlbWVudCwgT2JzZXJ2ZUNhbGxiYWNrPlxufVxuXG5jb25zdCBoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciA9IHR5cGVvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciAhPT0gJ3VuZGVmaW5lZCdcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUludGVyc2VjdGlvbjxUIGV4dGVuZHMgRWxlbWVudD4oe1xuICByb290TWFyZ2luLFxuICBkaXNhYmxlZCxcbn06IFVzZUludGVyc2VjdGlvbik6IFsoZWxlbWVudDogVCB8IG51bGwpID0+IHZvaWQsIGJvb2xlYW5dIHtcbiAgY29uc3QgaXNEaXNhYmxlZDogYm9vbGVhbiA9IGRpc2FibGVkIHx8ICFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlclxuXG4gIGNvbnN0IHVub2JzZXJ2ZSA9IHVzZVJlZjxGdW5jdGlvbj4oKVxuICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICBjb25zdCBzZXRSZWYgPSB1c2VDYWxsYmFjayhcbiAgICAoZWw6IFQgfCBudWxsKSA9PiB7XG4gICAgICBpZiAodW5vYnNlcnZlLmN1cnJlbnQpIHtcbiAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQoKVxuICAgICAgICB1bm9ic2VydmUuY3VycmVudCA9IHVuZGVmaW5lZFxuICAgICAgfVxuXG4gICAgICBpZiAoaXNEaXNhYmxlZCB8fCB2aXNpYmxlKSByZXR1cm5cblxuICAgICAgaWYgKGVsICYmIGVsLnRhZ05hbWUpIHtcbiAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQgPSBvYnNlcnZlKFxuICAgICAgICAgIGVsLFxuICAgICAgICAgIChpc1Zpc2libGUpID0+IGlzVmlzaWJsZSAmJiBzZXRWaXNpYmxlKGlzVmlzaWJsZSksXG4gICAgICAgICAgeyByb290TWFyZ2luIH1cbiAgICAgICAgKVxuICAgICAgfVxuICAgIH0sXG4gICAgW2lzRGlzYWJsZWQsIHJvb3RNYXJnaW4sIHZpc2libGVdXG4gIClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICAgIGlmICghdmlzaWJsZSkgcmVxdWVzdElkbGVDYWxsYmFjaygoKSA9PiBzZXRWaXNpYmxlKHRydWUpKVxuICAgIH1cbiAgfSwgW3Zpc2libGVdKVxuXG4gIHJldHVybiBbc2V0UmVmLCB2aXNpYmxlXVxufVxuXG5mdW5jdGlvbiBvYnNlcnZlKFxuICBlbGVtZW50OiBFbGVtZW50LFxuICBjYWxsYmFjazogT2JzZXJ2ZUNhbGxiYWNrLFxuICBvcHRpb25zOiBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXRcbik6ICgpID0+IHZvaWQge1xuICBjb25zdCB7IGlkLCBvYnNlcnZlciwgZWxlbWVudHMgfSA9IGNyZWF0ZU9ic2VydmVyKG9wdGlvbnMpXG4gIGVsZW1lbnRzLnNldChlbGVtZW50LCBjYWxsYmFjaylcblxuICBvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQpXG4gIHJldHVybiBmdW5jdGlvbiB1bm9ic2VydmUoKTogdm9pZCB7XG4gICAgZWxlbWVudHMuZGVsZXRlKGVsZW1lbnQpXG4gICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVsZW1lbnQpXG5cbiAgICAvLyBEZXN0cm95IG9ic2VydmVyIHdoZW4gdGhlcmUncyBub3RoaW5nIGxlZnQgdG8gd2F0Y2g6XG4gICAgaWYgKGVsZW1lbnRzLnNpemUgPT09IDApIHtcbiAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKVxuICAgICAgb2JzZXJ2ZXJzLmRlbGV0ZShpZClcbiAgICB9XG4gIH1cbn1cblxuY29uc3Qgb2JzZXJ2ZXJzID0gbmV3IE1hcDxzdHJpbmcsIE9ic2VydmVyPigpXG5mdW5jdGlvbiBjcmVhdGVPYnNlcnZlcihvcHRpb25zOiBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXQpOiBPYnNlcnZlciB7XG4gIGNvbnN0IGlkID0gb3B0aW9ucy5yb290TWFyZ2luIHx8ICcnXG4gIGxldCBpbnN0YW5jZSA9IG9ic2VydmVycy5nZXQoaWQpXG4gIGlmIChpbnN0YW5jZSkge1xuICAgIHJldHVybiBpbnN0YW5jZVxuICB9XG5cbiAgY29uc3QgZWxlbWVudHMgPSBuZXcgTWFwPEVsZW1lbnQsIE9ic2VydmVDYWxsYmFjaz4oKVxuICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcykgPT4ge1xuICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgIGNvbnN0IGNhbGxiYWNrID0gZWxlbWVudHMuZ2V0KGVudHJ5LnRhcmdldClcbiAgICAgIGNvbnN0IGlzVmlzaWJsZSA9IGVudHJ5LmlzSW50ZXJzZWN0aW5nIHx8IGVudHJ5LmludGVyc2VjdGlvblJhdGlvID4gMFxuICAgICAgaWYgKGNhbGxiYWNrICYmIGlzVmlzaWJsZSkge1xuICAgICAgICBjYWxsYmFjayhpc1Zpc2libGUpXG4gICAgICB9XG4gICAgfSlcbiAgfSwgb3B0aW9ucylcblxuICBvYnNlcnZlcnMuc2V0KFxuICAgIGlkLFxuICAgIChpbnN0YW5jZSA9IHtcbiAgICAgIGlkLFxuICAgICAgb2JzZXJ2ZXIsXG4gICAgICBlbGVtZW50cyxcbiAgICB9KVxuICApXG4gIHJldHVybiBpbnN0YW5jZVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTmV4dENvbXBvbmVudFR5cGUsIE5leHRQYWdlQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCB7IE5leHRSb3V0ZXIsIHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuXG5leHBvcnQgdHlwZSBXaXRoUm91dGVyUHJvcHMgPSB7XG4gIHJvdXRlcjogTmV4dFJvdXRlclxufVxuXG5leHBvcnQgdHlwZSBFeGNsdWRlUm91dGVyUHJvcHM8UD4gPSBQaWNrPFxuICBQLFxuICBFeGNsdWRlPGtleW9mIFAsIGtleW9mIFdpdGhSb3V0ZXJQcm9wcz5cbj5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aFJvdXRlcjxcbiAgUCBleHRlbmRzIFdpdGhSb3V0ZXJQcm9wcyxcbiAgQyA9IE5leHRQYWdlQ29udGV4dFxuPihcbiAgQ29tcG9zZWRDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPEMsIGFueSwgUD5cbik6IFJlYWN0LkNvbXBvbmVudFR5cGU8RXhjbHVkZVJvdXRlclByb3BzPFA+PiB7XG4gIGZ1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzOiBhbnkpOiBKU1guRWxlbWVudCB7XG4gICAgcmV0dXJuIDxDb21wb3NlZENvbXBvbmVudCByb3V0ZXI9e3VzZVJvdXRlcigpfSB7Li4ucHJvcHN9IC8+XG4gIH1cblxuICBXaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHMgPSBDb21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHNcbiAgLy8gVGhpcyBpcyBuZWVkZWQgdG8gYWxsb3cgY2hlY2tpbmcgZm9yIGN1c3RvbSBnZXRJbml0aWFsUHJvcHMgaW4gX2FwcFxuICA7KFdpdGhSb3V0ZXJXcmFwcGVyIGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wcyA9IChDb21wb3NlZENvbXBvbmVudCBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHNcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjb25zdCBuYW1lID1cbiAgICAgIENvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvc2VkQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG4gICAgV2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWUgPSBgd2l0aFJvdXRlcigke25hbWV9KWBcbiAgfVxuXG4gIHJldHVybiBXaXRoUm91dGVyV3JhcHBlclxufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZUxvY2FsZVBhdGgoXG4gIHBhdGhuYW1lOiBzdHJpbmcsXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuKToge1xuICBkZXRlY3RlZExvY2FsZT86IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG59IHtcbiAgbGV0IGRldGVjdGVkTG9jYWxlOiBzdHJpbmcgfCB1bmRlZmluZWRcbiAgLy8gZmlyc3QgaXRlbSB3aWxsIGJlIGVtcHR5IHN0cmluZyBmcm9tIHNwbGl0dGluZyBhdCBmaXJzdCBjaGFyXG4gIGNvbnN0IHBhdGhuYW1lUGFydHMgPSBwYXRobmFtZS5zcGxpdCgnLycpXG5cbiAgOyhsb2NhbGVzIHx8IFtdKS5zb21lKChsb2NhbGUpID0+IHtcbiAgICBpZiAocGF0aG5hbWVQYXJ0c1sxXS50b0xvd2VyQ2FzZSgpID09PSBsb2NhbGUudG9Mb3dlckNhc2UoKSkge1xuICAgICAgZGV0ZWN0ZWRMb2NhbGUgPSBsb2NhbGVcbiAgICAgIHBhdGhuYW1lUGFydHMuc3BsaWNlKDEsIDEpXG4gICAgICBwYXRobmFtZSA9IHBhdGhuYW1lUGFydHMuam9pbignLycpIHx8ICcvJ1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlXG4gIH0pXG5cbiAgcmV0dXJuIHtcbiAgICBwYXRobmFtZSxcbiAgICBkZXRlY3RlZExvY2FsZSxcbiAgfVxufVxuIiwiLypcbk1JVCBMaWNlbnNlXG5cbkNvcHlyaWdodCAoYykgSmFzb24gTWlsbGVyIChodHRwczovL2phc29uZm9ybWF0LmNvbS8pXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovXG5cbi8vIFRoaXMgZmlsZSBpcyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vZGV2ZWxvcGl0L21pdHQvYmxvYi92MS4xLjMvc3JjL2luZGV4LmpzXG4vLyBJdCdzIGJlZW4gZWRpdGVkIGZvciB0aGUgbmVlZHMgb2YgdGhpcyBzY3JpcHRcbi8vIFNlZSB0aGUgTElDRU5TRSBhdCB0aGUgdG9wIG9mIHRoZSBmaWxlXG5cbnR5cGUgSGFuZGxlciA9ICguLi5ldnRzOiBhbnlbXSkgPT4gdm9pZFxuXG5leHBvcnQgdHlwZSBNaXR0RW1pdHRlciA9IHtcbiAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pOiB2b2lkXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1pdHQoKTogTWl0dEVtaXR0ZXIge1xuICBjb25zdCBhbGw6IHsgW3M6IHN0cmluZ106IEhhbmRsZXJbXSB9ID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXG4gIHJldHVybiB7XG4gICAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICA7KGFsbFt0eXBlXSB8fCAoYWxsW3R5cGVdID0gW10pKS5wdXNoKGhhbmRsZXIpXG4gICAgfSxcblxuICAgIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIGlmIChhbGxbdHlwZV0pIHtcbiAgICAgICAgYWxsW3R5cGVdLnNwbGljZShhbGxbdHlwZV0uaW5kZXhPZihoYW5kbGVyKSA+Pj4gMCwgMSlcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICA7KGFsbFt0eXBlXSB8fCBbXSkuc2xpY2UoKS5tYXAoKGhhbmRsZXI6IEhhbmRsZXIpID0+IHtcbiAgICAgICAgaGFuZGxlciguLi5ldnRzKVxuICAgICAgfSlcbiAgICB9LFxuICB9XG59XG4iLCIvKiBnbG9iYWwgX19ORVhUX0RBVEFfXyAqL1xuLy8gdHNsaW50OmRpc2FibGU6bm8tY29uc29sZVxuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7XG4gIG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoLFxuICByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCxcbn0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaCdcbmltcG9ydCB7IEdvb2RQYWdlQ2FjaGUsIFN0eWxlU2hlZXRUdXBsZSB9IGZyb20gJy4uLy4uLy4uL2NsaWVudC9wYWdlLWxvYWRlcidcbmltcG9ydCB7XG4gIGdldENsaWVudEJ1aWxkTWFuaWZlc3QsXG4gIGlzQXNzZXRFcnJvcixcbiAgbWFya0Fzc2V0RXJyb3IsXG59IGZyb20gJy4uLy4uLy4uL2NsaWVudC9yb3V0ZS1sb2FkZXInXG5pbXBvcnQgeyBEb21haW5Mb2NhbGVzIH0gZnJvbSAnLi4vLi4vc2VydmVyL2NvbmZpZydcbmltcG9ydCB7IGRlbm9ybWFsaXplUGFnZVBhdGggfSBmcm9tICcuLi8uLi9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoJ1xuaW1wb3J0IHsgbm9ybWFsaXplTG9jYWxlUGF0aCB9IGZyb20gJy4uL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoJ1xuaW1wb3J0IG1pdHQsIHsgTWl0dEVtaXR0ZXIgfSBmcm9tICcuLi9taXR0J1xuaW1wb3J0IHtcbiAgQXBwQ29udGV4dFR5cGUsXG4gIGZvcm1hdFdpdGhWYWxpZGF0aW9uLFxuICBnZXRMb2NhdGlvbk9yaWdpbixcbiAgZ2V0VVJMLFxuICBsb2FkR2V0SW5pdGlhbFByb3BzLFxuICBOZXh0UGFnZUNvbnRleHQsXG4gIFNULFxuICBORVhUX0RBVEEsXG59IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IHsgaXNEeW5hbWljUm91dGUgfSBmcm9tICcuL3V0aWxzL2lzLWR5bmFtaWMnXG5pbXBvcnQgeyBwYXJzZVJlbGF0aXZlVXJsIH0gZnJvbSAnLi91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi91dGlscy9xdWVyeXN0cmluZydcbmltcG9ydCByZXNvbHZlUmV3cml0ZXMgZnJvbSAnLi91dGlscy9yZXNvbHZlLXJld3JpdGVzJ1xuaW1wb3J0IHsgZ2V0Um91dGVNYXRjaGVyIH0gZnJvbSAnLi91dGlscy9yb3V0ZS1tYXRjaGVyJ1xuaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vdXRpbHMvcm91dGUtcmVnZXgnXG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgLyogcHJvZCAqL1xuICAgIF9fTkVYVF9EQVRBX186IE5FWFRfREFUQVxuICB9XG59XG5cbmludGVyZmFjZSBSb3V0ZVByb3BlcnRpZXMge1xuICBzaGFsbG93OiBib29sZWFuXG59XG5cbmludGVyZmFjZSBUcmFuc2l0aW9uT3B0aW9ucyB7XG4gIHNoYWxsb3c/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlXG4gIHNjcm9sbD86IGJvb2xlYW5cbn1cblxuaW50ZXJmYWNlIE5leHRIaXN0b3J5U3RhdGUge1xuICB1cmw6IHN0cmluZ1xuICBhczogc3RyaW5nXG4gIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zXG59XG5cbnR5cGUgSGlzdG9yeVN0YXRlID1cbiAgfCBudWxsXG4gIHwgeyBfX046IGZhbHNlIH1cbiAgfCAoeyBfX046IHRydWU7IGlkeDogbnVtYmVyIH0gJiBOZXh0SGlzdG9yeVN0YXRlKVxuXG5sZXQgZGV0ZWN0RG9tYWluTG9jYWxlOiB0eXBlb2YgaW1wb3J0KCcuLi9pMThuL2RldGVjdC1kb21haW4tbG9jYWxlJykuZGV0ZWN0RG9tYWluTG9jYWxlXG5cbmlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gIGRldGVjdERvbWFpbkxvY2FsZSA9IHJlcXVpcmUoJy4uL2kxOG4vZGV0ZWN0LWRvbWFpbi1sb2NhbGUnKVxuICAgIC5kZXRlY3REb21haW5Mb2NhbGVcbn1cblxuY29uc3QgYmFzZVBhdGggPSAocHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSCBhcyBzdHJpbmcpIHx8ICcnXG5cbmZ1bmN0aW9uIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSB7XG4gIHJldHVybiBPYmplY3QuYXNzaWduKG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJyksIHtcbiAgICBjYW5jZWxsZWQ6IHRydWUsXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGFkZFBhdGhQcmVmaXgocGF0aDogc3RyaW5nLCBwcmVmaXg/OiBzdHJpbmcpIHtcbiAgcmV0dXJuIHByZWZpeCAmJiBwYXRoLnN0YXJ0c1dpdGgoJy8nKVxuICAgID8gcGF0aCA9PT0gJy8nXG4gICAgICA/IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKHByZWZpeClcbiAgICAgIDogYCR7cHJlZml4fSR7cGF0aE5vUXVlcnlIYXNoKHBhdGgpID09PSAnLycgPyBwYXRoLnN1YnN0cmluZygxKSA6IHBhdGh9YFxuICAgIDogcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RG9tYWluTG9jYWxlKFxuICBwYXRoOiBzdHJpbmcsXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlLFxuICBsb2NhbGVzPzogc3RyaW5nW10sXG4gIGRvbWFpbkxvY2FsZXM/OiBEb21haW5Mb2NhbGVzXG4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICBsb2NhbGUgPSBsb2NhbGUgfHwgbm9ybWFsaXplTG9jYWxlUGF0aChwYXRoLCBsb2NhbGVzKS5kZXRlY3RlZExvY2FsZVxuXG4gICAgY29uc3QgZGV0ZWN0ZWREb21haW4gPSBkZXRlY3REb21haW5Mb2NhbGUoZG9tYWluTG9jYWxlcywgdW5kZWZpbmVkLCBsb2NhbGUpXG5cbiAgICBpZiAoZGV0ZWN0ZWREb21haW4pIHtcbiAgICAgIHJldHVybiBgaHR0cCR7ZGV0ZWN0ZWREb21haW4uaHR0cCA/ICcnIDogJ3MnfTovLyR7ZGV0ZWN0ZWREb21haW4uZG9tYWlufSR7XG4gICAgICAgIGJhc2VQYXRoIHx8ICcnXG4gICAgICB9JHtsb2NhbGUgPT09IGRldGVjdGVkRG9tYWluLmRlZmF1bHRMb2NhbGUgPyAnJyA6IGAvJHtsb2NhbGV9YH0ke3BhdGh9YFxuICAgIH1cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIHJldHVybiBmYWxzZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkTG9jYWxlKFxuICBwYXRoOiBzdHJpbmcsXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlLFxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICByZXR1cm4gbG9jYWxlICYmXG4gICAgICBsb2NhbGUgIT09IGRlZmF1bHRMb2NhbGUgJiZcbiAgICAgICFwYXRoLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlICsgJy8nKSAmJlxuICAgICAgcGF0aCAhPT0gJy8nICsgbG9jYWxlXG4gICAgICA/IGFkZFBhdGhQcmVmaXgocGF0aCwgJy8nICsgbG9jYWxlKVxuICAgICAgOiBwYXRoXG4gIH1cbiAgcmV0dXJuIHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbExvY2FsZShwYXRoOiBzdHJpbmcsIGxvY2FsZT86IHN0cmluZykge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgIHJldHVybiBsb2NhbGUgJiZcbiAgICAgIChwYXRoLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlICsgJy8nKSB8fCBwYXRoID09PSAnLycgKyBsb2NhbGUpXG4gICAgICA/IHBhdGguc3Vic3RyKGxvY2FsZS5sZW5ndGggKyAxKSB8fCAnLydcbiAgICAgIDogcGF0aFxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmZ1bmN0aW9uIHBhdGhOb1F1ZXJ5SGFzaChwYXRoOiBzdHJpbmcpIHtcbiAgY29uc3QgcXVlcnlJbmRleCA9IHBhdGguaW5kZXhPZignPycpXG4gIGNvbnN0IGhhc2hJbmRleCA9IHBhdGguaW5kZXhPZignIycpXG5cbiAgaWYgKHF1ZXJ5SW5kZXggPiAtMSB8fCBoYXNoSW5kZXggPiAtMSkge1xuICAgIHBhdGggPSBwYXRoLnN1YnN0cmluZygwLCBxdWVyeUluZGV4ID4gLTEgPyBxdWVyeUluZGV4IDogaGFzaEluZGV4KVxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYXNCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcGF0aCA9IHBhdGhOb1F1ZXJ5SGFzaChwYXRoKVxuICByZXR1cm4gcGF0aCA9PT0gYmFzZVBhdGggfHwgcGF0aC5zdGFydHNXaXRoKGJhc2VQYXRoICsgJy8nKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgLy8gd2Ugb25seSBhZGQgdGhlIGJhc2VwYXRoIG9uIHJlbGF0aXZlIHVybHNcbiAgcmV0dXJuIGFkZFBhdGhQcmVmaXgocGF0aCwgYmFzZVBhdGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICBwYXRoID0gcGF0aC5zbGljZShiYXNlUGF0aC5sZW5ndGgpXG4gIGlmICghcGF0aC5zdGFydHNXaXRoKCcvJykpIHBhdGggPSBgLyR7cGF0aH1gXG4gIHJldHVybiBwYXRoXG59XG5cbi8qKlxuICogRGV0ZWN0cyB3aGV0aGVyIGEgZ2l2ZW4gdXJsIGlzIHJvdXRhYmxlIGJ5IHRoZSBOZXh0LmpzIHJvdXRlciAoYnJvd3NlciBvbmx5KS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzTG9jYWxVUkwodXJsOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgLy8gcHJldmVudCBhIGh5ZHJhdGlvbiBtaXNtYXRjaCBvbiBocmVmIGZvciB1cmwgd2l0aCBhbmNob3IgcmVmc1xuICBpZiAodXJsLnN0YXJ0c1dpdGgoJy8nKSB8fCB1cmwuc3RhcnRzV2l0aCgnIycpKSByZXR1cm4gdHJ1ZVxuICB0cnkge1xuICAgIC8vIGFic29sdXRlIHVybHMgY2FuIGJlIGxvY2FsIGlmIHRoZXkgYXJlIG9uIHRoZSBzYW1lIG9yaWdpblxuICAgIGNvbnN0IGxvY2F0aW9uT3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICAgIGNvbnN0IHJlc29sdmVkID0gbmV3IFVSTCh1cmwsIGxvY2F0aW9uT3JpZ2luKVxuICAgIHJldHVybiByZXNvbHZlZC5vcmlnaW4gPT09IGxvY2F0aW9uT3JpZ2luICYmIGhhc0Jhc2VQYXRoKHJlc29sdmVkLnBhdGhuYW1lKVxuICB9IGNhdGNoIChfKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxudHlwZSBVcmwgPSBVcmxPYmplY3QgfCBzdHJpbmdcblxuZXhwb3J0IGZ1bmN0aW9uIGludGVycG9sYXRlQXMoXG4gIHJvdXRlOiBzdHJpbmcsXG4gIGFzUGF0aG5hbWU6IHN0cmluZyxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4pIHtcbiAgbGV0IGludGVycG9sYXRlZFJvdXRlID0gJydcblxuICBjb25zdCBkeW5hbWljUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICBjb25zdCBkeW5hbWljR3JvdXBzID0gZHluYW1pY1JlZ2V4Lmdyb3Vwc1xuICBjb25zdCBkeW5hbWljTWF0Y2hlcyA9XG4gICAgLy8gVHJ5IHRvIG1hdGNoIHRoZSBkeW5hbWljIHJvdXRlIGFnYWluc3QgdGhlIGFzUGF0aFxuICAgIChhc1BhdGhuYW1lICE9PSByb3V0ZSA/IGdldFJvdXRlTWF0Y2hlcihkeW5hbWljUmVnZXgpKGFzUGF0aG5hbWUpIDogJycpIHx8XG4gICAgLy8gRmFsbCBiYWNrIHRvIHJlYWRpbmcgdGhlIHZhbHVlcyBmcm9tIHRoZSBocmVmXG4gICAgLy8gVE9ETzogc2hvdWxkIHRoaXMgdGFrZSBwcmlvcml0eTsgYWxzbyBuZWVkIHRvIGNoYW5nZSBpbiB0aGUgcm91dGVyLlxuICAgIHF1ZXJ5XG5cbiAgaW50ZXJwb2xhdGVkUm91dGUgPSByb3V0ZVxuICBjb25zdCBwYXJhbXMgPSBPYmplY3Qua2V5cyhkeW5hbWljR3JvdXBzKVxuXG4gIGlmIChcbiAgICAhcGFyYW1zLmV2ZXJ5KChwYXJhbSkgPT4ge1xuICAgICAgbGV0IHZhbHVlID0gZHluYW1pY01hdGNoZXNbcGFyYW1dIHx8ICcnXG4gICAgICBjb25zdCB7IHJlcGVhdCwgb3B0aW9uYWwgfSA9IGR5bmFtaWNHcm91cHNbcGFyYW1dXG5cbiAgICAgIC8vIHN1cHBvcnQgc2luZ2xlLWxldmVsIGNhdGNoLWFsbFxuICAgICAgLy8gVE9ETzogbW9yZSByb2J1c3QgaGFuZGxpbmcgZm9yIHVzZXItZXJyb3IgKHBhc3NpbmcgYC9gKVxuICAgICAgbGV0IHJlcGxhY2VkID0gYFske3JlcGVhdCA/ICcuLi4nIDogJyd9JHtwYXJhbX1dYFxuICAgICAgaWYgKG9wdGlvbmFsKSB7XG4gICAgICAgIHJlcGxhY2VkID0gYCR7IXZhbHVlID8gJy8nIDogJyd9WyR7cmVwbGFjZWR9XWBcbiAgICAgIH1cbiAgICAgIGlmIChyZXBlYXQgJiYgIUFycmF5LmlzQXJyYXkodmFsdWUpKSB2YWx1ZSA9IFt2YWx1ZV1cblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgKG9wdGlvbmFsIHx8IHBhcmFtIGluIGR5bmFtaWNNYXRjaGVzKSAmJlxuICAgICAgICAvLyBJbnRlcnBvbGF0ZSBncm91cCBpbnRvIGRhdGEgVVJMIGlmIHByZXNlbnRcbiAgICAgICAgKGludGVycG9sYXRlZFJvdXRlID1cbiAgICAgICAgICBpbnRlcnBvbGF0ZWRSb3V0ZSEucmVwbGFjZShcbiAgICAgICAgICAgIHJlcGxhY2VkLFxuICAgICAgICAgICAgcmVwZWF0XG4gICAgICAgICAgICAgID8gKHZhbHVlIGFzIHN0cmluZ1tdKVxuICAgICAgICAgICAgICAgICAgLm1hcChcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhlc2UgdmFsdWVzIHNob3VsZCBiZSBmdWxseSBlbmNvZGVkIGluc3RlYWQgb2YganVzdFxuICAgICAgICAgICAgICAgICAgICAvLyBwYXRoIGRlbGltaXRlciBlc2NhcGVkIHNpbmNlIHRoZXkgYXJlIGJlaW5nIGluc2VydGVkXG4gICAgICAgICAgICAgICAgICAgIC8vIGludG8gdGhlIFVSTCBhbmQgd2UgZXhwZWN0IFVSTCBlbmNvZGVkIHNlZ21lbnRzXG4gICAgICAgICAgICAgICAgICAgIC8vIHdoZW4gcGFyc2luZyBkeW5hbWljIHJvdXRlIHBhcmFtc1xuICAgICAgICAgICAgICAgICAgICAoc2VnbWVudCkgPT4gZW5jb2RlVVJJQ29tcG9uZW50KHNlZ21lbnQpXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAuam9pbignLycpXG4gICAgICAgICAgICAgIDogZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlIGFzIHN0cmluZylcbiAgICAgICAgICApIHx8ICcvJylcbiAgICAgIClcbiAgICB9KVxuICApIHtcbiAgICBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnIC8vIGRpZCBub3Qgc2F0aXNmeSBhbGwgcmVxdWlyZW1lbnRzXG5cbiAgICAvLyBuLmIuIFdlIGlnbm9yZSB0aGlzIGVycm9yIGJlY2F1c2Ugd2UgaGFuZGxlIHdhcm5pbmcgZm9yIHRoaXMgY2FzZSBpblxuICAgIC8vIGRldmVsb3BtZW50IGluIHRoZSBgPExpbms+YCBjb21wb25lbnQgZGlyZWN0bHkuXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwYXJhbXMsXG4gICAgcmVzdWx0OiBpbnRlcnBvbGF0ZWRSb3V0ZSxcbiAgfVxufVxuXG5mdW5jdGlvbiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnk6IFBhcnNlZFVybFF1ZXJ5LCBwYXJhbXM6IHN0cmluZ1tdKSB7XG4gIGNvbnN0IGZpbHRlcmVkUXVlcnk6IFBhcnNlZFVybFF1ZXJ5ID0ge31cblxuICBPYmplY3Qua2V5cyhxdWVyeSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgaWYgKCFwYXJhbXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgZmlsdGVyZWRRdWVyeVtrZXldID0gcXVlcnlba2V5XVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIGZpbHRlcmVkUXVlcnlcbn1cblxuLyoqXG4gKiBSZXNvbHZlcyBhIGdpdmVuIGh5cGVybGluayB3aXRoIGEgY2VydGFpbiByb3V0ZXIgc3RhdGUgKGJhc2VQYXRoIG5vdCBpbmNsdWRlZCkuXG4gKiBQcmVzZXJ2ZXMgYWJzb2x1dGUgdXJscy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVIcmVmKFxuICBjdXJyZW50UGF0aDogc3RyaW5nLFxuICBocmVmOiBVcmwsXG4gIHJlc29sdmVBcz86IGJvb2xlYW5cbik6IHN0cmluZyB7XG4gIC8vIHdlIHVzZSBhIGR1bW15IGJhc2UgdXJsIGZvciByZWxhdGl2ZSB1cmxzXG4gIGNvbnN0IGJhc2UgPSBuZXcgVVJMKGN1cnJlbnRQYXRoLCAnaHR0cDovL24nKVxuICBjb25zdCB1cmxBc1N0cmluZyA9XG4gICAgdHlwZW9mIGhyZWYgPT09ICdzdHJpbmcnID8gaHJlZiA6IGZvcm1hdFdpdGhWYWxpZGF0aW9uKGhyZWYpXG4gIC8vIFJldHVybiBiZWNhdXNlIGl0IGNhbm5vdCBiZSByb3V0ZWQgYnkgdGhlIE5leHQuanMgcm91dGVyXG4gIGlmICghaXNMb2NhbFVSTCh1cmxBc1N0cmluZykpIHtcbiAgICByZXR1cm4gKHJlc29sdmVBcyA/IFt1cmxBc1N0cmluZ10gOiB1cmxBc1N0cmluZykgYXMgc3RyaW5nXG4gIH1cbiAgdHJ5IHtcbiAgICBjb25zdCBmaW5hbFVybCA9IG5ldyBVUkwodXJsQXNTdHJpbmcsIGJhc2UpXG4gICAgZmluYWxVcmwucGF0aG5hbWUgPSBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChmaW5hbFVybC5wYXRobmFtZSlcbiAgICBsZXQgaW50ZXJwb2xhdGVkQXMgPSAnJ1xuXG4gICAgaWYgKFxuICAgICAgaXNEeW5hbWljUm91dGUoZmluYWxVcmwucGF0aG5hbWUpICYmXG4gICAgICBmaW5hbFVybC5zZWFyY2hQYXJhbXMgJiZcbiAgICAgIHJlc29sdmVBc1xuICAgICkge1xuICAgICAgY29uc3QgcXVlcnkgPSBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KGZpbmFsVXJsLnNlYXJjaFBhcmFtcylcblxuICAgICAgY29uc3QgeyByZXN1bHQsIHBhcmFtcyB9ID0gaW50ZXJwb2xhdGVBcyhcbiAgICAgICAgZmluYWxVcmwucGF0aG5hbWUsXG4gICAgICAgIGZpbmFsVXJsLnBhdGhuYW1lLFxuICAgICAgICBxdWVyeVxuICAgICAgKVxuXG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIGludGVycG9sYXRlZEFzID0gZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICAgIHBhdGhuYW1lOiByZXN1bHQsXG4gICAgICAgICAgaGFzaDogZmluYWxVcmwuaGFzaCxcbiAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBwYXJhbXMpLFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGlmIHRoZSBvcmlnaW4gZGlkbid0IGNoYW5nZSwgaXQgbWVhbnMgd2UgcmVjZWl2ZWQgYSByZWxhdGl2ZSBocmVmXG4gICAgY29uc3QgcmVzb2x2ZWRIcmVmID1cbiAgICAgIGZpbmFsVXJsLm9yaWdpbiA9PT0gYmFzZS5vcmlnaW5cbiAgICAgICAgPyBmaW5hbFVybC5ocmVmLnNsaWNlKGZpbmFsVXJsLm9yaWdpbi5sZW5ndGgpXG4gICAgICAgIDogZmluYWxVcmwuaHJlZlxuXG4gICAgcmV0dXJuIChyZXNvbHZlQXNcbiAgICAgID8gW3Jlc29sdmVkSHJlZiwgaW50ZXJwb2xhdGVkQXMgfHwgcmVzb2x2ZWRIcmVmXVxuICAgICAgOiByZXNvbHZlZEhyZWYpIGFzIHN0cmluZ1xuICB9IGNhdGNoIChfKSB7XG4gICAgcmV0dXJuIChyZXNvbHZlQXMgPyBbdXJsQXNTdHJpbmddIDogdXJsQXNTdHJpbmcpIGFzIHN0cmluZ1xuICB9XG59XG5cbmZ1bmN0aW9uIHN0cmlwT3JpZ2luKHVybDogc3RyaW5nKSB7XG4gIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcblxuICByZXR1cm4gdXJsLnN0YXJ0c1dpdGgob3JpZ2luKSA/IHVybC5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aCkgOiB1cmxcbn1cblxuZnVuY3Rpb24gcHJlcGFyZVVybEFzKHJvdXRlcjogTmV4dFJvdXRlciwgdXJsOiBVcmwsIGFzPzogVXJsKSB7XG4gIC8vIElmIHVybCBhbmQgYXMgcHJvdmlkZWQgYXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uLFxuICAvLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxuICBsZXQgW3Jlc29sdmVkSHJlZiwgcmVzb2x2ZWRBc10gPSByZXNvbHZlSHJlZihyb3V0ZXIucGF0aG5hbWUsIHVybCwgdHJ1ZSlcbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICBjb25zdCBocmVmSGFkT3JpZ2luID0gcmVzb2x2ZWRIcmVmLnN0YXJ0c1dpdGgob3JpZ2luKVxuICBjb25zdCBhc0hhZE9yaWdpbiA9IHJlc29sdmVkQXMgJiYgcmVzb2x2ZWRBcy5zdGFydHNXaXRoKG9yaWdpbilcblxuICByZXNvbHZlZEhyZWYgPSBzdHJpcE9yaWdpbihyZXNvbHZlZEhyZWYpXG4gIHJlc29sdmVkQXMgPSByZXNvbHZlZEFzID8gc3RyaXBPcmlnaW4ocmVzb2x2ZWRBcykgOiByZXNvbHZlZEFzXG5cbiAgY29uc3QgcHJlcGFyZWRVcmwgPSBocmVmSGFkT3JpZ2luID8gcmVzb2x2ZWRIcmVmIDogYWRkQmFzZVBhdGgocmVzb2x2ZWRIcmVmKVxuICBjb25zdCBwcmVwYXJlZEFzID0gYXNcbiAgICA/IHN0cmlwT3JpZ2luKHJlc29sdmVIcmVmKHJvdXRlci5wYXRobmFtZSwgYXMpKVxuICAgIDogcmVzb2x2ZWRBcyB8fCByZXNvbHZlZEhyZWZcblxuICByZXR1cm4ge1xuICAgIHVybDogcHJlcGFyZWRVcmwsXG4gICAgYXM6IGFzSGFkT3JpZ2luID8gcHJlcGFyZWRBcyA6IGFkZEJhc2VQYXRoKHByZXBhcmVkQXMpLFxuICB9XG59XG5cbmV4cG9ydCB0eXBlIEJhc2VSb3V0ZXIgPSB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbn1cblxuZXhwb3J0IHR5cGUgTmV4dFJvdXRlciA9IEJhc2VSb3V0ZXIgJlxuICBQaWNrPFxuICAgIFJvdXRlcixcbiAgICB8ICdwdXNoJ1xuICAgIHwgJ3JlcGxhY2UnXG4gICAgfCAncmVsb2FkJ1xuICAgIHwgJ2JhY2snXG4gICAgfCAncHJlZmV0Y2gnXG4gICAgfCAnYmVmb3JlUG9wU3RhdGUnXG4gICAgfCAnZXZlbnRzJ1xuICAgIHwgJ2lzRmFsbGJhY2snXG4gICAgfCAnaXNSZWFkeSdcbiAgPlxuXG5leHBvcnQgdHlwZSBQcmVmZXRjaE9wdGlvbnMgPSB7XG4gIHByaW9yaXR5PzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxufVxuXG5leHBvcnQgdHlwZSBQcml2YXRlUm91dGVJbmZvID1cbiAgfCAoT21pdDxDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8sICdzdHlsZVNoZWV0cyc+ICYgeyBpbml0aWFsOiB0cnVlIH0pXG4gIHwgQ29tcGxldGVQcml2YXRlUm91dGVJbmZvXG5cbmV4cG9ydCB0eXBlIENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbyA9IHtcbiAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gIHN0eWxlU2hlZXRzOiBTdHlsZVNoZWV0VHVwbGVbXVxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxuICBwcm9wcz86IFJlY29yZDxzdHJpbmcsIGFueT5cbiAgZXJyPzogRXJyb3JcbiAgZXJyb3I/OiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHMgPSBQaWNrPENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbywgJ0NvbXBvbmVudCcgfCAnZXJyJz4gJiB7XG4gIHJvdXRlcjogUm91dGVyXG59ICYgUmVjb3JkPHN0cmluZywgYW55PlxuZXhwb3J0IHR5cGUgQXBwQ29tcG9uZW50ID0gQ29tcG9uZW50VHlwZTxBcHBQcm9wcz5cblxudHlwZSBTdWJzY3JpcHRpb24gPSAoXG4gIGRhdGE6IFByaXZhdGVSb3V0ZUluZm8sXG4gIEFwcDogQXBwQ29tcG9uZW50LFxuICByZXNldFNjcm9sbDogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9IHwgbnVsbFxuKSA9PiBQcm9taXNlPHZvaWQ+XG5cbnR5cGUgQmVmb3JlUG9wU3RhdGVDYWxsYmFjayA9IChzdGF0ZTogTmV4dEhpc3RvcnlTdGF0ZSkgPT4gYm9vbGVhblxuXG50eXBlIENvbXBvbmVudExvYWRDYW5jZWwgPSAoKCkgPT4gdm9pZCkgfCBudWxsXG5cbnR5cGUgSGlzdG9yeU1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnIHwgJ3B1c2hTdGF0ZSdcblxuY29uc3QgbWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gPVxuICBwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OICYmXG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gICdzY3JvbGxSZXN0b3JhdGlvbicgaW4gd2luZG93Lmhpc3RvcnkgJiZcbiAgISEoZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICBsZXQgdiA9ICdfX25leHQnXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzXG4gICAgICByZXR1cm4gc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSh2LCB2KSwgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSh2KSwgdHJ1ZVxuICAgIH0gY2F0Y2ggKG4pIHt9XG4gIH0pKClcblxuY29uc3QgU1NHX0RBVEFfTk9UX0ZPVU5EID0gU3ltYm9sKCdTU0dfREFUQV9OT1RfRk9VTkQnKVxuXG5mdW5jdGlvbiBmZXRjaFJldHJ5KHVybDogc3RyaW5nLCBhdHRlbXB0czogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgcmV0dXJuIGZldGNoKHVybCwge1xuICAgIC8vIENvb2tpZXMgYXJlIHJlcXVpcmVkIHRvIGJlIHByZXNlbnQgZm9yIE5leHQuanMnIFNTRyBcIlByZXZpZXcgTW9kZVwiLlxuICAgIC8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuICAgIC8vXG4gICAgLy8gPiBgZmV0Y2hgIHdvbuKAmXQgc2VuZCBjb29raWVzLCB1bmxlc3MgeW91IHNldCB0aGUgY3JlZGVudGlhbHMgaW5pdFxuICAgIC8vID4gb3B0aW9uLlxuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbiAgICAvL1xuICAgIC8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4gICAgLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuICAgIC8vID4gb3B0aW9uIGluc3RlYWQgb2YgcmVseWluZyBvbiB0aGUgZGVmYXVsdC5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbiAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgaWYgKCFyZXMub2spIHtcbiAgICAgIGlmIChhdHRlbXB0cyA+IDEgJiYgcmVzLnN0YXR1cyA+PSA1MDApIHtcbiAgICAgICAgcmV0dXJuIGZldGNoUmV0cnkodXJsLCBhdHRlbXB0cyAtIDEpXG4gICAgICB9XG4gICAgICBpZiAocmVzLnN0YXR1cyA9PT0gNDA0KSB7XG4gICAgICAgIHJldHVybiByZXMuanNvbigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICBpZiAoZGF0YS5ub3RGb3VuZCkge1xuICAgICAgICAgICAgcmV0dXJuIHsgbm90Rm91bmQ6IFNTR19EQVRBX05PVF9GT1VORCB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYClcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYClcbiAgICB9XG4gICAgcmV0dXJuIHJlcy5qc29uKClcbiAgfSlcbn1cblxuZnVuY3Rpb24gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZjogc3RyaW5nLCBpc1NlcnZlclJlbmRlcjogYm9vbGVhbikge1xuICByZXR1cm4gZmV0Y2hSZXRyeShkYXRhSHJlZiwgaXNTZXJ2ZXJSZW5kZXIgPyAzIDogMSkuY2F0Y2goKGVycjogRXJyb3IpID0+IHtcbiAgICAvLyBXZSBzaG91bGQgb25seSB0cmlnZ2VyIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbiBpZiB0aGlzIHdhcyBjYXVzZWRcbiAgICAvLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuICAgIC8vIGxvb3AuXG5cbiAgICBpZiAoIWlzU2VydmVyUmVuZGVyKSB7XG4gICAgICBtYXJrQXNzZXRFcnJvcihlcnIpXG4gICAgfVxuICAgIHRocm93IGVyclxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZXIgaW1wbGVtZW50cyBCYXNlUm91dGVyIHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG5cbiAgLyoqXG4gICAqIE1hcCBvZiBhbGwgY29tcG9uZW50cyBsb2FkZWQgaW4gYFJvdXRlcmBcbiAgICovXG4gIGNvbXBvbmVudHM6IHsgW3BhdGhuYW1lOiBzdHJpbmddOiBQcml2YXRlUm91dGVJbmZvIH1cbiAgLy8gU3RhdGljIERhdGEgQ2FjaGVcbiAgc2RjOiB7IFthc1BhdGg6IHN0cmluZ106IG9iamVjdCB9ID0ge31cbiAgc3ViOiBTdWJzY3JpcHRpb25cbiAgY2xjOiBDb21wb25lbnRMb2FkQ2FuY2VsXG4gIHBhZ2VMb2FkZXI6IGFueVxuICBfYnBzOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrIHwgdW5kZWZpbmVkXG4gIGV2ZW50czogTWl0dEVtaXR0ZXJcbiAgX3dyYXBBcHA6IChBcHA6IEFwcENvbXBvbmVudCkgPT4gYW55XG4gIGlzU3NyOiBib29sZWFuXG4gIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgX2luRmxpZ2h0Um91dGU/OiBzdHJpbmdcbiAgX3NoYWxsb3c/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICBkb21haW5Mb2NhbGVzPzogRG9tYWluTG9jYWxlc1xuICBpc1JlYWR5OiBib29sZWFuXG5cbiAgcHJpdmF0ZSBfaWR4OiBudW1iZXIgPSAwXG5cbiAgc3RhdGljIGV2ZW50czogTWl0dEVtaXR0ZXIgPSBtaXR0KClcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIHtcbiAgICAgIGluaXRpYWxQcm9wcyxcbiAgICAgIHBhZ2VMb2FkZXIsXG4gICAgICBBcHAsXG4gICAgICB3cmFwQXBwLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgZXJyLFxuICAgICAgc3Vic2NyaXB0aW9uLFxuICAgICAgaXNGYWxsYmFjayxcbiAgICAgIGxvY2FsZSxcbiAgICAgIGxvY2FsZXMsXG4gICAgICBkZWZhdWx0TG9jYWxlLFxuICAgICAgZG9tYWluTG9jYWxlcyxcbiAgICB9OiB7XG4gICAgICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvblxuICAgICAgaW5pdGlhbFByb3BzOiBhbnlcbiAgICAgIHBhZ2VMb2FkZXI6IGFueVxuICAgICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gICAgICBBcHA6IEFwcENvbXBvbmVudFxuICAgICAgd3JhcEFwcDogKEFwcDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgICAgIGVycj86IEVycm9yXG4gICAgICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gICAgICBsb2NhbGU/OiBzdHJpbmdcbiAgICAgIGxvY2FsZXM/OiBzdHJpbmdbXVxuICAgICAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICAgICAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbiAgICB9XG4gICkge1xuICAgIC8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxuICAgIHRoaXMucm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcblxuICAgIC8vIHNldCB1cCB0aGUgY29tcG9uZW50IGNhY2hlIChieSByb3V0ZSBrZXlzKVxuICAgIHRoaXMuY29tcG9uZW50cyA9IHt9XG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuICAgIC8vIE90aGVyd2lzZSwgdGhpcyBjYXVzZSBpc3N1ZXMgd2hlbiB3aGVuIGdvaW5nIGJhY2sgYW5kXG4gICAgLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuICAgIGlmIChwYXRobmFtZSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICB0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0gPSB7XG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgaW5pdGlhbDogdHJ1ZSxcbiAgICAgICAgcHJvcHM6IGluaXRpYWxQcm9wcyxcbiAgICAgICAgZXJyLFxuICAgICAgICBfX05fU1NHOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU0csXG4gICAgICAgIF9fTl9TU1A6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTUCxcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10gPSB7XG4gICAgICBDb21wb25lbnQ6IEFwcCBhcyBDb21wb25lbnRUeXBlLFxuICAgICAgc3R5bGVTaGVldHM6IFtcbiAgICAgICAgLyogL19hcHAgZG9lcyBub3QgbmVlZCBpdHMgc3R5bGVzaGVldHMgbWFuYWdlZCAqL1xuICAgICAgXSxcbiAgICB9XG5cbiAgICAvLyBCYWNrd2FyZHMgY29tcGF0IGZvciBSb3V0ZXIucm91dGVyLmV2ZW50c1xuICAgIC8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG4gICAgdGhpcy5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgICB0aGlzLnBhZ2VMb2FkZXIgPSBwYWdlTG9hZGVyXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgLy8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcbiAgICAvLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuICAgIGNvbnN0IGF1dG9FeHBvcnREeW5hbWljID1cbiAgICAgIGlzRHluYW1pY1JvdXRlKHBhdGhuYW1lKSAmJiBzZWxmLl9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydFxuXG4gICAgdGhpcy5hc1BhdGggPSBhdXRvRXhwb3J0RHluYW1pYyA/IHBhdGhuYW1lIDogYXNcbiAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGhcbiAgICB0aGlzLnN1YiA9IHN1YnNjcmlwdGlvblxuICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwXG4gICAgLy8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgdGhpcy5pc1NzciA9IHRydWVcblxuICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2tcblxuICAgIHRoaXMuaXNSZWFkeSA9ICEhKFxuICAgICAgc2VsZi5fX05FWFRfREFUQV9fLmdzc3AgfHxcbiAgICAgIHNlbGYuX19ORVhUX0RBVEFfXy5naXAgfHxcbiAgICAgICghYXV0b0V4cG9ydER5bmFtaWMgJiYgIXNlbGYubG9jYXRpb24uc2VhcmNoKVxuICAgIClcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZVxuICAgICAgdGhpcy5sb2NhbGVzID0gbG9jYWxlc1xuICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlID0gZGVmYXVsdExvY2FsZVxuICAgICAgdGhpcy5kb21haW5Mb2NhbGVzID0gZG9tYWluTG9jYWxlc1xuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICBpZiAoYXMuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XG4gICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgIC8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgICAgZ2V0VVJMKCksXG4gICAgICAgICAgeyBsb2NhbGUgfVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSlcblxuICAgICAgLy8gZW5hYmxlIGN1c3RvbSBzY3JvbGwgcmVzdG9yYXRpb24gaGFuZGxpbmcgd2hlbiBhdmFpbGFibGVcbiAgICAgIC8vIG90aGVyd2lzZSBmYWxsYmFjayB0byBicm93c2VyJ3MgZGVmYXVsdCBoYW5kbGluZ1xuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgICAgd2luZG93Lmhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24gPSAnbWFudWFsJ1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25Qb3BTdGF0ZSA9IChlOiBQb3BTdGF0ZUV2ZW50KTogdm9pZCA9PiB7XG4gICAgY29uc3Qgc3RhdGUgPSBlLnN0YXRlIGFzIEhpc3RvcnlTdGF0ZVxuXG4gICAgaWYgKCFzdGF0ZSkge1xuICAgICAgLy8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4gICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgIC8vXG4gICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4gICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB0aGlzXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgZ2V0VVJMKClcbiAgICAgIClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICghc3RhdGUuX19OKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBsZXQgZm9yY2VkU2Nyb2xsOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0gfCB1bmRlZmluZWRcbiAgICBjb25zdCB7IHVybCwgYXMsIG9wdGlvbnMsIGlkeCB9ID0gc3RhdGVcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgIGlmICh0aGlzLl9pZHggIT09IGlkeCkge1xuICAgICAgICAgIC8vIFNuYXBzaG90IGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uOlxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgICAgICAgICAnX19uZXh0X3Njcm9sbF8nICsgdGhpcy5faWR4LFxuICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh7IHg6IHNlbGYucGFnZVhPZmZzZXQsIHk6IHNlbGYucGFnZVlPZmZzZXQgfSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9IGNhdGNoIHt9XG5cbiAgICAgICAgICAvLyBSZXN0b3JlIG9sZCBzY3JvbGwgcG9zaXRpb246XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHYgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdfX25leHRfc2Nyb2xsXycgKyBpZHgpXG4gICAgICAgICAgICBmb3JjZWRTY3JvbGwgPSBKU09OLnBhcnNlKHYhKVxuICAgICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgICAgZm9yY2VkU2Nyb2xsID0geyB4OiAwLCB5OiAwIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5faWR4ID0gaWR4XG5cbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCByZS1yZW5kZXIgb24gaW5pdGlhbCBsb2FkLFxuICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgIGlmICh0aGlzLmlzU3NyICYmIGFzID09PSB0aGlzLmFzUGF0aCAmJiBwYXRobmFtZSA9PT0gdGhpcy5wYXRobmFtZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuICAgIC8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG4gICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKHN0YXRlKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5jaGFuZ2UoXG4gICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgIHVybCxcbiAgICAgIGFzLFxuICAgICAgT2JqZWN0LmFzc2lnbjx7fSwgVHJhbnNpdGlvbk9wdGlvbnMsIFRyYW5zaXRpb25PcHRpb25zPih7fSwgb3B0aW9ucywge1xuICAgICAgICBzaGFsbG93OiBvcHRpb25zLnNoYWxsb3cgJiYgdGhpcy5fc2hhbGxvdyxcbiAgICAgICAgbG9jYWxlOiBvcHRpb25zLmxvY2FsZSB8fCB0aGlzLmRlZmF1bHRMb2NhbGUsXG4gICAgICB9KSxcbiAgICAgIGZvcmNlZFNjcm9sbFxuICAgIClcbiAgfVxuXG4gIHJlbG9hZCgpOiB2b2lkIHtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgfVxuXG4gIC8qKlxuICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICovXG4gIGJhY2soKSB7XG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHB1c2godXJsOiBVcmwsIGFzPzogVXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgIC8vIFRPRE86IHJlbW92ZSBpbiB0aGUgZnV0dXJlIHdoZW4gd2UgdXBkYXRlIGhpc3RvcnkgYmVmb3JlIHJvdXRlIGNoYW5nZVxuICAgICAgLy8gaXMgY29tcGxldGUsIGFzIHRoZSBwb3BzdGF0ZSBldmVudCBzaG91bGQgaGFuZGxlIHRoaXMgY2FwdHVyZS5cbiAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFNuYXBzaG90IHNjcm9sbCBwb3NpdGlvbiByaWdodCBiZWZvcmUgbmF2aWdhdGluZyB0byBhIG5ldyBwYWdlOlxuICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgICAgICAnX19uZXh0X3Njcm9sbF8nICsgdGhpcy5faWR4LFxuICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoeyB4OiBzZWxmLnBhZ2VYT2Zmc2V0LCB5OiBzZWxmLnBhZ2VZT2Zmc2V0IH0pXG4gICAgICAgICAgKVxuICAgICAgICB9IGNhdGNoIHt9XG4gICAgICB9XG4gICAgfVxuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICByZXBsYWNlKHVybDogVXJsLCBhcz86IFVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBjaGFuZ2UoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMsXG4gICAgZm9yY2VkU2Nyb2xsPzogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9XG4gICk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGlmICghaXNMb2NhbFVSTCh1cmwpKSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybFxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gZm9yIHN0YXRpYyBwYWdlcyB3aXRoIHF1ZXJ5IHBhcmFtcyBpbiB0aGUgVVJMIHdlIGRlbGF5XG4gICAgLy8gbWFya2luZyB0aGUgcm91dGVyIHJlYWR5IHVudGlsIGFmdGVyIHRoZSBxdWVyeSBpcyB1cGRhdGVkXG4gICAgaWYgKChvcHRpb25zIGFzIGFueSkuX2gpIHtcbiAgICAgIHRoaXMuaXNSZWFkeSA9IHRydWVcbiAgICB9XG5cbiAgICAvLyBEZWZhdWx0IHRvIHNjcm9sbCByZXNldCBiZWhhdmlvciB1bmxlc3MgZXhwbGljaXRseSBzcGVjaWZpZWQgdG8gYmVcbiAgICAvLyBgZmFsc2VgISBUaGlzIG1ha2VzIHRoZSBiZWhhdmlvciBiZXR3ZWVuIHVzaW5nIGBSb3V0ZXIjcHVzaGAgYW5kIGFcbiAgICAvLyBgPExpbmsgLz5gIGNvbnNpc3RlbnQuXG4gICAgb3B0aW9ucy5zY3JvbGwgPSAhIShvcHRpb25zLnNjcm9sbCA/PyB0cnVlKVxuXG4gICAgbGV0IGxvY2FsZUNoYW5nZSA9IG9wdGlvbnMubG9jYWxlICE9PSB0aGlzLmxvY2FsZVxuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgIHRoaXMubG9jYWxlID1cbiAgICAgICAgb3B0aW9ucy5sb2NhbGUgPT09IGZhbHNlXG4gICAgICAgICAgPyB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgICA6IG9wdGlvbnMubG9jYWxlIHx8IHRoaXMubG9jYWxlXG5cbiAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIG9wdGlvbnMubG9jYWxlID0gdGhpcy5sb2NhbGVcbiAgICAgIH1cblxuICAgICAgY29uc3QgcGFyc2VkQXMgPSBwYXJzZVJlbGF0aXZlVXJsKGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzKVxuICAgICAgY29uc3QgbG9jYWxlUGF0aFJlc3VsdCA9IG5vcm1hbGl6ZUxvY2FsZVBhdGgoXG4gICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lLFxuICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgIClcblxuICAgICAgaWYgKGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGUpIHtcbiAgICAgICAgdGhpcy5sb2NhbGUgPSBsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlXG4gICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gYWRkQmFzZVBhdGgocGFyc2VkQXMucGF0aG5hbWUpXG4gICAgICAgIGFzID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpXG4gICAgICAgIHVybCA9IGFkZEJhc2VQYXRoKFxuICAgICAgICAgIG5vcm1hbGl6ZUxvY2FsZVBhdGgoXG4gICAgICAgICAgICBoYXNCYXNlUGF0aCh1cmwpID8gZGVsQmFzZVBhdGgodXJsKSA6IHVybCxcbiAgICAgICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgICAgICkucGF0aG5hbWVcbiAgICAgICAgKVxuICAgICAgfVxuICAgICAgbGV0IGRpZE5hdmlnYXRlID0gZmFsc2VcblxuICAgICAgLy8gd2UgbmVlZCB0byB3cmFwIHRoaXMgaW4gdGhlIGVudiBjaGVjayBhZ2FpbiBzaW5jZSByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAvLyBtb3ZlcyB0aGlzIG9uIGl0cyBvd24gZHVlIHRvIHRoZSByZXR1cm5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgIC8vIGlmIHRoZSBsb2NhbGUgaXNuJ3QgY29uZmlndXJlZCBoYXJkIG5hdmlnYXRlIHRvIHNob3cgNDA0IHBhZ2VcbiAgICAgICAgaWYgKCF0aGlzLmxvY2FsZXM/LmluY2x1ZGVzKHRoaXMubG9jYWxlISkpIHtcbiAgICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGFkZExvY2FsZShwYXJzZWRBcy5wYXRobmFtZSwgdGhpcy5sb2NhbGUpXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcylcbiAgICAgICAgICAvLyB0aGlzIHdhcyBwcmV2aW91c2x5IGEgcmV0dXJuIGJ1dCB3YXMgcmVtb3ZlZCBpbiBmYXZvclxuICAgICAgICAgIC8vIG9mIGJldHRlciBkZWFkIGNvZGUgZWxpbWluYXRpb24gd2l0aCByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAgICAgZGlkTmF2aWdhdGUgPSB0cnVlXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29uc3QgZGV0ZWN0ZWREb21haW4gPSBkZXRlY3REb21haW5Mb2NhbGUoXG4gICAgICAgIHRoaXMuZG9tYWluTG9jYWxlcyxcbiAgICAgICAgdW5kZWZpbmVkLFxuICAgICAgICB0aGlzLmxvY2FsZVxuICAgICAgKVxuXG4gICAgICAvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiB0aGUgZW52IGNoZWNrIGFnYWluIHNpbmNlIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgIC8vIG1vdmVzIHRoaXMgb24gaXRzIG93biBkdWUgdG8gdGhlIHJldHVyblxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgLy8gaWYgd2UgYXJlIG5hdmlnYXRpbmcgdG8gYSBkb21haW4gbG9jYWxlIGVuc3VyZSB3ZSByZWRpcmVjdCB0byB0aGVcbiAgICAgICAgLy8gY29ycmVjdCBkb21haW5cbiAgICAgICAgaWYgKFxuICAgICAgICAgICFkaWROYXZpZ2F0ZSAmJlxuICAgICAgICAgIGRldGVjdGVkRG9tYWluICYmXG4gICAgICAgICAgc2VsZi5sb2NhdGlvbi5ob3N0bmFtZSAhPT0gZGV0ZWN0ZWREb21haW4uZG9tYWluXG4gICAgICAgICkge1xuICAgICAgICAgIGNvbnN0IGFzTm9CYXNlUGF0aCA9IGRlbEJhc2VQYXRoKGFzKVxuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYGh0dHAke2RldGVjdGVkRG9tYWluLmh0dHAgPyAnJyA6ICdzJ306Ly8ke1xuICAgICAgICAgICAgZGV0ZWN0ZWREb21haW4uZG9tYWluXG4gICAgICAgICAgfSR7YWRkQmFzZVBhdGgoXG4gICAgICAgICAgICBgJHtcbiAgICAgICAgICAgICAgdGhpcy5sb2NhbGUgPT09IGRldGVjdGVkRG9tYWluLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgICAgICAgICA/ICcnXG4gICAgICAgICAgICAgICAgOiBgLyR7dGhpcy5sb2NhbGV9YFxuICAgICAgICAgICAgfSR7YXNOb0Jhc2VQYXRoID09PSAnLycgPyAnJyA6IGFzTm9CYXNlUGF0aH1gIHx8ICcvJ1xuICAgICAgICAgICl9YFxuICAgICAgICAgIC8vIHRoaXMgd2FzIHByZXZpb3VzbHkgYSByZXR1cm4gYnV0IHdhcyByZW1vdmVkIGluIGZhdm9yXG4gICAgICAgICAgLy8gb2YgYmV0dGVyIGRlYWQgY29kZSBlbGltaW5hdGlvbiB3aXRoIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgICAgICBkaWROYXZpZ2F0ZSA9IHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZGlkTmF2aWdhdGUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCgpID0+IHt9KVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCkge1xuICAgICAgdGhpcy5pc1NzciA9IGZhbHNlXG4gICAgfVxuICAgIC8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbiAgICBpZiAoU1QpIHtcbiAgICAgIHBlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJylcbiAgICB9XG5cbiAgICBjb25zdCB7IHNoYWxsb3cgPSBmYWxzZSB9ID0gb3B0aW9uc1xuICAgIGNvbnN0IHJvdXRlUHJvcHMgPSB7IHNoYWxsb3cgfVxuXG4gICAgaWYgKHRoaXMuX2luRmxpZ2h0Um91dGUpIHtcbiAgICAgIHRoaXMuYWJvcnRDb21wb25lbnRMb2FkKHRoaXMuX2luRmxpZ2h0Um91dGUsIHJvdXRlUHJvcHMpXG4gICAgfVxuXG4gICAgYXMgPSBhZGRCYXNlUGF0aChcbiAgICAgIGFkZExvY2FsZShcbiAgICAgICAgaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMsXG4gICAgICAgIG9wdGlvbnMubG9jYWxlLFxuICAgICAgICB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgIClcbiAgICApXG4gICAgY29uc3QgY2xlYW5lZEFzID0gZGVsTG9jYWxlKFxuICAgICAgaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMsXG4gICAgICB0aGlzLmxvY2FsZVxuICAgIClcbiAgICB0aGlzLl9pbkZsaWdodFJvdXRlID0gYXNcblxuICAgIC8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuXG4gICAgLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAvLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2ggJiYgdGhpcy5vbmx5QUhhc2hDaGFuZ2UoY2xlYW5lZEFzKSkge1xuICAgICAgdGhpcy5hc1BhdGggPSBjbGVhbmVkQXNcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0JywgYXMsIHJvdXRlUHJvcHMpXG4gICAgICAvLyBUT0RPOiBkbyB3ZSBuZWVkIHRoZSByZXNvbHZlZCBocmVmIHdoZW4gb25seSBhIGhhc2ggY2hhbmdlP1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG4gICAgICB0aGlzLnNjcm9sbFRvSGFzaChjbGVhbmVkQXMpXG4gICAgICB0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0sIG51bGwpXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGFzLCByb3V0ZVByb3BzKVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG4gICAgbGV0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSBwYXJzZWRcblxuICAgIC8vIFRoZSBidWlsZCBtYW5pZmVzdCBuZWVkcyB0byBiZSBsb2FkZWQgYmVmb3JlIGF1dG8tc3RhdGljIGR5bmFtaWMgcGFnZXNcbiAgICAvLyBnZXQgdGhlaXIgcXVlcnkgcGFyYW1ldGVycyB0byBhbGxvdyBlbnN1cmluZyB0aGV5IGNhbiBiZSBwYXJzZWQgcHJvcGVybHlcbiAgICAvLyB3aGVuIHJld3JpdHRlbiB0b1xuICAgIGxldCBwYWdlczogYW55LCByZXdyaXRlczogYW55XG4gICAgdHJ5IHtcbiAgICAgIHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcbiAgICAgIDsoeyBfX3Jld3JpdGVzOiByZXdyaXRlcyB9ID0gYXdhaXQgZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgLy8gSWYgd2UgZmFpbCB0byByZXNvbHZlIHRoZSBwYWdlIGxpc3Qgb3IgY2xpZW50LWJ1aWxkIG1hbmlmZXN0LCB3ZSBtdXN0XG4gICAgICAvLyBkbyBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb246XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBwYXJzZWQgPSB0aGlzLl9yZXNvbHZlSHJlZihwYXJzZWQsIHBhZ2VzKSBhcyB0eXBlb2YgcGFyc2VkXG5cbiAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZSkge1xuICAgICAgcGF0aG5hbWUgPSBwYXJzZWQucGF0aG5hbWVcbiAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICB9XG5cbiAgICAvLyB1cmwgYW5kIGFzIHNob3VsZCBhbHdheXMgYmUgcHJlZml4ZWQgd2l0aCBiYXNlUGF0aCBieSB0aGlzXG4gICAgLy8gcG9pbnQgYnkgZWl0aGVyIG5leHQvbGluayBvciByb3V0ZXIucHVzaC9yZXBsYWNlIHNvIHN0cmlwIHRoZVxuICAgIC8vIGJhc2VQYXRoIGZyb20gdGhlIHBhdGhuYW1lIHRvIG1hdGNoIHRoZSBwYWdlcyBkaXIgMS10by0xXG4gICAgcGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgPyByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChkZWxCYXNlUGF0aChwYXRobmFtZSkpXG4gICAgICA6IHBhdGhuYW1lXG5cbiAgICAvLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuICAgIC8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuICAgIC8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbiAgICAvLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuICAgIC8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbiAgICBpZiAoIXRoaXMudXJsSXNOZXcoY2xlYW5lZEFzKSAmJiAhbG9jYWxlQ2hhbmdlKSB7XG4gICAgICBtZXRob2QgPSAncmVwbGFjZVN0YXRlJ1xuICAgIH1cblxuICAgIGxldCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuXG4gICAgLy8gd2UgbmVlZCB0byByZXNvbHZlIHRoZSBhcyB2YWx1ZSB1c2luZyByZXdyaXRlcyBmb3IgZHluYW1pYyBTU0dcbiAgICAvLyBwYWdlcyB0byBhbGxvdyBidWlsZGluZyB0aGUgZGF0YSBVUkwgY29ycmVjdGx5XG4gICAgbGV0IHJlc29sdmVkQXMgPSBhc1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMgJiYgYXMuc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICBjb25zdCByZXdyaXRlc1Jlc3VsdCA9IHJlc29sdmVSZXdyaXRlcyhcbiAgICAgICAgYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGRlbEJhc2VQYXRoKGFzKSwgdGhpcy5sb2NhbGUpKSxcbiAgICAgICAgcGFnZXMsXG4gICAgICAgIHJld3JpdGVzLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgKHA6IHN0cmluZykgPT4gdGhpcy5fcmVzb2x2ZUhyZWYoeyBwYXRobmFtZTogcCB9LCBwYWdlcykucGF0aG5hbWUhLFxuICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgIClcbiAgICAgIHJlc29sdmVkQXMgPSByZXdyaXRlc1Jlc3VsdC5hc1BhdGhcblxuICAgICAgaWYgKHJld3JpdGVzUmVzdWx0Lm1hdGNoZWRQYWdlICYmIHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZikge1xuICAgICAgICAvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4gICAgICAgIC8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG4gICAgICAgIHJvdXRlID0gcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmXG4gICAgICAgIHBhdGhuYW1lID0gcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmXG4gICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIWlzTG9jYWxVUkwoYXMpKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYEludmFsaWQgaHJlZjogXCIke3VybH1cIiBhbmQgYXM6IFwiJHthc31cIiwgcmVjZWl2ZWQgcmVsYXRpdmUgaHJlZiBhbmQgZXh0ZXJuYWwgYXNgICtcbiAgICAgICAgICAgIGBcXG5TZWUgbW9yZSBpbmZvOiBodHRwczovL2Vyci5zaC9uZXh0LmpzL2ludmFsaWQtcmVsYXRpdmUtdXJsLWV4dGVybmFsLWFzYFxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIHJlc29sdmVkQXMgPSBkZWxMb2NhbGUoZGVsQmFzZVBhdGgocmVzb2x2ZWRBcyksIHRoaXMubG9jYWxlKVxuXG4gICAgaWYgKGlzRHluYW1pY1JvdXRlKHJvdXRlKSkge1xuICAgICAgY29uc3QgcGFyc2VkQXMgPSBwYXJzZVJlbGF0aXZlVXJsKHJlc29sdmVkQXMpXG4gICAgICBjb25zdCBhc1BhdGhuYW1lID0gcGFyc2VkQXMucGF0aG5hbWVcblxuICAgICAgY29uc3Qgcm91dGVSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gICAgICBjb25zdCByb3V0ZU1hdGNoID0gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpXG4gICAgICBjb25zdCBzaG91bGRJbnRlcnBvbGF0ZSA9IHJvdXRlID09PSBhc1BhdGhuYW1lXG4gICAgICBjb25zdCBpbnRlcnBvbGF0ZWRBcyA9IHNob3VsZEludGVycG9sYXRlXG4gICAgICAgID8gaW50ZXJwb2xhdGVBcyhyb3V0ZSwgYXNQYXRobmFtZSwgcXVlcnkpXG4gICAgICAgIDogKHt9IGFzIHsgcmVzdWx0OiB1bmRlZmluZWQ7IHBhcmFtczogdW5kZWZpbmVkIH0pXG5cbiAgICAgIGlmICghcm91dGVNYXRjaCB8fCAoc2hvdWxkSW50ZXJwb2xhdGUgJiYgIWludGVycG9sYXRlZEFzLnJlc3VsdCkpIHtcbiAgICAgICAgY29uc3QgbWlzc2luZ1BhcmFtcyA9IE9iamVjdC5rZXlzKHJvdXRlUmVnZXguZ3JvdXBzKS5maWx0ZXIoXG4gICAgICAgICAgKHBhcmFtKSA9PiAhcXVlcnlbcGFyYW1dXG4gICAgICAgIClcblxuICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgYCR7XG4gICAgICAgICAgICAgICAgc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgICAgID8gYEludGVycG9sYXRpbmcgaHJlZmBcbiAgICAgICAgICAgICAgICAgIDogYE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgYFxuICAgICAgICAgICAgICB9IGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGAgK1xuICAgICAgICAgICAgICAgIGB0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICApfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYFxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIChzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICA/IGBUaGUgcHJvdmlkZWQgXFxgaHJlZlxcYCAoJHt1cmx9KSB2YWx1ZSBpcyBtaXNzaW5nIHF1ZXJ5IHZhbHVlcyAoJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgKX0pIHRvIGJlIGludGVycG9sYXRlZCBwcm9wZXJseS4gYFxuICAgICAgICAgICAgICA6IGBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGApICtcbiAgICAgICAgICAgICAgYFJlYWQgbW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvJHtcbiAgICAgICAgICAgICAgICBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICAgICAgPyAnaHJlZi1pbnRlcnBvbGF0aW9uLWZhaWxlZCdcbiAgICAgICAgICAgICAgICAgIDogJ2luY29tcGF0aWJsZS1ocmVmLWFzJ1xuICAgICAgICAgICAgICB9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChzaG91bGRJbnRlcnBvbGF0ZSkge1xuICAgICAgICBhcyA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKFxuICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIHBhcnNlZEFzLCB7XG4gICAgICAgICAgICBwYXRobmFtZTogaW50ZXJwb2xhdGVkQXMucmVzdWx0LFxuICAgICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgaW50ZXJwb2xhdGVkQXMucGFyYW1zISksXG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbiAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgcm91dGVNYXRjaClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBhcywgcm91dGVQcm9wcylcblxuICAgIHRyeSB7XG4gICAgICBsZXQgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8oXG4gICAgICAgIHJvdXRlLFxuICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIGFzLFxuICAgICAgICByZXNvbHZlZEFzLFxuICAgICAgICByb3V0ZVByb3BzXG4gICAgICApXG4gICAgICBsZXQgeyBlcnJvciwgcHJvcHMsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICAvLyBoYW5kbGUgcmVkaXJlY3Qgb24gY2xpZW50LXRyYW5zaXRpb25cbiAgICAgIGlmICgoX19OX1NTRyB8fCBfX05fU1NQKSAmJiBwcm9wcykge1xuICAgICAgICBpZiAoKHByb3BzIGFzIGFueSkucGFnZVByb3BzICYmIChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1QpIHtcbiAgICAgICAgICBjb25zdCBkZXN0aW5hdGlvbiA9IChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1RcblxuICAgICAgICAgIC8vIGNoZWNrIGlmIGRlc3RpbmF0aW9uIGlzIGludGVybmFsIChyZXNvbHZlcyB0byBhIHBhZ2UpIGFuZCBhdHRlbXB0XG4gICAgICAgICAgLy8gY2xpZW50LW5hdmlnYXRpb24gaWYgaXQgaXMgZmFsbGluZyBiYWNrIHRvIGhhcmQgbmF2aWdhdGlvbiBpZlxuICAgICAgICAgIC8vIGl0J3Mgbm90XG4gICAgICAgICAgaWYgKGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICAgICAgY29uc3QgcGFyc2VkSHJlZiA9IHBhcnNlUmVsYXRpdmVVcmwoZGVzdGluYXRpb24pXG4gICAgICAgICAgICB0aGlzLl9yZXNvbHZlSHJlZihwYXJzZWRIcmVmLCBwYWdlcywgZmFsc2UpXG5cbiAgICAgICAgICAgIGlmIChwYWdlcy5pbmNsdWRlcyhwYXJzZWRIcmVmLnBhdGhuYW1lKSkge1xuICAgICAgICAgICAgICBjb25zdCB7IHVybDogbmV3VXJsLCBhczogbmV3QXMgfSA9IHByZXBhcmVVcmxBcyhcbiAgICAgICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uLFxuICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKG1ldGhvZCwgbmV3VXJsLCBuZXdBcywgb3B0aW9ucylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGRlc3RpbmF0aW9uXG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCgpID0+IHt9KVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gaGFuZGxlIFNTRyBkYXRhIDQwNFxuICAgICAgICBpZiAocHJvcHMubm90Rm91bmQgPT09IFNTR19EQVRBX05PVF9GT1VORCkge1xuICAgICAgICAgIGxldCBub3RGb3VuZFJvdXRlXG5cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudCgnLzQwNCcpXG4gICAgICAgICAgICBub3RGb3VuZFJvdXRlID0gJy80MDQnXG4gICAgICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSA9ICcvX2Vycm9yJ1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKFxuICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSxcbiAgICAgICAgICAgIG5vdEZvdW5kUm91dGUsXG4gICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgIGFzLFxuICAgICAgICAgICAgcmVzb2x2ZWRBcyxcbiAgICAgICAgICAgIHsgc2hhbGxvdzogZmFsc2UgfVxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCBhcywgcm91dGVQcm9wcylcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCBhcHBDb21wOiBhbnkgPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50XG4gICAgICAgIDsod2luZG93IGFzIGFueSkubmV4dC5pc1ByZXJlbmRlcmVkID1cbiAgICAgICAgICBhcHBDb21wLmdldEluaXRpYWxQcm9wcyA9PT0gYXBwQ29tcC5vcmlnR2V0SW5pdGlhbFByb3BzICYmXG4gICAgICAgICAgIShyb3V0ZUluZm8uQ29tcG9uZW50IGFzIGFueSkuZ2V0SW5pdGlhbFByb3BzXG4gICAgICB9XG5cbiAgICAgIC8vIHNoYWxsb3cgcm91dGluZyBpcyBvbmx5IGFsbG93ZWQgZm9yIHNhbWUgcGFnZSBVUkwgY2hhbmdlcy5cbiAgICAgIGNvbnN0IGlzVmFsaWRTaGFsbG93Um91dGUgPSBvcHRpb25zLnNoYWxsb3cgJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGVcbiAgICAgIGF3YWl0IHRoaXMuc2V0KFxuICAgICAgICByb3V0ZSxcbiAgICAgICAgcGF0aG5hbWUhLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgY2xlYW5lZEFzLFxuICAgICAgICByb3V0ZUluZm8sXG4gICAgICAgIGZvcmNlZFNjcm9sbCB8fFxuICAgICAgICAgIChpc1ZhbGlkU2hhbGxvd1JvdXRlIHx8ICFvcHRpb25zLnNjcm9sbCA/IG51bGwgOiB7IHg6IDAsIHk6IDAgfSlcbiAgICAgICkuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgaWYgKGUuY2FuY2VsbGVkKSBlcnJvciA9IGVycm9yIHx8IGVcbiAgICAgICAgZWxzZSB0aHJvdyBlXG4gICAgICB9KVxuXG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyb3IsIGNsZWFuZWRBcywgcm91dGVQcm9wcylcbiAgICAgICAgdGhyb3cgZXJyb3JcbiAgICAgIH1cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgaWYgKHRoaXMubG9jYWxlKSB7XG4gICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmxhbmcgPSB0aGlzLmxvY2FsZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBhcywgcm91dGVQcm9wcylcblxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9XG5cbiAgY2hhbmdlU3RhdGUoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fVxuICApOiB2b2lkIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkgaXMgbm90IGF2YWlsYWJsZS5gKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeVttZXRob2RdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtZXRob2QgIT09ICdwdXNoU3RhdGUnIHx8IGdldFVSTCgpICE9PSBhcykge1xuICAgICAgdGhpcy5fc2hhbGxvdyA9IG9wdGlvbnMuc2hhbGxvd1xuICAgICAgd2luZG93Lmhpc3RvcnlbbWV0aG9kXShcbiAgICAgICAge1xuICAgICAgICAgIHVybCxcbiAgICAgICAgICBhcyxcbiAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgIF9fTjogdHJ1ZSxcbiAgICAgICAgICBpZHg6IHRoaXMuX2lkeCA9IG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgPyB0aGlzLl9pZHggOiB0aGlzLl9pZHggKyAxLFxuICAgICAgICB9IGFzIEhpc3RvcnlTdGF0ZSxcbiAgICAgICAgLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4gICAgICAgIC8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4gICAgICAgICcnLFxuICAgICAgICBhc1xuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGhhbmRsZVJvdXRlSW5mb0Vycm9yKFxuICAgIGVycjogRXJyb3IgJiB7IGNvZGU6IGFueTsgY2FuY2VsbGVkOiBib29sZWFuIH0sXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICByb3V0ZVByb3BzOiBSb3V0ZVByb3BlcnRpZXMsXG4gICAgbG9hZEVycm9yRmFpbD86IGJvb2xlYW5cbiAgKTogUHJvbWlzZTxDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgLy8gYnViYmxlIHVwIGNhbmNlbGxhdGlvbiBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cblxuICAgIGlmIChpc0Fzc2V0RXJyb3IoZXJyKSB8fCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnIsIGFzLCByb3V0ZVByb3BzKVxuXG4gICAgICAvLyBJZiB3ZSBjYW4ndCBsb2FkIHRoZSBwYWdlIGl0IGNvdWxkIGJlIG9uZSBvZiBmb2xsb3dpbmcgcmVhc29uc1xuICAgICAgLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcbiAgICAgIC8vICAyLiBQYWdlIGRvZXMgZXhpc3QgaW4gYSBkaWZmZXJlbnQgem9uZVxuICAgICAgLy8gIDMuIEludGVybmFsIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhlIHBhZ2VcblxuICAgICAgLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG5cbiAgICAgIC8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuICAgICAgLy8gU28gbGV0J3MgdGhyb3cgYSBjYW5jZWxsYXRpb24gZXJyb3Igc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbiAgICAgIHRocm93IGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKVxuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBsZXQgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gICAgICBsZXQgc3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gICAgICBsZXQgcHJvcHM6IFJlY29yZDxzdHJpbmcsIGFueT4gfCB1bmRlZmluZWRcblxuICAgICAgaWYgKFxuICAgICAgICB0eXBlb2YgQ29tcG9uZW50ISA9PT0gJ3VuZGVmaW5lZCcgfHxcbiAgICAgICAgdHlwZW9mIHN0eWxlU2hlZXRzISA9PT0gJ3VuZGVmaW5lZCdcbiAgICAgICkge1xuICAgICAgICA7KHsgcGFnZTogQ29tcG9uZW50LCBzdHlsZVNoZWV0cyB9ID0gYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChcbiAgICAgICAgICAnL19lcnJvcidcbiAgICAgICAgKSlcbiAgICAgIH1cblxuICAgICAgY29uc3Qgcm91dGVJbmZvOiBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8gPSB7XG4gICAgICAgIHByb3BzLFxuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIHN0eWxlU2hlZXRzLFxuICAgICAgICBlcnIsXG4gICAgICAgIGVycm9yOiBlcnIsXG4gICAgICB9XG5cbiAgICAgIGlmICghcm91dGVJbmZvLnByb3BzKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gYXdhaXQgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCB7XG4gICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgIH0gYXMgYW55KVxuICAgICAgICB9IGNhdGNoIChnaXBFcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLCBnaXBFcnIpXG4gICAgICAgICAgcm91dGVJbmZvLnByb3BzID0ge31cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAocm91dGVJbmZvRXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihcbiAgICAgICAgcm91dGVJbmZvRXJyLFxuICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIGFzLFxuICAgICAgICByb3V0ZVByb3BzLFxuICAgICAgICB0cnVlXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZ2V0Um91dGVJbmZvKFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogYW55LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgcmVzb2x2ZWRBczogc3RyaW5nLFxuICAgIHJvdXRlUHJvcHM6IFJvdXRlUHJvcGVydGllc1xuICApOiBQcm9taXNlPFByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZXhpc3RpbmdSb3V0ZUluZm86IFByaXZhdGVSb3V0ZUluZm8gfCB1bmRlZmluZWQgPSB0aGlzLmNvbXBvbmVudHNbXG4gICAgICAgIHJvdXRlXG4gICAgICBdXG4gICAgICBpZiAocm91dGVQcm9wcy5zaGFsbG93ICYmIGV4aXN0aW5nUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICAgIHJldHVybiBleGlzdGluZ1JvdXRlSW5mb1xuICAgICAgfVxuXG4gICAgICBjb25zdCBjYWNoZWRSb3V0ZUluZm86IENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbyB8IHVuZGVmaW5lZCA9XG4gICAgICAgIGV4aXN0aW5nUm91dGVJbmZvICYmICdpbml0aWFsJyBpbiBleGlzdGluZ1JvdXRlSW5mb1xuICAgICAgICAgID8gdW5kZWZpbmVkXG4gICAgICAgICAgOiBleGlzdGluZ1JvdXRlSW5mb1xuICAgICAgY29uc3Qgcm91dGVJbmZvOiBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8gPSBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgPyBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgOiBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKChyZXMpID0+ICh7XG4gICAgICAgICAgICBDb21wb25lbnQ6IHJlcy5wYWdlLFxuICAgICAgICAgICAgc3R5bGVTaGVldHM6IHJlcy5zdHlsZVNoZWV0cyxcbiAgICAgICAgICAgIF9fTl9TU0c6IHJlcy5tb2QuX19OX1NTRyxcbiAgICAgICAgICAgIF9fTl9TU1A6IHJlcy5tb2QuX19OX1NTUCxcbiAgICAgICAgICB9KSlcblxuICAgICAgY29uc3QgeyBDb21wb25lbnQsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCB7IGlzVmFsaWRFbGVtZW50VHlwZSB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKVxuICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXQgZGF0YUhyZWY6IHN0cmluZyB8IHVuZGVmaW5lZFxuXG4gICAgICBpZiAoX19OX1NTRyB8fCBfX05fU1NQKSB7XG4gICAgICAgIGRhdGFIcmVmID0gdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLFxuICAgICAgICAgIHJlc29sdmVkQXMsXG4gICAgICAgICAgX19OX1NTRyxcbiAgICAgICAgICB0aGlzLmxvY2FsZVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHByb3BzID0gYXdhaXQgdGhpcy5fZ2V0RGF0YTxDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8+KCgpID0+XG4gICAgICAgIF9fTl9TU0dcbiAgICAgICAgICA/IHRoaXMuX2dldFN0YXRpY0RhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogX19OX1NTUFxuICAgICAgICAgID8gdGhpcy5fZ2V0U2VydmVyRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiB0aGlzLmdldEluaXRpYWxQcm9wcyhcbiAgICAgICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgICAgICAvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgYXNQYXRoOiBhcyxcbiAgICAgICAgICAgICAgfSBhcyBhbnlcbiAgICAgICAgICAgIClcbiAgICAgIClcblxuICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHNcbiAgICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSByb3V0ZUluZm9cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKGVyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcm91dGVQcm9wcylcbiAgICB9XG4gIH1cblxuICBzZXQoXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIGRhdGE6IFByaXZhdGVSb3V0ZUluZm8sXG4gICAgcmVzZXRTY3JvbGw6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB8IG51bGxcbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gZmFsc2VcblxuICAgIHRoaXMucm91dGUgPSByb3V0ZVxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIHRoaXMuYXNQYXRoID0gYXNcbiAgICByZXR1cm4gdGhpcy5ub3RpZnkoZGF0YSwgcmVzZXRTY3JvbGwpXG4gIH1cblxuICAvKipcbiAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICovXG4gIGJlZm9yZVBvcFN0YXRlKGNiOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrKSB7XG4gICAgdGhpcy5fYnBzID0gY2JcbiAgfVxuXG4gIG9ubHlBSGFzaENoYW5nZShhczogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLmFzUGF0aCkgcmV0dXJuIGZhbHNlXG4gICAgY29uc3QgW29sZFVybE5vSGFzaCwgb2xkSGFzaF0gPSB0aGlzLmFzUGF0aC5zcGxpdCgnIycpXG4gICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpXG5cbiAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgaWYgKG5ld0hhc2ggJiYgb2xkVXJsTm9IYXNoID09PSBuZXdVcmxOb0hhc2ggJiYgb2xkSGFzaCA9PT0gbmV3SGFzaCkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG4gICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbiAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4gICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAvLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxuICAgIHJldHVybiBvbGRIYXNoICE9PSBuZXdIYXNoXG4gIH1cblxuICBzY3JvbGxUb0hhc2goYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IFssIGhhc2hdID0gYXMuc3BsaXQoJyMnKVxuICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZVxuICAgIGlmIChoYXNoID09PSAnJykge1xuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxuICAgIGNvbnN0IGlkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKVxuICAgIGlmIChpZEVsKSB7XG4gICAgICBpZEVsLnNjcm9sbEludG9WaWV3KClcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICAvLyBJZiB0aGVyZSdzIG5vIGVsZW1lbnQgd2l0aCB0aGUgaWQsIHdlIGNoZWNrIHRoZSBgbmFtZWAgcHJvcGVydHlcbiAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICBjb25zdCBuYW1lRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXVxuICAgIGlmIChuYW1lRWwpIHtcbiAgICAgIG5hbWVFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgfVxuICB9XG5cbiAgdXJsSXNOZXcoYXNQYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hc1BhdGggIT09IGFzUGF0aFxuICB9XG5cbiAgX3Jlc29sdmVIcmVmKHBhcnNlZEhyZWY6IFVybE9iamVjdCwgcGFnZXM6IHN0cmluZ1tdLCBhcHBseUJhc2VQYXRoID0gdHJ1ZSkge1xuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHBhcnNlZEhyZWZcbiAgICBjb25zdCBjbGVhblBhdGhuYW1lID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goXG4gICAgICBkZW5vcm1hbGl6ZVBhZ2VQYXRoKGFwcGx5QmFzZVBhdGggPyBkZWxCYXNlUGF0aChwYXRobmFtZSEpIDogcGF0aG5hbWUhKVxuICAgIClcblxuICAgIGlmIChjbGVhblBhdGhuYW1lID09PSAnLzQwNCcgfHwgY2xlYW5QYXRobmFtZSA9PT0gJy9fZXJyb3InKSB7XG4gICAgICByZXR1cm4gcGFyc2VkSHJlZlxuICAgIH1cblxuICAgIC8vIGhhbmRsZSByZXNvbHZpbmcgaHJlZiBmb3IgZHluYW1pYyByb3V0ZXNcbiAgICBpZiAoIXBhZ2VzLmluY2x1ZGVzKGNsZWFuUGF0aG5hbWUhKSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgcGFnZXMuc29tZSgocGFnZSkgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgaXNEeW5hbWljUm91dGUocGFnZSkgJiZcbiAgICAgICAgICBnZXRSb3V0ZVJlZ2V4KHBhZ2UpLnJlLnRlc3QoY2xlYW5QYXRobmFtZSEpXG4gICAgICAgICkge1xuICAgICAgICAgIHBhcnNlZEhyZWYucGF0aG5hbWUgPSBhcHBseUJhc2VQYXRoID8gYWRkQmFzZVBhdGgocGFnZSkgOiBwYWdlXG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gICAgcGFyc2VkSHJlZi5wYXRobmFtZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhcnNlZEhyZWYucGF0aG5hbWUhKVxuICAgIHJldHVybiBwYXJzZWRIcmVmXG4gIH1cblxuICAvKipcbiAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAqL1xuICBhc3luYyBwcmVmZXRjaChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhc1BhdGg6IHN0cmluZyA9IHVybCxcbiAgICBvcHRpb25zOiBQcmVmZXRjaE9wdGlvbnMgPSB7fVxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICBsZXQgeyBwYXRobmFtZSB9ID0gcGFyc2VkXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgaWYgKG9wdGlvbnMubG9jYWxlID09PSBmYWxzZSkge1xuICAgICAgICBwYXRobmFtZSA9IG5vcm1hbGl6ZUxvY2FsZVBhdGghKHBhdGhuYW1lLCB0aGlzLmxvY2FsZXMpLnBhdGhuYW1lXG4gICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcblxuICAgICAgICBsZXQgcGFyc2VkQXMgPSBwYXJzZVJlbGF0aXZlVXJsKGFzUGF0aClcbiAgICAgICAgY29uc3QgbG9jYWxlUGF0aFJlc3VsdCA9IG5vcm1hbGl6ZUxvY2FsZVBhdGghKFxuICAgICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lLFxuICAgICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgICApXG4gICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gbG9jYWxlUGF0aFJlc3VsdC5wYXRobmFtZVxuICAgICAgICBvcHRpb25zLmxvY2FsZSA9IGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGUgfHwgdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICAgIGFzUGF0aCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcblxuICAgIHBhcnNlZCA9IHRoaXMuX3Jlc29sdmVIcmVmKHBhcnNlZCwgcGFnZXMsIGZhbHNlKSBhcyB0eXBlb2YgcGFyc2VkXG5cbiAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZSkge1xuICAgICAgcGF0aG5hbWUgPSBwYXJzZWQucGF0aG5hbWVcbiAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICB9XG5cbiAgICAvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgdGhpcy5wYWdlTG9hZGVyLl9pc1NzZyh1cmwpLnRoZW4oKGlzU3NnOiBib29sZWFuKSA9PiB7XG4gICAgICAgIHJldHVybiBpc1NzZ1xuICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShcbiAgICAgICAgICAgICAgdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKFxuICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICBhc1BhdGgsXG4gICAgICAgICAgICAgICAgdHJ1ZSxcbiAgICAgICAgICAgICAgICB0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICAgICAgICA/IG9wdGlvbnMubG9jYWxlXG4gICAgICAgICAgICAgICAgICA6IHRoaXMubG9jYWxlXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICA6IGZhbHNlXG4gICAgICB9KSxcbiAgICAgIHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5ID8gJ2xvYWRQYWdlJyA6ICdwcmVmZXRjaCddKHJvdXRlKSxcbiAgICBdKVxuICB9XG5cbiAgYXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGU6IHN0cmluZyk6IFByb21pc2U8R29vZFBhZ2VDYWNoZT4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICh0aGlzLmNsYyA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9KVxuXG4gICAgY29uc3QgY29tcG9uZW50UmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKVxuXG4gICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgY29uc3QgZXJyb3I6IGFueSA9IG5ldyBFcnJvcihcbiAgICAgICAgYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImBcbiAgICAgIClcbiAgICAgIGVycm9yLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgIHRocm93IGVycm9yXG4gICAgfVxuXG4gICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cblxuICAgIHJldHVybiBjb21wb25lbnRSZXN1bHRcbiAgfVxuXG4gIF9nZXREYXRhPFQ+KGZuOiAoKSA9PiBQcm9taXNlPFQ+KTogUHJvbWlzZTxUPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH1cbiAgICB0aGlzLmNsYyA9IGNhbmNlbFxuICAgIHJldHVybiBmbigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgICAgfVxuXG4gICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgIGNvbnN0IGVycjogYW55ID0gbmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJylcbiAgICAgICAgZXJyLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIGNvbnN0IHsgaHJlZjogY2FjaGVLZXkgfSA9IG5ldyBVUkwoZGF0YUhyZWYsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmIHRoaXMuc2RjW2NhY2hlS2V5XSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1tjYWNoZUtleV0pXG4gICAgfVxuICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICB0aGlzLnNkY1tjYWNoZUtleV0gPSBkYXRhXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U2VydmVyRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcilcbiAgfVxuXG4gIGdldEluaXRpYWxQcm9wcyhcbiAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGUsXG4gICAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCB7IENvbXBvbmVudDogQXBwIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ11cbiAgICBjb25zdCBBcHBUcmVlID0gdGhpcy5fd3JhcEFwcChBcHAgYXMgQXBwQ29tcG9uZW50KVxuICAgIGN0eC5BcHBUcmVlID0gQXBwVHJlZVxuICAgIHJldHVybiBsb2FkR2V0SW5pdGlhbFByb3BzPEFwcENvbnRleHRUeXBlPFJvdXRlcj4+KEFwcCwge1xuICAgICAgQXBwVHJlZSxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIHJvdXRlcjogdGhpcyxcbiAgICAgIGN0eCxcbiAgICB9KVxuICB9XG5cbiAgYWJvcnRDb21wb25lbnRMb2FkKGFzOiBzdHJpbmcsIHJvdXRlUHJvcHM6IFJvdXRlUHJvcGVydGllcyk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNsYykge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KFxuICAgICAgICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICAgICAgIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSxcbiAgICAgICAgYXMsXG4gICAgICAgIHJvdXRlUHJvcHNcbiAgICAgIClcbiAgICAgIHRoaXMuY2xjKClcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cbiAgfVxuXG4gIG5vdGlmeShcbiAgICBkYXRhOiBQcml2YXRlUm91dGVJbmZvLFxuICAgIHJlc2V0U2Nyb2xsOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0gfCBudWxsXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLnN1YihcbiAgICAgIGRhdGEsXG4gICAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50IGFzIEFwcENvbXBvbmVudCxcbiAgICAgIHJlc2V0U2Nyb2xsXG4gICAgKVxuICB9XG59XG4iLCIvLyBGb3JtYXQgZnVuY3Rpb24gbW9kaWZpZWQgZnJvbSBub2RlanNcbi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0ICogYXMgcXVlcnlzdHJpbmcgZnJvbSAnLi9xdWVyeXN0cmluZydcblxuY29uc3Qgc2xhc2hlZFByb3RvY29scyA9IC9odHRwcz98ZnRwfGdvcGhlcnxmaWxlL1xuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0VXJsKHVybE9iajogVXJsT2JqZWN0KSB7XG4gIGxldCB7IGF1dGgsIGhvc3RuYW1lIH0gPSB1cmxPYmpcbiAgbGV0IHByb3RvY29sID0gdXJsT2JqLnByb3RvY29sIHx8ICcnXG4gIGxldCBwYXRobmFtZSA9IHVybE9iai5wYXRobmFtZSB8fCAnJ1xuICBsZXQgaGFzaCA9IHVybE9iai5oYXNoIHx8ICcnXG4gIGxldCBxdWVyeSA9IHVybE9iai5xdWVyeSB8fCAnJ1xuICBsZXQgaG9zdDogc3RyaW5nIHwgZmFsc2UgPSBmYWxzZVxuXG4gIGF1dGggPSBhdXRoID8gZW5jb2RlVVJJQ29tcG9uZW50KGF1dGgpLnJlcGxhY2UoLyUzQS9pLCAnOicpICsgJ0AnIDogJydcblxuICBpZiAodXJsT2JqLmhvc3QpIHtcbiAgICBob3N0ID0gYXV0aCArIHVybE9iai5ob3N0XG4gIH0gZWxzZSBpZiAoaG9zdG5hbWUpIHtcbiAgICBob3N0ID0gYXV0aCArICh+aG9zdG5hbWUuaW5kZXhPZignOicpID8gYFske2hvc3RuYW1lfV1gIDogaG9zdG5hbWUpXG4gICAgaWYgKHVybE9iai5wb3J0KSB7XG4gICAgICBob3N0ICs9ICc6JyArIHVybE9iai5wb3J0XG4gICAgfVxuICB9XG5cbiAgaWYgKHF1ZXJ5ICYmIHR5cGVvZiBxdWVyeSA9PT0gJ29iamVjdCcpIHtcbiAgICBxdWVyeSA9IFN0cmluZyhxdWVyeXN0cmluZy51cmxRdWVyeVRvU2VhcmNoUGFyYW1zKHF1ZXJ5IGFzIFBhcnNlZFVybFF1ZXJ5KSlcbiAgfVxuXG4gIGxldCBzZWFyY2ggPSB1cmxPYmouc2VhcmNoIHx8IChxdWVyeSAmJiBgPyR7cXVlcnl9YCkgfHwgJydcblxuICBpZiAocHJvdG9jb2wgJiYgcHJvdG9jb2wuc3Vic3RyKC0xKSAhPT0gJzonKSBwcm90b2NvbCArPSAnOidcblxuICBpZiAoXG4gICAgdXJsT2JqLnNsYXNoZXMgfHxcbiAgICAoKCFwcm90b2NvbCB8fCBzbGFzaGVkUHJvdG9jb2xzLnRlc3QocHJvdG9jb2wpKSAmJiBob3N0ICE9PSBmYWxzZSlcbiAgKSB7XG4gICAgaG9zdCA9ICcvLycgKyAoaG9zdCB8fCAnJylcbiAgICBpZiAocGF0aG5hbWUgJiYgcGF0aG5hbWVbMF0gIT09ICcvJykgcGF0aG5hbWUgPSAnLycgKyBwYXRobmFtZVxuICB9IGVsc2UgaWYgKCFob3N0KSB7XG4gICAgaG9zdCA9ICcnXG4gIH1cblxuICBpZiAoaGFzaCAmJiBoYXNoWzBdICE9PSAnIycpIGhhc2ggPSAnIycgKyBoYXNoXG4gIGlmIChzZWFyY2ggJiYgc2VhcmNoWzBdICE9PSAnPycpIHNlYXJjaCA9ICc/JyArIHNlYXJjaFxuXG4gIHBhdGhuYW1lID0gcGF0aG5hbWUucmVwbGFjZSgvWz8jXS9nLCBlbmNvZGVVUklDb21wb25lbnQpXG4gIHNlYXJjaCA9IHNlYXJjaC5yZXBsYWNlKCcjJywgJyUyMycpXG5cbiAgcmV0dXJuIGAke3Byb3RvY29sfSR7aG9zdH0ke3BhdGhuYW1lfSR7c2VhcmNofSR7aGFzaH1gXG59XG4iLCIvLyBJZGVudGlmeSAvW3BhcmFtXS8gaW4gcm91dGUgc3RyaW5nXG5jb25zdCBURVNUX1JPVVRFID0gL1xcL1xcW1teL10rP1xcXSg/PVxcL3wkKS9cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRHluYW1pY1JvdXRlKHJvdXRlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIFRFU1RfUk9VVEUudGVzdChyb3V0ZSlcbn1cbiIsImltcG9ydCB7IGdldExvY2F0aW9uT3JpZ2luIH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi9xdWVyeXN0cmluZydcblxuLyoqXG4gKiBQYXJzZXMgcGF0aC1yZWxhdGl2ZSB1cmxzIChlLmcuIGAvaGVsbG8vd29ybGQ/Zm9vPWJhcmApLiBJZiB1cmwgaXNuJ3QgcGF0aC1yZWxhdGl2ZVxuICogKGUuZy4gYC4vaGVsbG9gKSB0aGVuIGF0IGxlYXN0IGJhc2UgbXVzdCBiZS5cbiAqIEFic29sdXRlIHVybHMgYXJlIHJlamVjdGVkIHdpdGggb25lIGV4Y2VwdGlvbiwgaW4gdGhlIGJyb3dzZXIsIGFic29sdXRlIHVybHMgdGhhdCBhcmUgb25cbiAqIHRoZSBjdXJyZW50IG9yaWdpbiB3aWxsIGJlIHBhcnNlZCBhcyByZWxhdGl2ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VSZWxhdGl2ZVVybCh1cmw6IHN0cmluZywgYmFzZT86IHN0cmluZykge1xuICBjb25zdCBnbG9iYWxCYXNlID0gbmV3IFVSTChcbiAgICB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyA/ICdodHRwOi8vbicgOiBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIClcbiAgY29uc3QgcmVzb2x2ZWRCYXNlID0gYmFzZSA/IG5ldyBVUkwoYmFzZSwgZ2xvYmFsQmFzZSkgOiBnbG9iYWxCYXNlXG4gIGNvbnN0IHsgcGF0aG5hbWUsIHNlYXJjaFBhcmFtcywgc2VhcmNoLCBoYXNoLCBocmVmLCBvcmlnaW4gfSA9IG5ldyBVUkwoXG4gICAgdXJsLFxuICAgIHJlc29sdmVkQmFzZVxuICApXG4gIGlmIChvcmlnaW4gIT09IGdsb2JhbEJhc2Uub3JpZ2luKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBpbnZhcmlhbnQ6IGludmFsaWQgcmVsYXRpdmUgVVJMLCByb3V0ZXIgcmVjZWl2ZWQgJHt1cmx9YClcbiAgfVxuICByZXR1cm4ge1xuICAgIHBhdGhuYW1lLFxuICAgIHF1ZXJ5OiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KHNlYXJjaFBhcmFtcyksXG4gICAgc2VhcmNoLFxuICAgIGhhc2gsXG4gICAgaHJlZjogaHJlZi5zbGljZShnbG9iYWxCYXNlLm9yaWdpbi5sZW5ndGgpLFxuICB9XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuXG5leHBvcnQgZnVuY3Rpb24gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShcbiAgc2VhcmNoUGFyYW1zOiBVUkxTZWFyY2hQYXJhbXNcbik6IFBhcnNlZFVybFF1ZXJ5IHtcbiAgY29uc3QgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5ID0ge31cbiAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcbiAgICBpZiAodHlwZW9mIHF1ZXJ5W2tleV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBxdWVyeVtrZXldID0gdmFsdWVcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkocXVlcnlba2V5XSkpIHtcbiAgICAgIDsocXVlcnlba2V5XSBhcyBzdHJpbmdbXSkucHVzaCh2YWx1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgcXVlcnlba2V5XSA9IFtxdWVyeVtrZXldIGFzIHN0cmluZywgdmFsdWVdXG4gICAgfVxuICB9KVxuICByZXR1cm4gcXVlcnlcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5VXJsUXVlcnlQYXJhbShwYXJhbTogc3RyaW5nKTogc3RyaW5nIHtcbiAgaWYgKFxuICAgIHR5cGVvZiBwYXJhbSA9PT0gJ3N0cmluZycgfHxcbiAgICAodHlwZW9mIHBhcmFtID09PSAnbnVtYmVyJyAmJiAhaXNOYU4ocGFyYW0pKSB8fFxuICAgIHR5cGVvZiBwYXJhbSA9PT0gJ2Jvb2xlYW4nXG4gICkge1xuICAgIHJldHVybiBTdHJpbmcocGFyYW0pXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuICcnXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMoXG4gIHVybFF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuKTogVVJMU2VhcmNoUGFyYW1zIHtcbiAgY29uc3QgcmVzdWx0ID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpXG4gIE9iamVjdC5lbnRyaWVzKHVybFF1ZXJ5KS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHZhbHVlLmZvckVhY2goKGl0ZW0pID0+IHJlc3VsdC5hcHBlbmQoa2V5LCBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKGl0ZW0pKSlcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0LnNldChrZXksIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0odmFsdWUpKVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNzaWduKFxuICB0YXJnZXQ6IFVSTFNlYXJjaFBhcmFtcyxcbiAgLi4uc2VhcmNoUGFyYW1zTGlzdDogVVJMU2VhcmNoUGFyYW1zW11cbik6IFVSTFNlYXJjaFBhcmFtcyB7XG4gIHNlYXJjaFBhcmFtc0xpc3QuZm9yRWFjaCgoc2VhcmNoUGFyYW1zKSA9PiB7XG4gICAgQXJyYXkuZnJvbShzZWFyY2hQYXJhbXMua2V5cygpKS5mb3JFYWNoKChrZXkpID0+IHRhcmdldC5kZWxldGUoa2V5KSlcbiAgICBzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4gdGFyZ2V0LmFwcGVuZChrZXksIHZhbHVlKSlcbiAgfSlcbiAgcmV0dXJuIHRhcmdldFxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVzb2x2ZVJld3JpdGVzKCkge31cbiIsImltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3JvdXRlLXJlZ2V4J1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXg6IFJldHVyblR5cGU8dHlwZW9mIGdldFJvdXRlUmVnZXg+KSB7XG4gIGNvbnN0IHsgcmUsIGdyb3VwcyB9ID0gcm91dGVSZWdleFxuICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkKSA9PiB7XG4gICAgY29uc3Qgcm91dGVNYXRjaCA9IHJlLmV4ZWMocGF0aG5hbWUhKVxuICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgY29uc3QgZGVjb2RlID0gKHBhcmFtOiBzdHJpbmcpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocGFyYW0pXG4gICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIGNvbnN0IGVycjogRXJyb3IgJiB7IGNvZGU/OiBzdHJpbmcgfSA9IG5ldyBFcnJvcihcbiAgICAgICAgICAnZmFpbGVkIHRvIGRlY29kZSBwYXJhbSdcbiAgICAgICAgKVxuICAgICAgICBlcnIuY29kZSA9ICdERUNPREVfRkFJTEVEJ1xuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcGFyYW1zOiB7IFtwYXJhbU5hbWU6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH0gPSB7fVxuXG4gICAgT2JqZWN0LmtleXMoZ3JvdXBzKS5mb3JFYWNoKChzbHVnTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBnID0gZ3JvdXBzW3NsdWdOYW1lXVxuICAgICAgY29uc3QgbSA9IHJvdXRlTWF0Y2hbZy5wb3NdXG4gICAgICBpZiAobSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHBhcmFtc1tzbHVnTmFtZV0gPSB+bS5pbmRleE9mKCcvJylcbiAgICAgICAgICA/IG0uc3BsaXQoJy8nKS5tYXAoKGVudHJ5KSA9PiBkZWNvZGUoZW50cnkpKVxuICAgICAgICAgIDogZy5yZXBlYXRcbiAgICAgICAgICA/IFtkZWNvZGUobSldXG4gICAgICAgICAgOiBkZWNvZGUobSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBwYXJhbXNcbiAgfVxufVxuIiwiZXhwb3J0IGludGVyZmFjZSBHcm91cCB7XG4gIHBvczogbnVtYmVyXG4gIHJlcGVhdDogYm9vbGVhblxuICBvcHRpb25hbDogYm9vbGVhblxufVxuXG4vLyB0aGlzIGlzbid0IGltcG9ydGluZyB0aGUgZXNjYXBlLXN0cmluZy1yZWdleCBtb2R1bGVcbi8vIHRvIHJlZHVjZSBieXRlc1xuZnVuY3Rpb24gZXNjYXBlUmVnZXgoc3RyOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bfFxcXFx7fSgpW1xcXV4kKyo/Li1dL2csICdcXFxcJCYnKVxufVxuXG5mdW5jdGlvbiBwYXJzZVBhcmFtZXRlcihwYXJhbTogc3RyaW5nKSB7XG4gIGNvbnN0IG9wdGlvbmFsID0gcGFyYW0uc3RhcnRzV2l0aCgnWycpICYmIHBhcmFtLmVuZHNXaXRoKCddJylcbiAgaWYgKG9wdGlvbmFsKSB7XG4gICAgcGFyYW0gPSBwYXJhbS5zbGljZSgxLCAtMSlcbiAgfVxuICBjb25zdCByZXBlYXQgPSBwYXJhbS5zdGFydHNXaXRoKCcuLi4nKVxuICBpZiAocmVwZWF0KSB7XG4gICAgcGFyYW0gPSBwYXJhbS5zbGljZSgzKVxuICB9XG4gIHJldHVybiB7IGtleTogcGFyYW0sIHJlcGVhdCwgb3B0aW9uYWwgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVSZWdleChcbiAgbm9ybWFsaXplZFJvdXRlOiBzdHJpbmdcbik6IHtcbiAgcmU6IFJlZ0V4cFxuICBuYW1lZFJlZ2V4Pzogc3RyaW5nXG4gIHJvdXRlS2V5cz86IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfVxuICBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfVxufSB7XG4gIGNvbnN0IHNlZ21lbnRzID0gKG5vcm1hbGl6ZWRSb3V0ZS5yZXBsYWNlKC9cXC8kLywgJycpIHx8ICcvJylcbiAgICAuc2xpY2UoMSlcbiAgICAuc3BsaXQoJy8nKVxuXG4gIGNvbnN0IGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9ID0ge31cbiAgbGV0IGdyb3VwSW5kZXggPSAxXG4gIGNvbnN0IHBhcmFtZXRlcml6ZWRSb3V0ZSA9IHNlZ21lbnRzXG4gICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICBjb25zdCB7IGtleSwgb3B0aW9uYWwsIHJlcGVhdCB9ID0gcGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLCAtMSkpXG4gICAgICAgIGdyb3Vwc1trZXldID0geyBwb3M6IGdyb3VwSW5kZXgrKywgcmVwZWF0LCBvcHRpb25hbCB9XG4gICAgICAgIHJldHVybiByZXBlYXQgPyAob3B0aW9uYWwgPyAnKD86LyguKz8pKT8nIDogJy8oLis/KScpIDogJy8oW14vXSs/KSdcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgfVxuICAgIH0pXG4gICAgLmpvaW4oJycpXG5cbiAgLy8gZGVhZCBjb2RlIGVsaW1pbmF0ZSBmb3IgYnJvd3NlciBzaW5jZSBpdCdzIG9ubHkgbmVlZGVkXG4gIC8vIHdoaWxlIGdlbmVyYXRpbmcgcm91dGVzLW1hbmlmZXN0XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIGxldCByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICBsZXQgcm91dGVLZXlDaGFyTGVuZ3RoID0gMVxuXG4gICAgLy8gYnVpbGRzIGEgbWluaW1hbCByb3V0ZUtleSB1c2luZyBvbmx5IGEteiBhbmQgbWluaW1hbCBudW1iZXIgb2YgY2hhcmFjdGVyc1xuICAgIGNvbnN0IGdldFNhZmVSb3V0ZUtleSA9ICgpID0+IHtcbiAgICAgIGxldCByb3V0ZUtleSA9ICcnXG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm91dGVLZXlDaGFyTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcm91dGVLZXkgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShyb3V0ZUtleUNoYXJDb2RlKVxuICAgICAgICByb3V0ZUtleUNoYXJDb2RlKytcblxuICAgICAgICBpZiAocm91dGVLZXlDaGFyQ29kZSA+IDEyMikge1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckxlbmd0aCsrXG4gICAgICAgICAgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiByb3V0ZUtleVxuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlS2V5czogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9ID0ge31cblxuICAgIGxldCBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSA9IHNlZ21lbnRzXG4gICAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgICBjb25zdCB7IGtleSwgb3B0aW9uYWwsIHJlcGVhdCB9ID0gcGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLCAtMSkpXG4gICAgICAgICAgLy8gcmVwbGFjZSBhbnkgbm9uLXdvcmQgY2hhcmFjdGVycyBzaW5jZSB0aGV5IGNhbiBicmVha1xuICAgICAgICAgIC8vIHRoZSBuYW1lZCByZWdleFxuICAgICAgICAgIGxldCBjbGVhbmVkS2V5ID0ga2V5LnJlcGxhY2UoL1xcVy9nLCAnJylcbiAgICAgICAgICBsZXQgaW52YWxpZEtleSA9IGZhbHNlXG5cbiAgICAgICAgICAvLyBjaGVjayBpZiB0aGUga2V5IGlzIHN0aWxsIGludmFsaWQgYW5kIGZhbGxiYWNrIHRvIHVzaW5nIGEga25vd25cbiAgICAgICAgICAvLyBzYWZlIGtleVxuICAgICAgICAgIGlmIChjbGVhbmVkS2V5Lmxlbmd0aCA9PT0gMCB8fCBjbGVhbmVkS2V5Lmxlbmd0aCA+IDMwKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIWlzTmFOKHBhcnNlSW50KGNsZWFuZWRLZXkuc3Vic3RyKDAsIDEpKSkpIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGludmFsaWRLZXkpIHtcbiAgICAgICAgICAgIGNsZWFuZWRLZXkgPSBnZXRTYWZlUm91dGVLZXkoKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJvdXRlS2V5c1tjbGVhbmVkS2V5XSA9IGtleVxuICAgICAgICAgIHJldHVybiByZXBlYXRcbiAgICAgICAgICAgID8gb3B0aW9uYWxcbiAgICAgICAgICAgICAgPyBgKD86Lyg/PCR7Y2xlYW5lZEtleX0+Lis/KSk/YFxuICAgICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT4uKz8pYFxuICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+W14vXSs/KWBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5qb2luKCcnKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgICAgZ3JvdXBzLFxuICAgICAgcm91dGVLZXlzLFxuICAgICAgbmFtZWRSZWdleDogYF4ke25hbWVkUGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgLFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgZ3JvdXBzLFxuICB9XG59XG4iLCJpbXBvcnQgeyBJbmNvbWluZ01lc3NhZ2UsIFNlcnZlclJlc3BvbnNlIH0gZnJvbSAnaHR0cCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBmb3JtYXRVcmwgfSBmcm9tICcuL3JvdXRlci91dGlscy9mb3JtYXQtdXJsJ1xuaW1wb3J0IHsgTWFuaWZlc3RJdGVtIH0gZnJvbSAnLi4vc2VydmVyL2xvYWQtY29tcG9uZW50cydcbmltcG9ydCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBFbnYgfSBmcm9tICdAbmV4dC9lbnYnXG5pbXBvcnQgeyBCdWlsZE1hbmlmZXN0IH0gZnJvbSAnLi4vc2VydmVyL2dldC1wYWdlLWZpbGVzJ1xuaW1wb3J0IHsgRG9tYWluTG9jYWxlcyB9IGZyb20gJy4uL3NlcnZlci9jb25maWcnXG5cbi8qKlxuICogVHlwZXMgdXNlZCBieSBib3RoIG5leHQgYW5kIG5leHQtc2VydmVyXG4gKi9cblxuZXhwb3J0IHR5cGUgTmV4dENvbXBvbmVudFR5cGU8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCA9IE5leHRQYWdlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+ID0gQ29tcG9uZW50VHlwZTxQPiAmIHtcbiAgLyoqXG4gICAqIFVzZWQgZm9yIGluaXRpYWwgcGFnZSBsb2FkIGRhdGEgcG9wdWxhdGlvbi4gRGF0YSByZXR1cm5lZCBmcm9tIGBnZXRJbml0aWFsUHJvcHNgIGlzIHNlcmlhbGl6ZWQgd2hlbiBzZXJ2ZXIgcmVuZGVyZWQuXG4gICAqIE1ha2Ugc3VyZSB0byByZXR1cm4gcGxhaW4gYE9iamVjdGAgd2l0aG91dCB1c2luZyBgRGF0ZWAsIGBNYXBgLCBgU2V0YC5cbiAgICogQHBhcmFtIGN0eCBDb250ZXh0IG9mIGBwYWdlYFxuICAgKi9cbiAgZ2V0SW5pdGlhbFByb3BzPyhjb250ZXh0OiBDKTogSVAgfCBQcm9taXNlPElQPlxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgRG9jdW1lbnRDb250ZXh0LFxuICBEb2N1bWVudEluaXRpYWxQcm9wcyxcbiAgRG9jdW1lbnRQcm9wc1xuPiAmIHtcbiAgcmVuZGVyRG9jdW1lbnQoXG4gICAgRG9jdW1lbnQ6IERvY3VtZW50VHlwZSxcbiAgICBwcm9wczogRG9jdW1lbnRQcm9wc1xuICApOiBSZWFjdC5SZWFjdEVsZW1lbnRcbn1cblxuZXhwb3J0IHR5cGUgQXBwVHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBBcHBDb250ZXh0VHlwZSxcbiAgQXBwSW5pdGlhbFByb3BzLFxuICBBcHBQcm9wc1R5cGVcbj5cblxuZXhwb3J0IHR5cGUgQXBwVHJlZVR5cGUgPSBDb21wb25lbnRUeXBlPFxuICBBcHBJbml0aWFsUHJvcHMgJiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfVxuPlxuXG4vKipcbiAqIFdlYiB2aXRhbHMgcHJvdmlkZWQgdG8gX2FwcC5yZXBvcnRXZWJWaXRhbHMgYnkgQ29yZSBXZWIgVml0YWxzIHBsdWdpbiBkZXZlbG9wZWQgYnkgR29vZ2xlIENocm9tZSB0ZWFtLlxuICogaHR0cHM6Ly9uZXh0anMub3JnL2Jsb2cvbmV4dC05LTQjaW50ZWdyYXRlZC13ZWItdml0YWxzLXJlcG9ydGluZ1xuICovXG5leHBvcnQgdHlwZSBOZXh0V2ViVml0YWxzTWV0cmljID0ge1xuICBpZDogc3RyaW5nXG4gIGxhYmVsOiBzdHJpbmdcbiAgbmFtZTogc3RyaW5nXG4gIHN0YXJ0VGltZTogbnVtYmVyXG4gIHZhbHVlOiBudW1iZXJcbn1cblxuZXhwb3J0IHR5cGUgRW5oYW5jZXI8Qz4gPSAoQ29tcG9uZW50OiBDKSA9PiBDXG5cbmV4cG9ydCB0eXBlIENvbXBvbmVudHNFbmhhbmNlciA9XG4gIHwge1xuICAgICAgZW5oYW5jZUFwcD86IEVuaGFuY2VyPEFwcFR5cGU+XG4gICAgICBlbmhhbmNlQ29tcG9uZW50PzogRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG4gICAgfVxuICB8IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlUmVzdWx0ID0ge1xuICBodG1sOiBzdHJpbmdcbiAgaGVhZD86IEFycmF5PEpTWC5FbGVtZW50IHwgbnVsbD5cbn1cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZSA9IChcbiAgb3B0aW9ucz86IENvbXBvbmVudHNFbmhhbmNlclxuKSA9PiBSZW5kZXJQYWdlUmVzdWx0IHwgUHJvbWlzZTxSZW5kZXJQYWdlUmVzdWx0PlxuXG5leHBvcnQgdHlwZSBCYXNlQ29udGV4dCA9IHtcbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgW2s6IHN0cmluZ106IGFueVxufVxuXG5leHBvcnQgdHlwZSBORVhUX0RBVEEgPSB7XG4gIHByb3BzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIHBhZ2U6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYnVpbGRJZDogc3RyaW5nXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIHJ1bnRpbWVDb25maWc/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9XG4gIG5leHRFeHBvcnQ/OiBib29sZWFuXG4gIGF1dG9FeHBvcnQ/OiBib29sZWFuXG4gIGlzRmFsbGJhY2s/OiBib29sZWFuXG4gIGR5bmFtaWNJZHM/OiBzdHJpbmdbXVxuICBlcnI/OiBFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9XG4gIGdzcD86IGJvb2xlYW5cbiAgZ3NzcD86IGJvb2xlYW5cbiAgY3VzdG9tU2VydmVyPzogYm9vbGVhblxuICBnaXA/OiBib29sZWFuXG4gIGFwcEdpcD86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gIGRvbWFpbkxvY2FsZXM/OiBEb21haW5Mb2NhbGVzXG59XG5cbi8qKlxuICogYE5leHRgIGNvbnRleHRcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0UGFnZUNvbnRleHQge1xuICAvKipcbiAgICogRXJyb3Igb2JqZWN0IGlmIGVuY291bnRlcmVkIGR1cmluZyByZW5kZXJpbmdcbiAgICovXG4gIGVycj86IChFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9KSB8IG51bGxcbiAgLyoqXG4gICAqIGBIVFRQYCByZXF1ZXN0IG9iamVjdC5cbiAgICovXG4gIHJlcT86IEluY29taW5nTWVzc2FnZVxuICAvKipcbiAgICogYEhUVFBgIHJlc3BvbnNlIG9iamVjdC5cbiAgICovXG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIC8qKlxuICAgKiBQYXRoIHNlY3Rpb24gb2YgYFVSTGAuXG4gICAqL1xuICBwYXRobmFtZTogc3RyaW5nXG4gIC8qKlxuICAgKiBRdWVyeSBzdHJpbmcgc2VjdGlvbiBvZiBgVVJMYCBwYXJzZWQgYXMgYW4gb2JqZWN0LlxuICAgKi9cbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIC8qKlxuICAgKiBgU3RyaW5nYCBvZiB0aGUgYWN0dWFsIHBhdGggaW5jbHVkaW5nIHF1ZXJ5LlxuICAgKi9cbiAgYXNQYXRoPzogc3RyaW5nXG4gIC8qKlxuICAgKiBgQ29tcG9uZW50YCB0aGUgdHJlZSBvZiB0aGUgQXBwIHRvIHVzZSBpZiBuZWVkaW5nIHRvIHJlbmRlciBzZXBhcmF0ZWx5XG4gICAqL1xuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxufVxuXG5leHBvcnQgdHlwZSBBcHBDb250ZXh0VHlwZTxSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXI+ID0ge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dD5cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbiAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgcm91dGVyOiBSXG59XG5cbmV4cG9ydCB0eXBlIEFwcEluaXRpYWxQcm9wcyA9IHtcbiAgcGFnZVByb3BzOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHNUeXBlPFxuICBSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXIsXG4gIFAgPSB7fVxuPiA9IEFwcEluaXRpYWxQcm9wcyAmIHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQsIGFueSwgUD5cbiAgcm91dGVyOiBSXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50Q29udGV4dCA9IE5leHRQYWdlQ29udGV4dCAmIHtcbiAgcmVuZGVyUGFnZTogUmVuZGVyUGFnZVxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudEluaXRpYWxQcm9wcyA9IFJlbmRlclBhZ2VSZXN1bHQgJiB7XG4gIHN0eWxlcz86IFJlYWN0LlJlYWN0RWxlbWVudFtdIHwgUmVhY3QuUmVhY3RGcmFnbWVudFxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFByb3BzID0gRG9jdW1lbnRJbml0aWFsUHJvcHMgJiB7XG4gIF9fTkVYVF9EQVRBX186IE5FWFRfREFUQVxuICBkYW5nZXJvdXNBc1BhdGg6IHN0cmluZ1xuICBkb2NDb21wb25lbnRzUmVuZGVyZWQ6IHtcbiAgICBIdG1sPzogYm9vbGVhblxuICAgIE1haW4/OiBib29sZWFuXG4gICAgSGVhZD86IGJvb2xlYW5cbiAgICBOZXh0U2NyaXB0PzogYm9vbGVhblxuICB9XG4gIGJ1aWxkTWFuaWZlc3Q6IEJ1aWxkTWFuaWZlc3RcbiAgYW1wUGF0aDogc3RyaW5nXG4gIGluQW1wTW9kZTogYm9vbGVhblxuICBoeWJyaWRBbXA6IGJvb2xlYW5cbiAgaXNEZXZlbG9wbWVudDogYm9vbGVhblxuICBkeW5hbWljSW1wb3J0czogTWFuaWZlc3RJdGVtW11cbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgY2Fub25pY2FsQmFzZTogc3RyaW5nXG4gIGhlYWRUYWdzOiBhbnlbXVxuICB1bnN0YWJsZV9ydW50aW1lSlM/OiBmYWxzZVxuICB1bnN0YWJsZV9Kc1ByZWxvYWQ/OiBmYWxzZVxuICBkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZzogc3RyaW5nXG4gIHNjcmlwdExvYWRlcjogeyBkZWZlcj86IHN0cmluZ1tdOyBlYWdlcj86IGFueVtdIH1cbiAgbG9jYWxlPzogc3RyaW5nXG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXF1ZXN0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dEFwaVJlcXVlc3QgZXh0ZW5kcyBJbmNvbWluZ01lc3NhZ2Uge1xuICAvKipcbiAgICogT2JqZWN0IG9mIGBxdWVyeWAgdmFsdWVzIGZyb20gdXJsXG4gICAqL1xuICBxdWVyeToge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdXG4gIH1cbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgY29va2llc2AgZnJvbSBoZWFkZXJcbiAgICovXG4gIGNvb2tpZXM6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmdcbiAgfVxuXG4gIGJvZHk6IGFueVxuXG4gIGVudjogRW52XG5cbiAgcHJldmlldz86IGJvb2xlYW5cbiAgLyoqXG4gICAqIFByZXZpZXcgZGF0YSBzZXQgb24gdGhlIHJlcXVlc3QsIGlmIGFueVxuICAgKiAqL1xuICBwcmV2aWV3RGF0YT86IGFueVxufVxuXG4vKipcbiAqIFNlbmQgYm9keSBvZiByZXNwb25zZVxuICovXG50eXBlIFNlbmQ8VD4gPSAoYm9keTogVCkgPT4gdm9pZFxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVzcG9uc2VcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaVJlc3BvbnNlPFQgPSBhbnk+ID0gU2VydmVyUmVzcG9uc2UgJiB7XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGFueWAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAgc2VuZDogU2VuZDxUPlxuICAvKipcbiAgICogU2VuZCBkYXRhIGBqc29uYCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBqc29uOiBTZW5kPFQ+XG4gIHN0YXR1czogKHN0YXR1c0NvZGU6IG51bWJlcikgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHN0YXR1czogbnVtYmVyLCB1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuXG4gIC8qKlxuICAgKiBTZXQgcHJldmlldyBkYXRhIGZvciBOZXh0LmpzJyBwcmVyZW5kZXIgbW9kZVxuICAgKi9cbiAgc2V0UHJldmlld0RhdGE6IChcbiAgICBkYXRhOiBvYmplY3QgfCBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIC8qKlxuICAgICAgICogU3BlY2lmaWVzIHRoZSBudW1iZXIgKGluIHNlY29uZHMpIGZvciB0aGUgcHJldmlldyBzZXNzaW9uIHRvIGxhc3QgZm9yLlxuICAgICAgICogVGhlIGdpdmVuIG51bWJlciB3aWxsIGJlIGNvbnZlcnRlZCB0byBhbiBpbnRlZ2VyIGJ5IHJvdW5kaW5nIGRvd24uXG4gICAgICAgKiBCeSBkZWZhdWx0LCBubyBtYXhpbXVtIGFnZSBpcyBzZXQgYW5kIHRoZSBwcmV2aWV3IHNlc3Npb24gZmluaXNoZXNcbiAgICAgICAqIHdoZW4gdGhlIGNsaWVudCBzaHV0cyBkb3duIChicm93c2VyIGlzIGNsb3NlZCkuXG4gICAgICAgKi9cbiAgICAgIG1heEFnZT86IG51bWJlclxuICAgIH1cbiAgKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgY2xlYXJQcmV2aWV3RGF0YTogKCkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSBoYW5kbGVyXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlIYW5kbGVyPFQgPSBhbnk+ID0gKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZTxUPlxuKSA9PiB2b2lkIHwgUHJvbWlzZTx2b2lkPlxuXG4vKipcbiAqIFV0aWxzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleGVjT25jZTxUIGV4dGVuZHMgKC4uLmFyZ3M6IGFueVtdKSA9PiBSZXR1cm5UeXBlPFQ+PihcbiAgZm46IFRcbik6IFQge1xuICBsZXQgdXNlZCA9IGZhbHNlXG4gIGxldCByZXN1bHQ6IFJldHVyblR5cGU8VD5cblxuICByZXR1cm4gKCguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGlmICghdXNlZCkge1xuICAgICAgdXNlZCA9IHRydWVcbiAgICAgIHJlc3VsdCA9IGZuKC4uLmFyZ3MpXG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfSkgYXMgVFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYXRpb25PcmlnaW4oKSB7XG4gIGNvbnN0IHsgcHJvdG9jb2wsIGhvc3RuYW1lLCBwb3J0IH0gPSB3aW5kb3cubG9jYXRpb25cbiAgcmV0dXJuIGAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0ke3BvcnQgPyAnOicgKyBwb3J0IDogJyd9YFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VVJMKCkge1xuICBjb25zdCB7IGhyZWYgfSA9IHdpbmRvdy5sb2NhdGlvblxuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIHJldHVybiBocmVmLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWU8UD4oQ29tcG9uZW50OiBDb21wb25lbnRUeXBlPFA+KSB7XG4gIHJldHVybiB0eXBlb2YgQ29tcG9uZW50ID09PSAnc3RyaW5nJ1xuICAgID8gQ29tcG9uZW50XG4gICAgOiBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Jlc1NlbnQocmVzOiBTZXJ2ZXJSZXNwb25zZSkge1xuICByZXR1cm4gcmVzLmZpbmlzaGVkIHx8IHJlcy5oZWFkZXJzU2VudFxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZEdldEluaXRpYWxQcm9wczxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4oQXBwOiBOZXh0Q29tcG9uZW50VHlwZTxDLCBJUCwgUD4sIGN0eDogQyk6IFByb21pc2U8SVA+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoQXBwLnByb3RvdHlwZT8uZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgQXBwXG4gICAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIGlzIGRlZmluZWQgYXMgYW4gaW5zdGFuY2UgbWV0aG9kIC0gdmlzaXQgaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZ2V0LWluaXRpYWwtcHJvcHMtYXMtYW4taW5zdGFuY2UtbWV0aG9kIGZvciBtb3JlIGluZm9ybWF0aW9uLmBcbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICAgIH1cbiAgfVxuICAvLyB3aGVuIGNhbGxlZCBmcm9tIF9hcHAgYGN0eGAgaXMgbmVzdGVkIGluIGBjdHhgXG4gIGNvbnN0IHJlcyA9IGN0eC5yZXMgfHwgKGN0eC5jdHggJiYgY3R4LmN0eC5yZXMpXG5cbiAgaWYgKCFBcHAuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgaWYgKGN0eC5jdHggJiYgY3R4LkNvbXBvbmVudCkge1xuICAgICAgLy8gQHRzLWlnbm9yZSBwYWdlUHJvcHMgZGVmYXVsdFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGFnZVByb3BzOiBhd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKGN0eC5Db21wb25lbnQsIGN0eC5jdHgpLFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge30gYXMgSVBcbiAgfVxuXG4gIGNvbnN0IHByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpXG5cbiAgaWYgKHJlcyAmJiBpc1Jlc1NlbnQocmVzKSkge1xuICAgIHJldHVybiBwcm9wc1xuICB9XG5cbiAgaWYgKCFwcm9wcykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgQXBwXG4gICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBzaG91bGQgcmVzb2x2ZSB0byBhbiBvYmplY3QuIEJ1dCBmb3VuZCBcIiR7cHJvcHN9XCIgaW5zdGVhZC5gXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChPYmplY3Qua2V5cyhwcm9wcykubGVuZ3RoID09PSAwICYmICFjdHguY3R4KSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGAke2dldERpc3BsYXlOYW1lKFxuICAgICAgICAgIEFwcFxuICAgICAgICApfSByZXR1cm5lZCBhbiBlbXB0eSBvYmplY3QgZnJvbSBcXGBnZXRJbml0aWFsUHJvcHNcXGAuIFRoaXMgZGUtb3B0aW1pemVzIGFuZCBwcmV2ZW50cyBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbi4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZW1wdHktb2JqZWN0LWdldEluaXRpYWxQcm9wc2BcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcHJvcHNcbn1cblxuZXhwb3J0IGNvbnN0IHVybE9iamVjdEtleXMgPSBbXG4gICdhdXRoJyxcbiAgJ2hhc2gnLFxuICAnaG9zdCcsXG4gICdob3N0bmFtZScsXG4gICdocmVmJyxcbiAgJ3BhdGgnLFxuICAncGF0aG5hbWUnLFxuICAncG9ydCcsXG4gICdwcm90b2NvbCcsXG4gICdxdWVyeScsXG4gICdzZWFyY2gnLFxuICAnc2xhc2hlcycsXG5dXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRXaXRoVmFsaWRhdGlvbih1cmw6IFVybE9iamVjdCk6IHN0cmluZyB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIGlmICh1cmwgIT09IG51bGwgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIE9iamVjdC5rZXlzKHVybCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmICh1cmxPYmplY3RLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBgVW5rbm93biBrZXkgcGFzc2VkIHZpYSB1cmxPYmplY3QgaW50byB1cmwuZm9ybWF0OiAke2tleX1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmb3JtYXRVcmwodXJsKVxufVxuXG5leHBvcnQgY29uc3QgU1AgPSB0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnXG5leHBvcnQgY29uc3QgU1QgPVxuICBTUCAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWFyayA9PT0gJ2Z1bmN0aW9uJyAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWVhc3VyZSA9PT0gJ2Z1bmN0aW9uJ1xuIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5ub3JtYWxpemVQYXRoU2VwPW5vcm1hbGl6ZVBhdGhTZXA7ZXhwb3J0cy5kZW5vcm1hbGl6ZVBhZ2VQYXRoPWRlbm9ybWFsaXplUGFnZVBhdGg7ZnVuY3Rpb24gbm9ybWFsaXplUGF0aFNlcChwYXRoKXtyZXR1cm4gcGF0aC5yZXBsYWNlKC9cXFxcL2csJy8nKTt9ZnVuY3Rpb24gZGVub3JtYWxpemVQYWdlUGF0aChwYWdlKXtwYWdlPW5vcm1hbGl6ZVBhdGhTZXAocGFnZSk7aWYocGFnZS5zdGFydHNXaXRoKCcvaW5kZXgvJykpe3BhZ2U9cGFnZS5zbGljZSg2KTt9ZWxzZSBpZihwYWdlPT09Jy9pbmRleCcpe3BhZ2U9Jy8nO31yZXR1cm4gcGFnZTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMubWFwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwiXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBNYWluU2Nyb2xsUGFnZSBmcm9tICcuLi9zcmMvcGFnZXMvTWFpblNjcm9sbFBhZ2UnXG5cbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vc3JjL2NvbXBvbmVudC9oZWFkZXIvSGVhZGVyJ1xuaW1wb3J0IE1ldGFIZWFkZXIgZnJvbSAnLi4vc3JjL2NvbXBvbmVudC9NZXRhSGVhZGVyJ1xuXG5pbXBvcnQgcG9seWZpbGwgZnJvbSAnLi4vc3JjL3BvbHlmaWxsJ1xuXG5pbXBvcnQgJy4uL3NyYy9BcHAuY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXggKCkge1xuICB1c2VFZmZlY3QocG9seWZpbGwpO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxNZXRhSGVhZGVyPjwvTWV0YUhlYWRlcj5cbiAgICAgIDxIZWFkZXI+PC9IZWFkZXI+XG4gICAgICA8TWFpblNjcm9sbFBhZ2U+PC9NYWluU2Nyb2xsUGFnZT5cbiAgICA8Lz5cbiAgKVxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmZ1bmN0aW9uIEltYWdlKHsgc3JjLCBhbHQsIGNsYXNzTmFtZSB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxwaWN0dXJlPlxyXG4gICAgICA8c291cmNlIHNyY1NldD17YCR7c3JjfS53ZWJwYH0gdHlwZT1cImltYWdlL3dlYnBcIiAvPlxyXG4gICAgICA8aW1nIGRyYWdnYWJsZT1cImZhbHNlXCIgc3JjPXtzcmN9IGFsdD17YWx0IHx8ICcnfSBjbGFzc05hbWU9e2NsYXNzTmFtZX0gLz5cclxuICAgIDwvcGljdHVyZT5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEltYWdlXHJcbiIsImltcG9ydCBxcyBmcm9tICdxdWVyeS1zdHJpbmcnXHJcblxyXG5jbGFzcyBMb2NhdGlvbiB7XHJcbiAgc3RhdGljIHFzKHJvdXRlcikge1xyXG4gICAgcmV0dXJuIHFzLnBhcnNlKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpXHJcbiAgfVxyXG5cclxuICBzdGF0aWMgcGF0aG5hbWUocm91dGVyKSB7XHJcbiAgICBjb25zb2xlLmxvZygnUEFUSE5BTUUnLCByb3V0ZXIsIExvY2F0aW9uLmxpbmtzWzBdLmxpbmspXHJcbiAgICByZXR1cm4gcm91dGVyLnF1ZXJ5LnBhZ2UgfHwgTG9jYXRpb24ubGlua3NbMF0ubGlua1xyXG4gIH1cclxufVxyXG5cclxuTG9jYXRpb24ubGlua3MgPSBbe1xyXG4gIGxpbms6ICdob21lJyxcclxuICBsYWJlbDogJ0hvbWUnLFxyXG59LCB7XHJcbiAgbGluazogJ3dvcmsnLFxyXG4gIGxhYmVsOiAnV29yaycsXHJcbn0sIHtcclxuICBsaW5rOiAnc2tpbGxzJyxcclxuICBsYWJlbDogJ1NraWxscycsXHJcbn0sIHtcclxuICBsaW5rOiAnZXhwZXJpZW5jZXMnLFxyXG4gIGxhYmVsOiAnRXhwZXJpZW5jZXMnLFxyXG59XVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9jYXRpb25cclxuIiwiY2xhc3MgV2luZG93U2l6ZSB7XHJcbiAgc3RhdGljIGdldFdpZHRoKCkge1xyXG4gICAgcmV0dXJuIHdpbmRvdy5pbm5lcldpZHRoIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCB8fCBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdLmNsaWVudFdpZHRoXHJcbiAgfVxyXG5cclxuICBzdGF0aWMgaXNMYXJnZSgpIHtcclxuICAgIHJldHVybiBXaW5kb3dTaXplLmdldFdpZHRoKCkgPj0gV2luZG93U2l6ZS5jZWlsXHJcbiAgfVxyXG5cclxuICBzdGF0aWMgaXNTYWZhcmkoKSB7XHJcbiAgICByZXR1cm4gL2NvbnN0cnVjdG9yL2kudGVzdCh3aW5kb3cuSFRNTEVsZW1lbnQpXHJcbiAgICAgIHx8ICghd2luZG93LnNhZmFyaSB8fCAodHlwZW9mIHdpbmRvdy5zYWZhcmkgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5zYWZhcmkucHVzaE5vdGlmaWNhdGlvbikpLnRvU3RyaW5nKCkgPT09ICdbb2JqZWN0IFNhZmFyaVJlbW90ZU5vdGlmaWNhdGlvbl0nO1xyXG4gIH1cclxufVxyXG5cclxuV2luZG93U2l6ZS5jZWlsID0gODEyXHJcblxyXG5leHBvcnQgZGVmYXVsdCBXaW5kb3dTaXplXHJcbiIsImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuXG4gY2xhc3MgTWV0YUhlYWRlciBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgd2luZG93LmRhdGFMYXllciA9IHdpbmRvdy5kYXRhTGF5ZXIgfHwgW107XG4gICAgZnVuY3Rpb24gZ3RhZygpIHtcbiAgICAgIGRhdGFMYXllci5wdXNoKGFyZ3VtZW50cylcbiAgICB9XG4gICAgZ3RhZygnanMnLCBuZXcgRGF0ZSgpKTtcblxuICAgIGd0YWcoJ2NvbmZpZycsICdVQS0xNDQ2NTk0MzItMScpO1xuICB9XG4gIFxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxIZWFkPlxuICAgICAgICA8c2NyaXB0IGFzeW5jIHNyYz1cImh0dHBzOi8vd3d3Lmdvb2dsZXRhZ21hbmFnZXIuY29tL2d0YWcvanM/aWQ9VUEtMTQ0NjU5NDMyLTFcIj48L3NjcmlwdD5cbiAgICAgICAgPG1ldGEgY2hhclNldD1cIlVURi04XCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwic2hvcnRjdXQgaWNvblwiIGhyZWY9XCIlUFVCTElDX1VSTCUvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT0nb2c6aW1hZ2UnIGNvbnRlbnQ9XCIlUFVCTElDX1VSTCUvZmF2aWNvbi5pY29cIi8+XG4gICAgICAgIDxtZXRhXG4gICAgICAgICAgbmFtZT1cInZpZXdwb3J0XCJcbiAgICAgICAgICBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEsIHNocmluay10by1maXQ9bm9cIlxuICAgICAgICAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidGhlbWUtY29sb3JcIiBjb250ZW50PVwiIzI5MTU0ZVwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cIm1hbmlmZXN0XCIgaHJlZj1cIiVQVUJMSUNfVVJMJS9tYW5pZmVzdC5qc29uXCIgLz5cbiAgXG4gIFxuICAgICAgICA8bWV0YSBuYW1lPVwicm9ib3RzXCIgY29udGVudD1cIm5vaW1hZ2VpbmRleFwiIC8+XG4gICAgICAgIFxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCIgY29udGVudD1cIkTDqXZlbG9wcGV1ciBGcmVlbGFuY2UgYmFzw6kgw6AgTWFyc2VpbGxlLiBKZSB2b3VzIGFjY29tcGFnbmUgZGFucyBsYSByw6lhbGlzYXRpb24gZGUgdm90cmUgcHJvamV0IG51bcOpcmlxdWUsIHNpdGUgaW50ZXJuZXQsIGFwcGxpY2F0aW9uIG1vYmlsZS5cIiAvPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cInR3aXR0ZXI6ZGVzY3JpcHRpb25cIiBjb250ZW50PVwiRMOpdmVsb3BwZXVyIEZyZWVsYW5jZSBiYXPDqSDDoCBNYXJzZWlsbGUuIEplIHZvdXMgYWNjb21wYWduZSBkYW5zIGxhIHLDqWFsaXNhdGlvbiBkZSB2b3RyZSBwcm9qZXQgbnVtw6lyaXF1ZSwgc2l0ZSBpbnRlcm5ldCwgYXBwbGljYXRpb24gbW9iaWxlLlwiIC8+XG4gICAgICAgIDxtZXRhIGRlc2NyaXB0aW9uIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJEw6l2ZWxvcHBldXIgRnJlZWxhbmNlIGJhc8OpIMOgIE1hcnNlaWxsZS4gSmUgdm91cyBhY2NvbXBhZ25lIGRhbnMgbGEgcsOpYWxpc2F0aW9uIGRlIHZvdHJlIHByb2pldCBudW3DqXJpcXVlLCBzaXRlIGludGVybmV0LCBhcHBsaWNhdGlvbiBtb2JpbGUuXCIgLz5cbiAgICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG86MTAwLDQwMHxNYWpvcitNb25vK0Rpc3BsYXl8RUIrR2FyYW1vbmR8T3N3YWxkOjcwMFwiIHJlbD1cInN0eWxlc2hlZXRcIi8+XG4gICAgICAgIDx0aXRsZT5NZWhkaSBNZWRkb3VyIHwgRMOpdmVsb3BwZXVyIEZyZWVsYW5jZSBXRUIgLyBNT0JJTEUgLyBMT0dJQ0lFTDwvdGl0bGU+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PVwiTWVoZGkgTWVkZG91ciB8IETDqXZlbG9wcGV1ciBGcmVlbGFuY2UgV0VCIC8gTU9CSUxFIC8gTE9HSUNJRUxcIi8+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwidHdpdHRlcjp0aXRsZVwiIGNvbnRlbnQ9XCJNZWhkaSBNZWRkb3VyIHwgRMOpdmVsb3BwZXVyIEZyZWVsYW5jZSBXRUIgLyBNT0JJTEUgLyBMT0dJQ0lFTFwiLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpzaXRlX25hbWVcIiBjb250ZW50PVwiTWVoZGkgTWVkZG91clwiLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp1cmxcIiBjb250ZW50PVwiaHR0cHM6Ly9tZWRkb3UuY29tXCIvPlxuICBcbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0eXBlXCIgY29udGVudD1cIndlYnNpdGVcIiAvPlxuICBcbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJ0d2l0dGVyOmltYWdlXCIgY29udGVudD1cImh0dHBzOi8vbWVkZG91LmNvbS9pbWFnZXMtd2VicC9tZWhkaS5wbmdcIi8+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2VcIiBjb250ZW50PVwiaHR0cHM6Ly9tZWRkb3UuY29tL2ltYWdlcy13ZWJwL21laGRpLnBuZ1wiLz5cbiAgXG4gICAgICA8L0hlYWQ+XG4gICAgKSAgXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTWV0YUhlYWRlciIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xyXG5cclxuaW1wb3J0ICcuL1Byb2dyZXNzUmluZy5jc3MnXHJcblxyXG5jbGFzcyBQcm9ncmVzc1JpbmcgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcylcclxuXHJcbiAgICBjb25zdCB7IHNpZGUgfSA9IHRoaXMucHJvcHNcclxuXHJcbiAgICB0aGlzLmNpcmN1bWZlcmVuY2UgPSBzaWRlICogNFxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBzdHJva2UsIHByb2dyZXNzLCBzaWRlIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgIGNvbnN0IHN0cm9rZURhc2hvZmZzZXQgPSB0aGlzLmNpcmN1bWZlcmVuY2UgLSAocHJvZ3Jlc3MgLyAxMDApICogdGhpcy5jaXJjdW1mZXJlbmNlO1xyXG4gICAgY29uc3Qgc3Ryb2tlQ29sb3IgPSAnI2ZmYWIwMCdcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8c3ZnXHJcbiAgICAgICAgc3R5bGU9e3sgb3ZlcmZsb3c6ICd2aXNpYmxlJyB9fVxyXG4gICAgICAgIGhlaWdodD17c2lkZX1cclxuICAgICAgICB3aWR0aD17c2lkZX1cclxuICAgICAgPlxyXG4gICAgICAgIDxyZWN0XHJcbiAgICAgICAgICBzdHJva2U9e3N0cm9rZUNvbG9yfVxyXG4gICAgICAgICAgZmlsbD1cInRyYW5zcGFyZW50XCJcclxuICAgICAgICAgIHN0cm9rZVdpZHRoPXtzdHJva2V9XHJcbiAgICAgICAgICBzdHJva2VEYXNoYXJyYXk9e2Ake3RoaXMuY2lyY3VtZmVyZW5jZX0gJHt0aGlzLmNpcmN1bWZlcmVuY2V9YH1cclxuICAgICAgICAgIHN0eWxlPXt7IHN0cm9rZURhc2hvZmZzZXQgfX1cclxuICAgICAgICAgIHdpZHRoPXtzaWRlfVxyXG4gICAgICAgICAgaGVpZ2h0PXtzaWRlfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvc3ZnPlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuUHJvZ3Jlc3NSaW5nLnByb3BUeXBlcyA9IHtcclxuICBzaWRlOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXHJcbiAgc3Ryb2tlOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXHJcbiAgcHJvZ3Jlc3M6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZ3Jlc3NSaW5nXHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xyXG5cclxuY2xhc3MgU2Nyb2xsZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcylcclxuXHJcbiAgICB0aGlzLmNvbnRhaW5lclJlZiA9IFJlYWN0LmNyZWF0ZVJlZigpXHJcbiAgICB0aGlzLnNlY3Rpb25SZWZzID0gW11cclxuICAgIHRoaXMubGFzdFNjcm9sbFRvcCA9IDBcclxuICAgIHRoaXMuaXNTY3JvbGxpbmcgPSBmYWxzZVxyXG4gICAgdGhpcy5jYW5TY3JvbGwgPSB0cnVlXHJcblxyXG4gICAgdGhpcy5zY3JvbGxUaW1lb3V0ID0gdW5kZWZpbmVkXHJcbiAgICB0aGlzLnNjcm9sbFRpbWVyID0gdW5kZWZpbmVkXHJcbiAgICB0aGlzLmNhblNjcm9sbFRpbWVvdXQgPSB1bmRlZmluZWRcclxuXHJcbiAgICB0aGlzLnNlY3Rpb25zID0gUmVhY3QuQ2hpbGRyZW4ubWFwKHByb3BzLmNoaWxkcmVuLCAoY2hpbGQpID0+IHtcclxuICAgICAgY29uc3QgcmVmID0gUmVhY3QuY3JlYXRlUmVmKClcclxuXHJcbiAgICAgIHRoaXMuc2VjdGlvblJlZnMucHVzaChyZWYpXHJcbiAgICAgIHJldHVybiA8ZGl2IHJlZj17cmVmfT57Y2hpbGR9PC9kaXY+XHJcbiAgICB9KVxyXG5cclxuICAgIHRoaXMuaW5kZXggPSBwcm9wcy5pbmRleCB8fCAwXHJcblxyXG4gICAgdGhpcy5uZXh0SW5kZXggPSBwcm9wcy5pbmRleCB8fCAwXHJcblxyXG4gICAgdGhpcy5zY3JvbGxUaW1lckZ4ID0gdGhpcy5zY3JvbGxUaW1lckZ4LmJpbmQodGhpcylcclxuICAgIGNvbnNvbGUubG9nKCdJTiBDVE9SJylcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdGhpcy5jb250YWluZXIgPSB3aW5kb3dcclxuXHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLmluZGV4KVxyXG4gICAgdGhpcy5zY3JvbGxUb0VsZW1lbnQodGhpcy5zZWN0aW9uUmVmc1t0aGlzLmluZGV4XS5jdXJyZW50LCB0aGlzLmluZGV4LCBmYWxzZSlcclxuICAgIHRoaXMuYmluZExpc3RlbmVyKClcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcclxuICAgIGNvbnN0IHsgaW5kZXggfSA9IHRoaXMucHJvcHNcclxuXHJcbiAgICBjb25zb2xlLmxvZyhpbmRleCwgdGhpcy5uZXh0SW5kZXgpXHJcbiAgICBpZiAodGhpcy5uZXh0SW5kZXggIT09IGluZGV4KSB7XHJcbiAgICAgIC8vIHRoaXMuaW5kZXggPSBpbmRleFxyXG4gICAgICB0aGlzLmlzU2Nyb2xsaW5nID0gdHJ1ZVxyXG4gICAgICB0aGlzLnNjcm9sbFRvRWxlbWVudCh0aGlzLnNlY3Rpb25SZWZzW3RoaXMuaW5kZXhdLmN1cnJlbnQsIGluZGV4KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICB0aGlzLnVuYmluZExpc3RlbmVyKClcclxuICAgIHdpbmRvdy5jbGVhclRpbWVvdXQodGhpcy5zY3JvbGxUaW1lb3V0KVxyXG4gICAgd2luZG93LmNsZWFyVGltZW91dCh0aGlzLmNhblNjcm9sbFRpbWVvdXQpXHJcbiAgfVxyXG5cclxuICBvblNjcm9sbChlKSB7XHJcbiAgICBjb25zdCBzY3JvbGxEaXJlY3Rpb25Db2VmZiA9IHRoaXMuZ2V0U2Nyb2xsRGlyZWN0aW9uKCkgPT09IHRydWUgPyAxIDogLTFcclxuXHJcbiAgICBpZiAoKHRoaXMuaW5kZXggKyBzY3JvbGxEaXJlY3Rpb25Db2VmZikgPCB0aGlzLnNlY3Rpb25SZWZzLmxlbmd0aFxyXG4gICAgICAmJiAodGhpcy5pbmRleCArIHNjcm9sbERpcmVjdGlvbkNvZWZmKSA+PSAwICYmIGUudGltZVN0YW1wID49IDEwMDApIHtcclxuICAgICAgY29uc3QgbmV4dEluZGV4ID0gdGhpcy5pbmRleCArIHNjcm9sbERpcmVjdGlvbkNvZWZmXHJcblxyXG4gICAgICBjb25zdCBuZXh0RWxlbWVudCA9IHRoaXMuc2VjdGlvblJlZnNbbmV4dEluZGV4XS5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXHJcblxyXG4gICAgICBpZiAoKHNjcm9sbERpcmVjdGlvbkNvZWZmID09PSAxKVxyXG4gICAgICB8fCAoc2Nyb2xsRGlyZWN0aW9uQ29lZmYgPT09IC0xICYmIG5leHRFbGVtZW50LnRvcCArIG5leHRFbGVtZW50LmhlaWdodCA+PSAwKSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcclxuICAgICAgICB0aGlzLm5leHRJbmRleCA9IG5leHRJbmRleFxyXG4gICAgICAgIHRoaXMubm90aWZ5T25TY3JvbGwobmV4dEluZGV4KVxyXG4gICAgICAgIHRoaXMuc2Nyb2xsVG9FbGVtZW50KHRoaXMuc2VjdGlvblJlZnNbbmV4dEluZGV4XS5jdXJyZW50LCBuZXh0SW5kZXgpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldENvbnRhaW5lckJvdW5kaW5nKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuY29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXHJcbiAgfVxyXG5cclxuICBnZXRDb250YWluZXJTY3JvbGxUb3AoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5jb250YWluZXIuc2Nyb2xsVG9wIHx8IHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wXHJcbiAgfVxyXG5cclxuICBnZXRTY3JvbGxEaXJlY3Rpb24oKSB7XHJcbiAgICBjb25zdCBzdCA9IHRoaXMuZ2V0Q29udGFpbmVyU2Nyb2xsVG9wKClcclxuICAgIGNvbnN0IHJldCA9IHN0ID4gdGhpcy5sYXN0U2Nyb2xsVG9wXHJcblxyXG4gICAgdGhpcy5sYXN0U2Nyb2xsVG9wID0gc3QgPD0gMCA/IDAgOiBzdFxyXG4gICAgcmV0dXJuIHJldFxyXG4gIH1cclxuXHJcbiAgc2Nyb2xsVG9FbGVtZW50KGVsZW1lbnQsIGluZGV4LCBpc1Ntb290aCA9IHRydWUpIHtcclxuICAgIGNvbnN0IHRvcCA9IHRoaXMuZ2V0Q29udGFpbmVyU2Nyb2xsVG9wKClcclxuICAgIGNvbnN0IGVsZW1lbnRSZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxyXG5cclxuICAgIC8vIHRoaXMuaXNTY3JvbGxpbmcgPSB0cnVlXHJcbiAgICB0aGlzLmNvbnRhaW5lci5zY3JvbGxUbyh7XHJcbiAgICAgIGJlaGF2aW9yOiBpc1Ntb290aCA/ICdzbW9vdGgnIDogJ2luc3RhbnQnLFxyXG4gICAgICBsZWZ0OiAwLFxyXG4gICAgICB0b3A6IHRvcCArIGVsZW1lbnRSZWN0LnRvcCxcclxuICAgIH0pXHJcblxyXG4gICAgdGhpcy5pbmRleCA9IGluZGV4XHJcbiAgICB0aGlzLm5leHRJbmRleCA9IGluZGV4XHJcbiAgICB3aW5kb3cub2xkSW5kZXggPSBpbmRleFxyXG4gIH1cclxuXHJcbiAgbm90aWZ5T25TY3JvbGwoaW5kZXgpIHtcclxuICAgIGNvbnN0IHsgb25TY3JvbGwgfSA9IHRoaXMucHJvcHNcclxuXHJcbiAgICBpZiAob25TY3JvbGwpIHtcclxuICAgICAgb25TY3JvbGwoaW5kZXgpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzY3JvbGxUaW1lckZ4KGUpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKCdJTiBTQ1JPTEwnKVxyXG4gICAgaWYgKHRoaXMuY2FuU2Nyb2xsKSB7XHJcbiAgICAgIC8qKlxyXG4gICAgICAgKiBATElOSyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy80NjIwOTA2L2hvdy1kby1pLWtub3ctd2hlbi1pdmUtc3RvcHBlZC1zY3JvbGxpbmdcclxuICAgICAgICovXHJcbiAgICAgIGlmICh0aGlzLnNjcm9sbFRpbWVyICE9PSBudWxsKSB7XHJcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuc2Nyb2xsVGltZXIpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuc2Nyb2xsVGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBpZiAodGhpcy5pc1Njcm9sbGluZykge1xyXG4gICAgICAgICAgLy8gY29uc29sZS5sb2coJ1NDUk9MTCBFTkQnKTtcclxuICAgICAgICAgIHRoaXMuY2FuU2Nyb2xsID0gZmFsc2VcclxuICAgICAgICAgIHRoaXMuZ2V0U2Nyb2xsRGlyZWN0aW9uKClcclxuICAgICAgICAgIHRoaXMuaXNTY3JvbGxpbmcgPSBmYWxzZVxyXG4gICAgICAgICAgdGhpcy5jYW5TY3JvbGxUaW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNhblNjcm9sbCA9IHRydWVcclxuICAgICAgICAgIH0sIDUwKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygnU0NST0xMIFNUQVJUJyk7XHJcbiAgICAgICAgICB0aGlzLmlzU2Nyb2xsaW5nID0gdHJ1ZVxyXG4gICAgICAgICAgdGhpcy5vblNjcm9sbChlKVxyXG4gICAgICAgIH1cclxuICAgICAgfSwgMTUwKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZ2V0U2Nyb2xsRGlyZWN0aW9uKClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGJpbmRMaXN0ZW5lcigpIHtcclxuICAgIHRoaXMuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuc2Nyb2xsVGltZXJGeClcclxuICB9XHJcblxyXG4gIHVuYmluZExpc3RlbmVyKCkge1xyXG4gICAgdGhpcy5jb250YWluZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5zY3JvbGxUaW1lckZ4KVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBjbGFzc05hbWUgfSA9IHRoaXMucHJvcHNcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IHJlZj17dGhpcy5jb250YWluZXJSZWZ9IGNsYXNzTmFtZT17WydzY3JvbGxlci1tYWluLWNvbnRhaW5lcicsIGNsYXNzTmFtZSB8fCAnJ10uam9pbignICcpfT5cclxuICAgICAgICB7IHRoaXMuc2VjdGlvbnMubWFwKChjaGlsZCkgPT4gY2hpbGQpIH1cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG5TY3JvbGxlci5wcm9wVHlwZXMgPSB7XHJcbiAgaW5kZXg6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcclxuICBjaGlsZHJlbjogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCkuaXNSZXF1aXJlZCxcclxuICBvblNjcm9sbDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2Nyb2xsZXJcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXHJcblxyXG5pbXBvcnQgJy4vRGVzY3JpcHRpb24uY3NzJ1xyXG5cclxuZnVuY3Rpb24gRGVzY3JpcHRpb24oeyB0ZXh0LCBub01hcmdpbiwgc3R5bGUgfSkge1xyXG4gIGNvbnN0IGVUZXh0ID0gdGV4dC5yZXBsYWNlKC8oPzpcXHJcXG58XFxyfFxcbikvZywgJzxiciAvPicpXHJcbiAgY29uc3QgY2xhc3NlcyA9IFsnZGVzY3JpcHRpb24nXVxyXG5cclxuICBpZiAobm9NYXJnaW4pIHtcclxuICAgIGNsYXNzZXMucHVzaCgnbm9NYXJnaW4nKVxyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXHJcbiAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMuam9pbignICcpfSBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGVUZXh0IH19IHN0eWxlPXtzdHlsZX0gLz5cclxuICApXHJcbn1cclxuXHJcbkRlc2NyaXB0aW9uLnByb3BUeXBlcyA9IHtcclxuICB0ZXh0OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgbm9NYXJnaW46IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXHJcbiAgc3R5bGU6IFByb3BUeXBlcy5vYmplY3RPZihQcm9wVHlwZXMuYW55KS5pc1JlcXVpcmVkLFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEZXNjcmlwdGlvblxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcblxyXG5pbXBvcnQgTWVkaWFzIGZyb20gJy4uL21lZGlhcy9NZWRpYXMnXHJcblxyXG5pbXBvcnQgJy4vRm9vdGVyLmNzcydcclxuXHJcbmNsYXNzIEZvb3RlciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgc3RhdGljIG9uUHJvamVjdENsaWNrKCkge1xyXG4gICAgd2luZG93Lmd0YWcoJ2V2ZW50JywgJ2NvbnRhY3QnLCB7XHJcbiAgICAgIGV2ZW50X2NhdGVnb3J5OiAnY29udGFjdCcsXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXItY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXItYnV0dG9uLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYmFzaWMtYnV0dG9uXCIgb25DbGljaz17dGhpcy5vblByb2plY3RDbGlja30+PGEgY2xhc3NOYW1lPVwibWVkaWEtYnV0dG9uXCIgYXJpYS1sYWJlbD1cIkVudmllIGRlIG1lIHByb3Bvc2VyIHVuIHByb2pldCA/XCIgaHJlZj1cIm1haWx0bzpjb250YWN0QG1lZGRvdS5jb21cIj5NZSBwcm9wb3NlciB1biBwcm9qZXQgPzwvYT48L2J1dHRvbj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvcHlyaWdodFwiPkNvcHlyaWdodCBAIE1laGRpIE1lZGRvdXI8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogMCwgb3ZlcmZsb3c6ICd2aXNpYmxlJyB9fT5cclxuICAgICAgICAgIDxNZWRpYXMgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb290ZXJcclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5cclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgeyB3aXRoUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcbmltcG9ydCBMb2NhdGlvbiBmcm9tICcuLi8uLi9Mb2NhdGlvbidcclxuXHJcbmltcG9ydCBNZWRpYXMgZnJvbSAnLi4vbWVkaWFzL01lZGlhcydcclxuXHJcbmltcG9ydCAnLi9IZWFkZXIuY3NzJ1xyXG5cclxuY2xhc3MgSGVhZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKClcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGlzQ29sbGFwc2VkOiBmYWxzZSxcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmxpbmtzID0gTG9jYXRpb24ubGlua3NcclxuICAgIHRoaXMuY29sbGFwc2VJZlRydWUgPSB0aGlzLmNvbGxhcHNlSWZUcnVlLmJpbmQodGhpcylcclxuICAgIHRoaXMuY29sbGFwc2UgPSB0aGlzLmNvbGxhcHNlLmJpbmQodGhpcylcclxuICAgIHRoaXMudmlzaWJsZUlkID0gJ2hvbWUnXHJcbiAgfVxyXG5cclxuICBvbkxpbmtDbGljayhsaW5rKSB7XHJcbiAgICBjb25zdCB7IG9uTGlua0NsaWNrIH0gPSB0aGlzLnByb3BzXHJcblxyXG4gICAgb25MaW5rQ2xpY2s/LihsaW5rLmxpbmspXHJcbiAgfVxyXG5cclxuICBjb2xsYXBzZSgpIHtcclxuICAgIGNvbnN0IHsgaXNDb2xsYXBzZWQgfSA9IHRoaXMuc3RhdGVcclxuXHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgaXNDb2xsYXBzZWQ6ICFpc0NvbGxhcHNlZCxcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBjb2xsYXBzZUlmVHJ1ZSgpIHtcclxuICAgIGNvbnN0IHsgaXNDb2xsYXBzZWQgfSA9IHRoaXMuc3RhdGVcclxuXHJcbiAgICBpZiAoaXNDb2xsYXBzZWQgPT09IHRydWUpIHtcclxuICAgICAgdGhpcy5jb2xsYXBzZSgpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHRoaXMudmlzaWJsZUlkID0gTG9jYXRpb24ucGF0aG5hbWUodGhpcy5wcm9wcy5yb3V0ZXIpXHJcbiAgfVxyXG5cclxuICBjb21wb25lbnRXaWxsVXBkYXRlKCkge1xyXG4gICAgdGhpcy52aXNpYmxlSWQgPSBMb2NhdGlvbi5wYXRobmFtZSh0aGlzLnByb3BzLnJvdXRlcilcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgaXNDb2xsYXBzZWQgfSA9IHRoaXMuc3RhdGVcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8aGVhZGVyIGlkPVwiaGVhZGVyXCIgY2xhc3NOYW1lPXtpc0NvbGxhcHNlZCA9PT0gdHJ1ZSA/ICdjb2xsYXBzZWQnIDogJyd9PlxyXG4gICAgICAgIDxkaXYgaWQ9XCJoZWFkZXItbG9nby1jb250YWluZXJcIj5cclxuICAgICAgICAgIDxkaXYgaWQ9XCJoZWFkZXItZmlyc3RcIiAvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItbG9nby1zdWItY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWxvZ28tcGFkZGluZy10b3BcIiAvPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMtd2VicC9sb2dvLWhlYWRlci5wbmdcIiBpZD1cImhlYWRlci1sb2dvXCIgYWx0PVwiTWVoZGkgTWVkZG91ciBsb2dvXCIgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBpZD1cImhlYWRlci1sYXN0XCIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGlkPVwiaGVhZGVyLWJ1dHRvbi1jb250YWluZXJcIj5cclxuICAgICAgICAgIHsgdGhpcy5saW5rcy5tYXAoKGxpbmssIGlkeCkgPT4gKFxyXG4gICAgICAgICAgICA8TGluayBhcmlhLWxhYmVsPXtsaW5rLmxpbmt9IGtleT17bGluay5saW5rfSBocmVmPXtgLyR7bGluay5saW5rfWB9IG9uQ2xpY2s9e3RoaXMuY29sbGFwc2VJZlRydWV9PlxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGhlYWRlci1idXR0b24gJHtpZHggPT09IDAgPyAnZmlyc3QnIDogJyd9XHJcbiAgICAgICAgICAgICAgICAke2lkeCA+PSB0aGlzLmxpbmtzLmxlbmd0aCAtIDEgPyAnbGFzdCcgOiAnJ31cclxuICAgICAgICAgICAgICAgICR7dGhpcy52aXNpYmxlSWQgPT09IGxpbmsubGluayA/ICdhY3RpdmUnIDogJyd9YH1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7bGluay5sYWJlbH1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1tZWRpYS1jb250YWluZXIgYnAtc21hbGxcIj5cclxuICAgICAgICAgICAgPE1lZGlhcyAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgaWQ9XCJoZWFkZXItaGFtYnVyZ2VyLWNvbnRhaW5lclwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9e2lzQ29sbGFwc2VkID09PSB0cnVlID8gJ29wZW4nIDogJyd9XHJcbiAgICAgICAgICBvbkNsaWNrPXt0aGlzLmNvbGxhcHNlfVxyXG4gICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHNwYW4gLz5cclxuICAgICAgICAgIDxzcGFuIC8+XHJcbiAgICAgICAgICA8c3BhbiAvPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2hlYWRlcj5cclxuICAgIClcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoSGVhZGVyKVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBJbWFnZSBmcm9tICcuLi8uLi9JbWFnZSdcclxuXHJcbmZ1bmN0aW9uIEVtYWlsKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8SW1hZ2Ugc3JjPVwiL2ltYWdlcy13ZWJwL2VtYWlsLnBuZ1wiIGFsdD1cIkVtYWlsXCIgLz5cclxuICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgRW1haWxcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnLi4vLi4vSW1hZ2UnXHJcblxyXG5mdW5jdGlvbiBHaXRodWIoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxJbWFnZSBzcmM9XCIvaW1hZ2VzLXdlYnAvZ2l0aHViLnBuZ1wiIGFsdD1cIkdpdGh1YlwiIC8+XHJcbiAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEdpdGh1YlxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBJbWFnZSBmcm9tICcuLi8uLi9JbWFnZSdcclxuXHJcbmZ1bmN0aW9uIExpbmtlZGluKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8SW1hZ2Ugc3JjPVwiL2ltYWdlcy13ZWJwL2xpbmtlZGluLnBuZ1wiIGFsdD1cIkxpbmtlZEluXCIgLz5cclxuICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTGlua2VkaW5cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnLi4vLi4vSW1hZ2UnXHJcblxyXG5mdW5jdGlvbiBNZWRpdW0oKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxJbWFnZSBzcmM9XCIvaW1hZ2VzLXdlYnAvbWVkaXVtLnBuZ1wiIGFsdD1cIk1lZGl1bVwiIC8+XHJcbiAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IE1lZGl1bVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5pbXBvcnQgTGlua2VkaW4gZnJvbSAnLi4vaWNvbi9MaW5rZWRpbidcclxuaW1wb3J0IEdpdGh1YiBmcm9tICcuLi9pY29uL0dpdGh1YidcclxuaW1wb3J0IEVtYWlsIGZyb20gJy4uL2ljb24vRW1haWwnXHJcbmltcG9ydCBNZWRpdW0gZnJvbSAnLi4vaWNvbi9NZWRpdW0nXHJcblxyXG5pbXBvcnQgJy4vTWVkaWFzLmNzcydcclxuXHJcbmZ1bmN0aW9uIE1lZGlhcyh7IGNsYXNzTmFtZSB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzcGFuIGNsYXNzTmFtZT17YG1lZGlhLWJ1dHRvbi1jb250YWluZXIgJHtjbGFzc05hbWUgfHwgJyd9YH0gc3R5bGU9e3sgbWFyZ2luTGVmdDogJ2F1dG8nIH19PlxyXG4gICAgICA8YSBjbGFzc05hbWU9XCJtZWRpYS1idXR0b25cIiBhcmlhLWxhYmVsPVwiRW1haWxcIiBocmVmPVwibWFpbHRvOmNvbnRhY3RAbWVkZG91LmNvbVwiPlxyXG4gICAgICAgIDxFbWFpbCAvPlxyXG4gICAgICA8L2E+XHJcbiAgICAgIDxhIGNsYXNzTmFtZT1cIm1lZGlhLWJ1dHRvblwiIGFyaWEtbGFiZWw9XCJMaW5rZWRpblwiIGhyZWY9XCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vbWVkZG91XCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPlxyXG4gICAgICAgIDxMaW5rZWRpbiAvPlxyXG4gICAgICA8L2E+XHJcbiAgICAgIDxhIGNsYXNzTmFtZT1cIm1lZGlhLWJ1dHRvblwiIGFyaWEtbGFiZWw9XCJHaXRodWJcIiBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL21lZGRvdVwiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5cclxuICAgICAgICA8R2l0aHViIC8+XHJcbiAgICAgIDwvYT5cclxuICAgICAgPGEgY2xhc3NOYW1lPVwibWVkaWEtYnV0dG9uXCIgYXJpYS1sYWJlbD1cIk1lZGl1bVwiIGhyZWY9XCJodHRwczovL21lZGl1bS5jb20vQG1lZGRvdVwiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5cclxuICAgICAgICA8TWVkaXVtIC8+XHJcbiAgICAgIDwvYT5cclxuICAgIDwvc3Bhbj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lZGlhc1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcblxyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnLi4vLi4vSW1hZ2UnXHJcblxyXG5pbXBvcnQgJy4vUHJvamVjdC5jc3MnXHJcblxyXG5jbGFzcyBQcm9qZWN0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0aWMgaXNXaGl0ZShjKSB7XHJcbiAgICBjb25zdCByZ2IgPSBwYXJzZUludChjLCAxNik7IC8vIGNvbnZlcnQgcnJnZ2JiIHRvIGRlY2ltYWxcclxuICAgIGNvbnN0IHIgPSAocmdiID4+IDE2KSAmIDB4ZmY7IC8vIGV4dHJhY3QgcmVkXHJcbiAgICBjb25zdCBnID0gKHJnYiA+PiA4KSAmIDB4ZmY7IC8vIGV4dHJhY3QgZ3JlZW5cclxuICAgIGNvbnN0IGIgPSAocmdiID4+IDApICYgMHhmZjsgLy8gZXh0cmFjdCBibHVlXHJcblxyXG4gICAgY29uc3QgbHVtYSA9IDAuMjEyNiAqIHIgKyAwLjcxNTIgKiBnICsgMC4wNzIyICogYjsgLy8gcGVyIElUVS1SIEJULjcwOVxyXG5cclxuICAgIHJldHVybiBsdW1hID49IDIyMFxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3IsIGJhY2tncm91bmRJbWFnZSwgbG9nbywgbmFtZSwgaXNIb3ZlcmFibGUsIGZ1bGxTaXplLFxyXG4gICAgfSA9IHRoaXMucHJvcHNcclxuICAgIGNvbnN0IGlzV2hpdGUgPSBiYWNrZ3JvdW5kQ29sb3IgPyBQcm9qZWN0LmlzV2hpdGUoYmFja2dyb3VuZENvbG9yLnNsaWNlKDEpKSA6IGZhbHNlXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPHNwYW4+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Byb3VuZGVkIHByb2plY3QtY29udGFpbmVyICR7ZnVsbFNpemUgPyAnZnVsbC1zaXplJyA6ICcnfWB9IHN0eWxlPXt7IGJhY2tncm91bmRDb2xvciwgYmFja2dyb3VuZEltYWdlIH19PlxyXG4gICAgICAgICAgPEltYWdlIGFsdD17bmFtZX0gY2xhc3NOYW1lPVwicHJvamVjdC1pbWFnZVwiIHNyYz17YC9pbWFnZXMtd2VicC9wcm9qZWN0LyR7bG9nb30tbG9nby5wbmdgfSAvPlxyXG4gICAgICAgICAgeyBpc0hvdmVyYWJsZSAhPT0gZmFsc2VcclxuICAgICAgICAgICAgJiYgKFxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwcm9qZWN0LW92ZXJsYXlcIiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3IsIGJhY2tncm91bmRJbWFnZSwgY29sb3I6IGlzV2hpdGUgPyAnYmxhY2snIDogJ3doaXRlJyB9fT5cclxuICAgICAgICAgICAgICA8c3Bhbj57bmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9zcGFuPlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdFxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnLi4vLi4vSW1hZ2UnXHJcblxyXG5pbXBvcnQgJy4vUHJvamVjdE92ZXJsYXkuY3NzJ1xyXG5cclxuZnVuY3Rpb24gUHJvamVjdE92ZXJsYXkoe1xyXG4gIGlzVmlzaWJsZSwgYmFja2dyb3VuZENvbG9yLCBpblRyYW5zaXRpb24sIG91dFRyYW5zaXRpb24sIG5hbWUsIGxvZ28sXHJcbn0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPHNwYW4+XHJcbiAgICAgIHsgaXNWaXNpYmxlXHJcbiAgICAgICYmIChcclxuICAgICAgPGRpdiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3IgfX0gY2xhc3NOYW1lPXtgcHJvamVjdC1iYWNrZ3JvdW5kLW92ZXJsYXkgJHtpblRyYW5zaXRpb24gPyAnaW4nIDogJyd9ICAke291dFRyYW5zaXRpb24gPyAnb3V0JyA6ICcnfWB9PlxyXG4gICAgICAgIDxJbWFnZSBzcmM9e2AvaW1hZ2VzLXdlYnAvcHJvamVjdC8ke2xvZ299LWxvZ28tMjU2eDI1Ni5wbmdgfSBhbHQ9e25hbWV9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgPC9zcGFuPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdE92ZXJsYXlcclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcblxyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnLi4vLi4vSW1hZ2UnXHJcblxyXG5pbXBvcnQgUHJvZ3Jlc3NSaW5nIGZyb20gJy4uL1Byb2dyZXNzUmluZydcclxuaW1wb3J0IFdpbmRvd1NpemUgZnJvbSAnLi4vLi4vV2luZG93U2l6ZSdcclxuXHJcbmltcG9ydCAnLi9Ta2lsbC5jc3MnXHJcblxyXG5jbGFzcyBTa2lsbCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgc2lkZSA9IDBcclxuICBsYXJnZVNpZGUgPSAwXHJcbiAgc21hbGxTaWRlID0gMFxyXG4gIGxhcmdlU3Ryb2tlID0gMFxyXG4gIHNtYWxsU3Ryb2tlID0gMFxyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKClcclxuICAgIHRoaXMubGFyZ2VTaWRlID0gTWF0aC5mbG9vcigxNjQgLyAzLjUpXHJcbiAgICB0aGlzLnNtYWxsU2lkZSA9IE1hdGguZmxvb3IodGhpcy5sYXJnZVNpZGUgLyAxLjYpXHJcbiAgICB0aGlzLmxhcmdlU3Ryb2tlID0gU2tpbGwuZ2V0U3Ryb2tlKHRoaXMubGFyZ2VTaWRlKVxyXG4gICAgdGhpcy5zbWFsbFN0cm9rZSA9IFNraWxsLmdldFN0cm9rZSh0aGlzLnNtYWxsU2lkZSkgIFxyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldFN0cm9rZShzaWRlKSB7XHJcbiAgICByZXR1cm4gKHNpZGUgKiAxMi41KSAvIDE2NFxyXG4gIH1cclxuXHJcbiAgc3RhdGljIGNhbGNFeHBlcmllbmNlU2lkZShzaWRlKSB7XHJcbiAgICByZXR1cm4gc2lkZSAvIDJcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuXHJcbiAgICBjb25zdCB7XHJcbiAgICAgIGlzTGl0dGxlLFxyXG4gICAgICBzaG93RXhwZXJpZW5jZSxcclxuICAgICAgYmFja2dyb3VuZENvbG9yLFxyXG4gICAgICBpc1NlbGVjdGVkLFxyXG4gICAgICBsb2dvLFxyXG4gICAgICBuYW1lLFxyXG4gICAgICBiYWNrZ3JvdW5kSW1hZ2UsXHJcbiAgICAgIGV4cGVyaWVuY2UsXHJcbiAgICB9ID0gdGhpcy5wcm9wc1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScgfX0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Bza2lsbC1zdXBlci1jb250YWluZXIgJHtpc0xpdHRsZSA/ICdsaXR0bGUnIDogJyd9ICR7c2hvd0V4cGVyaWVuY2UgPyAncHItbWFyZ2VkJyA6ICcnfWB9PlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2BcclxuICAgICAgICAgICAgcm91bmRlZCBza2lsbC1jb250YWluZXIgJHtzaG93RXhwZXJpZW5jZSA/ICdza2lsbC1jb250YWluZXItd2l0aC1wcicgOiAnJ31cclxuICAgICAgICAgICAgJHtpc1NlbGVjdGVkID8gJ3NlbGVjdGVkJyA6ICcnfVxyXG4gICAgICAgICAgICAke2lzTGl0dGxlID8gJ2xpdHRsZScgOiAnJ31gfVxyXG4gICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3IgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Bza2lsbC1zdWItY29udGFpbmVyICR7aXNMaXR0bGUgPyAnbGl0dGxlJyA6ICcnfWB9PlxyXG4gICAgICAgICAgICAgIDxJbWFnZSBhbHQ9e25hbWV9IGNsYXNzTmFtZT1cInNraWxsLWltYWdlXCIgc3JjPXtgL2ltYWdlcy13ZWJwL3NraWxscy8ke2xvZ299LnBuZ2B9IC8+XHJcbiAgICAgICAgICAgICAgeyAhaXNMaXR0bGVcclxuICAgICAgICAgICAgICAgICAgJiYgKFxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJza2lsbC1vdmVybGF5XCIgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yLCBiYWNrZ3JvdW5kSW1hZ2UgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2tpbGwtb3ZlcmxheS10ZXh0XCI+e25hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgeyBzaG93RXhwZXJpZW5jZVxyXG4gICAgICAgICYmIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBwb3NpdGlvbjogJ2Fic29sdXRlJywgdG9wOiAtU2tpbGwuY2FsY0V4cGVyaWVuY2VTaWRlKHRoaXMubGFyZ2VTaWRlKSwgcmlnaHQ6IFNraWxsLmNhbGNFeHBlcmllbmNlU2lkZSh0aGlzLmxhcmdlU2lkZSkgfX0gY2xhc3NOYW1lPVwiYnAtbGFyZ2VcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJza2lsbC1leHBlcmllbmNlLWFzaWRlLWNvbnRhaW5lclwiIHN0eWxlPXt7d2lkdGg6IHRoaXMubGFyZ2VTaWRlLCBoZWlnaHQ6IHRoaXMubGFyZ2VTaWRlfX0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJza2lsbC1wci1jb250YWluZXJcIj48UHJvZ3Jlc3NSaW5nIHNpZGU9e01hdGguZmxvb3IodGhpcy5sYXJnZVNpZGUpfSBzdHJva2U9e3RoaXMubGFyZ2VTdHJva2V9IHByb2dyZXNzPXsoZXhwZXJpZW5jZSAqIDEwMCkgLyA1fSAvPjwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2tpbGwtZXhwZXJpZW5jZS1hc2lkZS10ZXh0LWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJza2lsbC1leHBlcmllbmNlLWFzaWRlLXRleHQtbnVtXCI+e2V4cGVyaWVuY2V9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNraWxsLWV4cGVyaWVuY2UtYXNpZGUtdGV4dC15ZWFyc1wiPntleHBlcmllbmNlID4gMSA/ICdBTk7DiUVTJyA6ICdBTk7DiUUnfTwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBwb3NpdGlvbjogJ2Fic29sdXRlJywgdG9wOiAtU2tpbGwuY2FsY0V4cGVyaWVuY2VTaWRlKHRoaXMuc21hbGxTaWRlKSwgcmlnaHQ6IFNraWxsLmNhbGNFeHBlcmllbmNlU2lkZSh0aGlzLnNtYWxsU2lkZSkgfX0gY2xhc3NOYW1lPVwiYnAtc21hbGxcIj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNraWxsLWV4cGVyaWVuY2UtYXNpZGUtY29udGFpbmVyXCIgc3R5bGU9e3t3aWR0aDogdGhpcy5zbWFsbFNpZGUsIGhlaWdodDogdGhpcy5zbWFsbFNpZGV9fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJza2lsbC1wci1jb250YWluZXJcIj48UHJvZ3Jlc3NSaW5nIHNpZGU9e01hdGguZmxvb3IodGhpcy5zbWFsbFNpZGUpfSBzdHJva2U9e3RoaXMuc21hbGxTdHJva2V9IHByb2dyZXNzPXsoZXhwZXJpZW5jZSAqIDEwMCkgLyA1fSAvPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNraWxsLWV4cGVyaWVuY2UtYXNpZGUtdGV4dC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNraWxsLWV4cGVyaWVuY2UtYXNpZGUtdGV4dC1udW1cIj57ZXhwZXJpZW5jZX08L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNraWxsLWV4cGVyaWVuY2UtYXNpZGUtdGV4dC15ZWFyc1wiPntleHBlcmllbmNlID4gMSA/ICdBTk7DiUVTJyA6ICdBTk7DiUUnfTwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8Lz5cclxuICAgICAgICApfVxyXG5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTa2lsbFxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5pbXBvcnQgJy4vVGl0bGUuY3NzJ1xyXG5cclxuZnVuY3Rpb24gVGl0bGUoeyBub01hcmdpbiwgdGV4dCwgbXlTdHlsZSB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxoMSBjbGFzc05hbWU9e2B0aXRsZSAke25vTWFyZ2luID8gJycgOiAnbWFyZ2luLXRvcCd9YH0gc3R5bGU9e215U3R5bGV9Pnt0ZXh0fTwvaDE+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUaXRsZVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5pbXBvcnQgJy4vSXRlbS5jc3MnXHJcblxyXG5mdW5jdGlvbiBJdGVtKHsgb25DbGljaywgc3R5bGUsIGNoaWxkcmVuIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJpdGVtXCIgb25DbGljaz17b25DbGlja30gc3R5bGU9e3N0eWxlfSB0eXBlPVwic3VibWl0XCI+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvYnV0dG9uPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSXRlbVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5pbXBvcnQgJy4vUm93LmNzcydcclxuXHJcbmZ1bmN0aW9uIFJvdyh7XHJcbiAgc3BhY2VBcm91bmRNb2IsIG5vV3JhcCwgY2xhc3NOYW1lLCBjZW50ZXIsIHN0eWxlLCBjdXN0b21SZWYsIGNoaWxkcmVuLFxyXG59KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3NOYW1lPXtgXHJcbiAgICAgIHJvd1xyXG4gICAgICAke3NwYWNlQXJvdW5kTW9iID8gJ3Jvdy1zcGFjZS1hcm91bmQtbW9iJyA6ICcnfVxyXG4gICAgICAke25vV3JhcCA/ICdub1dyYXAnIDogJyd9XHJcbiAgICAgICR7Y2xhc3NOYW1lIHx8ICcnfVxyXG4gICAgICAke2NlbnRlciA/ICdyb3ctY2VudGVyJyA6ICcnfWB9XHJcbiAgICAgIHN0eWxlPXtzdHlsZX1cclxuICAgICAgcmVmPXtjdXN0b21SZWZ9XHJcbiAgICA+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUm93XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuXHJcbmltcG9ydCAnLi9CYXNpY1BhZ2UuY3NzJ1xyXG5cclxuY2xhc3MgQmFzaWNQYWdlIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcclxuICByZW5kZXJDb250ZW50KCkge1xyXG4gICAgcmV0dXJuIHVuZGVmaW5lZFxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXNpYy1wYWdlXCIgc3R5bGU9e3RoaXMuc3R5bGV9PlxyXG4gICAgICAgIHt0aGlzLnJlbmRlckNvbnRlbnQoKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCYXNpY1BhZ2VcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcblxyXG5pbXBvcnQgeyBWZXJ0aWNhbFRpbWVsaW5lLCBWZXJ0aWNhbFRpbWVsaW5lRWxlbWVudCB9IGZyb20gJ3JlYWN0LXZlcnRpY2FsLXRpbWVsaW5lLWNvbXBvbmVudCdcclxuXHJcbmltcG9ydCBJbWFnZSBmcm9tICcuLi9JbWFnZSdcclxuaW1wb3J0IFRpdGxlIGZyb20gJy4uL2NvbXBvbmVudC90aXRsZS9UaXRsZSdcclxuaW1wb3J0IERlc2NyaXB0aW9uIGZyb20gJy4uL2NvbXBvbmVudC9kZXNjcmlwdGlvbi9EZXNjcmlwdGlvbidcclxuXHJcbmltcG9ydCBFeHBlcmlhbmNlU2VydmljZSBmcm9tICcuLi9zZXJ2aWNlcy9FeHBlcmlhbmNlJ1xyXG5cclxuaW1wb3J0IEJhc2ljUGFnZSBmcm9tICcuL0Jhc2ljUGFnZSdcclxuXHJcbmltcG9ydCAncmVhY3QtdmVydGljYWwtdGltZWxpbmUtY29tcG9uZW50L3N0eWxlLm1pbi5jc3MnXHJcblxyXG5pbXBvcnQgJy4uL1ZlcnRpY2FsVGltZWxpbmUuY3NzJ1xyXG5cclxuY2xhc3MgRXhwZXJpZW5jZSBleHRlbmRzIEJhc2ljUGFnZSB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKVxyXG5cclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGV4cGVyaWFuY2VzOiBFeHBlcmlhbmNlU2VydmljZS5nZXQoKSxcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnN0eWxlID0ge1xyXG4gICAgICBwYWRkaW5nQm90dG9tOiAwLFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyQ29udGVudCgpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3ViLWJhc2ljLXBhZ2UgZXhwZXJpZW5jZS1wYWdlXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJleHBlcmllbmNlLWJhY2tncm91bmRcIiAvPlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZ1RvcDogJzY0cHgnIH19PlxyXG4gICAgICAgICAgPFRpdGxlIHRleHQ9XCJNZXMgZXhww6lyaWVuY2VzXCIgbm9NYXJnaW4gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8VmVydGljYWxUaW1lbGluZSBsYXlvdXQ9XCIxLWNvbHVtblwiPlxyXG4gICAgICAgICAgeyB0aGlzLnN0YXRlLmV4cGVyaWFuY2VzLm1hcCgoZXhwZXJpYW5jZSwgaWR4KSA9PiAoXHJcbiAgICAgICAgICAgIDxWZXJ0aWNhbFRpbWVsaW5lRWxlbWVudFxyXG4gICAgICAgICAgICAgIGtleT17ZXhwZXJpYW5jZS50aXRsZX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2B2ZXJ0aWNhbC10aW1lbGluZS1lbGVtZW50ICR7aWR4ID09PSAwID8gJ2VsZW1lbnQtY29udGVudC1maXJzdCcgOiAnJ31gfVxyXG4gICAgICAgICAgICAgIGRhdGU9eyhcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlua1wiPlxyXG4gICAgICAgICAgICAgICAgICA8c3Bhbj57ZXhwZXJpYW5jZS5kYXRlfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAge2V4cGVyaWFuY2UucHJvamVjdFVybCA/ICcgfCAnIDogJyd9XHJcbiAgICAgICAgICAgICAgICAgIHtleHBlcmlhbmNlLnByb2plY3RVcmwgJiYgKFxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtleHBlcmlhbmNlLnByb2plY3RVcmx9IGNsYXNzTmFtZT1cInZlcnRpY2FsLXRpbWVsaW5lLWVsZW1lbnQtbGlua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIFZPSVIgTEUgUFJPSkVUXHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgaWNvblN0eWxlPXt7IGJhY2tncm91bmQ6ICcjMzMxYzVkJywgY29sb3I6ICcjZmZmJyB9fVxyXG4gICAgICAgICAgICAgIGljb249e1xyXG4gICAgICAgICAgICAgICAgPEltYWdlIHNyYz17YGltYWdlcy13ZWJwL2V4cGVyaWFuY2VzLyR7ZXhwZXJpYW5jZS5sb2dvfWB9IGFsdD17ZXhwZXJpYW5jZS50aXRsZX0gLz5cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidmVydGljYWwtdGltZWxpbmUtZWxlbWVudC10aXRsZVwiPntleHBlcmlhbmNlLnRpdGxlfTwvaDM+XHJcbiAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInZlcnRpY2FsLXRpbWVsaW5lLWVsZW1lbnQtc3VidGl0bGVcIj57ZXhwZXJpYW5jZS5zdWJ0aXRsZX08L2g0PlxyXG4gICAgICAgICAgICAgIDxEZXNjcmlwdGlvbiB0ZXh0PXtleHBlcmlhbmNlLnRleHR9IC8+XHJcbiAgICAgICAgICAgIDwvVmVydGljYWxUaW1lbGluZUVsZW1lbnQ+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L1ZlcnRpY2FsVGltZWxpbmU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXhwZXJpZW5jZVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcblxyXG5pbXBvcnQgTWVkaWFzIGZyb20gJy4uL2NvbXBvbmVudC9tZWRpYXMvTWVkaWFzJ1xyXG5cclxuaW1wb3J0IFJvdyBmcm9tICcuLi9sYXlvdXQvcm93L1JvdydcclxuaW1wb3J0IEltYWdlIGZyb20gJy4uL0ltYWdlJ1xyXG5cclxuaW1wb3J0IERlc2NyaXB0aW9uIGZyb20gJy4uL2NvbXBvbmVudC9kZXNjcmlwdGlvbi9EZXNjcmlwdGlvbidcclxuXHJcbmltcG9ydCBCYXNpY1BhZ2UgZnJvbSAnLi9CYXNpY1BhZ2UnXHJcblxyXG5pbXBvcnQgJy4vTGFuZGluZy5jc3MnXHJcblxyXG5jbGFzcyBMYW5kaW5nIGV4dGVuZHMgQmFzaWNQYWdlIHtcclxuICAvLyBiZWNhdXNlIGknbSBsYXp5IDopXHJcbiAgc3RhdGljIGdldEFnZSgpIHtcclxuICAgIGNvbnN0IGJpcnRoZGF5ID0gK25ldyBEYXRlKCcxOTk2LTExLTE0Jyk7XHJcbiAgICByZXR1cm4gKChEYXRlLm5vdygpIC0gYmlydGhkYXkpIC8gKDMxNTU3NjAwMDAwKSk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgaXNEYXkoKSB7XHJcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKVxyXG4gICAgY29uc3QgaG91cnMgPSBkYXRlLmdldEhvdXJzKClcclxuXHJcbiAgICByZXR1cm4gaG91cnMgPj0gNiAmJiBob3VycyA8IDE3XHJcbiAgfVxyXG5cclxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcclxuICByZW5kZXJDb250ZW50KCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYW5kaW5nLWNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFuZGluZy1iYWNrZ3JvdW5kXCIgLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZm8tY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tdGV4dC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImZpcnN0LXRleHRcIj5cclxuICAgICAgICAgICAgICB7TGFuZGluZy5pc0RheSgpID8gJ0JvbmpvdXInIDogJ0JvbnNvaXInfVxyXG4gICAgICAgICAgICAgICwgamUgc3VpcyBNZWhkaS5cclxuICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgPGgxPkTDqXZlbG9wcGV1ciBGcmVlbGFuY2UgV0VCIC8gTU9CSUxFLjwvaDE+XHJcbiAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IG1hcmdpblRvcDogJzhweCcgfX0+XHJcbiAgICAgICAgICAgICAgPERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBmb250U2l6ZTogJzEuNzVlbScsIG1hcmdpbjogJzJlbSAwJyB9fVxyXG4gICAgICAgICAgICAgICAgdGV4dD1cIk1lcyBleHDDqXJpZW5jZXMgw6AgdHJhdmVycyB1bmUgbXVsdGl0dWRlIGRlIHRlY2hub2xvZ2llcyBtJ29udCBwZXJtaXMgZOKAmWFjcXXDqXJpciB1bmUgZXhwZXJ0aXNlIGRlcyBsYW5nYWdlcyBkZSBkw6l2ZWxvcHBlbWVudCBkZSBzaXRlIGludGVybmV0IGV0IGQnYXBwbGljYXRpb24gbW9iaWxlLjxici8+SmUgdm91cyBhY2NvbXBhZ25lIGRhbnMgbGEgcsOpYWxpc2F0aW9uIGRlIHZvdHJlIHByb2pldCBkZSBzYSBjb25jZXB0aW9uIMOgIHNhIGxpdnJhaXNvbi5cIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPFJvdyBjbGFzc05hbWU9XCJtZWRpYS1jb250YWluZXItcm93XCI+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGlua1wiPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi93b3JrXCIgPlZvaXIgbWVzIHByb2pldHM8L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxNZWRpYXMgY2xhc3NOYW1lPVwiYnAtbGFyZ2VcIiAvPlxyXG4gICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgYWxpZ25TZWxmOiAnY2VudGVyJywgekluZGV4OiAyIH19PlxyXG4gICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgIHNyYz1cIi9pbWFnZXMtd2VicC9tZWhkaS5wbmdcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJsYW5kaW5nLWF2YXRhci1pbWFnZVwiXHJcbiAgICAgICAgICAgIGFsdD1cIk1laGRpIE1lZGRvdXJcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYW5kaW5nXHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuaW1wb3J0IExhbmRpbmdQYWdlIGZyb20gJy4vTGFuZGluZydcclxuaW1wb3J0IFByb2plY3RMaXN0UGFnZSBmcm9tICcuL1Byb2plY3RMaXN0J1xyXG5pbXBvcnQgU2tpbGxQYWdlIGZyb20gJy4vU2tpbGwnXHJcbmltcG9ydCBFeHBlcmllbmNlUGFnZSBmcm9tICcuL0V4cGVyaWVuY2UnXHJcblxyXG5pbXBvcnQgU2Nyb2xsZXIgZnJvbSAnLi4vY29tcG9uZW50L1Njcm9sbGVyJ1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudC9mb290ZXIvRm9vdGVyJ1xyXG5cclxuaW1wb3J0IExvY2F0aW9uIGZyb20gJy4uL0xvY2F0aW9uJ1xyXG5cclxuaW1wb3J0ICcuL01haW5TY3JvbGxQYWdlLmNzcydcclxuXHJcbmNsYXNzIE1haW5TY3JvbGxQYWdlIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpXHJcbiAgICB0aGlzLnBhZ2VJZHMgPSBMb2NhdGlvbi5saW5rcy5tYXAoKGwpID0+IGwubGluaylcclxuICAgIHRoaXMub25TY3JvbGwgPSB0aGlzLm9uU2Nyb2xsLmJpbmQodGhpcylcclxuICAgIHRoaXMucGF0aG5hbWUgPSBMb2NhdGlvbi5wYXRobmFtZShwcm9wcy5yb3V0ZXIpXHJcbiAgfVxyXG5cclxuICBjb21wb25lbnRXaWxsVXBkYXRlKCkge1xyXG4gICAgdGhpcy5wYXRobmFtZSA9IExvY2F0aW9uLnBhdGhuYW1lKHRoaXMucHJvcHMucm91dGVyKVxyXG4gIH1cclxuXHJcbiAgb25TY3JvbGwoaW5kZXgpIHtcclxuICAgIGNvbnN0IHsgcm91dGVyIH0gPSB0aGlzLnByb3BzXHJcblxyXG4gICAgcm91dGVyLnB1c2goYC8ke3RoaXMucGFnZUlkc1tpbmRleF19YCwgdW5kZWZpbmVkLCB7IHNoYWxsb3c6IHRydWUgfSlcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxTY3JvbGxlciBjbGFzc05hbWU9XCJtYWluLXNjcm9sbGVyXCIgb25TY3JvbGw9e3RoaXMub25TY3JvbGx9IGluZGV4PXt0aGlzLnBhZ2VJZHMuaW5kZXhPZih0aGlzLnBhdGhuYW1lKX0+XHJcbiAgICAgICAgPGRpdiBpZD1cInNjcm9sbC1ob21lLWNvbnRhaW5lclwiIGNsYXNzTmFtZT1cImNoaWxkcmVuXCI+XHJcbiAgICAgICAgICA8TGFuZGluZ1BhZ2UgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGlkPVwic2Nyb2xsLXdvcmstY29udGFpbmVyXCIgY2xhc3NOYW1lPVwiY2hpbGRyZW5cIj5cclxuICAgICAgICAgIDxQcm9qZWN0TGlzdFBhZ2UgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGlkPVwic2Nyb2xsLXNraWxscy1jb250YWluZXJcIiBjbGFzc05hbWU9XCJjaGlsZHJlblwiPlxyXG4gICAgICAgICAgPFNraWxsUGFnZSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgaWQ9XCJzY3JvbGwtZXhwZXJpZW5jZXMtY29udGFpbmVyXCIgY2xhc3NOYW1lPVwiY2hpbGRyZW5cIj5cclxuICAgICAgICAgIDxFeHBlcmllbmNlUGFnZSAvPlxyXG4gICAgICAgICAgPEZvb3RlciAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L1Njcm9sbGVyPlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuLy8gTWFpblNjcm9sbFBhZ2UucHJvcFR5cGVzID0ge1xyXG4vLyAgIGhpc3Rvcnk6IFByb3BUeXBlcy5vYmplY3RPZihQcm9wVHlwZXMuYW55KS5pc1JlcXVpcmVkLFxyXG4vLyB9XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKE1haW5TY3JvbGxQYWdlKVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcbmltcG9ydCBMb2NhdGlvbiBmcm9tICcuLi9Mb2NhdGlvbidcclxuXHJcbmltcG9ydCBQcm9qZWN0cyBmcm9tICcuLi9kYXRhL3Byb2plY3RzLmpzb24nXHJcblxyXG5pbXBvcnQgVGl0bGUgZnJvbSAnLi4vY29tcG9uZW50L3RpdGxlL1RpdGxlJ1xyXG5pbXBvcnQgUHJvamVjdCBmcm9tICcuLi9jb21wb25lbnQvcHJvamVjdC9Qcm9qZWN0J1xyXG5pbXBvcnQgUHJvamVjdE92ZXJsYXkgZnJvbSAnLi4vY29tcG9uZW50L3Byb2plY3QvUHJvamVjdE92ZXJsYXknXHJcbmltcG9ydCBTa2lsbCBmcm9tICcuLi9jb21wb25lbnQvc2tpbGwvU2tpbGwnXHJcblxyXG5pbXBvcnQgUm93IGZyb20gJy4uL2xheW91dC9yb3cvUm93J1xyXG5pbXBvcnQgSXRlbSBmcm9tICcuLi9sYXlvdXQvaXRlbS9JdGVtJ1xyXG5cclxuaW1wb3J0IEJhc2ljUGFnZSBmcm9tICcuL0Jhc2ljUGFnZSdcclxuXHJcbmltcG9ydCBTa2lsbFNlcnZpY2UgZnJvbSAnLi4vc2VydmljZXMvU2tpbGwnXHJcblxyXG5pbXBvcnQgJy4vQmFzaWNQYWdlLmNzcydcclxuaW1wb3J0ICcuL1Byb2plY3RMaXN0LmNzcydcclxuXHJcbmNsYXNzIFByb2plY3RMaXN0UGFnZSBleHRlbmRzIEJhc2ljUGFnZSB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKVxyXG5cclxuICAgIHRoaXMuaGFzTW9yZVNraWxsID0gZmFsc2VcclxuXHJcbiAgICB0aGlzLnByb2plY3RzID0gUHJvamVjdHMuZmlsdGVyKChwKSA9PiBwLmlzVmlzaWJsZSAhPT0gZmFsc2UpXHJcbiAgICB0aGlzLnNraWxscyA9IFNraWxsU2VydmljZS5nZXRGaWx0ZXJhYmxlKClcclxuXHJcbiAgICB0aGlzLmZpbHRlcnMgPSBbXVxyXG5cclxuICAgIHRoaXMuZmlsdGVyc0dyb3VwID0gWydpT1MnLCAnTm9kZUpTJywgJ0FuZ3VsYXInLCAnTGFyYXZlbCcsICdNb25nb0RCJywgJ0MrKyddXHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgcHJvamVjdHM6IHRoaXMucHJvamVjdHMuc2xpY2UoMCksXHJcbiAgICAgIHNraWxsczogdGhpcy5za2lsbHMuc2xpY2UoMCksXHJcbiAgICAgIHNlbGVjdGVkUHJvamVjdDogdW5kZWZpbmVkLFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYWRkU2tpbGxGcm9tUVMoKSB7XHJcbiAgICBjb25zdCBwYXJhbVNraWxscyA9IExvY2F0aW9uLnFzKHRoaXMucHJvcHMucm91dGVyKS5za2lsbCA/IFByb2plY3RMaXN0UGFnZS5za2lsbFRvQXJyYXkoTG9jYXRpb24ucXModGhpcy5wcm9wcy5yb3V0ZXIpLnNraWxsKSA6IFtdXHJcbiAgICBjb25zdCBuZXdTa2lsbHMgPSB0aGlzLnN0YXRlLnNraWxscy5zbGljZSgwKVxyXG5cclxuICAgIGxldCBwYXJhbVNraWxsT2JqXHJcblxyXG4gICAgY29uc3Qgc2tpbGxDbXAgPSAoc2Vjb25kKSA9PiAoZmlyc3QpID0+IGZpcnN0Lm5hbWUgPT09IHNlY29uZFxyXG5cclxuICAgIGlmIChwYXJhbVNraWxscyAmJiBwYXJhbVNraWxscy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFyYW1Ta2lsbHMubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgICAgICBwYXJhbVNraWxsT2JqID0gU2tpbGxTZXJ2aWNlLmdldEZyb21OYW1lKHBhcmFtU2tpbGxzW2ldKVxyXG5cclxuICAgICAgICBpZiAobmV3U2tpbGxzLmZpbmRJbmRleChza2lsbENtcChwYXJhbVNraWxsc1tpXSkpID09PSAtMSkge1xyXG4gICAgICAgICAgaWYgKHRoaXMuaGFzTW9yZVNraWxsID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICB0aGlzLmZpbHRlcnNHcm91cC51bnNoaWZ0KHBhcmFtU2tpbGxzW2ldKVxyXG4gICAgICAgICAgICB0aGlzLmhhc01vcmVTa2lsbCA9IHRydWVcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIG5ld1NraWxscy51bnNoaWZ0KHBhcmFtU2tpbGxPYmopXHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgc2tpbGxzOiBuZXdTa2lsbHMsXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaGFzU2tpbGxzKHRvRmluZCkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b0ZpbmQubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgICAgaWYgKHRoaXMuZmlsdGVycy5pbmRleE9mKHRvRmluZFtpXSkgPT09IC0xKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlXHJcbiAgfVxyXG5cclxuICBmaWx0ZXJGcm9tUVMobmVlZENsZWFyRmlsdGVycyA9IGZhbHNlKSB7XHJcbiAgICBjb25zdCBwYXJhbVNraWxscyA9IExvY2F0aW9uLnFzKHRoaXMucHJvcHMucm91dGVyKS5za2lsbFxyXG5cclxuICAgIGlmIChwYXJhbVNraWxscyAmJiAhdGhpcy5oYXNTa2lsbHMoUHJvamVjdExpc3RQYWdlLnNraWxsVG9BcnJheShwYXJhbVNraWxscykpKSB7XHJcbiAgICAgIGlmIChuZWVkQ2xlYXJGaWx0ZXJzKSB7XHJcbiAgICAgICAgdGhpcy5maWx0ZXJzID0gW11cclxuICAgICAgfVxyXG4gICAgICB0aGlzLmZpbHRlclByb2plY3RzKHBhcmFtU2tpbGxzKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICB0aGlzLmFkZFNraWxsRnJvbVFTKClcclxuICAgIHRoaXMuZmlsdGVyRnJvbVFTKClcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcclxuICAgIHRoaXMuYWRkU2tpbGxGcm9tUVMoKVxyXG4gICAgdGhpcy5maWx0ZXJGcm9tUVModHJ1ZSlcclxuICB9XHJcblxyXG4gIHN0YXRpYyBmbXRTa2lsbHMoc2tpbGwpIHtcclxuICAgIGlmIChza2lsbCkge1xyXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShza2lsbCkpIHtcclxuICAgICAgICByZXR1cm4gc2tpbGxcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIFtza2lsbF1cclxuICAgIH1cclxuICAgIHJldHVybiBbXVxyXG4gIH1cclxuXHJcbiAgc3RhdGljIHNraWxsVG9BcnJheShza2lsbCkge1xyXG4gICAgY29uc3Qgc2tpbGxzID0gdGhpcy5mbXRTa2lsbHMoc2tpbGwpXHJcbiAgICByZXR1cm4gc2tpbGxzLm1hcCgobVNraWxsKSA9PiBkZWNvZGVVUklDb21wb25lbnQobVNraWxsKSlcclxuICB9XHJcblxyXG4gIGZpbHRlclByb2plY3RzKHNraWxsLCBuZWVkVG9VcGRhdGVVcmwgPSBmYWxzZSkge1xyXG4gICAgY29uc3QgZmlsdGVyZWQgPSBbXVxyXG4gICAgY29uc3Qgc2tpbGxzID0gUHJvamVjdExpc3RQYWdlLnNraWxsVG9BcnJheShza2lsbClcclxuICAgIGxldCBpZHhcclxuICAgIGxldCBpc01hdGNoaW5nID0gdHJ1ZVxyXG5cclxuICAgIGZvciAobGV0IGsgPSAwOyBrIDwgc2tpbGxzLmxlbmd0aDsgayArPSAxKSB7XHJcbiAgICAgIGlkeCA9IHRoaXMuZmlsdGVycy5pbmRleE9mKHNraWxsc1trXSlcclxuICAgICAgaWYgKHNraWxsc1trXSAmJiBpZHggPT09IC0xKSB7XHJcbiAgICAgICAgdGhpcy5maWx0ZXJzLnB1c2goc2tpbGxzW2tdKVxyXG4gICAgICB9IGVsc2UgaWYgKHNraWxsc1trXSkge1xyXG4gICAgICAgIHRoaXMuZmlsdGVycy5zcGxpY2UoaWR4LCAxKVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnByb2plY3RzLmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICAgIGlzTWF0Y2hpbmcgPSB0cnVlXHJcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5maWx0ZXJzLmxlbmd0aDsgaiArPSAxKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvamVjdHNbaV0ubGFuZ3VhZ2VzLmluZGV4T2YodGhpcy5maWx0ZXJzW2pdKSA9PT0gLTEpIHtcclxuICAgICAgICAgIGlzTWF0Y2hpbmcgPSBmYWxzZVxyXG4gICAgICAgICAgYnJlYWtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGlzTWF0Y2hpbmcpIHtcclxuICAgICAgICBmaWx0ZXJlZC5wdXNoKHRoaXMucHJvamVjdHNbaV0pXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChuZWVkVG9VcGRhdGVVcmwpIHtcclxuICAgICAgdGhpcy5wcm9wcy5yb3V0ZXIucmVwbGFjZShgL3dvcms/JHt0aGlzLmZpbHRlcnMubWFwKChmKSA9PiBgc2tpbGw9JHtlbmNvZGVVUklDb21wb25lbnQoZil9YCkuam9pbignJicpfWApXHJcbiAgICB9XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgcHJvamVjdHM6IGZpbHRlcmVkLFxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGdldFNraWxsR3JvdXBlZCgpIHtcclxuICAgIGNvbnN0IGdyb3VwZWQgPSB0aGlzLnN0YXRlLnNraWxscy5zbGljZSgwKVxyXG4gICAgY29uc3QgZ3JvdXBzID0gW3sgZ3JvdXA6IFtdLCBpZDogLTEgfV1cclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdyb3VwZWQubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgICAgZ3JvdXBzW2dyb3Vwcy5sZW5ndGggLSAxXS5ncm91cC5wdXNoKGdyb3VwZWRbaV0pXHJcbiAgICAgIGlmICh0aGlzLmZpbHRlcnNHcm91cC5pbmRleE9mKGdyb3VwZWRbaV0ubmFtZSkgIT09IC0xKSB7XHJcbiAgICAgICAgZ3JvdXBzLnB1c2goeyBncm91cDogW10sIGlkOiBncm91cHMubGVuZ3RoIH0pXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZ3JvdXBzXHJcbiAgfVxyXG5cclxuICBnb1RvUHJvamVjdChwcm9qZWN0LCBlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBzZWxlY3RlZFByb2plY3Q6IHByb2plY3QsXHJcbiAgICB9LCAoKSA9PiB7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHdpbmRvdy5wcm9qZWN0TGlzdFRvUHJvamVjdFRyYW5zaXRpb24gPSB0cnVlXHJcbiAgICAgICAgdGhpcy5wcm9wcy5yb3V0ZXIucHVzaChgL3dvcmsvJHtwcm9qZWN0Lm5hbWV9YCwgdW5kZWZpbmVkLCB7IHNoYWxsb3c6IHRydWUgfSlcclxuICAgICAgfSwgNTAwKVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGNsZWFyRmlsdGVycyhlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIHRoaXMucHJvcHMucm91dGVyLnJlcGxhY2UoJy93b3JrJylcclxuICAgIHRoaXMuZmlsdGVycyA9IFtdXHJcbiAgICB0aGlzLmZpbHRlclByb2plY3RzKHVuZGVmaW5lZClcclxuICB9XHJcblxyXG4gIHJlbmRlckNvbnRlbnQoKSB7XHJcbiAgICBjb25zdCBmYWtlUHJvamVjdHMgPSBuZXcgQXJyYXkoMTApLm1hcCgodiwgaWR4KSA9PiAoe1xyXG4gICAgICAuLi50aGlzLnByb2plY3RzWzBdLFxyXG4gICAgICBuYW1lOiBgZmFrZXwke2lkeH1gLFxyXG4gICAgfSkpXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWItYmFzaWMtcGFnZSBwcm9qZWN0LWxpc3QtY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9qZWN0LWJhY2tncm91bmRcIiAvPlxyXG5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmdUb3A6ICc2NHB4JyB9fT5cclxuICAgICAgICAgIDxUaXRsZSB0ZXh0PVwiTWVzIHByb2pldHNcIiBub01hcmdpbiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxSb3cgc3R5bGU9e3sgbWFyZ2luVG9wOiAnMTZweCcgfX0+XHJcbiAgICAgICAgICA8Um93IGNsYXNzTmFtZT1cImZpbHRlci1jb250YWluZXIgYnAtbGFyZ2VcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiZmlsdGVyLXRleHRcIiBzdHlsZT17eyBjdXJzb3I6IGAke3RoaXMuZmlsdGVycy5sZW5ndGggPiAwID8gJ3BvaW50ZXInIDogJ25vcm1hbCd9YCB9fSBvbkNsaWNrPXt0aGlzLmNsZWFyRmlsdGVycy5iaW5kKHRoaXMpfT5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzdWJUaXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgdmlzaWJpbGl0eTogdGhpcy5maWx0ZXJzLmxlbmd0aCA+IDAgPyAndmlzaWJsZScgOiAnaGlkZGVuJyB9fT4oWCkgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgRklMVFJFU1xyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIHsgdGhpcy5nZXRTa2lsbEdyb3VwZWQoKS5tYXAoKGdyb3VwKSA9PiAoXHJcbiAgICAgICAgICAgICAgPFJvdyBjbGFzc05hbWU9XCJmaWx0ZXItcm93XCIga2V5PXtncm91cC5pZH0+XHJcbiAgICAgICAgICAgICAgICB7Z3JvdXAuZ3JvdXAubWFwKChza2lsbCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8SXRlbSBrZXk9e3NraWxsLm5hbWV9IG9uQ2xpY2s9eygpID0+IHRoaXMuZmlsdGVyUHJvamVjdHMoc2tpbGwubmFtZSwgdHJ1ZSl9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxTa2lsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT17c2tpbGwubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZT17c2tpbGwuYmFja2dyb3VuZEltYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yPXtza2lsbC5iYWNrZ3JvdW5kQ29sb3J9XHJcbiAgICAgICAgICAgICAgICAgICAgICBsb2dvPXtza2lsbC5sb2dvfVxyXG4gICAgICAgICAgICAgICAgICAgICAgZXhwZXJpZW5jZT17c2tpbGwuZXhwZXJpZW5jZX1cclxuICAgICAgICAgICAgICAgICAgICAgIGlzU2VsZWN0ZWQ9e3RoaXMuZmlsdGVycy5pbmRleE9mKHNraWxsLm5hbWUpICE9PSAtMX1cclxuICAgICAgICAgICAgICAgICAgICAgIGlzTGl0dGxlXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9JdGVtPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9Sb3c+XHJcblxyXG4gICAgICAgICAgPFJvdyBjZW50ZXIgY2xhc3NOYW1lPVwicHJvamVjdC1saXN0LWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICB7IHRoaXMuc3RhdGUucHJvamVjdHMubWFwKChwcm9qZWN0KSA9PiAoXHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgb25DbGljaz17KGUpID0+IHRoaXMuZ29Ub1Byb2plY3QocHJvamVjdCwgZSl9IGtleT17cHJvamVjdC5uYW1lfSBjbGFzc05hbWU9XCJwcm9qZWN0LWNoaWxkLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgIDxQcm9qZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yPXtwcm9qZWN0LmJhY2tncm91bmRDb2xvcn1cclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U9e3Byb2plY3QuYmFja2dyb3VuZEltYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9e3Byb2plY3QubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICBsb2dvPXtwcm9qZWN0LmxvZ299XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L0l0ZW0+XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICB7IHRoaXMuc3RhdGUucHJvamVjdHMubGVuZ3RoID09PSAwICYmIChcclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuby1wcm9qZWN0LXRleHQtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiByb2xlPVwiaW1nXCIgYXJpYS1sYWJlbD1cIlBhcyBkZSBwcm9qZXRcIiBjbGFzc05hbWU9XCJlbW9qaS1jb250YWluZXJcIj7wn5ilPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHN1Yj5BdWN1biBwcm9qZXQ8L3N1Yj5cclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICA8L1Jvdz5cclxuICAgICAgICA8UHJvamVjdE92ZXJsYXlcclxuICAgICAgICAgIGluVHJhbnNpdGlvblxyXG4gICAgICAgICAgaXNWaXNpYmxlPXshIXRoaXMuc3RhdGUuc2VsZWN0ZWRQcm9qZWN0fVxyXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yPXtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZWxlY3RlZFByb2plY3QgPyB0aGlzLnN0YXRlLnNlbGVjdGVkUHJvamVjdC5iYWNrZ3JvdW5kQ29sb3IgOiB1bmRlZmluZWRcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGxvZ289e3RoaXMuc3RhdGUuc2VsZWN0ZWRQcm9qZWN0ID8gdGhpcy5zdGF0ZS5zZWxlY3RlZFByb2plY3QubG9nbyA6IHVuZGVmaW5lZH1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoUHJvamVjdExpc3RQYWdlKVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcclxuXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcbmltcG9ydCBUaXRsZSBmcm9tICcuLi9jb21wb25lbnQvdGl0bGUvVGl0bGUnXHJcbmltcG9ydCBTa2lsbCBmcm9tICcuLi9jb21wb25lbnQvc2tpbGwvU2tpbGwnXHJcblxyXG5pbXBvcnQgUm93IGZyb20gJy4uL2xheW91dC9yb3cvUm93J1xyXG5pbXBvcnQgSXRlbSBmcm9tICcuLi9sYXlvdXQvaXRlbS9JdGVtJ1xyXG5cclxuaW1wb3J0IEJhc2ljUGFnZSBmcm9tICcuL0Jhc2ljUGFnZSdcclxuXHJcbmltcG9ydCBTa2lsbFNlcnZpY2UgZnJvbSAnLi4vc2VydmljZXMvU2tpbGwnXHJcbmltcG9ydCBXaW5kb3dTaXplIGZyb20gJy4uL1dpbmRvd1NpemUnXHJcblxyXG5pbXBvcnQgJy4vU2tpbGxQYWdlLmNzcydcclxuXHJcbmZ1bmN0aW9uIEZha2VDb250YWluZXIoeyBjaGlsZHJlbiB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuRmFrZUNvbnRhaW5lci5wcm9wVHlwZXMgPSB7XHJcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQpLmlzUmVxdWlyZWQsXHJcbn1cclxuXHJcbmNsYXNzIFNraWxsUGFnZSBleHRlbmRzIEJhc2ljUGFnZSB7XHJcbiAgQ29udGFpbmVyID0gRmFrZUNvbnRhaW5lclxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpXHJcbiAgICB0aGlzLnNraWxscyA9IFNraWxsU2VydmljZS5nZXRTaG93YWJsZSgpXHJcblxyXG4gICAgdGhpcy5mYWtlU2tpbGxzID0gbmV3IEFycmF5KDEwKS5tYXAoKHYsIGlkeCkgPT4gKHtcclxuICAgICAgLi4udGhpcy5za2lsbHNbMF0sXHJcbiAgICAgIG5hbWU6IGBmYWtlfCR7aWR4fWAsXHJcbiAgICB9KSlcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdGhpcy5Db250YWluZXIgPSBXaW5kb3dTaXplLmlzTGFyZ2UoKSA/IExpbmsgOiBGYWtlQ29udGFpbmVyXHJcbiAgfVxyXG5cclxuICByZW5kZXJDb250ZW50KCkge1xyXG4gICAgY29uc3QgQ29udGFpbmVyID0gdGhpcy5Db250YWluZXJcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1Yi1iYXNpYy1wYWdlXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJza2lsbC1iYWNrZ3JvdW5kXCIgLz5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmdUb3A6ICc2NHB4JyB9fT5cclxuICAgICAgICAgIDxUaXRsZSB0ZXh0PVwiTWVzIHNraWxsc1wiIG5vTWFyZ2luIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWJ0ZXh0LWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJleHBlcmlhbmNlLXByZXZpZXdcIiAvPlxyXG4gICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFNpemU6ICcyMnB4JywgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZScgfX0+QW5uw6llcyBkJiMzOTtleHDDqXJpZW5jZTwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Um93IHN0eWxlPXt7IG1hcmdpblRvcDogJzY0cHgnIH19IGNlbnRlcj5cclxuICAgICAgICAgIHsgdGhpcy5za2lsbHMubWFwKChza2lsbCkgPT4gKFxyXG4gICAgICAgICAgICA8SXRlbSBrZXk9e3NraWxsLm5hbWV9PlxyXG4gICAgICAgICAgICAgIDxDb250YWluZXIgdG89e2Avd29yaz9za2lsbD0ke2VuY29kZVVSSUNvbXBvbmVudChza2lsbC5uYW1lKX1gfT5cclxuICAgICAgICAgICAgICAgIDxTa2lsbFxyXG4gICAgICAgICAgICAgICAgICBuYW1lPXtza2lsbC5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9e3NraWxsLmJhY2tncm91bmRDb2xvcn1cclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlPXtza2lsbC5iYWNrZ3JvdW5kSW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgIGV4cGVyaWVuY2U9e3NraWxsLmV4cGVyaWVuY2V9XHJcbiAgICAgICAgICAgICAgICAgIGxvZ289e3NraWxsLmxvZ299XHJcbiAgICAgICAgICAgICAgICAgIHNob3dFeHBlcmllbmNlXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8L0l0ZW0+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICAgIHsgdGhpcy5mYWtlU2tpbGxzLm1hcCgoc2tpbGwpID0+IChcclxuICAgICAgICAgICAgPEl0ZW0ga2V5PXtza2lsbC5uYW1lfSBzdHlsZT17eyB2aXNpYmlsaXR5OiAnaGlkZGVuJywgaGVpZ2h0OiAnMHB4JyB9fT5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3dvcms/c2tpbGw9JHtlbmNvZGVVUklDb21wb25lbnQoc2tpbGwubmFtZSl9YH0+XHJcbiAgICAgICAgICAgICAgICA8U2tpbGxcclxuICAgICAgICAgICAgICAgICAgbmFtZT17c2tpbGwubmFtZX1cclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yPXtza2lsbC5iYWNrZ3JvdW5kQ29sb3J9XHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZT17c2tpbGwuYmFja2dyb3VuZEltYWdlfVxyXG4gICAgICAgICAgICAgICAgICBleHBlcmllbmNlPXtza2lsbC5leHBlcmllbmNlfVxyXG4gICAgICAgICAgICAgICAgICBsb2dvPXtza2lsbC5sb2dvfVxyXG4gICAgICAgICAgICAgICAgICBzaG93RXhwZXJpZW5jZVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvSXRlbT5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvUm93PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNraWxsUGFnZVxyXG4iLCJpbXBvcnQgc21vb3Roc2Nyb2xsIGZyb20gJ3Ntb290aHNjcm9sbC1wb2x5ZmlsbCc7XHJcbmltcG9ydCAnaW50ZXJzZWN0aW9uLW9ic2VydmVyJztcclxuXHJcbmltcG9ydCAnY29yZS1qcyc7XHJcblxyXG5jb25zdCBwb2x5ZmlsbCA9ICgpID0+IHNtb290aHNjcm9sbC5wb2x5ZmlsbCgpXHJcblxyXG5leHBvcnQgZGVmYXVsdCBwb2x5ZmlsbCIsImltcG9ydCBleHBlcmllbmNlcyBmcm9tICcuLi9kYXRhL2V4cGVyaWFuY2VzLmpzb24nXHJcblxyXG5jbGFzcyBFeHBlcmllbmNlU2VydmljZSB7XHJcbiAgc3RhdGljIGdldCgpIHtcclxuICAgIHJldHVybiBleHBlcmllbmNlc1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXhwZXJpZW5jZVNlcnZpY2VcclxuIiwiaW1wb3J0IHNraWxscyBmcm9tICcuLi9kYXRhL3NraWxscy5qc29uJ1xyXG5cclxuY2xhc3MgU2tpbGxTZXJ2aWNlIHtcclxuICBzdGF0aWMgZ2V0KCkge1xyXG4gICAgcmV0dXJuIHNraWxsc1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldFNob3dhYmxlKCkge1xyXG4gICAgcmV0dXJuIHNraWxscy5maWx0ZXIoKHNraWxsKSA9PiBza2lsbC5pc1Nob3dhYmxlICE9PSBmYWxzZSlcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXRGaWx0ZXJhYmxlKCkge1xyXG4gICAgcmV0dXJuIHNraWxscy5maWx0ZXIoKHNraWxsKSA9PiBza2lsbC5pc0ZpbHRlcmFibGUgIT09IGZhbHNlKVxyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldEZyb21OYW1lKG5hbWUpIHtcclxuICAgIHJldHVybiBza2lsbHMuZmluZCgoc2tpbGwpID0+IHNraWxsLm5hbWUgPT09IG5hbWUpXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTa2lsbFNlcnZpY2VcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpbnRlcnNlY3Rpb24tb2JzZXJ2ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicXVlcnktc3RyaW5nXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXZlcnRpY2FsLXRpbWVsaW5lLWNvbXBvbmVudFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic21vb3Roc2Nyb2xsLXBvbHlmaWxsXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=