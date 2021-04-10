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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9saW5rLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JlcXVlc3QtaWRsZS1jYWxsYmFjay50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JvdXRlLWxvYWRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3VzZS1pbnRlcnNlY3Rpb24udHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvd2l0aC1yb3V0ZXIudHN4Iiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9taXR0LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9mb3JtYXQtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3F1ZXJ5c3RyaW5nLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMtbm9vcC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0ltYWdlLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvTG9jYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1dpbmRvd1NpemUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC9NZXRhSGVhZGVyLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50L1Byb2dyZXNzUmluZy5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC9TY3JvbGxlci5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC9kZXNjcmlwdGlvbi9EZXNjcmlwdGlvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC9mb290ZXIvRm9vdGVyLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50L2hlYWRlci9IZWFkZXIuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnQvaWNvbi9FbWFpbC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC9pY29uL0dpdGh1Yi5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC9pY29uL0xpbmtlZGluLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50L2ljb24vTWVkaXVtLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50L21lZGlhcy9NZWRpYXMuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnQvcHJvamVjdC9Qcm9qZWN0LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50L3Byb2plY3QvUHJvamVjdE92ZXJsYXkuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnQvc2tpbGwvU2tpbGwuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnQvdGl0bGUvVGl0bGUuanN4Iiwid2VicGFjazovLy8uL3NyYy9sYXlvdXQvaXRlbS9JdGVtLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0L3Jvdy9Sb3cuanN4Iiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9CYXNpY1BhZ2UuanN4Iiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9FeHBlcmllbmNlLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvTGFuZGluZy5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL01haW5TY3JvbGxQYWdlLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvUHJvamVjdExpc3QuanN4Iiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9Ta2lsbC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BvbHlmaWxsLmpzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9FeHBlcmlhbmNlLmpzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9Ta2lsbC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaW50ZXJzZWN0aW9uLW9ic2VydmVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicXVlcnktc3RyaW5nXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXZlcnRpY2FsLXRpbWVsaW5lLWNvbXBvbmVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInNtb290aHNjcm9sbC1wb2x5ZmlsbFwiIl0sIm5hbWVzIjpbInByZWZldGNoZWQiLCJyb3V0ZXIiLCJlcnIiLCJjdXJMb2NhbGUiLCJvcHRpb25zIiwiaHJlZiIsImV2ZW50IiwidGFyZ2V0IiwiZSIsIm5vZGVOYW1lIiwiaXNNb2RpZmllZEV2ZW50Iiwic2Nyb2xsIiwiYXMiLCJyZXBsYWNlIiwic3VjY2VzcyIsImRvY3VtZW50IiwiYXJncyIsImtleSIsImV4cGVjdGVkIiwiYWN0dWFsIiwicmVxdWlyZWRQcm9wc0d1YXJkIiwicmVxdWlyZWRQcm9wcyIsIk9iamVjdCIsInByb3BzIiwiY3JlYXRlUHJvcEVycm9yIiwiXyIsIm9wdGlvbmFsUHJvcHNHdWFyZCIsInNoYWxsb3ciLCJwYXNzSHJlZiIsInByZWZldGNoIiwibG9jYWxlIiwib3B0aW9uYWxQcm9wcyIsInZhbFR5cGUiLCJoYXNXYXJuZWQiLCJSZWFjdCIsImNvbnNvbGUiLCJwIiwicGF0aG5hbWUiLCJyZXNvbHZlZEFzIiwiY2hpbGRyZW4iLCJjaGlsZCIsIkNoaWxkcmVuIiwiY2hpbGRSZWYiLCJyb290TWFyZ2luIiwic2V0UmVmIiwiZWwiLCJzZXRJbnRlcnNlY3Rpb25SZWYiLCJzaG91bGRQcmVmZXRjaCIsImlzVmlzaWJsZSIsImlzUHJlZmV0Y2hlZCIsImNoaWxkUHJvcHMiLCJyZWYiLCJvbkNsaWNrIiwibGlua0NsaWNrZWQiLCJwcmlvcml0eSIsImxvY2FsZURvbWFpbiIsIkxpbmsiLCJwYXRoIiwibm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2giLCJwcm9jZXNzIiwicmVxdWVzdElkbGVDYWxsYmFjayIsInNlbGYiLCJzdGFydCIsIkRhdGUiLCJzZXRUaW1lb3V0IiwiY2IiLCJkaWRUaW1lb3V0IiwidGltZVJlbWFpbmluZyIsIk1hdGgiLCJNU19NQVhfSURMRV9ERUxBWSIsImVudHJ5IiwibWFwIiwiUHJvbWlzZSIsInByb20iLCJyZXNvbHZlIiwicmVzb2x2ZXIiLCJmdXR1cmUiLCJnZW5lcmF0b3IiLCJ2YWx1ZSIsImxpbmsiLCJ3aW5kb3ciLCJjYW5QcmVmZXRjaCIsImhhc1ByZWZldGNoIiwicmVzIiwiQVNTRVRfTE9BRF9FUlJPUiIsIlN5bWJvbCIsInNjcmlwdCIsInJlamVjdCIsIm1hcmtBc3NldEVycm9yIiwic3JjIiwib25CdWlsZE1hbmlmZXN0IiwiaWRsZVRpbWVvdXQiLCJzY3JpcHRzIiwiYXNzZXRQcmVmaXgiLCJlbmNvZGVVUkkiLCJjc3MiLCJnZXRDbGllbnRCdWlsZE1hbmlmZXN0IiwibWFuaWZlc3QiLCJyb3V0ZSIsImFsbEZpbGVzIiwidiIsImVudHJ5cG9pbnRzIiwibG9hZGVkU2NyaXB0cyIsInN0eWxlU2hlZXRzIiwicm91dGVzIiwiYXBwZW5kU2NyaXB0IiwiZmV0Y2giLCJ0ZXh0IiwiY29udGVudCIsIndoZW5FbnRyeXBvaW50Iiwid2l0aEZ1dHVyZSIsIm9uRW50cnlwb2ludCIsImZuIiwiZXhwb3J0cyIsImNvbXBvbmVudCIsImVycm9yIiwiaW5wdXQiLCJvbGQiLCJsb2FkUm91dGUiLCJnZXRGaWxlc0ZvclJvdXRlIiwiZW50cnlwb2ludCIsImNuIiwibmF2aWdhdG9yIiwib3V0cHV0IiwicHJlZmV0Y2hWaWFEb20iLCJjcmVhdGVSb3V0ZUxvYWRlciIsInNpbmdsZXRvblJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJ1cmxQcm9wZXJ0eUZpZWxkcyIsInJvdXRlckV2ZW50cyIsImNvcmVNZXRob2RGaWVsZHMiLCJnZXQiLCJSb3V0ZXIiLCJmaWVsZCIsImdldFJvdXRlciIsImV2ZW50RmllbGQiLCJfc2luZ2xldG9uUm91dGVyIiwibWVzc2FnZSIsInN0YWNrIiwiUm91dGVyQ29udGV4dCIsImNyZWF0ZVJvdXRlciIsIl9yb3V0ZXIiLCJpbnN0YW5jZSIsIkFycmF5IiwiaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJpc0Rpc2FibGVkIiwiZGlzYWJsZWQiLCJ1bm9ic2VydmUiLCJvYnNlcnZlIiwic2V0VmlzaWJsZSIsImNyZWF0ZU9ic2VydmVyIiwiZWxlbWVudHMiLCJvYnNlcnZlciIsIm9ic2VydmVycyIsImlkIiwiZW50cmllcyIsImNhbGxiYWNrIiwiQ29tcG9zZWRDb21wb25lbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJXaXRoUm91dGVyV3JhcHBlciIsIm5hbWUiLCJwYXRobmFtZVBhcnRzIiwibG9jYWxlcyIsImRldGVjdGVkTG9jYWxlIiwiYWxsIiwib24iLCJvZmYiLCJlbWl0IiwiaGFuZGxlciIsImJhc2VQYXRoIiwiY2FuY2VsbGVkIiwicHJlZml4IiwicGF0aE5vUXVlcnlIYXNoIiwicXVlcnlJbmRleCIsImhhc2hJbmRleCIsImFkZFBhdGhQcmVmaXgiLCJ1cmwiLCJsb2NhdGlvbk9yaWdpbiIsInJlc29sdmVkIiwiaGFzQmFzZVBhdGgiLCJpbnRlcnBvbGF0ZWRSb3V0ZSIsImR5bmFtaWNSZWdleCIsImR5bmFtaWNHcm91cHMiLCJkeW5hbWljTWF0Y2hlcyIsImFzUGF0aG5hbWUiLCJwYXJhbXMiLCJwYXJhbSIsInJlcGxhY2VkIiwicmVwZWF0Iiwib3B0aW9uYWwiLCJzZWdtZW50IiwiZW5jb2RlVVJJQ29tcG9uZW50IiwicmVzdWx0IiwiZmlsdGVyZWRRdWVyeSIsInF1ZXJ5IiwiYmFzZSIsInVybEFzU3RyaW5nIiwiaXNMb2NhbFVSTCIsInJlc29sdmVBcyIsImZpbmFsVXJsIiwiaW50ZXJwb2xhdGVkQXMiLCJpbnRlcnBvbGF0ZUFzIiwiaGFzaCIsIm9taXRQYXJtc0Zyb21RdWVyeSIsInJlc29sdmVkSHJlZiIsIm9yaWdpbiIsInJlc29sdmVIcmVmIiwiaHJlZkhhZE9yaWdpbiIsImFzSGFkT3JpZ2luIiwic3RyaXBPcmlnaW4iLCJwcmVwYXJlZFVybCIsImFkZEJhc2VQYXRoIiwicHJlcGFyZWRBcyIsIm1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uIiwiU1NHX0RBVEFfTk9UX0ZPVU5EIiwiY3JlZGVudGlhbHMiLCJhdHRlbXB0cyIsImZldGNoUmV0cnkiLCJkYXRhIiwibm90Rm91bmQiLCJpc1NlcnZlclJlbmRlciIsImNvbnN0cnVjdG9yIiwiYXNQYXRoIiwiY29tcG9uZW50cyIsInNkYyIsInN1YiIsImNsYyIsInBhZ2VMb2FkZXIiLCJfYnBzIiwiZXZlbnRzIiwiX3dyYXBBcHAiLCJpc1NzciIsImlzRmFsbGJhY2siLCJfaW5GbGlnaHRSb3V0ZSIsIl9zaGFsbG93IiwiZGVmYXVsdExvY2FsZSIsImRvbWFpbkxvY2FsZXMiLCJpc1JlYWR5IiwiX2lkeCIsInN0YXRlIiwiaW5pdGlhbCIsIl9fTl9TU0ciLCJpbml0aWFsUHJvcHMiLCJfX05fU1NQIiwiQ29tcG9uZW50IiwiYXV0b0V4cG9ydER5bmFtaWMiLCJyZWxvYWQiLCJiYWNrIiwicHVzaCIsInByZXBhcmVVcmxBcyIsImxvY2FsZUNoYW5nZSIsIlNUIiwicGVyZm9ybWFuY2UiLCJyb3V0ZVByb3BzIiwiYWRkTG9jYWxlIiwiZGVsQmFzZVBhdGgiLCJjbGVhbmVkQXMiLCJkZWxMb2NhbGUiLCJwYXJzZWQiLCJwYWdlcyIsIl9fcmV3cml0ZXMiLCJtZXRob2QiLCJwYXJzZWRBcyIsInJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwic2hvdWxkSW50ZXJwb2xhdGUiLCJtaXNzaW5nUGFyYW1zIiwicm91dGVJbmZvIiwiZGVzdGluYXRpb24iLCJwYXJzZWRIcmVmIiwibm90Rm91bmRSb3V0ZSIsImFwcENvbXAiLCJpc1ZhbGlkU2hhbGxvd1JvdXRlIiwiZm9yY2VkU2Nyb2xsIiwieCIsInkiLCJjaGFuZ2VTdGF0ZSIsIl9fTiIsImlkeCIsImJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IiLCJwYWdlIiwiZXhpc3RpbmdSb3V0ZUluZm8iLCJjYWNoZWRSb3V0ZUluZm8iLCJyZXF1aXJlIiwiaXNWYWxpZEVsZW1lbnRUeXBlIiwiZGF0YUhyZWYiLCJzZXQiLCJiZWZvcmVQb3BTdGF0ZSIsIm9ubHlBSGFzaENoYW5nZSIsIm5ld0hhc2giLCJvbGRVcmxOb0hhc2giLCJvbGRIYXNoIiwic2Nyb2xsVG9IYXNoIiwiaWRFbCIsIm5hbWVFbCIsInVybElzTmV3IiwiX3Jlc29sdmVIcmVmIiwiYXBwbHlCYXNlUGF0aCIsImNsZWFuUGF0aG5hbWUiLCJpc1NzZyIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsIl9nZXREYXRhIiwiX2dldFN0YXRpY0RhdGEiLCJmZXRjaE5leHREYXRhIiwiX2dldFNlcnZlckRhdGEiLCJBcHBUcmVlIiwiY3R4IiwiYWJvcnRDb21wb25lbnRMb2FkIiwibm90aWZ5Iiwic2xhc2hlZFByb3RvY29scyIsInByb3RvY29sIiwidXJsT2JqIiwiaG9zdCIsImF1dGgiLCJob3N0bmFtZSIsIlN0cmluZyIsInF1ZXJ5c3RyaW5nIiwic2VhcmNoIiwiVEVTVF9ST1VURSIsImdsb2JhbEJhc2UiLCJyZXNvbHZlZEJhc2UiLCJzZWFyY2hQYXJhbXMiLCJpc05hTiIsIml0ZW0iLCJzdHJpbmdpZnlVcmxRdWVyeVBhcmFtIiwic2VhcmNoUGFyYW1zTGlzdCIsInJlIiwiZGVjb2RlIiwiZGVjb2RlVVJJQ29tcG9uZW50Iiwic2x1Z05hbWUiLCJnIiwiZ3JvdXBzIiwibSIsInN0ciIsInNlZ21lbnRzIiwibm9ybWFsaXplZFJvdXRlIiwiZ3JvdXBJbmRleCIsInBhcmFtZXRlcml6ZWRSb3V0ZSIsInBhcnNlUGFyYW1ldGVyIiwicG9zIiwiZXNjYXBlUmVnZXgiLCJyb3V0ZUtleUNoYXJDb2RlIiwicm91dGVLZXlDaGFyTGVuZ3RoIiwiZ2V0U2FmZVJvdXRlS2V5Iiwicm91dGVLZXkiLCJpIiwicm91dGVLZXlzIiwibmFtZWRQYXJhbWV0ZXJpemVkUm91dGUiLCJjbGVhbmVkS2V5IiwiaW52YWxpZEtleSIsInBhcnNlSW50IiwibmFtZWRSZWdleCIsInVzZWQiLCJwb3J0IiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJBcHAiLCJnZXREaXNwbGF5TmFtZSIsInBhZ2VQcm9wcyIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJpc1Jlc1NlbnQiLCJ1cmxPYmplY3RLZXlzIiwiU1AiLCJJbmRleCIsInVzZUVmZmVjdCIsInBvbHlmaWxsIiwiSW1hZ2UiLCJhbHQiLCJjbGFzc05hbWUiLCJMb2NhdGlvbiIsInFzIiwicGFyc2UiLCJsb2NhdGlvbiIsImxvZyIsImxpbmtzIiwibGFiZWwiLCJXaW5kb3dTaXplIiwiZ2V0V2lkdGgiLCJpbm5lcldpZHRoIiwiZG9jdW1lbnRFbGVtZW50IiwiY2xpZW50V2lkdGgiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImlzTGFyZ2UiLCJjZWlsIiwiaXNTYWZhcmkiLCJ0ZXN0IiwiSFRNTEVsZW1lbnQiLCJzYWZhcmkiLCJwdXNoTm90aWZpY2F0aW9uIiwidG9TdHJpbmciLCJNZXRhSGVhZGVyIiwiY29tcG9uZW50RGlkTW91bnQiLCJkYXRhTGF5ZXIiLCJndGFnIiwiYXJndW1lbnRzIiwicmVuZGVyIiwiUHJvZ3Jlc3NSaW5nIiwic2lkZSIsImNpcmN1bWZlcmVuY2UiLCJzdHJva2UiLCJwcm9ncmVzcyIsInN0cm9rZURhc2hvZmZzZXQiLCJzdHJva2VDb2xvciIsIm92ZXJmbG93IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwibnVtYmVyIiwiaXNSZXF1aXJlZCIsIlNjcm9sbGVyIiwiY29udGFpbmVyUmVmIiwiY3JlYXRlUmVmIiwic2VjdGlvblJlZnMiLCJsYXN0U2Nyb2xsVG9wIiwiaXNTY3JvbGxpbmciLCJjYW5TY3JvbGwiLCJzY3JvbGxUaW1lb3V0IiwidW5kZWZpbmVkIiwic2Nyb2xsVGltZXIiLCJjYW5TY3JvbGxUaW1lb3V0Iiwic2VjdGlvbnMiLCJpbmRleCIsIm5leHRJbmRleCIsInNjcm9sbFRpbWVyRngiLCJiaW5kIiwiY29udGFpbmVyIiwic2Nyb2xsVG9FbGVtZW50IiwiY3VycmVudCIsImJpbmRMaXN0ZW5lciIsImNvbXBvbmVudERpZFVwZGF0ZSIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwidW5iaW5kTGlzdGVuZXIiLCJjbGVhclRpbWVvdXQiLCJvblNjcm9sbCIsInNjcm9sbERpcmVjdGlvbkNvZWZmIiwiZ2V0U2Nyb2xsRGlyZWN0aW9uIiwibGVuZ3RoIiwidGltZVN0YW1wIiwibmV4dEVsZW1lbnQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0b3AiLCJoZWlnaHQiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsIm5vdGlmeU9uU2Nyb2xsIiwiZ2V0Q29udGFpbmVyQm91bmRpbmciLCJnZXRDb250YWluZXJTY3JvbGxUb3AiLCJzY3JvbGxUb3AiLCJwYWdlWU9mZnNldCIsInN0IiwicmV0IiwiZWxlbWVudCIsImlzU21vb3RoIiwiZWxlbWVudFJlY3QiLCJzY3JvbGxUbyIsImJlaGF2aW9yIiwibGVmdCIsIm9sZEluZGV4IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJqb2luIiwiYXJyYXlPZiIsIm5vZGUiLCJmdW5jIiwiRGVzY3JpcHRpb24iLCJub01hcmdpbiIsInN0eWxlIiwiZVRleHQiLCJjbGFzc2VzIiwiX19odG1sIiwic3RyaW5nIiwiYm9vbCIsIm9iamVjdE9mIiwiYW55IiwiRm9vdGVyIiwib25Qcm9qZWN0Q2xpY2siLCJldmVudF9jYXRlZ29yeSIsIndpZHRoIiwiSGVhZGVyIiwiaXNDb2xsYXBzZWQiLCJjb2xsYXBzZUlmVHJ1ZSIsImNvbGxhcHNlIiwidmlzaWJsZUlkIiwib25MaW5rQ2xpY2siLCJzZXRTdGF0ZSIsImNvbXBvbmVudFdpbGxVcGRhdGUiLCJ3aXRoUm91dGVyIiwiRW1haWwiLCJHaXRodWIiLCJMaW5rZWRpbiIsIk1lZGl1bSIsIk1lZGlhcyIsIm1hcmdpbkxlZnQiLCJQcm9qZWN0IiwiaXNXaGl0ZSIsImMiLCJyZ2IiLCJyIiwiYiIsImx1bWEiLCJiYWNrZ3JvdW5kQ29sb3IiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJsb2dvIiwiaXNIb3ZlcmFibGUiLCJmdWxsU2l6ZSIsInNsaWNlIiwiY29sb3IiLCJQcm9qZWN0T3ZlcmxheSIsImluVHJhbnNpdGlvbiIsIm91dFRyYW5zaXRpb24iLCJTa2lsbCIsImxhcmdlU2lkZSIsImZsb29yIiwic21hbGxTaWRlIiwibGFyZ2VTdHJva2UiLCJnZXRTdHJva2UiLCJzbWFsbFN0cm9rZSIsImNhbGNFeHBlcmllbmNlU2lkZSIsImlzTGl0dGxlIiwic2hvd0V4cGVyaWVuY2UiLCJpc1NlbGVjdGVkIiwiZXhwZXJpZW5jZSIsInBvc2l0aW9uIiwicmlnaHQiLCJUaXRsZSIsIm15U3R5bGUiLCJJdGVtIiwiUm93Iiwic3BhY2VBcm91bmRNb2IiLCJub1dyYXAiLCJjZW50ZXIiLCJjdXN0b21SZWYiLCJCYXNpY1BhZ2UiLCJyZW5kZXJDb250ZW50IiwiRXhwZXJpZW5jZSIsImV4cGVyaWFuY2VzIiwiRXhwZXJpYW5jZVNlcnZpY2UiLCJwYWRkaW5nQm90dG9tIiwicGFkZGluZ1RvcCIsImV4cGVyaWFuY2UiLCJkYXRlIiwicHJvamVjdFVybCIsImJhY2tncm91bmQiLCJ0aXRsZSIsInN1YnRpdGxlIiwiTGFuZGluZyIsImdldEFnZSIsImJpcnRoZGF5Iiwibm93IiwiaXNEYXkiLCJob3VycyIsImdldEhvdXJzIiwibWFyZ2luVG9wIiwiZm9udFNpemUiLCJtYXJnaW4iLCJhbGlnblNlbGYiLCJ6SW5kZXgiLCJNYWluU2Nyb2xsUGFnZSIsInBhZ2VJZHMiLCJsIiwiaW5kZXhPZiIsIlByb2plY3RMaXN0UGFnZSIsImhhc01vcmVTa2lsbCIsInByb2plY3RzIiwiUHJvamVjdHMiLCJmaWx0ZXIiLCJza2lsbHMiLCJTa2lsbFNlcnZpY2UiLCJnZXRGaWx0ZXJhYmxlIiwiZmlsdGVycyIsImZpbHRlcnNHcm91cCIsInNlbGVjdGVkUHJvamVjdCIsImFkZFNraWxsRnJvbVFTIiwicGFyYW1Ta2lsbHMiLCJza2lsbCIsInNraWxsVG9BcnJheSIsIm5ld1NraWxscyIsInBhcmFtU2tpbGxPYmoiLCJza2lsbENtcCIsInNlY29uZCIsImZpcnN0IiwiZ2V0RnJvbU5hbWUiLCJmaW5kSW5kZXgiLCJ1bnNoaWZ0IiwiaGFzU2tpbGxzIiwidG9GaW5kIiwiZmlsdGVyRnJvbVFTIiwibmVlZENsZWFyRmlsdGVycyIsImZpbHRlclByb2plY3RzIiwiZm10U2tpbGxzIiwiaXNBcnJheSIsIm1Ta2lsbCIsIm5lZWRUb1VwZGF0ZVVybCIsImZpbHRlcmVkIiwiaXNNYXRjaGluZyIsImsiLCJzcGxpY2UiLCJqIiwibGFuZ3VhZ2VzIiwiZiIsImdldFNraWxsR3JvdXBlZCIsImdyb3VwZWQiLCJncm91cCIsImdvVG9Qcm9qZWN0IiwicHJvamVjdCIsInByb2plY3RMaXN0VG9Qcm9qZWN0VHJhbnNpdGlvbiIsImNsZWFyRmlsdGVycyIsImZha2VQcm9qZWN0cyIsImN1cnNvciIsInZpc2liaWxpdHkiLCJGYWtlQ29udGFpbmVyIiwiU2tpbGxQYWdlIiwiZ2V0U2hvd2FibGUiLCJmYWtlU2tpbGxzIiwiQ29udGFpbmVyIiwidGV4dFRyYW5zZm9ybSIsInNtb290aHNjcm9sbCIsIkV4cGVyaWVuY2VTZXJ2aWNlIiwiZXhw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SUFBdEMsQ0FBUDtBQUNEOztBQWZnQjs7QUFrQkpzWiwyRUFBZixFOzs7Ozs7Ozs7OztBQ3BCQSxvQzs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSw4RDs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSxrRCIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvaW5kZXguanNcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIik7IiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZlwiKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XG4gIHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICAgIHJldHVybiBjYWNoZTtcbiAgfTtcblxuICByZXR1cm4gY2FjaGU7XG59XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge1xuICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiB7XG4gICAgICBcImRlZmF1bHRcIjogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO1xuXG4gIGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge1xuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcbiAgfVxuXG4gIHZhciBuZXdPYmogPSB7fTtcbiAgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7XG5cbiAgICAgIGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcblxuICBpZiAoY2FjaGUpIHtcbiAgICBjYWNoZS5zZXQob2JqLCBuZXdPYmopO1xuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZDsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiaW1wb3J0IFJlYWN0LCB7IENoaWxkcmVuLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7XG4gIGFkZEJhc2VQYXRoLFxuICBhZGRMb2NhbGUsXG4gIGdldERvbWFpbkxvY2FsZSxcbiAgaXNMb2NhbFVSTCxcbiAgTmV4dFJvdXRlcixcbiAgUHJlZmV0Y2hPcHRpb25zLFxuICByZXNvbHZlSHJlZixcbn0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcbmltcG9ydCB7IHVzZUludGVyc2VjdGlvbiB9IGZyb20gJy4vdXNlLWludGVyc2VjdGlvbidcblxudHlwZSBVcmwgPSBzdHJpbmcgfCBVcmxPYmplY3RcbnR5cGUgUmVxdWlyZWRLZXlzPFQ+ID0ge1xuICBbSyBpbiBrZXlvZiBUXS0/OiB7fSBleHRlbmRzIFBpY2s8VCwgSz4gPyBuZXZlciA6IEtcbn1ba2V5b2YgVF1cbnR5cGUgT3B0aW9uYWxLZXlzPFQ+ID0ge1xuICBbSyBpbiBrZXlvZiBUXS0/OiB7fSBleHRlbmRzIFBpY2s8VCwgSz4gPyBLIDogbmV2ZXJcbn1ba2V5b2YgVF1cblxuZXhwb3J0IHR5cGUgTGlua1Byb3BzID0ge1xuICBocmVmOiBVcmxcbiAgYXM/OiBVcmxcbiAgcmVwbGFjZT86IGJvb2xlYW5cbiAgc2Nyb2xsPzogYm9vbGVhblxuICBzaGFsbG93PzogYm9vbGVhblxuICBwYXNzSHJlZj86IGJvb2xlYW5cbiAgcHJlZmV0Y2g/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlXG59XG50eXBlIExpbmtQcm9wc1JlcXVpcmVkID0gUmVxdWlyZWRLZXlzPExpbmtQcm9wcz5cbnR5cGUgTGlua1Byb3BzT3B0aW9uYWwgPSBPcHRpb25hbEtleXM8TGlua1Byb3BzPlxuXG5jb25zdCBwcmVmZXRjaGVkOiB7IFtjYWNoZUtleTogc3RyaW5nXTogYm9vbGVhbiB9ID0ge31cblxuZnVuY3Rpb24gcHJlZmV0Y2goXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICBvcHRpb25zPzogUHJlZmV0Y2hPcHRpb25zXG4pOiB2b2lkIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnIHx8ICFyb3V0ZXIpIHJldHVyblxuICBpZiAoIWlzTG9jYWxVUkwoaHJlZikpIHJldHVyblxuICAvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG4gIC8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcbiAgLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XG4gIC8vIHdhbnQgdG8gZm9yY2UgbmF2aWdhdGlvbiBzaW5jZSB0aGlzIGlzIG9ubHkgYSBwcmVmZXRjaFxuICByb3V0ZXIucHJlZmV0Y2goaHJlZiwgYXMsIG9wdGlvbnMpLmNhdGNoKChlcnIpID0+IHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgLy8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9KVxuICBjb25zdCBjdXJMb2NhbGUgPVxuICAgIG9wdGlvbnMgJiYgdHlwZW9mIG9wdGlvbnMubG9jYWxlICE9PSAndW5kZWZpbmVkJ1xuICAgICAgPyBvcHRpb25zLmxvY2FsZVxuICAgICAgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZVxuXG4gIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gIHByZWZldGNoZWRbaHJlZiArICclJyArIGFzICsgKGN1ckxvY2FsZSA/ICclJyArIGN1ckxvY2FsZSA6ICcnKV0gPSB0cnVlXG59XG5cbmZ1bmN0aW9uIGlzTW9kaWZpZWRFdmVudChldmVudDogUmVhY3QuTW91c2VFdmVudCk6IGJvb2xlYW4ge1xuICBjb25zdCB7IHRhcmdldCB9ID0gZXZlbnQuY3VycmVudFRhcmdldCBhcyBIVE1MQW5jaG9yRWxlbWVudFxuICByZXR1cm4gKFxuICAgICh0YXJnZXQgJiYgdGFyZ2V0ICE9PSAnX3NlbGYnKSB8fFxuICAgIGV2ZW50Lm1ldGFLZXkgfHxcbiAgICBldmVudC5jdHJsS2V5IHx8XG4gICAgZXZlbnQuc2hpZnRLZXkgfHxcbiAgICBldmVudC5hbHRLZXkgfHwgLy8gdHJpZ2dlcnMgcmVzb3VyY2UgZG93bmxvYWRcbiAgICAoZXZlbnQubmF0aXZlRXZlbnQgJiYgZXZlbnQubmF0aXZlRXZlbnQud2hpY2ggPT09IDIpXG4gIClcbn1cblxuZnVuY3Rpb24gbGlua0NsaWNrZWQoXG4gIGU6IFJlYWN0Lk1vdXNlRXZlbnQsXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICByZXBsYWNlPzogYm9vbGVhbixcbiAgc2hhbGxvdz86IGJvb2xlYW4sXG4gIHNjcm9sbD86IGJvb2xlYW4sXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlXG4pOiB2b2lkIHtcbiAgY29uc3QgeyBub2RlTmFtZSB9ID0gZS5jdXJyZW50VGFyZ2V0XG5cbiAgaWYgKG5vZGVOYW1lID09PSAnQScgJiYgKGlzTW9kaWZpZWRFdmVudChlKSB8fCAhaXNMb2NhbFVSTChocmVmKSkpIHtcbiAgICAvLyBpZ25vcmUgY2xpY2sgZm9yIGJyb3dzZXLigJlzIGRlZmF1bHQgYmVoYXZpb3JcbiAgICByZXR1cm5cbiAgfVxuXG4gIGUucHJldmVudERlZmF1bHQoKVxuXG4gIC8vICBhdm9pZCBzY3JvbGwgZm9yIHVybHMgd2l0aCBhbmNob3IgcmVmc1xuICBpZiAoc2Nyb2xsID09IG51bGwpIHtcbiAgICBzY3JvbGwgPSBhcy5pbmRleE9mKCcjJykgPCAwXG4gIH1cblxuICAvLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbiAgcm91dGVyW3JlcGxhY2UgPyAncmVwbGFjZScgOiAncHVzaCddKGhyZWYsIGFzLCB7XG4gICAgc2hhbGxvdyxcbiAgICBsb2NhbGUsXG4gICAgc2Nyb2xsLFxuICB9KS50aGVuKChzdWNjZXNzOiBib29sZWFuKSA9PiB7XG4gICAgaWYgKCFzdWNjZXNzKSByZXR1cm5cbiAgICBpZiAoc2Nyb2xsKSB7XG4gICAgICAvLyBGSVhNRTogcHJvcGVyIHJvdXRlIGFubm91bmNpbmcgYXQgUm91dGVyIGxldmVsLCBub3QgTGluazpcbiAgICAgIGRvY3VtZW50LmJvZHkuZm9jdXMoKVxuICAgIH1cbiAgfSlcbn1cblxuZnVuY3Rpb24gTGluayhwcm9wczogUmVhY3QuUHJvcHNXaXRoQ2hpbGRyZW48TGlua1Byb3BzPikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGZ1bmN0aW9uIGNyZWF0ZVByb3BFcnJvcihhcmdzOiB7XG4gICAgICBrZXk6IHN0cmluZ1xuICAgICAgZXhwZWN0ZWQ6IHN0cmluZ1xuICAgICAgYWN0dWFsOiBzdHJpbmdcbiAgICB9KSB7XG4gICAgICByZXR1cm4gbmV3IEVycm9yKFxuICAgICAgICBgRmFpbGVkIHByb3AgdHlwZTogVGhlIHByb3AgXFxgJHthcmdzLmtleX1cXGAgZXhwZWN0cyBhICR7YXJncy5leHBlY3RlZH0gaW4gXFxgPExpbms+XFxgLCBidXQgZ290IFxcYCR7YXJncy5hY3R1YWx9XFxgIGluc3RlYWQuYCArXG4gICAgICAgICAgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICA/IFwiXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIlxuICAgICAgICAgICAgOiAnJylcbiAgICAgIClcbiAgICB9XG5cbiAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgIGNvbnN0IHJlcXVpcmVkUHJvcHNHdWFyZDogUmVjb3JkPExpbmtQcm9wc1JlcXVpcmVkLCB0cnVlPiA9IHtcbiAgICAgIGhyZWY6IHRydWUsXG4gICAgfSBhcyBjb25zdFxuICAgIGNvbnN0IHJlcXVpcmVkUHJvcHM6IExpbmtQcm9wc1JlcXVpcmVkW10gPSBPYmplY3Qua2V5cyhcbiAgICAgIHJlcXVpcmVkUHJvcHNHdWFyZFxuICAgICkgYXMgTGlua1Byb3BzUmVxdWlyZWRbXVxuICAgIHJlcXVpcmVkUHJvcHMuZm9yRWFjaCgoa2V5OiBMaW5rUHJvcHNSZXF1aXJlZCkgPT4ge1xuICAgICAgaWYgKGtleSA9PT0gJ2hyZWYnKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBwcm9wc1trZXldID09IG51bGwgfHxcbiAgICAgICAgICAodHlwZW9mIHByb3BzW2tleV0gIT09ICdzdHJpbmcnICYmIHR5cGVvZiBwcm9wc1trZXldICE9PSAnb2JqZWN0JylcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgYWN0dWFsOiBwcm9wc1trZXldID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIHByb3BzW2tleV0sXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICBjb25zdCBfOiBuZXZlciA9IGtleVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgIGNvbnN0IG9wdGlvbmFsUHJvcHNHdWFyZDogUmVjb3JkPExpbmtQcm9wc09wdGlvbmFsLCB0cnVlPiA9IHtcbiAgICAgIGFzOiB0cnVlLFxuICAgICAgcmVwbGFjZTogdHJ1ZSxcbiAgICAgIHNjcm9sbDogdHJ1ZSxcbiAgICAgIHNoYWxsb3c6IHRydWUsXG4gICAgICBwYXNzSHJlZjogdHJ1ZSxcbiAgICAgIHByZWZldGNoOiB0cnVlLFxuICAgICAgbG9jYWxlOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCBvcHRpb25hbFByb3BzOiBMaW5rUHJvcHNPcHRpb25hbFtdID0gT2JqZWN0LmtleXMoXG4gICAgICBvcHRpb25hbFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc09wdGlvbmFsW11cbiAgICBvcHRpb25hbFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzT3B0aW9uYWwpID0+IHtcbiAgICAgIGNvbnN0IHZhbFR5cGUgPSB0eXBlb2YgcHJvcHNba2V5XVxuXG4gICAgICBpZiAoa2V5ID09PSAnYXMnKSB7XG4gICAgICAgIGlmIChwcm9wc1trZXldICYmIHZhbFR5cGUgIT09ICdzdHJpbmcnICYmIHZhbFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnbG9jYWxlJykge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAmJiB2YWxUeXBlICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgJyxcbiAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBrZXkgPT09ICdyZXBsYWNlJyB8fFxuICAgICAgICBrZXkgPT09ICdzY3JvbGwnIHx8XG4gICAgICAgIGtleSA9PT0gJ3NoYWxsb3cnIHx8XG4gICAgICAgIGtleSA9PT0gJ3Bhc3NIcmVmJyB8fFxuICAgICAgICBrZXkgPT09ICdwcmVmZXRjaCdcbiAgICAgICkge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAhPSBudWxsICYmIHZhbFR5cGUgIT09ICdib29sZWFuJykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2Bib29sZWFuYCcsXG4gICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGUsXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICBjb25zdCBfOiBuZXZlciA9IGtleVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBUaGlzIGhvb2sgaXMgaW4gYSBjb25kaXRpb25hbCBidXQgdGhhdCBpcyBvayBiZWNhdXNlIGBwcm9jZXNzLmVudi5OT0RFX0VOVmAgbmV2ZXIgY2hhbmdlc1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuICAgIGNvbnN0IGhhc1dhcm5lZCA9IFJlYWN0LnVzZVJlZihmYWxzZSlcbiAgICBpZiAocHJvcHMucHJlZmV0Y2ggJiYgIWhhc1dhcm5lZC5jdXJyZW50KSB7XG4gICAgICBoYXNXYXJuZWQuY3VycmVudCA9IHRydWVcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJ1xuICAgICAgKVxuICAgIH1cbiAgfVxuICBjb25zdCBwID0gcHJvcHMucHJlZmV0Y2ggIT09IGZhbHNlXG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgcGF0aG5hbWUgPSAocm91dGVyICYmIHJvdXRlci5wYXRobmFtZSkgfHwgJy8nXG5cbiAgY29uc3QgeyBocmVmLCBhcyB9ID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3QgW3Jlc29sdmVkSHJlZiwgcmVzb2x2ZWRBc10gPSByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuaHJlZiwgdHJ1ZSlcbiAgICByZXR1cm4ge1xuICAgICAgaHJlZjogcmVzb2x2ZWRIcmVmLFxuICAgICAgYXM6IHByb3BzLmFzXG4gICAgICAgID8gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmFzKVxuICAgICAgICA6IHJlc29sdmVkQXMgfHwgcmVzb2x2ZWRIcmVmLFxuICAgIH1cbiAgfSwgW3BhdGhuYW1lLCBwcm9wcy5ocmVmLCBwcm9wcy5hc10pXG5cbiAgbGV0IHsgY2hpbGRyZW4sIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCwgbG9jYWxlIH0gPSBwcm9wc1xuXG4gIC8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJykge1xuICAgIGNoaWxkcmVuID0gPGE+e2NoaWxkcmVufTwvYT5cbiAgfVxuXG4gIC8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxuICBjb25zdCBjaGlsZDogYW55ID0gQ2hpbGRyZW4ub25seShjaGlsZHJlbilcbiAgY29uc3QgY2hpbGRSZWY6IGFueSA9IGNoaWxkICYmIHR5cGVvZiBjaGlsZCA9PT0gJ29iamVjdCcgJiYgY2hpbGQucmVmXG5cbiAgY29uc3QgW3NldEludGVyc2VjdGlvblJlZiwgaXNWaXNpYmxlXSA9IHVzZUludGVyc2VjdGlvbih7XG4gICAgcm9vdE1hcmdpbjogJzIwMHB4JyxcbiAgfSlcbiAgY29uc3Qgc2V0UmVmID0gUmVhY3QudXNlQ2FsbGJhY2soXG4gICAgKGVsOiBFbGVtZW50KSA9PiB7XG4gICAgICBzZXRJbnRlcnNlY3Rpb25SZWYoZWwpXG4gICAgICBpZiAoY2hpbGRSZWYpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjaGlsZFJlZiA9PT0gJ2Z1bmN0aW9uJykgY2hpbGRSZWYoZWwpXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBjaGlsZFJlZiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICBjaGlsZFJlZi5jdXJyZW50ID0gZWxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgW2NoaWxkUmVmLCBzZXRJbnRlcnNlY3Rpb25SZWZdXG4gIClcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBzaG91bGRQcmVmZXRjaCA9IGlzVmlzaWJsZSAmJiBwICYmIGlzTG9jYWxVUkwoaHJlZilcbiAgICBjb25zdCBjdXJMb2NhbGUgPVxuICAgICAgdHlwZW9mIGxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBsb2NhbGUgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZVxuICAgIGNvbnN0IGlzUHJlZmV0Y2hlZCA9XG4gICAgICBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhcyArIChjdXJMb2NhbGUgPyAnJScgKyBjdXJMb2NhbGUgOiAnJyldXG4gICAgaWYgKHNob3VsZFByZWZldGNoICYmICFpc1ByZWZldGNoZWQpIHtcbiAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHtcbiAgICAgICAgbG9jYWxlOiBjdXJMb2NhbGUsXG4gICAgICB9KVxuICAgIH1cbiAgfSwgW2FzLCBocmVmLCBpc1Zpc2libGUsIGxvY2FsZSwgcCwgcm91dGVyXSlcblxuICBjb25zdCBjaGlsZFByb3BzOiB7XG4gICAgb25Nb3VzZUVudGVyPzogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBvbkNsaWNrOiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIGhyZWY/OiBzdHJpbmdcbiAgICByZWY/OiBhbnlcbiAgfSA9IHtcbiAgICByZWY6IHNldFJlZixcbiAgICBvbkNsaWNrOiAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNoaWxkLnByb3BzLm9uQ2xpY2soZSlcbiAgICAgIH1cbiAgICAgIGlmICghZS5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIGxpbmtDbGlja2VkKGUsIHJvdXRlciwgaHJlZiwgYXMsIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCwgbG9jYWxlKVxuICAgICAgfVxuICAgIH0sXG4gIH1cblxuICBjaGlsZFByb3BzLm9uTW91c2VFbnRlciA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpXG4gICAgfVxuICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHsgcHJpb3JpdHk6IHRydWUgfSlcbiAgfVxuXG4gIC8vIElmIGNoaWxkIGlzIGFuIDxhPiB0YWcgYW5kIGRvZXNuJ3QgaGF2ZSBhIGhyZWYgYXR0cmlidXRlLCBvciBpZiB0aGUgJ3Bhc3NIcmVmJyBwcm9wZXJ0eSBpc1xuICAvLyBkZWZpbmVkLCB3ZSBzcGVjaWZ5IHRoZSBjdXJyZW50ICdocmVmJywgc28gdGhhdCByZXBldGl0aW9uIGlzIG5vdCBuZWVkZWQgYnkgdGhlIHVzZXJcbiAgaWYgKHByb3BzLnBhc3NIcmVmIHx8IChjaGlsZC50eXBlID09PSAnYScgJiYgISgnaHJlZicgaW4gY2hpbGQucHJvcHMpKSkge1xuICAgIGNvbnN0IGN1ckxvY2FsZSA9XG4gICAgICB0eXBlb2YgbG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IGxvY2FsZSA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlXG5cbiAgICBjb25zdCBsb2NhbGVEb21haW4gPSBnZXREb21haW5Mb2NhbGUoXG4gICAgICBhcyxcbiAgICAgIGN1ckxvY2FsZSxcbiAgICAgIHJvdXRlciAmJiByb3V0ZXIubG9jYWxlcyxcbiAgICAgIHJvdXRlciAmJiByb3V0ZXIuZG9tYWluTG9jYWxlc1xuICAgIClcblxuICAgIGNoaWxkUHJvcHMuaHJlZiA9XG4gICAgICBsb2NhbGVEb21haW4gfHxcbiAgICAgIGFkZEJhc2VQYXRoKGFkZExvY2FsZShhcywgY3VyTG9jYWxlLCByb3V0ZXIgJiYgcm91dGVyLmRlZmF1bHRMb2NhbGUpKVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgY2hpbGRQcm9wcylcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlua1xuIiwiLyoqXG4gKiBSZW1vdmVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggaWYgdGhlcmUgaXMgb25lLiBQcmVzZXJ2ZXMgdGhlIHJvb3QgcGF0aCBgL2AuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5lbmRzV2l0aCgnLycpICYmIHBhdGggIT09ICcvJyA/IHBhdGguc2xpY2UoMCwgLTEpIDogcGF0aFxufVxuXG4vKipcbiAqIE5vcm1hbGl6ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBhY2NvcmRpbmcgdG8gdGhlIGB0cmFpbGluZ1NsYXNoYCBvcHRpb25cbiAqIGluIGBuZXh0LmNvbmZpZy5qc2AuXG4gKi9cbmV4cG9ydCBjb25zdCBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IHByb2Nlc3MuZW52Ll9fTkVYVF9UUkFJTElOR19TTEFTSFxuICA/IChwYXRoOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICAgICAgaWYgKC9cXC5bXi9dK1xcLz8kLy50ZXN0KHBhdGgpKSB7XG4gICAgICAgIHJldHVybiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKVxuICAgICAgfSBlbHNlIGlmIChwYXRoLmVuZHNXaXRoKCcvJykpIHtcbiAgICAgICAgcmV0dXJuIHBhdGhcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBwYXRoICsgJy8nXG4gICAgICB9XG4gICAgfVxuICA6IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoXG4iLCJ0eXBlIFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGUgPSBhbnlcbnR5cGUgUmVxdWVzdElkbGVDYWxsYmFja09wdGlvbnMgPSB7XG4gIHRpbWVvdXQ6IG51bWJlclxufVxudHlwZSBSZXF1ZXN0SWRsZUNhbGxiYWNrRGVhZGxpbmUgPSB7XG4gIHJlYWRvbmx5IGRpZFRpbWVvdXQ6IGJvb2xlYW5cbiAgdGltZVJlbWFpbmluZzogKCkgPT4gbnVtYmVyXG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgcmVxdWVzdElkbGVDYWxsYmFjazogKFxuICAgICAgY2FsbGJhY2s6IChkZWFkbGluZTogUmVxdWVzdElkbGVDYWxsYmFja0RlYWRsaW5lKSA9PiB2b2lkLFxuICAgICAgb3B0cz86IFJlcXVlc3RJZGxlQ2FsbGJhY2tPcHRpb25zXG4gICAgKSA9PiBSZXF1ZXN0SWRsZUNhbGxiYWNrSGFuZGxlXG4gIH1cbn1cblxuY29uc3QgcmVxdWVzdElkbGVDYWxsYmFjayA9XG4gICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5yZXF1ZXN0SWRsZUNhbGxiYWNrKSB8fFxuICBmdW5jdGlvbiAoXG4gICAgY2I6IChkZWFkbGluZTogUmVxdWVzdElkbGVDYWxsYmFja0RlYWRsaW5lKSA9PiB2b2lkXG4gICk6IE5vZGVKUy5UaW1lb3V0IHtcbiAgICBsZXQgc3RhcnQgPSBEYXRlLm5vdygpXG4gICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgY2Ioe1xuICAgICAgICBkaWRUaW1lb3V0OiBmYWxzZSxcbiAgICAgICAgdGltZVJlbWFpbmluZzogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBNYXRoLm1heCgwLCA1MCAtIChEYXRlLm5vdygpIC0gc3RhcnQpKVxuICAgICAgICB9LFxuICAgICAgfSlcbiAgICB9LCAxKVxuICB9XG5cbmV4cG9ydCBkZWZhdWx0IHJlcXVlc3RJZGxlQ2FsbGJhY2tcbiIsImltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IENsaWVudEJ1aWxkTWFuaWZlc3QgfSBmcm9tICcuLi9idWlsZC93ZWJwYWNrL3BsdWdpbnMvYnVpbGQtbWFuaWZlc3QtcGx1Z2luJ1xuaW1wb3J0IGdldEFzc2V0UGF0aEZyb21Sb3V0ZSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUnXG5pbXBvcnQgcmVxdWVzdElkbGVDYWxsYmFjayBmcm9tICcuL3JlcXVlc3QtaWRsZS1jYWxsYmFjaydcblxuLy8gMy44cyB3YXMgYXJiaXRyYXJpbHkgY2hvc2VuIGFzIGl0J3Mgd2hhdCBodHRwczovL3dlYi5kZXYvaW50ZXJhY3RpdmVcbi8vIGNvbnNpZGVycyBhcyBcIkdvb2RcIiB0aW1lLXRvLWludGVyYWN0aXZlLiBXZSBtdXN0IGFzc3VtZSBzb21ldGhpbmcgd2VudFxuLy8gd3JvbmcgYmV5b25kIHRoaXMgcG9pbnQsIGFuZCB0aGVuIGZhbGwtYmFjayB0byBhIGZ1bGwgcGFnZSB0cmFuc2l0aW9uIHRvXG4vLyBzaG93IHRoZSB1c2VyIHNvbWV0aGluZyBvZiB2YWx1ZS5cbmNvbnN0IE1TX01BWF9JRExFX0RFTEFZID0gMzgwMFxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIF9fQlVJTERfTUFOSUZFU1Q/OiBDbGllbnRCdWlsZE1hbmlmZXN0XG4gICAgX19CVUlMRF9NQU5JRkVTVF9DQj86IEZ1bmN0aW9uXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBMb2FkZWRFbnRyeXBvaW50U3VjY2VzcyB7XG4gIGNvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICBleHBvcnRzOiBhbnlcbn1cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGVkRW50cnlwb2ludEZhaWx1cmUge1xuICBlcnJvcjogdW5rbm93blxufVxuZXhwb3J0IHR5cGUgUm91dGVFbnRyeXBvaW50ID0gTG9hZGVkRW50cnlwb2ludFN1Y2Nlc3MgfCBMb2FkZWRFbnRyeXBvaW50RmFpbHVyZVxuXG5leHBvcnQgaW50ZXJmYWNlIFJvdXRlU3R5bGVTaGVldCB7XG4gIGhyZWY6IHN0cmluZ1xuICBjb250ZW50OiBzdHJpbmdcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMb2FkZWRSb3V0ZVN1Y2Nlc3MgZXh0ZW5kcyBMb2FkZWRFbnRyeXBvaW50U3VjY2VzcyB7XG4gIHN0eWxlczogUm91dGVTdHlsZVNoZWV0W11cbn1cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGVkUm91dGVGYWlsdXJlIHtcbiAgZXJyb3I6IHVua25vd25cbn1cbmV4cG9ydCB0eXBlIFJvdXRlTG9hZGVyRW50cnkgPSBMb2FkZWRSb3V0ZVN1Y2Nlc3MgfCBMb2FkZWRSb3V0ZUZhaWx1cmVcblxuZXhwb3J0IHR5cGUgRnV0dXJlPFY+ID0ge1xuICByZXNvbHZlOiAoZW50cnlwb2ludDogVikgPT4gdm9pZFxuICBmdXR1cmU6IFByb21pc2U8Vj5cbn1cbmZ1bmN0aW9uIHdpdGhGdXR1cmU8VD4oXG4gIGtleTogc3RyaW5nLFxuICBtYXA6IE1hcDxzdHJpbmcsIEZ1dHVyZTxUPiB8IFQ+LFxuICBnZW5lcmF0b3I/OiAoKSA9PiBQcm9taXNlPFQ+XG4pOiBQcm9taXNlPFQ+IHtcbiAgbGV0IGVudHJ5OiBGdXR1cmU8VD4gfCBUIHwgdW5kZWZpbmVkID0gbWFwLmdldChrZXkpXG4gIGlmIChlbnRyeSkge1xuICAgIGlmICgnZnV0dXJlJyBpbiBlbnRyeSkge1xuICAgICAgcmV0dXJuIGVudHJ5LmZ1dHVyZVxuICAgIH1cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGVudHJ5KVxuICB9XG4gIGxldCByZXNvbHZlcjogKGVudHJ5cG9pbnQ6IFQpID0+IHZvaWRcbiAgY29uc3QgcHJvbTogUHJvbWlzZTxUPiA9IG5ldyBQcm9taXNlPFQ+KChyZXNvbHZlKSA9PiB7XG4gICAgcmVzb2x2ZXIgPSByZXNvbHZlXG4gIH0pXG4gIG1hcC5zZXQoa2V5LCAoZW50cnkgPSB7IHJlc29sdmU6IHJlc29sdmVyISwgZnV0dXJlOiBwcm9tIH0pKVxuICByZXR1cm4gZ2VuZXJhdG9yXG4gICAgPyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzXG4gICAgICBnZW5lcmF0b3IoKS50aGVuKCh2YWx1ZSkgPT4gKHJlc29sdmVyKHZhbHVlKSwgdmFsdWUpKVxuICAgIDogcHJvbVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJvdXRlTG9hZGVyIHtcbiAgd2hlbkVudHJ5cG9pbnQocm91dGU6IHN0cmluZyk6IFByb21pc2U8Um91dGVFbnRyeXBvaW50PlxuICBvbkVudHJ5cG9pbnQocm91dGU6IHN0cmluZywgZXhlY3V0ZTogKCkgPT4gdW5rbm93bik6IHZvaWRcbiAgbG9hZFJvdXRlKHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPFJvdXRlTG9hZGVyRW50cnk+XG4gIHByZWZldGNoKHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+XG59XG5cbmZ1bmN0aW9uIGhhc1ByZWZldGNoKGxpbms/OiBIVE1MTGlua0VsZW1lbnQpOiBib29sZWFuIHtcbiAgdHJ5IHtcbiAgICBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpXG4gICAgcmV0dXJuIChcbiAgICAgIC8vIGRldGVjdCBJRTExIHNpbmNlIGl0IHN1cHBvcnRzIHByZWZldGNoIGJ1dCBpc24ndCBkZXRlY3RlZFxuICAgICAgLy8gd2l0aCByZWxMaXN0LnN1cHBvcnRcbiAgICAgICghIXdpbmRvdy5NU0lucHV0TWV0aG9kQ29udGV4dCAmJiAhIShkb2N1bWVudCBhcyBhbnkpLmRvY3VtZW50TW9kZSkgfHxcbiAgICAgIGxpbmsucmVsTGlzdC5zdXBwb3J0cygncHJlZmV0Y2gnKVxuICAgIClcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuY29uc3QgY2FuUHJlZmV0Y2g6IGJvb2xlYW4gPSBoYXNQcmVmZXRjaCgpXG5cbmZ1bmN0aW9uIHByZWZldGNoVmlhRG9tKFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIGxpbms/OiBIVE1MTGlua0VsZW1lbnRcbik6IFByb21pc2U8YW55PiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzLCByZWopID0+IHtcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgbGlua1tyZWw9XCJwcmVmZXRjaFwiXVtocmVmXj1cIiR7aHJlZn1cIl1gKSkge1xuICAgICAgcmV0dXJuIHJlcygpXG4gICAgfVxuXG4gICAgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKVxuXG4gICAgLy8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbDpcbiAgICBpZiAoYXMpIGxpbmshLmFzID0gYXNcbiAgICBsaW5rIS5yZWwgPSBgcHJlZmV0Y2hgXG4gICAgbGluayEuY3Jvc3NPcmlnaW4gPSBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOIVxuICAgIGxpbmshLm9ubG9hZCA9IHJlc1xuICAgIGxpbmshLm9uZXJyb3IgPSByZWpcblxuICAgIC8vIGBocmVmYCBzaG91bGQgYWx3YXlzIGJlIGxhc3Q6XG4gICAgbGluayEuaHJlZiA9IGhyZWZcblxuICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobGluaylcbiAgfSlcbn1cblxuY29uc3QgQVNTRVRfTE9BRF9FUlJPUiA9IFN5bWJvbCgnQVNTRVRfTE9BRF9FUlJPUicpXG4vLyBUT0RPOiB1bmV4cG9ydFxuZXhwb3J0IGZ1bmN0aW9uIG1hcmtBc3NldEVycm9yKGVycjogRXJyb3IpOiBFcnJvciB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXJyLCBBU1NFVF9MT0FEX0VSUk9SLCB7fSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzQXNzZXRFcnJvcihlcnI/OiBFcnJvcik6IGJvb2xlYW4gfCB1bmRlZmluZWQge1xuICByZXR1cm4gZXJyICYmIEFTU0VUX0xPQURfRVJST1IgaW4gZXJyXG59XG5cbmZ1bmN0aW9uIGFwcGVuZFNjcmlwdChcbiAgc3JjOiBzdHJpbmcsXG4gIHNjcmlwdD86IEhUTUxTY3JpcHRFbGVtZW50XG4pOiBQcm9taXNlPHVua25vd24+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKVxuXG4gICAgLy8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbC5cbiAgICAvLyAxLiBTZXR1cCBzdWNjZXNzL2ZhaWx1cmUgaG9va3MgaW4gY2FzZSB0aGUgYnJvd3NlciBzeW5jaHJvbm91c2x5XG4gICAgLy8gICAgZXhlY3V0ZXMgd2hlbiBgc3JjYCBpcyBzZXQuXG4gICAgc2NyaXB0Lm9ubG9hZCA9IHJlc29sdmVcbiAgICBzY3JpcHQub25lcnJvciA9ICgpID0+XG4gICAgICByZWplY3QobWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzY3JpcHQ6ICR7c3JjfWApKSlcblxuICAgIC8vIDIuIENvbmZpZ3VyZSB0aGUgY3Jvc3Mtb3JpZ2luIGF0dHJpYnV0ZSBiZWZvcmUgc2V0dGluZyBgc3JjYCBpbiBjYXNlIHRoZVxuICAgIC8vICAgIGJyb3dzZXIgYmVnaW5zIHRvIGZldGNoLlxuICAgIHNjcmlwdC5jcm9zc09yaWdpbiA9IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU4hXG5cbiAgICAvLyAzLiBGaW5hbGx5LCBzZXQgdGhlIHNvdXJjZSBhbmQgaW5qZWN0IGludG8gdGhlIERPTSBpbiBjYXNlIHRoZSBjaGlsZFxuICAgIC8vICAgIG11c3QgYmUgYXBwZW5kZWQgZm9yIGZldGNoaW5nIHRvIHN0YXJ0LlxuICAgIHNjcmlwdC5zcmMgPSBzcmNcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmlwdClcbiAgfSlcbn1cblxuZnVuY3Rpb24gaWRsZVRpbWVvdXQ8VD4obXM6IG51bWJlciwgZXJyOiBFcnJvcik6IFByb21pc2U8VD4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKF9yZXNvbHZlLCByZWplY3QpID0+XG4gICAgcmVxdWVzdElkbGVDYWxsYmFjaygoKSA9PiBzZXRUaW1lb3V0KCgpID0+IHJlamVjdChlcnIpLCBtcykpXG4gIClcbn1cblxuLy8gVE9ETzogc3RvcCBleHBvcnRpbmcgb3IgY2FjaGUgdGhlIGZhaWx1cmVcbi8vIEl0J2QgYmUgYmVzdCB0byBzdG9wIGV4cG9ydGluZyB0aGlzLiBJdCdzIGFuIGltcGxlbWVudGF0aW9uIGRldGFpbC4gV2UncmVcbi8vIG9ubHkgZXhwb3J0aW5nIGl0IGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbHR5IHdpdGggdGhlIGBwYWdlLWxvYWRlcmAuXG4vLyBPbmx5IGNhY2hlIHRoaXMgcmVzcG9uc2UgYXMgYSBsYXN0IHJlc29ydCBpZiB3ZSBjYW5ub3QgZWxpbWluYXRlIGFsbCBvdGhlclxuLy8gY29kZSBicmFuY2hlcyB0aGF0IHVzZSB0aGUgQnVpbGQgTWFuaWZlc3QgQ2FsbGJhY2sgYW5kIHB1c2ggdGhlbSB0aHJvdWdoXG4vLyB0aGUgUm91dGUgTG9hZGVyIGludGVyZmFjZS5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCk6IFByb21pc2U8Q2xpZW50QnVpbGRNYW5pZmVzdD4ge1xuICBpZiAoc2VsZi5fX0JVSUxEX01BTklGRVNUKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShzZWxmLl9fQlVJTERfTUFOSUZFU1QpXG4gIH1cblxuICBjb25zdCBvbkJ1aWxkTWFuaWZlc3Q6IFByb21pc2U8Q2xpZW50QnVpbGRNYW5pZmVzdD4gPSBuZXcgUHJvbWlzZTxcbiAgICBDbGllbnRCdWlsZE1hbmlmZXN0XG4gID4oKHJlc29sdmUpID0+IHtcbiAgICAvLyBNYW5kYXRvcnkgYmVjYXVzZSB0aGlzIGlzIG5vdCBjb25jdXJyZW50IHNhZmU6XG4gICAgY29uc3QgY2IgPSBzZWxmLl9fQlVJTERfTUFOSUZFU1RfQ0JcbiAgICBzZWxmLl9fQlVJTERfTUFOSUZFU1RfQ0IgPSAoKSA9PiB7XG4gICAgICByZXNvbHZlKHNlbGYuX19CVUlMRF9NQU5JRkVTVClcbiAgICAgIGNiICYmIGNiKClcbiAgICB9XG4gIH0pXG4gIHJldHVybiBQcm9taXNlLnJhY2UoW1xuICAgIG9uQnVpbGRNYW5pZmVzdCxcbiAgICBpZGxlVGltZW91dDxDbGllbnRCdWlsZE1hbmlmZXN0PihcbiAgICAgIE1TX01BWF9JRExFX0RFTEFZLFxuICAgICAgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKCdGYWlsZWQgdG8gbG9hZCBjbGllbnQgYnVpbGQgbWFuaWZlc3QnKSlcbiAgICApLFxuICBdKVxufVxuXG5pbnRlcmZhY2UgUm91dGVGaWxlcyB7XG4gIHNjcmlwdHM6IHN0cmluZ1tdXG4gIGNzczogc3RyaW5nW11cbn1cbmZ1bmN0aW9uIGdldEZpbGVzRm9yUm91dGUoXG4gIGFzc2V0UHJlZml4OiBzdHJpbmcsXG4gIHJvdXRlOiBzdHJpbmdcbik6IFByb21pc2U8Um91dGVGaWxlcz4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHtcbiAgICAgIHNjcmlwdHM6IFtcbiAgICAgICAgYXNzZXRQcmVmaXggK1xuICAgICAgICAgICcvX25leHQvc3RhdGljL2NodW5rcy9wYWdlcycgK1xuICAgICAgICAgIGVuY29kZVVSSShnZXRBc3NldFBhdGhGcm9tUm91dGUocm91dGUsICcuanMnKSksXG4gICAgICBdLFxuICAgICAgLy8gU3R5bGVzIGFyZSBoYW5kbGVkIGJ5IGBzdHlsZS1sb2FkZXJgIGluIGRldmVsb3BtZW50OlxuICAgICAgY3NzOiBbXSxcbiAgICB9KVxuICB9XG4gIHJldHVybiBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkudGhlbigobWFuaWZlc3QpID0+IHtcbiAgICBpZiAoIShyb3V0ZSBpbiBtYW5pZmVzdCkpIHtcbiAgICAgIHRocm93IG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvb2t1cCByb3V0ZTogJHtyb3V0ZX1gKSlcbiAgICB9XG4gICAgY29uc3QgYWxsRmlsZXMgPSBtYW5pZmVzdFtyb3V0ZV0ubWFwKFxuICAgICAgKGVudHJ5KSA9PiBhc3NldFByZWZpeCArICcvX25leHQvJyArIGVuY29kZVVSSShlbnRyeSlcbiAgICApXG4gICAgcmV0dXJuIHtcbiAgICAgIHNjcmlwdHM6IGFsbEZpbGVzLmZpbHRlcigodikgPT4gdi5lbmRzV2l0aCgnLmpzJykpLFxuICAgICAgY3NzOiBhbGxGaWxlcy5maWx0ZXIoKHYpID0+IHYuZW5kc1dpdGgoJy5jc3MnKSksXG4gICAgfVxuICB9KVxufVxuXG5mdW5jdGlvbiBjcmVhdGVSb3V0ZUxvYWRlcihhc3NldFByZWZpeDogc3RyaW5nKTogUm91dGVMb2FkZXIge1xuICBjb25zdCBlbnRyeXBvaW50czogTWFwPFxuICAgIHN0cmluZyxcbiAgICBGdXR1cmU8Um91dGVFbnRyeXBvaW50PiB8IFJvdXRlRW50cnlwb2ludFxuICA+ID0gbmV3IE1hcCgpXG4gIGNvbnN0IGxvYWRlZFNjcmlwdHM6IE1hcDxzdHJpbmcsIFByb21pc2U8dW5rbm93bj4+ID0gbmV3IE1hcCgpXG4gIGNvbnN0IHN0eWxlU2hlZXRzOiBNYXA8c3RyaW5nLCBQcm9taXNlPFJvdXRlU3R5bGVTaGVldD4+ID0gbmV3IE1hcCgpXG4gIGNvbnN0IHJvdXRlczogTWFwPFxuICAgIHN0cmluZyxcbiAgICBGdXR1cmU8Um91dGVMb2FkZXJFbnRyeT4gfCBSb3V0ZUxvYWRlckVudHJ5XG4gID4gPSBuZXcgTWFwKClcblxuICBmdW5jdGlvbiBtYXliZUV4ZWN1dGVTY3JpcHQoc3JjOiBzdHJpbmcpOiBQcm9taXNlPHVua25vd24+IHtcbiAgICBsZXQgcHJvbTogUHJvbWlzZTx1bmtub3duPiB8IHVuZGVmaW5lZCA9IGxvYWRlZFNjcmlwdHMuZ2V0KHNyYylcbiAgICBpZiAocHJvbSkge1xuICAgICAgcmV0dXJuIHByb21cbiAgICB9XG5cbiAgICAvLyBTa2lwIGV4ZWN1dGluZyBzY3JpcHQgaWYgaXQncyBhbHJlYWR5IGluIHRoZSBET006XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYHNjcmlwdFtzcmNePVwiJHtzcmN9XCJdYCkpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKVxuICAgIH1cblxuICAgIGxvYWRlZFNjcmlwdHMuc2V0KHNyYywgKHByb20gPSBhcHBlbmRTY3JpcHQoc3JjKSkpXG4gICAgcmV0dXJuIHByb21cbiAgfVxuXG4gIGZ1bmN0aW9uIGZldGNoU3R5bGVTaGVldChocmVmOiBzdHJpbmcpOiBQcm9taXNlPFJvdXRlU3R5bGVTaGVldD4ge1xuICAgIGxldCBwcm9tOiBQcm9taXNlPFJvdXRlU3R5bGVTaGVldD4gfCB1bmRlZmluZWQgPSBzdHlsZVNoZWV0cy5nZXQoaHJlZilcbiAgICBpZiAocHJvbSkge1xuICAgICAgcmV0dXJuIHByb21cbiAgICB9XG5cbiAgICBzdHlsZVNoZWV0cy5zZXQoXG4gICAgICBocmVmLFxuICAgICAgKHByb20gPSBmZXRjaChocmVmKVxuICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgaWYgKCFyZXMub2spIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3R5bGVzaGVldDogJHtocmVmfWApXG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiByZXMudGV4dCgpLnRoZW4oKHRleHQpID0+ICh7IGhyZWY6IGhyZWYsIGNvbnRlbnQ6IHRleHQgfSkpXG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgdGhyb3cgbWFya0Fzc2V0RXJyb3IoZXJyKVxuICAgICAgICB9KSlcbiAgICApXG4gICAgcmV0dXJuIHByb21cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgd2hlbkVudHJ5cG9pbnQocm91dGU6IHN0cmluZykge1xuICAgICAgcmV0dXJuIHdpdGhGdXR1cmUocm91dGUsIGVudHJ5cG9pbnRzKVxuICAgIH0sXG4gICAgb25FbnRyeXBvaW50KHJvdXRlOiBzdHJpbmcsIGV4ZWN1dGU6ICgpID0+IHVua25vd24pIHtcbiAgICAgIFByb21pc2UucmVzb2x2ZShleGVjdXRlKVxuICAgICAgICAudGhlbigoZm4pID0+IGZuKCkpXG4gICAgICAgIC50aGVuKFxuICAgICAgICAgIChleHBvcnRzOiBhbnkpID0+ICh7XG4gICAgICAgICAgICBjb21wb25lbnQ6IChleHBvcnRzICYmIGV4cG9ydHMuZGVmYXVsdCkgfHwgZXhwb3J0cyxcbiAgICAgICAgICAgIGV4cG9ydHM6IGV4cG9ydHMsXG4gICAgICAgICAgfSksXG4gICAgICAgICAgKGVycikgPT4gKHsgZXJyb3I6IGVyciB9KVxuICAgICAgICApXG4gICAgICAgIC50aGVuKChpbnB1dDogUm91dGVFbnRyeXBvaW50KSA9PiB7XG4gICAgICAgICAgY29uc3Qgb2xkID0gZW50cnlwb2ludHMuZ2V0KHJvdXRlKVxuICAgICAgICAgIGVudHJ5cG9pbnRzLnNldChyb3V0ZSwgaW5wdXQpXG4gICAgICAgICAgaWYgKG9sZCAmJiAncmVzb2x2ZScgaW4gb2xkKSBvbGQucmVzb2x2ZShpbnB1dClcbiAgICAgICAgfSlcbiAgICB9LFxuICAgIGxvYWRSb3V0ZShyb3V0ZTogc3RyaW5nKSB7XG4gICAgICByZXR1cm4gd2l0aEZ1dHVyZTxSb3V0ZUxvYWRlckVudHJ5Pihyb3V0ZSwgcm91dGVzLCBhc3luYyAoKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QgeyBzY3JpcHRzLCBjc3MgfSA9IGF3YWl0IGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgsIHJvdXRlKVxuICAgICAgICAgIGNvbnN0IFssIHN0eWxlc10gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICBlbnRyeXBvaW50cy5oYXMocm91dGUpXG4gICAgICAgICAgICAgID8gW11cbiAgICAgICAgICAgICAgOiBQcm9taXNlLmFsbChzY3JpcHRzLm1hcChtYXliZUV4ZWN1dGVTY3JpcHQpKSxcbiAgICAgICAgICAgIFByb21pc2UuYWxsKGNzcy5tYXAoZmV0Y2hTdHlsZVNoZWV0KSksXG4gICAgICAgICAgXSBhcyBjb25zdClcblxuICAgICAgICAgIGNvbnN0IGVudHJ5cG9pbnQ6IFJvdXRlRW50cnlwb2ludCA9IGF3YWl0IFByb21pc2UucmFjZShbXG4gICAgICAgICAgICB0aGlzLndoZW5FbnRyeXBvaW50KHJvdXRlKSxcbiAgICAgICAgICAgIGlkbGVUaW1lb3V0PFJvdXRlTG9hZGVyRW50cnk+KFxuICAgICAgICAgICAgICBNU19NQVhfSURMRV9ERUxBWSxcbiAgICAgICAgICAgICAgbWFya0Fzc2V0RXJyb3IoXG4gICAgICAgICAgICAgICAgbmV3IEVycm9yKGBSb3V0ZSBkaWQgbm90IGNvbXBsZXRlIGxvYWRpbmc6ICR7cm91dGV9YClcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICBdKVxuICAgICAgICAgIGNvbnN0IHJlczogUm91dGVMb2FkZXJFbnRyeSA9IE9iamVjdC5hc3NpZ248XG4gICAgICAgICAgICB7IHN0eWxlczogUm91dGVTdHlsZVNoZWV0W10gfSxcbiAgICAgICAgICAgIFJvdXRlRW50cnlwb2ludFxuICAgICAgICAgID4oeyBzdHlsZXMgfSwgZW50cnlwb2ludClcbiAgICAgICAgICByZXR1cm4gJ2Vycm9yJyBpbiBlbnRyeXBvaW50ID8gZW50cnlwb2ludCA6IHJlc1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICByZXR1cm4geyBlcnJvcjogZXJyIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LFxuICAgIHByZWZldGNoKHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWVMYWJzL3F1aWNrbGluay9ibG9iLzQ1M2E2NjFmYTFmYTk0MGUyZDJlMDQ0NDUyMzk4ZTM4YzY3YTk4ZmIvc3JjL2luZGV4Lm1qcyNMMTE1LUwxMThcbiAgICAgIC8vIExpY2Vuc2U6IEFwYWNoZSAyLjBcbiAgICAgIGxldCBjblxuICAgICAgaWYgKChjbiA9IChuYXZpZ2F0b3IgYXMgYW55KS5jb25uZWN0aW9uKSkge1xuICAgICAgICAvLyBEb24ndCBwcmVmZXRjaCBpZiB1c2luZyAyRyBvciBpZiBTYXZlLURhdGEgaXMgZW5hYmxlZC5cbiAgICAgICAgaWYgKGNuLnNhdmVEYXRhIHx8IC8yZy8udGVzdChjbi5lZmZlY3RpdmVUeXBlKSkgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpXG4gICAgICB9XG4gICAgICByZXR1cm4gZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCwgcm91dGUpXG4gICAgICAgIC50aGVuKChvdXRwdXQpID0+XG4gICAgICAgICAgUHJvbWlzZS5hbGwoXG4gICAgICAgICAgICBjYW5QcmVmZXRjaFxuICAgICAgICAgICAgICA/IG91dHB1dC5zY3JpcHRzLm1hcCgoc2NyaXB0KSA9PiBwcmVmZXRjaFZpYURvbShzY3JpcHQsICdzY3JpcHQnKSlcbiAgICAgICAgICAgICAgOiBbXVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgcmVxdWVzdElkbGVDYWxsYmFjaygoKSA9PiB0aGlzLmxvYWRSb3V0ZShyb3V0ZSkpXG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChcbiAgICAgICAgICAvLyBzd2FsbG93IHByZWZldGNoIGVycm9yc1xuICAgICAgICAgICgpID0+IHt9XG4gICAgICAgIClcbiAgICB9LFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVJvdXRlTG9hZGVyXG4iLCIvKiBnbG9iYWwgd2luZG93ICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUm91dGVyLCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IFJvdXRlckNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQnXG5cbnR5cGUgQ2xhc3NBcmd1bWVudHM8VD4gPSBUIGV4dGVuZHMgbmV3ICguLi5hcmdzOiBpbmZlciBVKSA9PiBhbnkgPyBVIDogYW55XG5cbnR5cGUgUm91dGVyQXJncyA9IENsYXNzQXJndW1lbnRzPHR5cGVvZiBSb3V0ZXI+XG5cbnR5cGUgU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBSb3V0ZXIgfCBudWxsXG4gIHJlYWR5Q2FsbGJhY2tzOiBBcnJheTwoKSA9PiBhbnk+XG4gIHJlYWR5KGNiOiAoKSA9PiBhbnkpOiB2b2lkXG59XG5cbmV4cG9ydCB7IFJvdXRlciwgTmV4dFJvdXRlciB9XG5cbmV4cG9ydCB0eXBlIFNpbmdsZXRvblJvdXRlciA9IFNpbmdsZXRvblJvdXRlckJhc2UgJiBOZXh0Um91dGVyXG5cbmNvbnN0IHNpbmdsZXRvblJvdXRlcjogU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBudWxsLCAvLyBob2xkcyB0aGUgYWN0dWFsIHJvdXRlciBpbnN0YW5jZVxuICByZWFkeUNhbGxiYWNrczogW10sXG4gIHJlYWR5KGNiOiAoKSA9PiB2b2lkKSB7XG4gICAgaWYgKHRoaXMucm91dGVyKSByZXR1cm4gY2IoKVxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKVxuICAgIH1cbiAgfSxcbn1cblxuLy8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxuY29uc3QgdXJsUHJvcGVydHlGaWVsZHMgPSBbXG4gICdwYXRobmFtZScsXG4gICdyb3V0ZScsXG4gICdxdWVyeScsXG4gICdhc1BhdGgnLFxuICAnY29tcG9uZW50cycsXG4gICdpc0ZhbGxiYWNrJyxcbiAgJ2Jhc2VQYXRoJyxcbiAgJ2xvY2FsZScsXG4gICdsb2NhbGVzJyxcbiAgJ2RlZmF1bHRMb2NhbGUnLFxuICAnaXNSZWFkeScsXG5dXG5jb25zdCByb3V0ZXJFdmVudHMgPSBbXG4gICdyb3V0ZUNoYW5nZVN0YXJ0JyxcbiAgJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLFxuICAncm91dGVDaGFuZ2VDb21wbGV0ZScsXG4gICdyb3V0ZUNoYW5nZUVycm9yJyxcbiAgJ2hhc2hDaGFuZ2VTdGFydCcsXG4gICdoYXNoQ2hhbmdlQ29tcGxldGUnLFxuXVxuY29uc3QgY29yZU1ldGhvZEZpZWxkcyA9IFtcbiAgJ3B1c2gnLFxuICAncmVwbGFjZScsXG4gICdyZWxvYWQnLFxuICAnYmFjaycsXG4gICdwcmVmZXRjaCcsXG4gICdiZWZvcmVQb3BTdGF0ZScsXG5dXG5cbi8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsICdldmVudHMnLCB7XG4gIGdldCgpIHtcbiAgICByZXR1cm4gUm91dGVyLmV2ZW50c1xuICB9LFxufSlcblxudXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaCgoZmllbGQ6IHN0cmluZykgPT4ge1xuICAvLyBIZXJlIHdlIG5lZWQgdG8gdXNlIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBiZWNhdXNlLCB3ZSBuZWVkIHRvIHJldHVyblxuICAvLyB0aGUgcHJvcGVydHkgYXNzaWduZWQgdG8gdGhlIGFjdHVhbCByb3V0ZXJcbiAgLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4gIC8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsIGZpZWxkLCB7XG4gICAgZ2V0KCkge1xuICAgICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSBhcyBzdHJpbmdcbiAgICB9LFxuICB9KVxufSlcblxuY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZDogc3RyaW5nKSA9PiB7XG4gIC8vIFdlIGRvbid0IHJlYWxseSBrbm93IHRoZSB0eXBlcyBoZXJlLCBzbyB3ZSBhZGQgdGhlbSBsYXRlciBpbnN0ZWFkXG4gIDsoc2luZ2xldG9uUm91dGVyIGFzIGFueSlbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgcmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgfVxufSlcblxucm91dGVyRXZlbnRzLmZvckVhY2goKGV2ZW50OiBzdHJpbmcpID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5KCgpID0+IHtcbiAgICBSb3V0ZXIuZXZlbnRzLm9uKGV2ZW50LCAoLi4uYXJncykgPT4ge1xuICAgICAgY29uc3QgZXZlbnRGaWVsZCA9IGBvbiR7ZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHtldmVudC5zdWJzdHJpbmcoXG4gICAgICAgIDFcbiAgICAgICl9YFxuICAgICAgY29uc3QgX3NpbmdsZXRvblJvdXRlciA9IHNpbmdsZXRvblJvdXRlciBhcyBhbnlcbiAgICAgIGlmIChfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmdzKVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogJHtldmVudEZpZWxkfWApXG4gICAgICAgICAgY29uc29sZS5lcnJvcihgJHtlcnIubWVzc2FnZX1cXG4ke2Vyci5zdGFja31gKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfSlcbn0pXG5cbmZ1bmN0aW9uIGdldFJvdXRlcigpOiBSb3V0ZXIge1xuICBpZiAoIXNpbmdsZXRvblJvdXRlci5yb3V0ZXIpIHtcbiAgICBjb25zdCBtZXNzYWdlID1cbiAgICAgICdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJyArXG4gICAgICAnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgaW5zaWRlIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gRXhwb3J0IHRoZSBzaW5nbGV0b25Sb3V0ZXIgYW5kIHRoaXMgaXMgdGhlIHB1YmxpYyBBUEkuXG5leHBvcnQgZGVmYXVsdCBzaW5nbGV0b25Sb3V0ZXIgYXMgU2luZ2xldG9uUm91dGVyXG5cbi8vIFJlZXhwb3J0IHRoZSB3aXRoUm91dGUgSE9DXG5leHBvcnQgeyBkZWZhdWx0IGFzIHdpdGhSb3V0ZXIgfSBmcm9tICcuL3dpdGgtcm91dGVyJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlUm91dGVyKCk6IE5leHRSb3V0ZXIge1xuICByZXR1cm4gUmVhY3QudXNlQ29udGV4dChSb3V0ZXJDb250ZXh0KVxufVxuXG4vLyBJTlRFUk5BTCBBUElTXG4vLyAtLS0tLS0tLS0tLS0tXG4vLyAoZG8gbm90IHVzZSBmb2xsb3dpbmcgZXhwb3J0cyBpbnNpZGUgdGhlIGFwcClcblxuLy8gQ3JlYXRlIGEgcm91dGVyIGFuZCBhc3NpZ24gaXQgYXMgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZS5cbi8vIFRoaXMgaXMgdXNlZCBpbiBjbGllbnQgc2lkZSB3aGVuIHdlIGFyZSBpbml0aWxpemluZyB0aGUgYXBwLlxuLy8gVGhpcyBzaG91bGQgKipub3QqKiB1c2UgaW5zaWRlIHRoZSBzZXJ2ZXIuXG5leHBvcnQgY29uc3QgY3JlYXRlUm91dGVyID0gKC4uLmFyZ3M6IFJvdXRlckFyZ3MpOiBSb3V0ZXIgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucm91dGVyID0gbmV3IFJvdXRlciguLi5hcmdzKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MuZm9yRWFjaCgoY2IpID0+IGNiKCkpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcyA9IFtdXG5cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGNyZWF0ZSB0aGUgYHdpdGhSb3V0ZXJgIHJvdXRlciBpbnN0YW5jZVxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZShyb3V0ZXI6IFJvdXRlcik6IE5leHRSb3V0ZXIge1xuICBjb25zdCBfcm91dGVyID0gcm91dGVyIGFzIGFueVxuICBjb25zdCBpbnN0YW5jZSA9IHt9IGFzIGFueVxuXG4gIGZvciAoY29uc3QgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpIHtcbiAgICBpZiAodHlwZW9mIF9yb3V0ZXJbcHJvcGVydHldID09PSAnb2JqZWN0Jykge1xuICAgICAgaW5zdGFuY2VbcHJvcGVydHldID0gT2JqZWN0LmFzc2lnbihcbiAgICAgICAgQXJyYXkuaXNBcnJheShfcm91dGVyW3Byb3BlcnR5XSkgPyBbXSA6IHt9LFxuICAgICAgICBfcm91dGVyW3Byb3BlcnR5XVxuICAgICAgKSAvLyBtYWtlcyBzdXJlIHF1ZXJ5IGlzIG5vdCBzdGF0ZWZ1bFxuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBfcm91dGVyW3Byb3BlcnR5XVxuICB9XG5cbiAgLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuICBpbnN0YW5jZS5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgIGluc3RhbmNlW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgICAgcmV0dXJuIF9yb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiBpbnN0YW5jZVxufVxuIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHJlcXVlc3RJZGxlQ2FsbGJhY2sgZnJvbSAnLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2snXG5cbnR5cGUgVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0ID0gUGljazxJbnRlcnNlY3Rpb25PYnNlcnZlckluaXQsICdyb290TWFyZ2luJz5cbnR5cGUgVXNlSW50ZXJzZWN0aW9uID0geyBkaXNhYmxlZD86IGJvb2xlYW4gfSAmIFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdFxudHlwZSBPYnNlcnZlQ2FsbGJhY2sgPSAoaXNWaXNpYmxlOiBib29sZWFuKSA9PiB2b2lkXG50eXBlIE9ic2VydmVyID0ge1xuICBpZDogc3RyaW5nXG4gIG9ic2VydmVyOiBJbnRlcnNlY3Rpb25PYnNlcnZlclxuICBlbGVtZW50czogTWFwPEVsZW1lbnQsIE9ic2VydmVDYWxsYmFjaz5cbn1cblxuY29uc3QgaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPSB0eXBlb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgIT09ICd1bmRlZmluZWQnXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VJbnRlcnNlY3Rpb248VCBleHRlbmRzIEVsZW1lbnQ+KHtcbiAgcm9vdE1hcmdpbixcbiAgZGlzYWJsZWQsXG59OiBVc2VJbnRlcnNlY3Rpb24pOiBbKGVsZW1lbnQ6IFQgfCBudWxsKSA9PiB2b2lkLCBib29sZWFuXSB7XG4gIGNvbnN0IGlzRGlzYWJsZWQ6IGJvb2xlYW4gPSBkaXNhYmxlZCB8fCAhaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcblxuICBjb25zdCB1bm9ic2VydmUgPSB1c2VSZWY8RnVuY3Rpb24+KClcbiAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgY29uc3Qgc2V0UmVmID0gdXNlQ2FsbGJhY2soXG4gICAgKGVsOiBUIHwgbnVsbCkgPT4ge1xuICAgICAgaWYgKHVub2JzZXJ2ZS5jdXJyZW50KSB7XG4gICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50KClcbiAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQgPSB1bmRlZmluZWRcbiAgICAgIH1cblxuICAgICAgaWYgKGlzRGlzYWJsZWQgfHwgdmlzaWJsZSkgcmV0dXJuXG5cbiAgICAgIGlmIChlbCAmJiBlbC50YWdOYW1lKSB7XG4gICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gb2JzZXJ2ZShcbiAgICAgICAgICBlbCxcbiAgICAgICAgICAoaXNWaXNpYmxlKSA9PiBpc1Zpc2libGUgJiYgc2V0VmlzaWJsZShpc1Zpc2libGUpLFxuICAgICAgICAgIHsgcm9vdE1hcmdpbiB9XG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9LFxuICAgIFtpc0Rpc2FibGVkLCByb290TWFyZ2luLCB2aXNpYmxlXVxuICApXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgICBpZiAoIXZpc2libGUpIHJlcXVlc3RJZGxlQ2FsbGJhY2soKCkgPT4gc2V0VmlzaWJsZSh0cnVlKSlcbiAgICB9XG4gIH0sIFt2aXNpYmxlXSlcblxuICByZXR1cm4gW3NldFJlZiwgdmlzaWJsZV1cbn1cblxuZnVuY3Rpb24gb2JzZXJ2ZShcbiAgZWxlbWVudDogRWxlbWVudCxcbiAgY2FsbGJhY2s6IE9ic2VydmVDYWxsYmFjayxcbiAgb3B0aW9uczogVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0XG4pOiAoKSA9PiB2b2lkIHtcbiAgY29uc3QgeyBpZCwgb2JzZXJ2ZXIsIGVsZW1lbnRzIH0gPSBjcmVhdGVPYnNlcnZlcihvcHRpb25zKVxuICBlbGVtZW50cy5zZXQoZWxlbWVudCwgY2FsbGJhY2spXG5cbiAgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50KVxuICByZXR1cm4gZnVuY3Rpb24gdW5vYnNlcnZlKCk6IHZvaWQge1xuICAgIGVsZW1lbnRzLmRlbGV0ZShlbGVtZW50KVxuICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbGVtZW50KVxuXG4gICAgLy8gRGVzdHJveSBvYnNlcnZlciB3aGVuIHRoZXJlJ3Mgbm90aGluZyBsZWZ0IHRvIHdhdGNoOlxuICAgIGlmIChlbGVtZW50cy5zaXplID09PSAwKSB7XG4gICAgICBvYnNlcnZlci5kaXNjb25uZWN0KClcbiAgICAgIG9ic2VydmVycy5kZWxldGUoaWQpXG4gICAgfVxuICB9XG59XG5cbmNvbnN0IG9ic2VydmVycyA9IG5ldyBNYXA8c3RyaW5nLCBPYnNlcnZlcj4oKVxuZnVuY3Rpb24gY3JlYXRlT2JzZXJ2ZXIob3B0aW9uczogVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0KTogT2JzZXJ2ZXIge1xuICBjb25zdCBpZCA9IG9wdGlvbnMucm9vdE1hcmdpbiB8fCAnJ1xuICBsZXQgaW5zdGFuY2UgPSBvYnNlcnZlcnMuZ2V0KGlkKVxuICBpZiAoaW5zdGFuY2UpIHtcbiAgICByZXR1cm4gaW5zdGFuY2VcbiAgfVxuXG4gIGNvbnN0IGVsZW1lbnRzID0gbmV3IE1hcDxFbGVtZW50LCBPYnNlcnZlQ2FsbGJhY2s+KClcbiAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcbiAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICBjb25zdCBjYWxsYmFjayA9IGVsZW1lbnRzLmdldChlbnRyeS50YXJnZXQpXG4gICAgICBjb25zdCBpc1Zpc2libGUgPSBlbnRyeS5pc0ludGVyc2VjdGluZyB8fCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDBcbiAgICAgIGlmIChjYWxsYmFjayAmJiBpc1Zpc2libGUpIHtcbiAgICAgICAgY2FsbGJhY2soaXNWaXNpYmxlKVxuICAgICAgfVxuICAgIH0pXG4gIH0sIG9wdGlvbnMpXG5cbiAgb2JzZXJ2ZXJzLnNldChcbiAgICBpZCxcbiAgICAoaW5zdGFuY2UgPSB7XG4gICAgICBpZCxcbiAgICAgIG9ic2VydmVyLFxuICAgICAgZWxlbWVudHMsXG4gICAgfSlcbiAgKVxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE5leHRDb21wb25lbnRUeXBlLCBOZXh0UGFnZUNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyLCB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxuZXhwb3J0IHR5cGUgV2l0aFJvdXRlclByb3BzID0ge1xuICByb3V0ZXI6IE5leHRSb3V0ZXJcbn1cblxuZXhwb3J0IHR5cGUgRXhjbHVkZVJvdXRlclByb3BzPFA+ID0gUGljazxcbiAgUCxcbiAgRXhjbHVkZTxrZXlvZiBQLCBrZXlvZiBXaXRoUm91dGVyUHJvcHM+XG4+XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhSb3V0ZXI8XG4gIFAgZXh0ZW5kcyBXaXRoUm91dGVyUHJvcHMsXG4gIEMgPSBOZXh0UGFnZUNvbnRleHRcbj4oXG4gIENvbXBvc2VkQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxDLCBhbnksIFA+XG4pOiBSZWFjdC5Db21wb25lbnRUeXBlPEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPj4ge1xuICBmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wczogYW55KTogSlNYLkVsZW1lbnQge1xuICAgIHJldHVybiA8Q29tcG9zZWRDb21wb25lbnQgcm91dGVyPXt1c2VSb3V0ZXIoKX0gey4uLnByb3BzfSAvPlxuICB9XG5cbiAgV2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzID0gQ29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzXG4gIC8vIFRoaXMgaXMgbmVlZGVkIHRvIGFsbG93IGNoZWNraW5nIGZvciBjdXN0b20gZ2V0SW5pdGlhbFByb3BzIGluIF9hcHBcbiAgOyhXaXRoUm91dGVyV3JhcHBlciBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHMgPSAoQ29tcG9zZWRDb21wb25lbnQgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uc3QgbmFtZSA9XG4gICAgICBDb21wb3NlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb3NlZENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xuICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lID0gYHdpdGhSb3V0ZXIoJHtuYW1lfSlgXG4gIH1cblxuICByZXR1cm4gV2l0aFJvdXRlcldyYXBwZXJcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVMb2NhbGVQYXRoKFxuICBwYXRobmFtZTogc3RyaW5nLFxuICBsb2NhbGVzPzogc3RyaW5nW11cbik6IHtcbiAgZGV0ZWN0ZWRMb2NhbGU/OiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xufSB7XG4gIGxldCBkZXRlY3RlZExvY2FsZTogc3RyaW5nIHwgdW5kZWZpbmVkXG4gIC8vIGZpcnN0IGl0ZW0gd2lsbCBiZSBlbXB0eSBzdHJpbmcgZnJvbSBzcGxpdHRpbmcgYXQgZmlyc3QgY2hhclxuICBjb25zdCBwYXRobmFtZVBhcnRzID0gcGF0aG5hbWUuc3BsaXQoJy8nKVxuXG4gIDsobG9jYWxlcyB8fCBbXSkuc29tZSgobG9jYWxlKSA9PiB7XG4gICAgaWYgKHBhdGhuYW1lUGFydHNbMV0udG9Mb3dlckNhc2UoKSA9PT0gbG9jYWxlLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgIGRldGVjdGVkTG9jYWxlID0gbG9jYWxlXG4gICAgICBwYXRobmFtZVBhcnRzLnNwbGljZSgxLCAxKVxuICAgICAgcGF0aG5hbWUgPSBwYXRobmFtZVBhcnRzLmpvaW4oJy8nKSB8fCAnLydcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxuICB9KVxuXG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWUsXG4gICAgZGV0ZWN0ZWRMb2NhbGUsXG4gIH1cbn1cbiIsIi8qXG5NSVQgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIEphc29uIE1pbGxlciAoaHR0cHM6Ly9qYXNvbmZvcm1hdC5jb20vKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuXG4vLyBUaGlzIGZpbGUgaXMgYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2RldmVsb3BpdC9taXR0L2Jsb2IvdjEuMS4zL3NyYy9pbmRleC5qc1xuLy8gSXQncyBiZWVuIGVkaXRlZCBmb3IgdGhlIG5lZWRzIG9mIHRoaXMgc2NyaXB0XG4vLyBTZWUgdGhlIExJQ0VOU0UgYXQgdGhlIHRvcCBvZiB0aGUgZmlsZVxuXG50eXBlIEhhbmRsZXIgPSAoLi4uZXZ0czogYW55W10pID0+IHZvaWRcblxuZXhwb3J0IHR5cGUgTWl0dEVtaXR0ZXIgPSB7XG4gIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKTogdm9pZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaXR0KCk6IE1pdHRFbWl0dGVyIHtcbiAgY29uc3QgYWxsOiB7IFtzOiBzdHJpbmddOiBIYW5kbGVyW10gfSA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuICByZXR1cm4ge1xuICAgIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgOyhhbGxbdHlwZV0gfHwgKGFsbFt0eXBlXSA9IFtdKSkucHVzaChoYW5kbGVyKVxuICAgIH0sXG5cbiAgICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICBpZiAoYWxsW3R5cGVdKSB7XG4gICAgICAgIGFsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcikgPj4+IDAsIDEpXG4gICAgICB9XG4gICAgfSxcblxuICAgIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgOyhhbGxbdHlwZV0gfHwgW10pLnNsaWNlKCkubWFwKChoYW5kbGVyOiBIYW5kbGVyKSA9PiB7XG4gICAgICAgIGhhbmRsZXIoLi4uZXZ0cylcbiAgICAgIH0pXG4gICAgfSxcbiAgfVxufVxuIiwiLyogZ2xvYmFsIF9fTkVYVF9EQVRBX18gKi9cbi8vIHRzbGludDpkaXNhYmxlOm5vLWNvbnNvbGVcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCxcbiAgcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gsXG59IGZyb20gJy4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gnXG5pbXBvcnQgeyBHb29kUGFnZUNhY2hlLCBTdHlsZVNoZWV0VHVwbGUgfSBmcm9tICcuLi8uLi8uLi9jbGllbnQvcGFnZS1sb2FkZXInXG5pbXBvcnQge1xuICBnZXRDbGllbnRCdWlsZE1hbmlmZXN0LFxuICBpc0Fzc2V0RXJyb3IsXG4gIG1hcmtBc3NldEVycm9yLFxufSBmcm9tICcuLi8uLi8uLi9jbGllbnQvcm91dGUtbG9hZGVyJ1xuaW1wb3J0IHsgRG9tYWluTG9jYWxlcyB9IGZyb20gJy4uLy4uL3NlcnZlci9jb25maWcnXG5pbXBvcnQgeyBkZW5vcm1hbGl6ZVBhZ2VQYXRoIH0gZnJvbSAnLi4vLi4vc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aCdcbmltcG9ydCB7IG5vcm1hbGl6ZUxvY2FsZVBhdGggfSBmcm9tICcuLi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aCdcbmltcG9ydCBtaXR0LCB7IE1pdHRFbWl0dGVyIH0gZnJvbSAnLi4vbWl0dCdcbmltcG9ydCB7XG4gIEFwcENvbnRleHRUeXBlLFxuICBmb3JtYXRXaXRoVmFsaWRhdGlvbixcbiAgZ2V0TG9jYXRpb25PcmlnaW4sXG4gIGdldFVSTCxcbiAgbG9hZEdldEluaXRpYWxQcm9wcyxcbiAgTmV4dFBhZ2VDb250ZXh0LFxuICBTVCxcbiAgTkVYVF9EQVRBLFxufSBmcm9tICcuLi91dGlscydcbmltcG9ydCB7IGlzRHluYW1pY1JvdXRlIH0gZnJvbSAnLi91dGlscy9pcy1keW5hbWljJ1xuaW1wb3J0IHsgcGFyc2VSZWxhdGl2ZVVybCB9IGZyb20gJy4vdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vdXRpbHMvcXVlcnlzdHJpbmcnXG5pbXBvcnQgcmVzb2x2ZVJld3JpdGVzIGZyb20gJy4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcydcbmltcG9ydCB7IGdldFJvdXRlTWF0Y2hlciB9IGZyb20gJy4vdXRpbHMvcm91dGUtbWF0Y2hlcidcbmltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3V0aWxzL3JvdXRlLXJlZ2V4J1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIC8qIHByb2QgKi9cbiAgICBfX05FWFRfREFUQV9fOiBORVhUX0RBVEFcbiAgfVxufVxuXG5pbnRlcmZhY2UgUm91dGVQcm9wZXJ0aWVzIHtcbiAgc2hhbGxvdzogYm9vbGVhblxufVxuXG5pbnRlcmZhY2UgVHJhbnNpdGlvbk9wdGlvbnMge1xuICBzaGFsbG93PzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxuICBzY3JvbGw/OiBib29sZWFuXG59XG5cbmludGVyZmFjZSBOZXh0SGlzdG9yeVN0YXRlIHtcbiAgdXJsOiBzdHJpbmdcbiAgYXM6IHN0cmluZ1xuICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9uc1xufVxuXG50eXBlIEhpc3RvcnlTdGF0ZSA9XG4gIHwgbnVsbFxuICB8IHsgX19OOiBmYWxzZSB9XG4gIHwgKHsgX19OOiB0cnVlOyBpZHg6IG51bWJlciB9ICYgTmV4dEhpc3RvcnlTdGF0ZSlcblxubGV0IGRldGVjdERvbWFpbkxvY2FsZTogdHlwZW9mIGltcG9ydCgnLi4vaTE4bi9kZXRlY3QtZG9tYWluLWxvY2FsZScpLmRldGVjdERvbWFpbkxvY2FsZVxuXG5pZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICBkZXRlY3REb21haW5Mb2NhbGUgPSByZXF1aXJlKCcuLi9pMThuL2RldGVjdC1kb21haW4tbG9jYWxlJylcbiAgICAuZGV0ZWN0RG9tYWluTG9jYWxlXG59XG5cbmNvbnN0IGJhc2VQYXRoID0gKHByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEggYXMgc3RyaW5nKSB8fCAnJ1xuXG5mdW5jdGlvbiBidWlsZENhbmNlbGxhdGlvbkVycm9yKCkge1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpLCB7XG4gICAgY2FuY2VsbGVkOiB0cnVlLFxuICB9KVxufVxuXG5mdW5jdGlvbiBhZGRQYXRoUHJlZml4KHBhdGg6IHN0cmluZywgcHJlZml4Pzogc3RyaW5nKSB7XG4gIHJldHVybiBwcmVmaXggJiYgcGF0aC5zdGFydHNXaXRoKCcvJylcbiAgICA/IHBhdGggPT09ICcvJ1xuICAgICAgPyBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChwcmVmaXgpXG4gICAgICA6IGAke3ByZWZpeH0ke3BhdGhOb1F1ZXJ5SGFzaChwYXRoKSA9PT0gJy8nID8gcGF0aC5zdWJzdHJpbmcoMSkgOiBwYXRofWBcbiAgICA6IHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERvbWFpbkxvY2FsZShcbiAgcGF0aDogc3RyaW5nLFxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZSxcbiAgbG9jYWxlcz86IHN0cmluZ1tdLFxuICBkb21haW5Mb2NhbGVzPzogRG9tYWluTG9jYWxlc1xuKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgbG9jYWxlID0gbG9jYWxlIHx8IG5vcm1hbGl6ZUxvY2FsZVBhdGgocGF0aCwgbG9jYWxlcykuZGV0ZWN0ZWRMb2NhbGVcblxuICAgIGNvbnN0IGRldGVjdGVkRG9tYWluID0gZGV0ZWN0RG9tYWluTG9jYWxlKGRvbWFpbkxvY2FsZXMsIHVuZGVmaW5lZCwgbG9jYWxlKVxuXG4gICAgaWYgKGRldGVjdGVkRG9tYWluKSB7XG4gICAgICByZXR1cm4gYGh0dHAke2RldGVjdGVkRG9tYWluLmh0dHAgPyAnJyA6ICdzJ306Ly8ke2RldGVjdGVkRG9tYWluLmRvbWFpbn0ke1xuICAgICAgICBiYXNlUGF0aCB8fCAnJ1xuICAgICAgfSR7bG9jYWxlID09PSBkZXRlY3RlZERvbWFpbi5kZWZhdWx0TG9jYWxlID8gJycgOiBgLyR7bG9jYWxlfWB9JHtwYXRofWBcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICByZXR1cm4gZmFsc2Vcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZExvY2FsZShcbiAgcGF0aDogc3RyaW5nLFxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZSxcbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgcmV0dXJuIGxvY2FsZSAmJlxuICAgICAgbG9jYWxlICE9PSBkZWZhdWx0TG9jYWxlICYmXG4gICAgICAhcGF0aC5zdGFydHNXaXRoKCcvJyArIGxvY2FsZSArICcvJykgJiZcbiAgICAgIHBhdGggIT09ICcvJyArIGxvY2FsZVxuICAgICAgPyBhZGRQYXRoUHJlZml4KHBhdGgsICcvJyArIGxvY2FsZSlcbiAgICAgIDogcGF0aFxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxMb2NhbGUocGF0aDogc3RyaW5nLCBsb2NhbGU/OiBzdHJpbmcpIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICByZXR1cm4gbG9jYWxlICYmXG4gICAgICAocGF0aC5zdGFydHNXaXRoKCcvJyArIGxvY2FsZSArICcvJykgfHwgcGF0aCA9PT0gJy8nICsgbG9jYWxlKVxuICAgICAgPyBwYXRoLnN1YnN0cihsb2NhbGUubGVuZ3RoICsgMSkgfHwgJy8nXG4gICAgICA6IHBhdGhcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5mdW5jdGlvbiBwYXRoTm9RdWVyeUhhc2gocGF0aDogc3RyaW5nKSB7XG4gIGNvbnN0IHF1ZXJ5SW5kZXggPSBwYXRoLmluZGV4T2YoJz8nKVxuICBjb25zdCBoYXNoSW5kZXggPSBwYXRoLmluZGV4T2YoJyMnKVxuXG4gIGlmIChxdWVyeUluZGV4ID4gLTEgfHwgaGFzaEluZGV4ID4gLTEpIHtcbiAgICBwYXRoID0gcGF0aC5zdWJzdHJpbmcoMCwgcXVlcnlJbmRleCA+IC0xID8gcXVlcnlJbmRleCA6IGhhc2hJbmRleClcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFzQmFzZVBhdGgocGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHBhdGggPSBwYXRoTm9RdWVyeUhhc2gocGF0aClcbiAgcmV0dXJuIHBhdGggPT09IGJhc2VQYXRoIHx8IHBhdGguc3RhcnRzV2l0aChiYXNlUGF0aCArICcvJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIC8vIHdlIG9ubHkgYWRkIHRoZSBiYXNlcGF0aCBvbiByZWxhdGl2ZSB1cmxzXG4gIHJldHVybiBhZGRQYXRoUHJlZml4KHBhdGgsIGJhc2VQYXRoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcGF0aCA9IHBhdGguc2xpY2UoYmFzZVBhdGgubGVuZ3RoKVxuICBpZiAoIXBhdGguc3RhcnRzV2l0aCgnLycpKSBwYXRoID0gYC8ke3BhdGh9YFxuICByZXR1cm4gcGF0aFxufVxuXG4vKipcbiAqIERldGVjdHMgd2hldGhlciBhIGdpdmVuIHVybCBpcyByb3V0YWJsZSBieSB0aGUgTmV4dC5qcyByb3V0ZXIgKGJyb3dzZXIgb25seSkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0xvY2FsVVJMKHVybDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIC8vIHByZXZlbnQgYSBoeWRyYXRpb24gbWlzbWF0Y2ggb24gaHJlZiBmb3IgdXJsIHdpdGggYW5jaG9yIHJlZnNcbiAgaWYgKHVybC5zdGFydHNXaXRoKCcvJykgfHwgdXJsLnN0YXJ0c1dpdGgoJyMnKSkgcmV0dXJuIHRydWVcbiAgdHJ5IHtcbiAgICAvLyBhYnNvbHV0ZSB1cmxzIGNhbiBiZSBsb2NhbCBpZiB0aGV5IGFyZSBvbiB0aGUgc2FtZSBvcmlnaW5cbiAgICBjb25zdCBsb2NhdGlvbk9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgICBjb25zdCByZXNvbHZlZCA9IG5ldyBVUkwodXJsLCBsb2NhdGlvbk9yaWdpbilcbiAgICByZXR1cm4gcmVzb2x2ZWQub3JpZ2luID09PSBsb2NhdGlvbk9yaWdpbiAmJiBoYXNCYXNlUGF0aChyZXNvbHZlZC5wYXRobmFtZSlcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbnR5cGUgVXJsID0gVXJsT2JqZWN0IHwgc3RyaW5nXG5cbmV4cG9ydCBmdW5jdGlvbiBpbnRlcnBvbGF0ZUFzKFxuICByb3V0ZTogc3RyaW5nLFxuICBhc1BhdGhuYW1lOiBzdHJpbmcsXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuKSB7XG4gIGxldCBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnXG5cbiAgY29uc3QgZHluYW1pY1JlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgY29uc3QgZHluYW1pY0dyb3VwcyA9IGR5bmFtaWNSZWdleC5ncm91cHNcbiAgY29uc3QgZHluYW1pY01hdGNoZXMgPVxuICAgIC8vIFRyeSB0byBtYXRjaCB0aGUgZHluYW1pYyByb3V0ZSBhZ2FpbnN0IHRoZSBhc1BhdGhcbiAgICAoYXNQYXRobmFtZSAhPT0gcm91dGUgPyBnZXRSb3V0ZU1hdGNoZXIoZHluYW1pY1JlZ2V4KShhc1BhdGhuYW1lKSA6ICcnKSB8fFxuICAgIC8vIEZhbGwgYmFjayB0byByZWFkaW5nIHRoZSB2YWx1ZXMgZnJvbSB0aGUgaHJlZlxuICAgIC8vIFRPRE86IHNob3VsZCB0aGlzIHRha2UgcHJpb3JpdHk7IGFsc28gbmVlZCB0byBjaGFuZ2UgaW4gdGhlIHJvdXRlci5cbiAgICBxdWVyeVxuXG4gIGludGVycG9sYXRlZFJvdXRlID0gcm91dGVcbiAgY29uc3QgcGFyYW1zID0gT2JqZWN0LmtleXMoZHluYW1pY0dyb3VwcylcblxuICBpZiAoXG4gICAgIXBhcmFtcy5ldmVyeSgocGFyYW0pID0+IHtcbiAgICAgIGxldCB2YWx1ZSA9IGR5bmFtaWNNYXRjaGVzW3BhcmFtXSB8fCAnJ1xuICAgICAgY29uc3QgeyByZXBlYXQsIG9wdGlvbmFsIH0gPSBkeW5hbWljR3JvdXBzW3BhcmFtXVxuXG4gICAgICAvLyBzdXBwb3J0IHNpbmdsZS1sZXZlbCBjYXRjaC1hbGxcbiAgICAgIC8vIFRPRE86IG1vcmUgcm9idXN0IGhhbmRsaW5nIGZvciB1c2VyLWVycm9yIChwYXNzaW5nIGAvYClcbiAgICAgIGxldCByZXBsYWNlZCA9IGBbJHtyZXBlYXQgPyAnLi4uJyA6ICcnfSR7cGFyYW19XWBcbiAgICAgIGlmIChvcHRpb25hbCkge1xuICAgICAgICByZXBsYWNlZCA9IGAkeyF2YWx1ZSA/ICcvJyA6ICcnfVske3JlcGxhY2VkfV1gXG4gICAgICB9XG4gICAgICBpZiAocmVwZWF0ICYmICFBcnJheS5pc0FycmF5KHZhbHVlKSkgdmFsdWUgPSBbdmFsdWVdXG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIChvcHRpb25hbCB8fCBwYXJhbSBpbiBkeW5hbWljTWF0Y2hlcykgJiZcbiAgICAgICAgLy8gSW50ZXJwb2xhdGUgZ3JvdXAgaW50byBkYXRhIFVSTCBpZiBwcmVzZW50XG4gICAgICAgIChpbnRlcnBvbGF0ZWRSb3V0ZSA9XG4gICAgICAgICAgaW50ZXJwb2xhdGVkUm91dGUhLnJlcGxhY2UoXG4gICAgICAgICAgICByZXBsYWNlZCxcbiAgICAgICAgICAgIHJlcGVhdFxuICAgICAgICAgICAgICA/ICh2YWx1ZSBhcyBzdHJpbmdbXSlcbiAgICAgICAgICAgICAgICAgIC5tYXAoXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoZXNlIHZhbHVlcyBzaG91bGQgYmUgZnVsbHkgZW5jb2RlZCBpbnN0ZWFkIG9mIGp1c3RcbiAgICAgICAgICAgICAgICAgICAgLy8gcGF0aCBkZWxpbWl0ZXIgZXNjYXBlZCBzaW5jZSB0aGV5IGFyZSBiZWluZyBpbnNlcnRlZFxuICAgICAgICAgICAgICAgICAgICAvLyBpbnRvIHRoZSBVUkwgYW5kIHdlIGV4cGVjdCBVUkwgZW5jb2RlZCBzZWdtZW50c1xuICAgICAgICAgICAgICAgICAgICAvLyB3aGVuIHBhcnNpbmcgZHluYW1pYyByb3V0ZSBwYXJhbXNcbiAgICAgICAgICAgICAgICAgICAgKHNlZ21lbnQpID0+IGVuY29kZVVSSUNvbXBvbmVudChzZWdtZW50KVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgLmpvaW4oJy8nKVxuICAgICAgICAgICAgICA6IGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSBhcyBzdHJpbmcpXG4gICAgICAgICAgKSB8fCAnLycpXG4gICAgICApXG4gICAgfSlcbiAgKSB7XG4gICAgaW50ZXJwb2xhdGVkUm91dGUgPSAnJyAvLyBkaWQgbm90IHNhdGlzZnkgYWxsIHJlcXVpcmVtZW50c1xuXG4gICAgLy8gbi5iLiBXZSBpZ25vcmUgdGhpcyBlcnJvciBiZWNhdXNlIHdlIGhhbmRsZSB3YXJuaW5nIGZvciB0aGlzIGNhc2UgaW5cbiAgICAvLyBkZXZlbG9wbWVudCBpbiB0aGUgYDxMaW5rPmAgY29tcG9uZW50IGRpcmVjdGx5LlxuICB9XG4gIHJldHVybiB7XG4gICAgcGFyYW1zLFxuICAgIHJlc3VsdDogaW50ZXJwb2xhdGVkUm91dGUsXG4gIH1cbn1cblxuZnVuY3Rpb24gb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSwgcGFyYW1zOiBzdHJpbmdbXSkge1xuICBjb25zdCBmaWx0ZXJlZFF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG5cbiAgT2JqZWN0LmtleXMocXVlcnkpLmZvckVhY2goKGtleSkgPT4ge1xuICAgIGlmICghcGFyYW1zLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgIGZpbHRlcmVkUXVlcnlba2V5XSA9IHF1ZXJ5W2tleV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBmaWx0ZXJlZFF1ZXJ5XG59XG5cbi8qKlxuICogUmVzb2x2ZXMgYSBnaXZlbiBoeXBlcmxpbmsgd2l0aCBhIGNlcnRhaW4gcm91dGVyIHN0YXRlIChiYXNlUGF0aCBub3QgaW5jbHVkZWQpLlxuICogUHJlc2VydmVzIGFic29sdXRlIHVybHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlSHJlZihcbiAgY3VycmVudFBhdGg6IHN0cmluZyxcbiAgaHJlZjogVXJsLFxuICByZXNvbHZlQXM/OiBib29sZWFuXG4pOiBzdHJpbmcge1xuICAvLyB3ZSB1c2UgYSBkdW1teSBiYXNlIHVybCBmb3IgcmVsYXRpdmUgdXJsc1xuICBjb25zdCBiYXNlID0gbmV3IFVSTChjdXJyZW50UGF0aCwgJ2h0dHA6Ly9uJylcbiAgY29uc3QgdXJsQXNTdHJpbmcgPVxuICAgIHR5cGVvZiBocmVmID09PSAnc3RyaW5nJyA/IGhyZWYgOiBmb3JtYXRXaXRoVmFsaWRhdGlvbihocmVmKVxuICAvLyBSZXR1cm4gYmVjYXVzZSBpdCBjYW5ub3QgYmUgcm91dGVkIGJ5IHRoZSBOZXh0LmpzIHJvdXRlclxuICBpZiAoIWlzTG9jYWxVUkwodXJsQXNTdHJpbmcpKSB7XG4gICAgcmV0dXJuIChyZXNvbHZlQXMgPyBbdXJsQXNTdHJpbmddIDogdXJsQXNTdHJpbmcpIGFzIHN0cmluZ1xuICB9XG4gIHRyeSB7XG4gICAgY29uc3QgZmluYWxVcmwgPSBuZXcgVVJMKHVybEFzU3RyaW5nLCBiYXNlKVxuICAgIGZpbmFsVXJsLnBhdGhuYW1lID0gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2goZmluYWxVcmwucGF0aG5hbWUpXG4gICAgbGV0IGludGVycG9sYXRlZEFzID0gJydcblxuICAgIGlmIChcbiAgICAgIGlzRHluYW1pY1JvdXRlKGZpbmFsVXJsLnBhdGhuYW1lKSAmJlxuICAgICAgZmluYWxVcmwuc2VhcmNoUGFyYW1zICYmXG4gICAgICByZXNvbHZlQXNcbiAgICApIHtcbiAgICAgIGNvbnN0IHF1ZXJ5ID0gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShmaW5hbFVybC5zZWFyY2hQYXJhbXMpXG5cbiAgICAgIGNvbnN0IHsgcmVzdWx0LCBwYXJhbXMgfSA9IGludGVycG9sYXRlQXMoXG4gICAgICAgIGZpbmFsVXJsLnBhdGhuYW1lLFxuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSxcbiAgICAgICAgcXVlcnlcbiAgICAgIClcblxuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICBpbnRlcnBvbGF0ZWRBcyA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICBwYXRobmFtZTogcmVzdWx0LFxuICAgICAgICAgIGhhc2g6IGZpbmFsVXJsLmhhc2gsXG4gICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgcGFyYW1zKSxcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBpZiB0aGUgb3JpZ2luIGRpZG4ndCBjaGFuZ2UsIGl0IG1lYW5zIHdlIHJlY2VpdmVkIGEgcmVsYXRpdmUgaHJlZlxuICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9XG4gICAgICBmaW5hbFVybC5vcmlnaW4gPT09IGJhc2Uub3JpZ2luXG4gICAgICAgID8gZmluYWxVcmwuaHJlZi5zbGljZShmaW5hbFVybC5vcmlnaW4ubGVuZ3RoKVxuICAgICAgICA6IGZpbmFsVXJsLmhyZWZcblxuICAgIHJldHVybiAocmVzb2x2ZUFzXG4gICAgICA/IFtyZXNvbHZlZEhyZWYsIGludGVycG9sYXRlZEFzIHx8IHJlc29sdmVkSHJlZl1cbiAgICAgIDogcmVzb2x2ZWRIcmVmKSBhcyBzdHJpbmdcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiAocmVzb2x2ZUFzID8gW3VybEFzU3RyaW5nXSA6IHVybEFzU3RyaW5nKSBhcyBzdHJpbmdcbiAgfVxufVxuXG5mdW5jdGlvbiBzdHJpcE9yaWdpbih1cmw6IHN0cmluZykge1xuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG5cbiAgcmV0dXJuIHVybC5zdGFydHNXaXRoKG9yaWdpbikgPyB1cmwuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpIDogdXJsXG59XG5cbmZ1bmN0aW9uIHByZXBhcmVVcmxBcyhyb3V0ZXI6IE5leHRSb3V0ZXIsIHVybDogVXJsLCBhcz86IFVybCkge1xuICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgLy8gd2UnbGwgZm9ybWF0IHRoZW0gaW50byB0aGUgc3RyaW5nIHZlcnNpb24gaGVyZS5cbiAgbGV0IFtyZXNvbHZlZEhyZWYsIHJlc29sdmVkQXNdID0gcmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCB1cmwsIHRydWUpXG4gIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgY29uc3QgaHJlZkhhZE9yaWdpbiA9IHJlc29sdmVkSHJlZi5zdGFydHNXaXRoKG9yaWdpbilcbiAgY29uc3QgYXNIYWRPcmlnaW4gPSByZXNvbHZlZEFzICYmIHJlc29sdmVkQXMuc3RhcnRzV2l0aChvcmlnaW4pXG5cbiAgcmVzb2x2ZWRIcmVmID0gc3RyaXBPcmlnaW4ocmVzb2x2ZWRIcmVmKVxuICByZXNvbHZlZEFzID0gcmVzb2x2ZWRBcyA/IHN0cmlwT3JpZ2luKHJlc29sdmVkQXMpIDogcmVzb2x2ZWRBc1xuXG4gIGNvbnN0IHByZXBhcmVkVXJsID0gaHJlZkhhZE9yaWdpbiA/IHJlc29sdmVkSHJlZiA6IGFkZEJhc2VQYXRoKHJlc29sdmVkSHJlZilcbiAgY29uc3QgcHJlcGFyZWRBcyA9IGFzXG4gICAgPyBzdHJpcE9yaWdpbihyZXNvbHZlSHJlZihyb3V0ZXIucGF0aG5hbWUsIGFzKSlcbiAgICA6IHJlc29sdmVkQXMgfHwgcmVzb2x2ZWRIcmVmXG5cbiAgcmV0dXJuIHtcbiAgICB1cmw6IHByZXBhcmVkVXJsLFxuICAgIGFzOiBhc0hhZE9yaWdpbiA/IHByZXBhcmVkQXMgOiBhZGRCYXNlUGF0aChwcmVwYXJlZEFzKSxcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBCYXNlUm91dGVyID0ge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gIGRvbWFpbkxvY2FsZXM/OiBEb21haW5Mb2NhbGVzXG59XG5cbmV4cG9ydCB0eXBlIE5leHRSb3V0ZXIgPSBCYXNlUm91dGVyICZcbiAgUGljazxcbiAgICBSb3V0ZXIsXG4gICAgfCAncHVzaCdcbiAgICB8ICdyZXBsYWNlJ1xuICAgIHwgJ3JlbG9hZCdcbiAgICB8ICdiYWNrJ1xuICAgIHwgJ3ByZWZldGNoJ1xuICAgIHwgJ2JlZm9yZVBvcFN0YXRlJ1xuICAgIHwgJ2V2ZW50cydcbiAgICB8ICdpc0ZhbGxiYWNrJ1xuICAgIHwgJ2lzUmVhZHknXG4gID5cblxuZXhwb3J0IHR5cGUgUHJlZmV0Y2hPcHRpb25zID0ge1xuICBwcmlvcml0eT86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2Vcbn1cblxuZXhwb3J0IHR5cGUgUHJpdmF0ZVJvdXRlSW5mbyA9XG4gIHwgKE9taXQ8Q29tcGxldGVQcml2YXRlUm91dGVJbmZvLCAnc3R5bGVTaGVldHMnPiAmIHsgaW5pdGlhbDogdHJ1ZSB9KVxuICB8IENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mb1xuXG5leHBvcnQgdHlwZSBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8gPSB7XG4gIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICBzdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbiAgcHJvcHM/OiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIGVycj86IEVycm9yXG4gIGVycm9yPzogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzID0gUGljazxDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8sICdDb21wb25lbnQnIHwgJ2Vycic+ICYge1xuICByb3V0ZXI6IFJvdXRlclxufSAmIFJlY29yZDxzdHJpbmcsIGFueT5cbmV4cG9ydCB0eXBlIEFwcENvbXBvbmVudCA9IENvbXBvbmVudFR5cGU8QXBwUHJvcHM+XG5cbnR5cGUgU3Vic2NyaXB0aW9uID0gKFxuICBkYXRhOiBQcml2YXRlUm91dGVJbmZvLFxuICBBcHA6IEFwcENvbXBvbmVudCxcbiAgcmVzZXRTY3JvbGw6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB8IG51bGxcbikgPT4gUHJvbWlzZTx2b2lkPlxuXG50eXBlIEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgPSAoc3RhdGU6IE5leHRIaXN0b3J5U3RhdGUpID0+IGJvb2xlYW5cblxudHlwZSBDb21wb25lbnRMb2FkQ2FuY2VsID0gKCgpID0+IHZvaWQpIHwgbnVsbFxuXG50eXBlIEhpc3RvcnlNZXRob2QgPSAncmVwbGFjZVN0YXRlJyB8ICdwdXNoU3RhdGUnXG5cbmNvbnN0IG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uID1cbiAgcHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiAmJlxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAnc2Nyb2xsUmVzdG9yYXRpb24nIGluIHdpbmRvdy5oaXN0b3J5ICYmXG4gICEhKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgbGV0IHYgPSAnX19uZXh0J1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuICAgICAgcmV0dXJuIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0odiwgdiksIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0odiksIHRydWVcbiAgICB9IGNhdGNoIChuKSB7fVxuICB9KSgpXG5cbmNvbnN0IFNTR19EQVRBX05PVF9GT1VORCA9IFN5bWJvbCgnU1NHX0RBVEFfTk9UX0ZPVU5EJylcblxuZnVuY3Rpb24gZmV0Y2hSZXRyeSh1cmw6IHN0cmluZywgYXR0ZW1wdHM6IG51bWJlcik6IFByb21pc2U8YW55PiB7XG4gIHJldHVybiBmZXRjaCh1cmwsIHtcbiAgICAvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbiAgICAvLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cbiAgICAvL1xuICAgIC8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbiAgICAvLyA+IG9wdGlvbi5cbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmV0Y2hfQVBJL1VzaW5nX0ZldGNoXG4gICAgLy9cbiAgICAvLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxuICAgIC8vID4gcmVjZWl2aW5nIGNvb2tpZXMsIGFsd2F5cyBzdXBwbHkgdGhlIGBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ2BcbiAgICAvLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXG4gICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgIGlmICghcmVzLm9rKSB7XG4gICAgICBpZiAoYXR0ZW1wdHMgPiAxICYmIHJlcy5zdGF0dXMgPj0gNTAwKSB7XG4gICAgICAgIHJldHVybiBmZXRjaFJldHJ5KHVybCwgYXR0ZW1wdHMgLSAxKVxuICAgICAgfVxuICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDQwNCkge1xuICAgICAgICByZXR1cm4gcmVzLmpzb24oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgaWYgKGRhdGEubm90Rm91bmQpIHtcbiAgICAgICAgICAgIHJldHVybiB7IG5vdEZvdW5kOiBTU0dfREFUQV9OT1RfRk9VTkQgfVxuICAgICAgICAgIH1cbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApXG4gICAgfVxuICAgIHJldHVybiByZXMuanNvbigpXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGZldGNoTmV4dERhdGEoZGF0YUhyZWY6IHN0cmluZywgaXNTZXJ2ZXJSZW5kZXI6IGJvb2xlYW4pIHtcbiAgcmV0dXJuIGZldGNoUmV0cnkoZGF0YUhyZWYsIGlzU2VydmVyUmVuZGVyID8gMyA6IDEpLmNhdGNoKChlcnI6IEVycm9yKSA9PiB7XG4gICAgLy8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4gICAgLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbiAgICAvLyBsb29wLlxuXG4gICAgaWYgKCFpc1NlcnZlclJlbmRlcikge1xuICAgICAgbWFya0Fzc2V0RXJyb3IoZXJyKVxuICAgIH1cbiAgICB0aHJvdyBlcnJcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGVyIGltcGxlbWVudHMgQmFzZVJvdXRlciB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xuXG4gIC8qKlxuICAgKiBNYXAgb2YgYWxsIGNvbXBvbmVudHMgbG9hZGVkIGluIGBSb3V0ZXJgXG4gICAqL1xuICBjb21wb25lbnRzOiB7IFtwYXRobmFtZTogc3RyaW5nXTogUHJpdmF0ZVJvdXRlSW5mbyB9XG4gIC8vIFN0YXRpYyBEYXRhIENhY2hlXG4gIHNkYzogeyBbYXNQYXRoOiBzdHJpbmddOiBvYmplY3QgfSA9IHt9XG4gIHN1YjogU3Vic2NyaXB0aW9uXG4gIGNsYzogQ29tcG9uZW50TG9hZENhbmNlbFxuICBwYWdlTG9hZGVyOiBhbnlcbiAgX2JwczogQmVmb3JlUG9wU3RhdGVDYWxsYmFjayB8IHVuZGVmaW5lZFxuICBldmVudHM6IE1pdHRFbWl0dGVyXG4gIF93cmFwQXBwOiAoQXBwOiBBcHBDb21wb25lbnQpID0+IGFueVxuICBpc1NzcjogYm9vbGVhblxuICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gIF9pbkZsaWdodFJvdXRlPzogc3RyaW5nXG4gIF9zaGFsbG93PzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbiAgaXNSZWFkeTogYm9vbGVhblxuXG4gIHByaXZhdGUgX2lkeDogbnVtYmVyID0gMFxuXG4gIHN0YXRpYyBldmVudHM6IE1pdHRFbWl0dGVyID0gbWl0dCgpXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICB7XG4gICAgICBpbml0aWFsUHJvcHMsXG4gICAgICBwYWdlTG9hZGVyLFxuICAgICAgQXBwLFxuICAgICAgd3JhcEFwcCxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIGVycixcbiAgICAgIHN1YnNjcmlwdGlvbixcbiAgICAgIGlzRmFsbGJhY2ssXG4gICAgICBsb2NhbGUsXG4gICAgICBsb2NhbGVzLFxuICAgICAgZGVmYXVsdExvY2FsZSxcbiAgICAgIGRvbWFpbkxvY2FsZXMsXG4gICAgfToge1xuICAgICAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb25cbiAgICAgIGluaXRpYWxQcm9wczogYW55XG4gICAgICBwYWdlTG9hZGVyOiBhbnlcbiAgICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICAgICAgQXBwOiBBcHBDb21wb25lbnRcbiAgICAgIHdyYXBBcHA6IChBcHA6IEFwcENvbXBvbmVudCkgPT4gYW55XG4gICAgICBlcnI/OiBFcnJvclxuICAgICAgaXNGYWxsYmFjazogYm9vbGVhblxuICAgICAgbG9jYWxlPzogc3RyaW5nXG4gICAgICBsb2NhbGVzPzogc3RyaW5nW11cbiAgICAgIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgICAgIGRvbWFpbkxvY2FsZXM/OiBEb21haW5Mb2NhbGVzXG4gICAgfVxuICApIHtcbiAgICAvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbiAgICB0aGlzLnJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG5cbiAgICAvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbiAgICB0aGlzLmNvbXBvbmVudHMgPSB7fVxuICAgIC8vIFdlIHNob3VsZCBub3Qga2VlcCB0aGUgY2FjaGUsIGlmIHRoZXJlJ3MgYW4gZXJyb3JcbiAgICAvLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuICAgIC8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbiAgICBpZiAocGF0aG5hbWUgIT09ICcvX2Vycm9yJykge1xuICAgICAgdGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdID0ge1xuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIGluaXRpYWw6IHRydWUsXG4gICAgICAgIHByb3BzOiBpbml0aWFsUHJvcHMsXG4gICAgICAgIGVycixcbiAgICAgICAgX19OX1NTRzogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NHLFxuICAgICAgICBfX05fU1NQOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU1AsXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddID0ge1xuICAgICAgQ29tcG9uZW50OiBBcHAgYXMgQ29tcG9uZW50VHlwZSxcbiAgICAgIHN0eWxlU2hlZXRzOiBbXG4gICAgICAgIC8qIC9fYXBwIGRvZXMgbm90IG5lZWQgaXRzIHN0eWxlc2hlZXRzIG1hbmFnZWQgKi9cbiAgICAgIF0sXG4gICAgfVxuXG4gICAgLy8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbiAgICAvLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxuICAgIHRoaXMuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gICAgdGhpcy5wYWdlTG9hZGVyID0gcGFnZUxvYWRlclxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIC8vIGlmIGF1dG8gcHJlcmVuZGVyZWQgYW5kIGR5bmFtaWMgcm91dGUgd2FpdCB0byB1cGRhdGUgYXNQYXRoXG4gICAgLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbiAgICBjb25zdCBhdXRvRXhwb3J0RHluYW1pYyA9XG4gICAgICBpc0R5bmFtaWNSb3V0ZShwYXRobmFtZSkgJiYgc2VsZi5fX05FWFRfREFUQV9fLmF1dG9FeHBvcnRcblxuICAgIHRoaXMuYXNQYXRoID0gYXV0b0V4cG9ydER5bmFtaWMgPyBwYXRobmFtZSA6IGFzXG4gICAgdGhpcy5iYXNlUGF0aCA9IGJhc2VQYXRoXG4gICAgdGhpcy5zdWIgPSBzdWJzY3JpcHRpb25cbiAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB0aGlzLl93cmFwQXBwID0gd3JhcEFwcFxuICAgIC8vIG1ha2Ugc3VyZSB0byBpZ25vcmUgZXh0cmEgcG9wU3RhdGUgaW4gc2FmYXJpIG9uIG5hdmlnYXRpbmdcbiAgICAvLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxuICAgIHRoaXMuaXNTc3IgPSB0cnVlXG5cbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBpc0ZhbGxiYWNrXG5cbiAgICB0aGlzLmlzUmVhZHkgPSAhIShcbiAgICAgIHNlbGYuX19ORVhUX0RBVEFfXy5nc3NwIHx8XG4gICAgICBzZWxmLl9fTkVYVF9EQVRBX18uZ2lwIHx8XG4gICAgICAoIWF1dG9FeHBvcnREeW5hbWljICYmICFzZWxmLmxvY2F0aW9uLnNlYXJjaClcbiAgICApXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgdGhpcy5sb2NhbGUgPSBsb2NhbGVcbiAgICAgIHRoaXMubG9jYWxlcyA9IGxvY2FsZXNcbiAgICAgIHRoaXMuZGVmYXVsdExvY2FsZSA9IGRlZmF1bHRMb2NhbGVcbiAgICAgIHRoaXMuZG9tYWluTG9jYWxlcyA9IGRvbWFpbkxvY2FsZXNcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIG1ha2Ugc3VyZSBcImFzXCIgZG9lc24ndCBzdGFydCB3aXRoIGRvdWJsZSBzbGFzaGVzIG9yIGVsc2UgaXQgY2FuXG4gICAgICAvLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxuICAgICAgaWYgKGFzLnN1YnN0cigwLCAyKSAhPT0gJy8vJykge1xuICAgICAgICAvLyBpbiBvcmRlciBmb3IgYGUuc3RhdGVgIHRvIHdvcmsgb24gdGhlIGBvbnBvcHN0YXRlYCBldmVudFxuICAgICAgICAvLyB3ZSBoYXZlIHRvIHJlZ2lzdGVyIHRoZSBpbml0aWFsIHJvdXRlIHVwb24gaW5pdGlhbGl6YXRpb25cbiAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZSksIHF1ZXJ5IH0pLFxuICAgICAgICAgIGdldFVSTCgpLFxuICAgICAgICAgIHsgbG9jYWxlIH1cbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpXG5cbiAgICAgIC8vIGVuYWJsZSBjdXN0b20gc2Nyb2xsIHJlc3RvcmF0aW9uIGhhbmRsaW5nIHdoZW4gYXZhaWxhYmxlXG4gICAgICAvLyBvdGhlcndpc2UgZmFsbGJhY2sgdG8gYnJvd3NlcidzIGRlZmF1bHQgaGFuZGxpbmdcbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uID0gJ21hbnVhbCdcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uUG9wU3RhdGUgPSAoZTogUG9wU3RhdGVFdmVudCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHN0YXRlID0gZS5zdGF0ZSBhcyBIaXN0b3J5U3RhdGVcblxuICAgIGlmICghc3RhdGUpIHtcbiAgICAgIC8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuICAgICAgLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4gICAgICAvLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4gICAgICAvL1xuICAgICAgLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbiAgICAgIC8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbiAgICAgIC8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuICAgICAgLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuICAgICAgLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG4gICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gdGhpc1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgIGdldFVSTCgpXG4gICAgICApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoIXN0YXRlLl9fTikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgbGV0IGZvcmNlZFNjcm9sbDogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9IHwgdW5kZWZpbmVkXG4gICAgY29uc3QgeyB1cmwsIGFzLCBvcHRpb25zLCBpZHggfSA9IHN0YXRlXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICBpZiAodGhpcy5faWR4ICE9PSBpZHgpIHtcbiAgICAgICAgICAvLyBTbmFwc2hvdCBjdXJyZW50IHNjcm9sbCBwb3NpdGlvbjpcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgICAgICAgICAgJ19fbmV4dF9zY3JvbGxfJyArIHRoaXMuX2lkeCxcbiAgICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoeyB4OiBzZWxmLnBhZ2VYT2Zmc2V0LCB5OiBzZWxmLnBhZ2VZT2Zmc2V0IH0pXG4gICAgICAgICAgICApXG4gICAgICAgICAgfSBjYXRjaCB7fVxuXG4gICAgICAgICAgLy8gUmVzdG9yZSBvbGQgc2Nyb2xsIHBvc2l0aW9uOlxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCB2ID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnX19uZXh0X3Njcm9sbF8nICsgaWR4KVxuICAgICAgICAgICAgZm9yY2VkU2Nyb2xsID0gSlNPTi5wYXJzZSh2ISlcbiAgICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICAgIGZvcmNlZFNjcm9sbCA9IHsgeDogMCwgeTogMCB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX2lkeCA9IGlkeFxuXG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAvLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbiAgICBpZiAodGhpcy5pc1NzciAmJiBhcyA9PT0gdGhpcy5hc1BhdGggJiYgcGF0aG5hbWUgPT09IHRoaXMucGF0aG5hbWUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbiAgICAvLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuICAgIGlmICh0aGlzLl9icHMgJiYgIXRoaXMuX2JwcyhzdGF0ZSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuY2hhbmdlKFxuICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICB1cmwsXG4gICAgICBhcyxcbiAgICAgIE9iamVjdC5hc3NpZ248e30sIFRyYW5zaXRpb25PcHRpb25zLCBUcmFuc2l0aW9uT3B0aW9ucz4oe30sIG9wdGlvbnMsIHtcbiAgICAgICAgc2hhbGxvdzogb3B0aW9ucy5zaGFsbG93ICYmIHRoaXMuX3NoYWxsb3csXG4gICAgICAgIGxvY2FsZTogb3B0aW9ucy5sb2NhbGUgfHwgdGhpcy5kZWZhdWx0TG9jYWxlLFxuICAgICAgfSksXG4gICAgICBmb3JjZWRTY3JvbGxcbiAgICApXG4gIH1cblxuICByZWxvYWQoKTogdm9pZCB7XG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gIH1cblxuICAvKipcbiAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAqL1xuICBiYWNrKCkge1xuICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHB1c2hTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICBwdXNoKHVybDogVXJsLCBhcz86IFVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAvLyBUT0RPOiByZW1vdmUgaW4gdGhlIGZ1dHVyZSB3aGVuIHdlIHVwZGF0ZSBoaXN0b3J5IGJlZm9yZSByb3V0ZSBjaGFuZ2VcbiAgICAgIC8vIGlzIGNvbXBsZXRlLCBhcyB0aGUgcG9wc3RhdGUgZXZlbnQgc2hvdWxkIGhhbmRsZSB0aGlzIGNhcHR1cmUuXG4gICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBTbmFwc2hvdCBzY3JvbGwgcG9zaXRpb24gcmlnaHQgYmVmb3JlIG5hdmlnYXRpbmcgdG8gYSBuZXcgcGFnZTpcbiAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgICAgICAgJ19fbmV4dF9zY3JvbGxfJyArIHRoaXMuX2lkeCxcbiAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHsgeDogc2VsZi5wYWdlWE9mZnNldCwgeTogc2VsZi5wYWdlWU9mZnNldCB9KVxuICAgICAgICAgIClcbiAgICAgICAgfSBjYXRjaCB7fVxuICAgICAgfVxuICAgIH1cbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcmVwbGFjZSh1cmw6IFVybCwgYXM/OiBVcmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgY2hhbmdlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zLFxuICAgIGZvcmNlZFNjcm9sbD86IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfVxuICApOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBpZiAoIWlzTG9jYWxVUkwodXJsKSkge1xuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmxcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8vIGZvciBzdGF0aWMgcGFnZXMgd2l0aCBxdWVyeSBwYXJhbXMgaW4gdGhlIFVSTCB3ZSBkZWxheVxuICAgIC8vIG1hcmtpbmcgdGhlIHJvdXRlciByZWFkeSB1bnRpbCBhZnRlciB0aGUgcXVlcnkgaXMgdXBkYXRlZFxuICAgIGlmICgob3B0aW9ucyBhcyBhbnkpLl9oKSB7XG4gICAgICB0aGlzLmlzUmVhZHkgPSB0cnVlXG4gICAgfVxuXG4gICAgLy8gRGVmYXVsdCB0byBzY3JvbGwgcmVzZXQgYmVoYXZpb3IgdW5sZXNzIGV4cGxpY2l0bHkgc3BlY2lmaWVkIHRvIGJlXG4gICAgLy8gYGZhbHNlYCEgVGhpcyBtYWtlcyB0aGUgYmVoYXZpb3IgYmV0d2VlbiB1c2luZyBgUm91dGVyI3B1c2hgIGFuZCBhXG4gICAgLy8gYDxMaW5rIC8+YCBjb25zaXN0ZW50LlxuICAgIG9wdGlvbnMuc2Nyb2xsID0gISEob3B0aW9ucy5zY3JvbGwgPz8gdHJ1ZSlcblxuICAgIGxldCBsb2NhbGVDaGFuZ2UgPSBvcHRpb25zLmxvY2FsZSAhPT0gdGhpcy5sb2NhbGVcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICB0aGlzLmxvY2FsZSA9XG4gICAgICAgIG9wdGlvbnMubG9jYWxlID09PSBmYWxzZVxuICAgICAgICAgID8gdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICAgICAgOiBvcHRpb25zLmxvY2FsZSB8fCB0aGlzLmxvY2FsZVxuXG4gICAgICBpZiAodHlwZW9mIG9wdGlvbnMubG9jYWxlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBvcHRpb25zLmxvY2FsZSA9IHRoaXMubG9jYWxlXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHBhcnNlZEFzID0gcGFyc2VSZWxhdGl2ZVVybChoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcylcbiAgICAgIGNvbnN0IGxvY2FsZVBhdGhSZXN1bHQgPSBub3JtYWxpemVMb2NhbGVQYXRoKFxuICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSxcbiAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICApXG5cbiAgICAgIGlmIChsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlKSB7XG4gICAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZVxuICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGFkZEJhc2VQYXRoKHBhcnNlZEFzLnBhdGhuYW1lKVxuICAgICAgICBhcyA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKVxuICAgICAgICB1cmwgPSBhZGRCYXNlUGF0aChcbiAgICAgICAgICBub3JtYWxpemVMb2NhbGVQYXRoKFxuICAgICAgICAgICAgaGFzQmFzZVBhdGgodXJsKSA/IGRlbEJhc2VQYXRoKHVybCkgOiB1cmwsXG4gICAgICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgICAgICApLnBhdGhuYW1lXG4gICAgICAgIClcbiAgICAgIH1cbiAgICAgIGxldCBkaWROYXZpZ2F0ZSA9IGZhbHNlXG5cbiAgICAgIC8vIHdlIG5lZWQgdG8gd3JhcCB0aGlzIGluIHRoZSBlbnYgY2hlY2sgYWdhaW4gc2luY2UgcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgLy8gbW92ZXMgdGhpcyBvbiBpdHMgb3duIGR1ZSB0byB0aGUgcmV0dXJuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAvLyBpZiB0aGUgbG9jYWxlIGlzbid0IGNvbmZpZ3VyZWQgaGFyZCBuYXZpZ2F0ZSB0byBzaG93IDQwNCBwYWdlXG4gICAgICAgIGlmICghdGhpcy5sb2NhbGVzPy5pbmNsdWRlcyh0aGlzLmxvY2FsZSEpKSB7XG4gICAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBhZGRMb2NhbGUocGFyc2VkQXMucGF0aG5hbWUsIHRoaXMubG9jYWxlKVxuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpXG4gICAgICAgICAgLy8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3JcbiAgICAgICAgICAvLyBvZiBiZXR0ZXIgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdpdGggcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgICAgIGRpZE5hdmlnYXRlID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGRldGVjdGVkRG9tYWluID0gZGV0ZWN0RG9tYWluTG9jYWxlKFxuICAgICAgICB0aGlzLmRvbWFpbkxvY2FsZXMsXG4gICAgICAgIHVuZGVmaW5lZCxcbiAgICAgICAgdGhpcy5sb2NhbGVcbiAgICAgIClcblxuICAgICAgLy8gd2UgbmVlZCB0byB3cmFwIHRoaXMgaW4gdGhlIGVudiBjaGVjayBhZ2FpbiBzaW5jZSByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAvLyBtb3ZlcyB0aGlzIG9uIGl0cyBvd24gZHVlIHRvIHRoZSByZXR1cm5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgIC8vIGlmIHdlIGFyZSBuYXZpZ2F0aW5nIHRvIGEgZG9tYWluIGxvY2FsZSBlbnN1cmUgd2UgcmVkaXJlY3QgdG8gdGhlXG4gICAgICAgIC8vIGNvcnJlY3QgZG9tYWluXG4gICAgICAgIGlmIChcbiAgICAgICAgICAhZGlkTmF2aWdhdGUgJiZcbiAgICAgICAgICBkZXRlY3RlZERvbWFpbiAmJlxuICAgICAgICAgIHNlbGYubG9jYXRpb24uaG9zdG5hbWUgIT09IGRldGVjdGVkRG9tYWluLmRvbWFpblxuICAgICAgICApIHtcbiAgICAgICAgICBjb25zdCBhc05vQmFzZVBhdGggPSBkZWxCYXNlUGF0aChhcylcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGBodHRwJHtkZXRlY3RlZERvbWFpbi5odHRwID8gJycgOiAncyd9Oi8vJHtcbiAgICAgICAgICAgIGRldGVjdGVkRG9tYWluLmRvbWFpblxuICAgICAgICAgIH0ke2FkZEJhc2VQYXRoKFxuICAgICAgICAgICAgYCR7XG4gICAgICAgICAgICAgIHRoaXMubG9jYWxlID09PSBkZXRlY3RlZERvbWFpbi5kZWZhdWx0TG9jYWxlXG4gICAgICAgICAgICAgICAgPyAnJ1xuICAgICAgICAgICAgICAgIDogYC8ke3RoaXMubG9jYWxlfWBcbiAgICAgICAgICAgIH0ke2FzTm9CYXNlUGF0aCA9PT0gJy8nID8gJycgOiBhc05vQmFzZVBhdGh9YCB8fCAnLydcbiAgICAgICAgICApfWBcbiAgICAgICAgICAvLyB0aGlzIHdhcyBwcmV2aW91c2x5IGEgcmV0dXJuIGJ1dCB3YXMgcmVtb3ZlZCBpbiBmYXZvclxuICAgICAgICAgIC8vIG9mIGJldHRlciBkZWFkIGNvZGUgZWxpbWluYXRpb24gd2l0aCByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAgICAgZGlkTmF2aWdhdGUgPSB0cnVlXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGRpZE5hdmlnYXRlKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoKSA9PiB7fSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2gpIHtcbiAgICAgIHRoaXMuaXNTc3IgPSBmYWxzZVxuICAgIH1cbiAgICAvLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG4gICAgaWYgKFNUKSB7XG4gICAgICBwZXJmb3JtYW5jZS5tYXJrKCdyb3V0ZUNoYW5nZScpXG4gICAgfVxuXG4gICAgY29uc3QgeyBzaGFsbG93ID0gZmFsc2UgfSA9IG9wdGlvbnNcbiAgICBjb25zdCByb3V0ZVByb3BzID0geyBzaGFsbG93IH1cblxuICAgIGlmICh0aGlzLl9pbkZsaWdodFJvdXRlKSB7XG4gICAgICB0aGlzLmFib3J0Q29tcG9uZW50TG9hZCh0aGlzLl9pbkZsaWdodFJvdXRlLCByb3V0ZVByb3BzKVxuICAgIH1cblxuICAgIGFzID0gYWRkQmFzZVBhdGgoXG4gICAgICBhZGRMb2NhbGUoXG4gICAgICAgIGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzLFxuICAgICAgICBvcHRpb25zLmxvY2FsZSxcbiAgICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICApXG4gICAgKVxuICAgIGNvbnN0IGNsZWFuZWRBcyA9IGRlbExvY2FsZShcbiAgICAgIGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzLFxuICAgICAgdGhpcy5sb2NhbGVcbiAgICApXG4gICAgdGhpcy5faW5GbGlnaHRSb3V0ZSA9IGFzXG5cbiAgICAvLyBJZiB0aGUgdXJsIGNoYW5nZSBpcyBvbmx5IHJlbGF0ZWQgdG8gYSBoYXNoIGNoYW5nZVxuICAgIC8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cblxuICAgIC8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbiAgICAvLyBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LiBJdCBtYXkgY2hhbmdlIGF0XG4gICAgLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG4gICAgaWYgKCEob3B0aW9ucyBhcyBhbnkpLl9oICYmIHRoaXMub25seUFIYXNoQ2hhbmdlKGNsZWFuZWRBcykpIHtcbiAgICAgIHRoaXMuYXNQYXRoID0gY2xlYW5lZEFzXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsIGFzLCByb3V0ZVByb3BzKVxuICAgICAgLy8gVE9ETzogZG8gd2UgbmVlZCB0aGUgcmVzb2x2ZWQgaHJlZiB3aGVuIG9ubHkgYSBoYXNoIGNoYW5nZT9cbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuICAgICAgdGhpcy5zY3JvbGxUb0hhc2goY2xlYW5lZEFzKVxuICAgICAgdGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdLCBudWxsKVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLCBhcywgcm91dGVQcm9wcylcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgbGV0IHBhcnNlZCA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuICAgIGxldCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gcGFyc2VkXG5cbiAgICAvLyBUaGUgYnVpbGQgbWFuaWZlc3QgbmVlZHMgdG8gYmUgbG9hZGVkIGJlZm9yZSBhdXRvLXN0YXRpYyBkeW5hbWljIHBhZ2VzXG4gICAgLy8gZ2V0IHRoZWlyIHF1ZXJ5IHBhcmFtZXRlcnMgdG8gYWxsb3cgZW5zdXJpbmcgdGhleSBjYW4gYmUgcGFyc2VkIHByb3Blcmx5XG4gICAgLy8gd2hlbiByZXdyaXR0ZW4gdG9cbiAgICBsZXQgcGFnZXM6IGFueSwgcmV3cml0ZXM6IGFueVxuICAgIHRyeSB7XG4gICAgICBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpXG4gICAgICA7KHsgX19yZXdyaXRlczogcmV3cml0ZXMgfSA9IGF3YWl0IGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKSlcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIC8vIElmIHdlIGZhaWwgdG8gcmVzb2x2ZSB0aGUgcGFnZSBsaXN0IG9yIGNsaWVudC1idWlsZCBtYW5pZmVzdCwgd2UgbXVzdFxuICAgICAgLy8gZG8gYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uOlxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgcGFyc2VkID0gdGhpcy5fcmVzb2x2ZUhyZWYocGFyc2VkLCBwYWdlcykgYXMgdHlwZW9mIHBhcnNlZFxuXG4gICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUpIHtcbiAgICAgIHBhdGhuYW1lID0gcGFyc2VkLnBhdGhuYW1lXG4gICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgfVxuXG4gICAgLy8gdXJsIGFuZCBhcyBzaG91bGQgYWx3YXlzIGJlIHByZWZpeGVkIHdpdGggYmFzZVBhdGggYnkgdGhpc1xuICAgIC8vIHBvaW50IGJ5IGVpdGhlciBuZXh0L2xpbmsgb3Igcm91dGVyLnB1c2gvcmVwbGFjZSBzbyBzdHJpcCB0aGVcbiAgICAvLyBiYXNlUGF0aCBmcm9tIHRoZSBwYXRobmFtZSB0byBtYXRjaCB0aGUgcGFnZXMgZGlyIDEtdG8tMVxuICAgIHBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgID8gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goZGVsQmFzZVBhdGgocGF0aG5hbWUpKVxuICAgICAgOiBwYXRobmFtZVxuXG4gICAgLy8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAvLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcbiAgICAvLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4gICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbiAgICAvLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG4gICAgaWYgKCF0aGlzLnVybElzTmV3KGNsZWFuZWRBcykgJiYgIWxvY2FsZUNoYW5nZSkge1xuICAgICAgbWV0aG9kID0gJ3JlcGxhY2VTdGF0ZSdcbiAgICB9XG5cbiAgICBsZXQgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcblxuICAgIC8vIHdlIG5lZWQgdG8gcmVzb2x2ZSB0aGUgYXMgdmFsdWUgdXNpbmcgcmV3cml0ZXMgZm9yIGR5bmFtaWMgU1NHXG4gICAgLy8gcGFnZXMgdG8gYWxsb3cgYnVpbGRpbmcgdGhlIGRhdGEgVVJMIGNvcnJlY3RseVxuICAgIGxldCByZXNvbHZlZEFzID0gYXNcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTICYmIGFzLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgY29uc3QgcmV3cml0ZXNSZXN1bHQgPSByZXNvbHZlUmV3cml0ZXMoXG4gICAgICAgIGFkZEJhc2VQYXRoKGFkZExvY2FsZShkZWxCYXNlUGF0aChhcyksIHRoaXMubG9jYWxlKSksXG4gICAgICAgIHBhZ2VzLFxuICAgICAgICByZXdyaXRlcyxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIChwOiBzdHJpbmcpID0+IHRoaXMuX3Jlc29sdmVIcmVmKHsgcGF0aG5hbWU6IHAgfSwgcGFnZXMpLnBhdGhuYW1lISxcbiAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICApXG4gICAgICByZXNvbHZlZEFzID0gcmV3cml0ZXNSZXN1bHQuYXNQYXRoXG5cbiAgICAgIGlmIChyZXdyaXRlc1Jlc3VsdC5tYXRjaGVkUGFnZSAmJiByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWYpIHtcbiAgICAgICAgLy8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuICAgICAgICAvLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxuICAgICAgICByb3V0ZSA9IHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZlxuICAgICAgICBwYXRobmFtZSA9IHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZlxuICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFpc0xvY2FsVVJMKGFzKSkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBJbnZhbGlkIGhyZWY6IFwiJHt1cmx9XCIgYW5kIGFzOiBcIiR7YXN9XCIsIHJlY2VpdmVkIHJlbGF0aXZlIGhyZWYgYW5kIGV4dGVybmFsIGFzYCArXG4gICAgICAgICAgICBgXFxuU2VlIG1vcmUgaW5mbzogaHR0cHM6Ly9lcnIuc2gvbmV4dC5qcy9pbnZhbGlkLXJlbGF0aXZlLXVybC1leHRlcm5hbC1hc2BcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICByZXNvbHZlZEFzID0gZGVsTG9jYWxlKGRlbEJhc2VQYXRoKHJlc29sdmVkQXMpLCB0aGlzLmxvY2FsZSlcblxuICAgIGlmIChpc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcbiAgICAgIGNvbnN0IHBhcnNlZEFzID0gcGFyc2VSZWxhdGl2ZVVybChyZXNvbHZlZEFzKVxuICAgICAgY29uc3QgYXNQYXRobmFtZSA9IHBhcnNlZEFzLnBhdGhuYW1lXG5cbiAgICAgIGNvbnN0IHJvdXRlUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICAgICAgY29uc3Qgcm91dGVNYXRjaCA9IGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKVxuICAgICAgY29uc3Qgc2hvdWxkSW50ZXJwb2xhdGUgPSByb3V0ZSA9PT0gYXNQYXRobmFtZVxuICAgICAgY29uc3QgaW50ZXJwb2xhdGVkQXMgPSBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICA/IGludGVycG9sYXRlQXMocm91dGUsIGFzUGF0aG5hbWUsIHF1ZXJ5KVxuICAgICAgICA6ICh7fSBhcyB7IHJlc3VsdDogdW5kZWZpbmVkOyBwYXJhbXM6IHVuZGVmaW5lZCB9KVxuXG4gICAgICBpZiAoIXJvdXRlTWF0Y2ggfHwgKHNob3VsZEludGVycG9sYXRlICYmICFpbnRlcnBvbGF0ZWRBcy5yZXN1bHQpKSB7XG4gICAgICAgIGNvbnN0IG1pc3NpbmdQYXJhbXMgPSBPYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKFxuICAgICAgICAgIChwYXJhbSkgPT4gIXF1ZXJ5W3BhcmFtXVxuICAgICAgICApXG5cbiAgICAgICAgaWYgKG1pc3NpbmdQYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgIGAke1xuICAgICAgICAgICAgICAgIHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgICAgICA/IGBJbnRlcnBvbGF0aW5nIGhyZWZgXG4gICAgICAgICAgICAgICAgICA6IGBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYGBcbiAgICAgICAgICAgICAgfSBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgICtcbiAgICAgICAgICAgICAgICBgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGBcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAoc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgPyBgVGhlIHByb3ZpZGVkIFxcYGhyZWZcXGAgKCR7dXJsfSkgdmFsdWUgaXMgbWlzc2luZyBxdWVyeSB2YWx1ZXMgKCR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9KSB0byBiZSBpbnRlcnBvbGF0ZWQgcHJvcGVybHkuIGBcbiAgICAgICAgICAgICAgOiBgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgKSArXG4gICAgICAgICAgICAgIGBSZWFkIG1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzLyR7XG4gICAgICAgICAgICAgICAgc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgICAgID8gJ2hyZWYtaW50ZXJwb2xhdGlvbi1mYWlsZWQnXG4gICAgICAgICAgICAgICAgICA6ICdpbmNvbXBhdGlibGUtaHJlZi1hcydcbiAgICAgICAgICAgICAgfWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoc2hvdWxkSW50ZXJwb2xhdGUpIHtcbiAgICAgICAgYXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihcbiAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBwYXJzZWRBcywge1xuICAgICAgICAgICAgcGF0aG5hbWU6IGludGVycG9sYXRlZEFzLnJlc3VsdCxcbiAgICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIGludGVycG9sYXRlZEFzLnBhcmFtcyEpLFxuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG4gICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIHJvdXRlTWF0Y2gpXG4gICAgICB9XG4gICAgfVxuXG4gICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0JywgYXMsIHJvdXRlUHJvcHMpXG5cbiAgICB0cnkge1xuICAgICAgbGV0IHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKFxuICAgICAgICByb3V0ZSxcbiAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBhcyxcbiAgICAgICAgcmVzb2x2ZWRBcyxcbiAgICAgICAgcm91dGVQcm9wc1xuICAgICAgKVxuICAgICAgbGV0IHsgZXJyb3IsIHByb3BzLCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgLy8gaGFuZGxlIHJlZGlyZWN0IG9uIGNsaWVudC10cmFuc2l0aW9uXG4gICAgICBpZiAoKF9fTl9TU0cgfHwgX19OX1NTUCkgJiYgcHJvcHMpIHtcbiAgICAgICAgaWYgKChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcyAmJiAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMuX19OX1JFRElSRUNUKSB7XG4gICAgICAgICAgY29uc3QgZGVzdGluYXRpb24gPSAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMuX19OX1JFRElSRUNUXG5cbiAgICAgICAgICAvLyBjaGVjayBpZiBkZXN0aW5hdGlvbiBpcyBpbnRlcm5hbCAocmVzb2x2ZXMgdG8gYSBwYWdlKSBhbmQgYXR0ZW1wdFxuICAgICAgICAgIC8vIGNsaWVudC1uYXZpZ2F0aW9uIGlmIGl0IGlzIGZhbGxpbmcgYmFjayB0byBoYXJkIG5hdmlnYXRpb24gaWZcbiAgICAgICAgICAvLyBpdCdzIG5vdFxuICAgICAgICAgIGlmIChkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZEhyZWYgPSBwYXJzZVJlbGF0aXZlVXJsKGRlc3RpbmF0aW9uKVxuICAgICAgICAgICAgdGhpcy5fcmVzb2x2ZUhyZWYocGFyc2VkSHJlZiwgcGFnZXMsIGZhbHNlKVxuXG4gICAgICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMocGFyc2VkSHJlZi5wYXRobmFtZSkpIHtcbiAgICAgICAgICAgICAgY29uc3QgeyB1cmw6IG5ld1VybCwgYXM6IG5ld0FzIH0gPSBwcmVwYXJlVXJsQXMoXG4gICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbixcbiAgICAgICAgICAgICAgICBkZXN0aW5hdGlvblxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLmNoYW5nZShtZXRob2QsIG5ld1VybCwgbmV3QXMsIG9wdGlvbnMpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBkZXN0aW5hdGlvblxuICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoKSA9PiB7fSlcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGhhbmRsZSBTU0cgZGF0YSA0MDRcbiAgICAgICAgaWYgKHByb3BzLm5vdEZvdW5kID09PSBTU0dfREFUQV9OT1RfRk9VTkQpIHtcbiAgICAgICAgICBsZXQgbm90Rm91bmRSb3V0ZVxuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoJy80MDQnKVxuICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSA9ICcvNDA0J1xuICAgICAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgICAgIG5vdEZvdW5kUm91dGUgPSAnL19lcnJvcidcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhcbiAgICAgICAgICAgIG5vdEZvdW5kUm91dGUsXG4gICAgICAgICAgICBub3RGb3VuZFJvdXRlLFxuICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICBhcyxcbiAgICAgICAgICAgIHJlc29sdmVkQXMsXG4gICAgICAgICAgICB7IHNoYWxsb3c6IGZhbHNlIH1cbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywgYXMsIHJvdXRlUHJvcHMpXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgYXBwQ29tcDogYW55ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudFxuICAgICAgICA7KHdpbmRvdyBhcyBhbnkpLm5leHQuaXNQcmVyZW5kZXJlZCA9XG4gICAgICAgICAgYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJlxuICAgICAgICAgICEocm91dGVJbmZvLkNvbXBvbmVudCBhcyBhbnkpLmdldEluaXRpYWxQcm9wc1xuICAgICAgfVxuXG4gICAgICAvLyBzaGFsbG93IHJvdXRpbmcgaXMgb25seSBhbGxvd2VkIGZvciBzYW1lIHBhZ2UgVVJMIGNoYW5nZXMuXG4gICAgICBjb25zdCBpc1ZhbGlkU2hhbGxvd1JvdXRlID0gb3B0aW9ucy5zaGFsbG93ICYmIHRoaXMucm91dGUgPT09IHJvdXRlXG4gICAgICBhd2FpdCB0aGlzLnNldChcbiAgICAgICAgcm91dGUsXG4gICAgICAgIHBhdGhuYW1lISxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIGNsZWFuZWRBcyxcbiAgICAgICAgcm91dGVJbmZvLFxuICAgICAgICBmb3JjZWRTY3JvbGwgfHxcbiAgICAgICAgICAoaXNWYWxpZFNoYWxsb3dSb3V0ZSB8fCAhb3B0aW9ucy5zY3JvbGwgPyBudWxsIDogeyB4OiAwLCB5OiAwIH0pXG4gICAgICApLmNhdGNoKChlKSA9PiB7XG4gICAgICAgIGlmIChlLmNhbmNlbGxlZCkgZXJyb3IgPSBlcnJvciB8fCBlXG4gICAgICAgIGVsc2UgdGhyb3cgZVxuICAgICAgfSlcblxuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBjbGVhbmVkQXMsIHJvdXRlUHJvcHMpXG4gICAgICAgIHRocm93IGVycm9yXG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgIGlmICh0aGlzLmxvY2FsZSkge1xuICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5sYW5nID0gdGhpcy5sb2NhbGVcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgYXMsIHJvdXRlUHJvcHMpXG5cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfVxuXG4gIGNoYW5nZVN0YXRlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge31cbiAgKTogdm9pZCB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWV0aG9kICE9PSAncHVzaFN0YXRlJyB8fCBnZXRVUkwoKSAhPT0gYXMpIHtcbiAgICAgIHRoaXMuX3NoYWxsb3cgPSBvcHRpb25zLnNoYWxsb3dcbiAgICAgIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0oXG4gICAgICAgIHtcbiAgICAgICAgICB1cmwsXG4gICAgICAgICAgYXMsXG4gICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICBfX046IHRydWUsXG4gICAgICAgICAgaWR4OiB0aGlzLl9pZHggPSBtZXRob2QgIT09ICdwdXNoU3RhdGUnID8gdGhpcy5faWR4IDogdGhpcy5faWR4ICsgMSxcbiAgICAgICAgfSBhcyBIaXN0b3J5U3RhdGUsXG4gICAgICAgIC8vIE1vc3QgYnJvd3NlcnMgY3VycmVudGx5IGlnbm9yZXMgdGhpcyBwYXJhbWV0ZXIsIGFsdGhvdWdoIHRoZXkgbWF5IHVzZSBpdCBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAvLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuICAgICAgICAnJyxcbiAgICAgICAgYXNcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBhc3luYyBoYW5kbGVSb3V0ZUluZm9FcnJvcihcbiAgICBlcnI6IEVycm9yICYgeyBjb2RlOiBhbnk7IGNhbmNlbGxlZDogYm9vbGVhbiB9LFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgcm91dGVQcm9wczogUm91dGVQcm9wZXJ0aWVzLFxuICAgIGxvYWRFcnJvckZhaWw/OiBib29sZWFuXG4gICk6IFByb21pc2U8Q29tcGxldGVQcml2YXRlUm91dGVJbmZvPiB7XG4gICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgIC8vIGJ1YmJsZSB1cCBjYW5jZWxsYXRpb24gZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG5cbiAgICBpZiAoaXNBc3NldEVycm9yKGVycikgfHwgbG9hZEVycm9yRmFpbCkge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyLCBhcywgcm91dGVQcm9wcylcblxuICAgICAgLy8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbiAgICAgIC8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4gICAgICAvLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbiAgICAgIC8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG5cbiAgICAgIC8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuXG4gICAgICAvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbiAgICAgIC8vIFNvIGxldCdzIHRocm93IGEgY2FuY2VsbGF0aW9uIGVycm9yIHN0b3AgdGhlIHJvdXRpbmcgbG9naWMuXG4gICAgICB0aHJvdyBidWlsZENhbmNlbGxhdGlvbkVycm9yKClcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgbGV0IENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICAgICAgbGV0IHN0eWxlU2hlZXRzOiBTdHlsZVNoZWV0VHVwbGVbXVxuICAgICAgbGV0IHByb3BzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+IHwgdW5kZWZpbmVkXG5cbiAgICAgIGlmIChcbiAgICAgICAgdHlwZW9mIENvbXBvbmVudCEgPT09ICd1bmRlZmluZWQnIHx8XG4gICAgICAgIHR5cGVvZiBzdHlsZVNoZWV0cyEgPT09ICd1bmRlZmluZWQnXG4gICAgICApIHtcbiAgICAgICAgOyh7IHBhZ2U6IENvbXBvbmVudCwgc3R5bGVTaGVldHMgfSA9IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoXG4gICAgICAgICAgJy9fZXJyb3InXG4gICAgICAgICkpXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJvdXRlSW5mbzogQ29tcGxldGVQcml2YXRlUm91dGVJbmZvID0ge1xuICAgICAgICBwcm9wcyxcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBzdHlsZVNoZWV0cyxcbiAgICAgICAgZXJyLFxuICAgICAgICBlcnJvcjogZXJyLFxuICAgICAgfVxuXG4gICAgICBpZiAoIXJvdXRlSW5mby5wcm9wcykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IGF3YWl0IHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwge1xuICAgICAgICAgICAgZXJyLFxuICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICB9IGFzIGFueSlcbiAgICAgICAgfSBjYXRjaCAoZ2lwRXJyKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZXJyb3IgcGFnZSBgZ2V0SW5pdGlhbFByb3BzYDogJywgZ2lwRXJyKVxuICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHt9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKHJvdXRlSW5mb0Vycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoXG4gICAgICAgIHJvdXRlSW5mb0VycixcbiAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBhcyxcbiAgICAgICAgcm91dGVQcm9wcyxcbiAgICAgICAgdHJ1ZVxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGdldFJvdXRlSW5mbyhcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IGFueSxcbiAgICBhczogc3RyaW5nLFxuICAgIHJlc29sdmVkQXM6IHN0cmluZyxcbiAgICByb3V0ZVByb3BzOiBSb3V0ZVByb3BlcnRpZXNcbiAgKTogUHJvbWlzZTxQcml2YXRlUm91dGVJbmZvPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGV4aXN0aW5nUm91dGVJbmZvOiBQcml2YXRlUm91dGVJbmZvIHwgdW5kZWZpbmVkID0gdGhpcy5jb21wb25lbnRzW1xuICAgICAgICByb3V0ZVxuICAgICAgXVxuICAgICAgaWYgKHJvdXRlUHJvcHMuc2hhbGxvdyAmJiBleGlzdGluZ1JvdXRlSW5mbyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZSkge1xuICAgICAgICByZXR1cm4gZXhpc3RpbmdSb3V0ZUluZm9cbiAgICAgIH1cblxuICAgICAgY29uc3QgY2FjaGVkUm91dGVJbmZvOiBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8gfCB1bmRlZmluZWQgPVxuICAgICAgICBleGlzdGluZ1JvdXRlSW5mbyAmJiAnaW5pdGlhbCcgaW4gZXhpc3RpbmdSb3V0ZUluZm9cbiAgICAgICAgICA/IHVuZGVmaW5lZFxuICAgICAgICAgIDogZXhpc3RpbmdSb3V0ZUluZm9cbiAgICAgIGNvbnN0IHJvdXRlSW5mbzogQ29tcGxldGVQcml2YXRlUm91dGVJbmZvID0gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgID8gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgIDogYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbigocmVzKSA9PiAoe1xuICAgICAgICAgICAgQ29tcG9uZW50OiByZXMucGFnZSxcbiAgICAgICAgICAgIHN0eWxlU2hlZXRzOiByZXMuc3R5bGVTaGVldHMsXG4gICAgICAgICAgICBfX05fU1NHOiByZXMubW9kLl9fTl9TU0csXG4gICAgICAgICAgICBfX05fU1NQOiByZXMubW9kLl9fTl9TU1AsXG4gICAgICAgICAgfSkpXG5cbiAgICAgIGNvbnN0IHsgQ29tcG9uZW50LCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgeyBpc1ZhbGlkRWxlbWVudFR5cGUgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJylcbiAgICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50KSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGV0IGRhdGFIcmVmOiBzdHJpbmcgfCB1bmRlZmluZWRcblxuICAgICAgaWYgKF9fTl9TU0cgfHwgX19OX1NTUCkge1xuICAgICAgICBkYXRhSHJlZiA9IHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZihcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSxcbiAgICAgICAgICByZXNvbHZlZEFzLFxuICAgICAgICAgIF9fTl9TU0csXG4gICAgICAgICAgdGhpcy5sb2NhbGVcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBwcm9wcyA9IGF3YWl0IHRoaXMuX2dldERhdGE8Q29tcGxldGVQcml2YXRlUm91dGVJbmZvPigoKSA9PlxuICAgICAgICBfX05fU1NHXG4gICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IF9fTl9TU1BcbiAgICAgICAgICA/IHRoaXMuX2dldFNlcnZlckRhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogdGhpcy5nZXRJbml0aWFsUHJvcHMoXG4gICAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgICAgLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgIGFzUGF0aDogYXMsXG4gICAgICAgICAgICAgIH0gYXMgYW55XG4gICAgICAgICAgICApXG4gICAgICApXG5cbiAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzXG4gICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gcm91dGVJbmZvXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJvdXRlUHJvcHMpXG4gICAgfVxuICB9XG5cbiAgc2V0KFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBkYXRhOiBQcml2YXRlUm91dGVJbmZvLFxuICAgIHJlc2V0U2Nyb2xsOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0gfCBudWxsXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuaXNGYWxsYmFjayA9IGZhbHNlXG5cbiAgICB0aGlzLnJvdXRlID0gcm91dGVcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICB0aGlzLmFzUGF0aCA9IGFzXG4gICAgcmV0dXJuIHRoaXMubm90aWZ5KGRhdGEsIHJlc2V0U2Nyb2xsKVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAqL1xuICBiZWZvcmVQb3BTdGF0ZShjYjogQmVmb3JlUG9wU3RhdGVDYWxsYmFjaykge1xuICAgIHRoaXMuX2JwcyA9IGNiXG4gIH1cblxuICBvbmx5QUhhc2hDaGFuZ2UoYXM6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5hc1BhdGgpIHJldHVybiBmYWxzZVxuICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKVxuICAgIGNvbnN0IFtuZXdVcmxOb0hhc2gsIG5ld0hhc2hdID0gYXMuc3BsaXQoJyMnKVxuXG4gICAgLy8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuICAgIGlmIChvbGRVcmxOb0hhc2ggIT09IG5ld1VybE5vSGFzaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuICAgIC8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4gICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICByZXR1cm4gb2xkSGFzaCAhPT0gbmV3SGFzaFxuICB9XG5cbiAgc2Nyb2xsVG9IYXNoKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJylcbiAgICAvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWVcbiAgICBpZiAoaGFzaCA9PT0gJycpIHtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbiAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaClcbiAgICBpZiAoaWRFbCkge1xuICAgICAgaWRFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4gICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF1cbiAgICBpZiAobmFtZUVsKSB7XG4gICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgIH1cbiAgfVxuXG4gIHVybElzTmV3KGFzUGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYXNQYXRoICE9PSBhc1BhdGhcbiAgfVxuXG4gIF9yZXNvbHZlSHJlZihwYXJzZWRIcmVmOiBVcmxPYmplY3QsIHBhZ2VzOiBzdHJpbmdbXSwgYXBwbHlCYXNlUGF0aCA9IHRydWUpIHtcbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZWRIcmVmXG4gICAgY29uc3QgY2xlYW5QYXRobmFtZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKFxuICAgICAgZGVub3JtYWxpemVQYWdlUGF0aChhcHBseUJhc2VQYXRoID8gZGVsQmFzZVBhdGgocGF0aG5hbWUhKSA6IHBhdGhuYW1lISlcbiAgICApXG5cbiAgICBpZiAoY2xlYW5QYXRobmFtZSA9PT0gJy80MDQnIHx8IGNsZWFuUGF0aG5hbWUgPT09ICcvX2Vycm9yJykge1xuICAgICAgcmV0dXJuIHBhcnNlZEhyZWZcbiAgICB9XG5cbiAgICAvLyBoYW5kbGUgcmVzb2x2aW5nIGhyZWYgZm9yIGR5bmFtaWMgcm91dGVzXG4gICAgaWYgKCFwYWdlcy5pbmNsdWRlcyhjbGVhblBhdGhuYW1lISkpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIHBhZ2VzLnNvbWUoKHBhZ2UpID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGlzRHluYW1pY1JvdXRlKHBhZ2UpICYmXG4gICAgICAgICAgZ2V0Um91dGVSZWdleChwYWdlKS5yZS50ZXN0KGNsZWFuUGF0aG5hbWUhKVxuICAgICAgICApIHtcbiAgICAgICAgICBwYXJzZWRIcmVmLnBhdGhuYW1lID0gYXBwbHlCYXNlUGF0aCA/IGFkZEJhc2VQYXRoKHBhZ2UpIDogcGFnZVxuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICAgIHBhcnNlZEhyZWYucGF0aG5hbWUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXJzZWRIcmVmLnBhdGhuYW1lISlcbiAgICByZXR1cm4gcGFyc2VkSHJlZlxuICB9XG5cbiAgLyoqXG4gICAqIFByZWZldGNoIHBhZ2UgY29kZSwgeW91IG1heSB3YWl0IGZvciB0aGUgZGF0YSBkdXJpbmcgcGFnZSByZW5kZXJpbmcuXG4gICAqIFRoaXMgZmVhdHVyZSBvbmx5IHdvcmtzIGluIHByb2R1Y3Rpb24hXG4gICAqIEBwYXJhbSB1cmwgdGhlIGhyZWYgb2YgcHJlZmV0Y2hlZCBwYWdlXG4gICAqIEBwYXJhbSBhc1BhdGggdGhlIGFzIHBhdGggb2YgdGhlIHByZWZldGNoZWQgcGFnZVxuICAgKi9cbiAgYXN5bmMgcHJlZmV0Y2goXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXNQYXRoOiBzdHJpbmcgPSB1cmwsXG4gICAgb3B0aW9uczogUHJlZmV0Y2hPcHRpb25zID0ge31cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgbGV0IHBhcnNlZCA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgbGV0IHsgcGF0aG5hbWUgfSA9IHBhcnNlZFxuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgIGlmIChvcHRpb25zLmxvY2FsZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgcGF0aG5hbWUgPSBub3JtYWxpemVMb2NhbGVQYXRoIShwYXRobmFtZSwgdGhpcy5sb2NhbGVzKS5wYXRobmFtZVxuICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG5cbiAgICAgICAgbGV0IHBhcnNlZEFzID0gcGFyc2VSZWxhdGl2ZVVybChhc1BhdGgpXG4gICAgICAgIGNvbnN0IGxvY2FsZVBhdGhSZXN1bHQgPSBub3JtYWxpemVMb2NhbGVQYXRoIShcbiAgICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSxcbiAgICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgICAgKVxuICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGxvY2FsZVBhdGhSZXN1bHQucGF0aG5hbWVcbiAgICAgICAgb3B0aW9ucy5sb2NhbGUgPSBsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlIHx8IHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgICBhc1BhdGggPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcylcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpXG5cbiAgICBwYXJzZWQgPSB0aGlzLl9yZXNvbHZlSHJlZihwYXJzZWQsIHBhZ2VzLCBmYWxzZSkgYXMgdHlwZW9mIHBhcnNlZFxuXG4gICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUpIHtcbiAgICAgIHBhdGhuYW1lID0gcGFyc2VkLnBhdGhuYW1lXG4gICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgfVxuXG4gICAgLy8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuICAgIGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgIHRoaXMucGFnZUxvYWRlci5faXNTc2codXJsKS50aGVuKChpc1NzZzogYm9vbGVhbikgPT4ge1xuICAgICAgICByZXR1cm4gaXNTc2dcbiAgICAgICAgICA/IHRoaXMuX2dldFN0YXRpY0RhdGEoXG4gICAgICAgICAgICAgIHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZihcbiAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgYXNQYXRoLFxuICAgICAgICAgICAgICAgIHRydWUsXG4gICAgICAgICAgICAgICAgdHlwZW9mIG9wdGlvbnMubG9jYWxlICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgICAgICAgPyBvcHRpb25zLmxvY2FsZVxuICAgICAgICAgICAgICAgICAgOiB0aGlzLmxvY2FsZVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgOiBmYWxzZVxuICAgICAgfSksXG4gICAgICB0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eSA/ICdsb2FkUGFnZScgOiAncHJlZmV0Y2gnXShyb3V0ZSksXG4gICAgXSlcbiAgfVxuXG4gIGFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPEdvb2RQYWdlQ2FjaGU+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAodGhpcy5jbGMgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfSlcblxuICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSlcblxuICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgIGNvbnN0IGVycm9yOiBhbnkgPSBuZXcgRXJyb3IoXG4gICAgICAgIGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgXG4gICAgICApXG4gICAgICBlcnJvci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICB0aHJvdyBlcnJvclxuICAgIH1cblxuICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcG9uZW50UmVzdWx0XG4gIH1cblxuICBfZ2V0RGF0YTxUPihmbjogKCkgPT4gUHJvbWlzZTxUPik6IFByb21pc2U8VD4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9XG4gICAgdGhpcy5jbGMgPSBjYW5jZWxcbiAgICByZXR1cm4gZm4oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICAgIH1cblxuICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICBjb25zdCBlcnI6IGFueSA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpXG4gICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U3RhdGljRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICBjb25zdCB7IGhyZWY6IGNhY2hlS2V5IH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZilcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJiB0aGlzLnNkY1tjYWNoZUtleV0pIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbY2FjaGVLZXldKVxuICAgIH1cbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcikudGhlbigoZGF0YSkgPT4ge1xuICAgICAgdGhpcy5zZGNbY2FjaGVLZXldID0gZGF0YVxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFNlcnZlckRhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpXG4gIH1cblxuICBnZXRJbml0aWFsUHJvcHMoXG4gICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlLFxuICAgIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gICk6IFByb21pc2U8YW55PiB7XG4gICAgY29uc3QgeyBDb21wb25lbnQ6IEFwcCB9ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddXG4gICAgY29uc3QgQXBwVHJlZSA9IHRoaXMuX3dyYXBBcHAoQXBwIGFzIEFwcENvbXBvbmVudClcbiAgICBjdHguQXBwVHJlZSA9IEFwcFRyZWVcbiAgICByZXR1cm4gbG9hZEdldEluaXRpYWxQcm9wczxBcHBDb250ZXh0VHlwZTxSb3V0ZXI+PihBcHAsIHtcbiAgICAgIEFwcFRyZWUsXG4gICAgICBDb21wb25lbnQsXG4gICAgICByb3V0ZXI6IHRoaXMsXG4gICAgICBjdHgsXG4gICAgfSlcbiAgfVxuXG4gIGFib3J0Q29tcG9uZW50TG9hZChhczogc3RyaW5nLCByb3V0ZVByb3BzOiBSb3V0ZVByb3BlcnRpZXMpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdChcbiAgICAgICAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAgICAgICBidWlsZENhbmNlbGxhdGlvbkVycm9yKCksXG4gICAgICAgIGFzLFxuICAgICAgICByb3V0ZVByb3BzXG4gICAgICApXG4gICAgICB0aGlzLmNsYygpXG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG4gIH1cblxuICBub3RpZnkoXG4gICAgZGF0YTogUHJpdmF0ZVJvdXRlSW5mbyxcbiAgICByZXNldFNjcm9sbDogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9IHwgbnVsbFxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5zdWIoXG4gICAgICBkYXRhLFxuICAgICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudCBhcyBBcHBDb21wb25lbnQsXG4gICAgICByZXNldFNjcm9sbFxuICAgIClcbiAgfVxufVxuIiwiLy8gRm9ybWF0IGZ1bmN0aW9uIG1vZGlmaWVkIGZyb20gbm9kZWpzXG4vLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCAqIGFzIHF1ZXJ5c3RyaW5nIGZyb20gJy4vcXVlcnlzdHJpbmcnXG5cbmNvbnN0IHNsYXNoZWRQcm90b2NvbHMgPSAvaHR0cHM/fGZ0cHxnb3BoZXJ8ZmlsZS9cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFVybCh1cmxPYmo6IFVybE9iamVjdCkge1xuICBsZXQgeyBhdXRoLCBob3N0bmFtZSB9ID0gdXJsT2JqXG4gIGxldCBwcm90b2NvbCA9IHVybE9iai5wcm90b2NvbCB8fCAnJ1xuICBsZXQgcGF0aG5hbWUgPSB1cmxPYmoucGF0aG5hbWUgfHwgJydcbiAgbGV0IGhhc2ggPSB1cmxPYmouaGFzaCB8fCAnJ1xuICBsZXQgcXVlcnkgPSB1cmxPYmoucXVlcnkgfHwgJydcbiAgbGV0IGhvc3Q6IHN0cmluZyB8IGZhbHNlID0gZmFsc2VcblxuICBhdXRoID0gYXV0aCA/IGVuY29kZVVSSUNvbXBvbmVudChhdXRoKS5yZXBsYWNlKC8lM0EvaSwgJzonKSArICdAJyA6ICcnXG5cbiAgaWYgKHVybE9iai5ob3N0KSB7XG4gICAgaG9zdCA9IGF1dGggKyB1cmxPYmouaG9zdFxuICB9IGVsc2UgaWYgKGhvc3RuYW1lKSB7XG4gICAgaG9zdCA9IGF1dGggKyAofmhvc3RuYW1lLmluZGV4T2YoJzonKSA/IGBbJHtob3N0bmFtZX1dYCA6IGhvc3RuYW1lKVxuICAgIGlmICh1cmxPYmoucG9ydCkge1xuICAgICAgaG9zdCArPSAnOicgKyB1cmxPYmoucG9ydFxuICAgIH1cbiAgfVxuXG4gIGlmIChxdWVyeSAmJiB0eXBlb2YgcXVlcnkgPT09ICdvYmplY3QnKSB7XG4gICAgcXVlcnkgPSBTdHJpbmcocXVlcnlzdHJpbmcudXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhxdWVyeSBhcyBQYXJzZWRVcmxRdWVyeSkpXG4gIH1cblxuICBsZXQgc2VhcmNoID0gdXJsT2JqLnNlYXJjaCB8fCAocXVlcnkgJiYgYD8ke3F1ZXJ5fWApIHx8ICcnXG5cbiAgaWYgKHByb3RvY29sICYmIHByb3RvY29sLnN1YnN0cigtMSkgIT09ICc6JykgcHJvdG9jb2wgKz0gJzonXG5cbiAgaWYgKFxuICAgIHVybE9iai5zbGFzaGVzIHx8XG4gICAgKCghcHJvdG9jb2wgfHwgc2xhc2hlZFByb3RvY29scy50ZXN0KHByb3RvY29sKSkgJiYgaG9zdCAhPT0gZmFsc2UpXG4gICkge1xuICAgIGhvc3QgPSAnLy8nICsgKGhvc3QgfHwgJycpXG4gICAgaWYgKHBhdGhuYW1lICYmIHBhdGhuYW1lWzBdICE9PSAnLycpIHBhdGhuYW1lID0gJy8nICsgcGF0aG5hbWVcbiAgfSBlbHNlIGlmICghaG9zdCkge1xuICAgIGhvc3QgPSAnJ1xuICB9XG5cbiAgaWYgKGhhc2ggJiYgaGFzaFswXSAhPT0gJyMnKSBoYXNoID0gJyMnICsgaGFzaFxuICBpZiAoc2VhcmNoICYmIHNlYXJjaFswXSAhPT0gJz8nKSBzZWFyY2ggPSAnPycgKyBzZWFyY2hcblxuICBwYXRobmFtZSA9IHBhdGhuYW1lLnJlcGxhY2UoL1s/I10vZywgZW5jb2RlVVJJQ29tcG9uZW50KVxuICBzZWFyY2ggPSBzZWFyY2gucmVwbGFjZSgnIycsICclMjMnKVxuXG4gIHJldHVybiBgJHtwcm90b2NvbH0ke2hvc3R9JHtwYXRobmFtZX0ke3NlYXJjaH0ke2hhc2h9YFxufVxuIiwiLy8gSWRlbnRpZnkgL1twYXJhbV0vIGluIHJvdXRlIHN0cmluZ1xuY29uc3QgVEVTVF9ST1VURSA9IC9cXC9cXFtbXi9dKz9cXF0oPz1cXC98JCkvXG5cbmV4cG9ydCBmdW5jdGlvbiBpc0R5bmFtaWNSb3V0ZShyb3V0ZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBURVNUX1JPVVRFLnRlc3Qocm91dGUpXG59XG4iLCJpbXBvcnQgeyBnZXRMb2NhdGlvbk9yaWdpbiB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vcXVlcnlzdHJpbmcnXG5cbi8qKlxuICogUGFyc2VzIHBhdGgtcmVsYXRpdmUgdXJscyAoZS5nLiBgL2hlbGxvL3dvcmxkP2Zvbz1iYXJgKS4gSWYgdXJsIGlzbid0IHBhdGgtcmVsYXRpdmVcbiAqIChlLmcuIGAuL2hlbGxvYCkgdGhlbiBhdCBsZWFzdCBiYXNlIG11c3QgYmUuXG4gKiBBYnNvbHV0ZSB1cmxzIGFyZSByZWplY3RlZCB3aXRoIG9uZSBleGNlcHRpb24sIGluIHRoZSBicm93c2VyLCBhYnNvbHV0ZSB1cmxzIHRoYXQgYXJlIG9uXG4gKiB0aGUgY3VycmVudCBvcmlnaW4gd2lsbCBiZSBwYXJzZWQgYXMgcmVsYXRpdmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUmVsYXRpdmVVcmwodXJsOiBzdHJpbmcsIGJhc2U/OiBzdHJpbmcpIHtcbiAgY29uc3QgZ2xvYmFsQmFzZSA9IG5ldyBVUkwoXG4gICAgdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgPyAnaHR0cDovL24nIDogZ2V0TG9jYXRpb25PcmlnaW4oKVxuICApXG4gIGNvbnN0IHJlc29sdmVkQmFzZSA9IGJhc2UgPyBuZXcgVVJMKGJhc2UsIGdsb2JhbEJhc2UpIDogZ2xvYmFsQmFzZVxuICBjb25zdCB7IHBhdGhuYW1lLCBzZWFyY2hQYXJhbXMsIHNlYXJjaCwgaGFzaCwgaHJlZiwgb3JpZ2luIH0gPSBuZXcgVVJMKFxuICAgIHVybCxcbiAgICByZXNvbHZlZEJhc2VcbiAgKVxuICBpZiAob3JpZ2luICE9PSBnbG9iYWxCYXNlLm9yaWdpbikge1xuICAgIHRocm93IG5ldyBFcnJvcihgaW52YXJpYW50OiBpbnZhbGlkIHJlbGF0aXZlIFVSTCwgcm91dGVyIHJlY2VpdmVkICR7dXJsfWApXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwYXRobmFtZSxcbiAgICBxdWVyeTogc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShzZWFyY2hQYXJhbXMpLFxuICAgIHNlYXJjaCxcbiAgICBoYXNoLFxuICAgIGhyZWY6IGhyZWYuc2xpY2UoZ2xvYmFsQmFzZS5vcmlnaW4ubGVuZ3RoKSxcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcblxuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoXG4gIHNlYXJjaFBhcmFtczogVVJMU2VhcmNoUGFyYW1zXG4pOiBQYXJzZWRVcmxRdWVyeSB7XG4gIGNvbnN0IHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG4gIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgaWYgKHR5cGVvZiBxdWVyeVtrZXldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcXVlcnlba2V5XSA9IHZhbHVlXG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHF1ZXJ5W2tleV0pKSB7XG4gICAgICA7KHF1ZXJ5W2tleV0gYXMgc3RyaW5nW10pLnB1c2godmFsdWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSBbcXVlcnlba2V5XSBhcyBzdHJpbmcsIHZhbHVlXVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHF1ZXJ5XG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0ocGFyYW06IHN0cmluZyk6IHN0cmluZyB7XG4gIGlmIChcbiAgICB0eXBlb2YgcGFyYW0gPT09ICdzdHJpbmcnIHx8XG4gICAgKHR5cGVvZiBwYXJhbSA9PT0gJ251bWJlcicgJiYgIWlzTmFOKHBhcmFtKSkgfHxcbiAgICB0eXBlb2YgcGFyYW0gPT09ICdib29sZWFuJ1xuICApIHtcbiAgICByZXR1cm4gU3RyaW5nKHBhcmFtKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiAnJ1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cmxRdWVyeVRvU2VhcmNoUGFyYW1zKFxuICB1cmxRdWVyeTogUGFyc2VkVXJsUXVlcnlcbik6IFVSTFNlYXJjaFBhcmFtcyB7XG4gIGNvbnN0IHJlc3VsdCA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKVxuICBPYmplY3QuZW50cmllcyh1cmxRdWVyeSkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICB2YWx1ZS5mb3JFYWNoKChpdGVtKSA9PiByZXN1bHQuYXBwZW5kKGtleSwgc3RyaW5naWZ5VXJsUXVlcnlQYXJhbShpdGVtKSkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdC5zZXQoa2V5LCBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHZhbHVlKSlcbiAgICB9XG4gIH0pXG4gIHJldHVybiByZXN1bHRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2lnbihcbiAgdGFyZ2V0OiBVUkxTZWFyY2hQYXJhbXMsXG4gIC4uLnNlYXJjaFBhcmFtc0xpc3Q6IFVSTFNlYXJjaFBhcmFtc1tdXG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBzZWFyY2hQYXJhbXNMaXN0LmZvckVhY2goKHNlYXJjaFBhcmFtcykgPT4ge1xuICAgIEFycmF5LmZyb20oc2VhcmNoUGFyYW1zLmtleXMoKSkuZm9yRWFjaCgoa2V5KSA9PiB0YXJnZXQuZGVsZXRlKGtleSkpXG4gICAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHRhcmdldC5hcHBlbmQoa2V5LCB2YWx1ZSkpXG4gIH0pXG4gIHJldHVybiB0YXJnZXRcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlc29sdmVSZXdyaXRlcygpIHt9XG4iLCJpbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi9yb3V0ZS1yZWdleCdcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4OiBSZXR1cm5UeXBlPHR5cGVvZiBnZXRSb3V0ZVJlZ2V4Pikge1xuICBjb25zdCB7IHJlLCBncm91cHMgfSA9IHJvdXRlUmVnZXhcbiAgcmV0dXJuIChwYXRobmFtZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCkgPT4ge1xuICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSByZS5leGVjKHBhdGhuYW1lISlcbiAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGNvbnN0IGRlY29kZSA9IChwYXJhbTogc3RyaW5nKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtKVxuICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICBjb25zdCBlcnI6IEVycm9yICYgeyBjb2RlPzogc3RyaW5nIH0gPSBuZXcgRXJyb3IoXG4gICAgICAgICAgJ2ZhaWxlZCB0byBkZWNvZGUgcGFyYW0nXG4gICAgICAgIClcbiAgICAgICAgZXJyLmNvZGUgPSAnREVDT0RFX0ZBSUxFRCdcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHBhcmFtczogeyBbcGFyYW1OYW1lOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9ID0ge31cblxuICAgIE9iamVjdC5rZXlzKGdyb3VwcykuZm9yRWFjaCgoc2x1Z05hbWU6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgZyA9IGdyb3Vwc1tzbHVnTmFtZV1cbiAgICAgIGNvbnN0IG0gPSByb3V0ZU1hdGNoW2cucG9zXVxuICAgICAgaWYgKG0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwYXJhbXNbc2x1Z05hbWVdID0gfm0uaW5kZXhPZignLycpXG4gICAgICAgICAgPyBtLnNwbGl0KCcvJykubWFwKChlbnRyeSkgPT4gZGVjb2RlKGVudHJ5KSlcbiAgICAgICAgICA6IGcucmVwZWF0XG4gICAgICAgICAgPyBbZGVjb2RlKG0pXVxuICAgICAgICAgIDogZGVjb2RlKG0pXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gcGFyYW1zXG4gIH1cbn1cbiIsImV4cG9ydCBpbnRlcmZhY2UgR3JvdXAge1xuICBwb3M6IG51bWJlclxuICByZXBlYXQ6IGJvb2xlYW5cbiAgb3B0aW9uYWw6IGJvb2xlYW5cbn1cblxuLy8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cjogc3RyaW5nKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCAnXFxcXCQmJylcbn1cblxuZnVuY3Rpb24gcGFyc2VQYXJhbWV0ZXIocGFyYW06IHN0cmluZykge1xuICBjb25zdCBvcHRpb25hbCA9IHBhcmFtLnN0YXJ0c1dpdGgoJ1snKSAmJiBwYXJhbS5lbmRzV2l0aCgnXScpXG4gIGlmIChvcHRpb25hbCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMSwgLTEpXG4gIH1cbiAgY29uc3QgcmVwZWF0ID0gcGFyYW0uc3RhcnRzV2l0aCgnLi4uJylcbiAgaWYgKHJlcGVhdCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMylcbiAgfVxuICByZXR1cm4geyBrZXk6IHBhcmFtLCByZXBlYXQsIG9wdGlvbmFsIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlUmVnZXgoXG4gIG5vcm1hbGl6ZWRSb3V0ZTogc3RyaW5nXG4pOiB7XG4gIHJlOiBSZWdFeHBcbiAgbmFtZWRSZWdleD86IHN0cmluZ1xuICByb3V0ZUtleXM/OiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH1cbiAgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH1cbn0ge1xuICBjb25zdCBzZWdtZW50cyA9IChub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLycpXG4gICAgLnNsaWNlKDEpXG4gICAgLnNwbGl0KCcvJylcblxuICBjb25zdCBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfSA9IHt9XG4gIGxldCBncm91cEluZGV4ID0gMVxuICBjb25zdCBwYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICBncm91cHNba2V5XSA9IHsgcG9zOiBncm91cEluZGV4KyssIHJlcGVhdCwgb3B0aW9uYWwgfVxuICAgICAgICByZXR1cm4gcmVwZWF0ID8gKG9wdGlvbmFsID8gJyg/Oi8oLis/KSk/JyA6ICcvKC4rPyknKSA6ICcvKFteL10rPyknXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgIH1cbiAgICB9KVxuICAgIC5qb2luKCcnKVxuXG4gIC8vIGRlYWQgY29kZSBlbGltaW5hdGUgZm9yIGJyb3dzZXIgc2luY2UgaXQncyBvbmx5IG5lZWRlZFxuICAvLyB3aGlsZSBnZW5lcmF0aW5nIHJvdXRlcy1tYW5pZmVzdFxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBsZXQgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgbGV0IHJvdXRlS2V5Q2hhckxlbmd0aCA9IDFcblxuICAgIC8vIGJ1aWxkcyBhIG1pbmltYWwgcm91dGVLZXkgdXNpbmcgb25seSBhLXogYW5kIG1pbmltYWwgbnVtYmVyIG9mIGNoYXJhY3RlcnNcbiAgICBjb25zdCBnZXRTYWZlUm91dGVLZXkgPSAoKSA9PiB7XG4gICAgICBsZXQgcm91dGVLZXkgPSAnJ1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvdXRlS2V5Q2hhckxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJvdXRlS2V5ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUocm91dGVLZXlDaGFyQ29kZSlcbiAgICAgICAgcm91dGVLZXlDaGFyQ29kZSsrXG5cbiAgICAgICAgaWYgKHJvdXRlS2V5Q2hhckNvZGUgPiAxMjIpIHtcbiAgICAgICAgICByb3V0ZUtleUNoYXJMZW5ndGgrK1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcm91dGVLZXlcbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZUtleXM6IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9XG5cbiAgICBsZXQgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICAgIC8vIHJlcGxhY2UgYW55IG5vbi13b3JkIGNoYXJhY3RlcnMgc2luY2UgdGhleSBjYW4gYnJlYWtcbiAgICAgICAgICAvLyB0aGUgbmFtZWQgcmVnZXhcbiAgICAgICAgICBsZXQgY2xlYW5lZEtleSA9IGtleS5yZXBsYWNlKC9cXFcvZywgJycpXG4gICAgICAgICAgbGV0IGludmFsaWRLZXkgPSBmYWxzZVxuXG4gICAgICAgICAgLy8gY2hlY2sgaWYgdGhlIGtleSBpcyBzdGlsbCBpbnZhbGlkIGFuZCBmYWxsYmFjayB0byB1c2luZyBhIGtub3duXG4gICAgICAgICAgLy8gc2FmZSBrZXlcbiAgICAgICAgICBpZiAoY2xlYW5lZEtleS5sZW5ndGggPT09IDAgfHwgY2xlYW5lZEtleS5sZW5ndGggPiAzMCkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFpc05hTihwYXJzZUludChjbGVhbmVkS2V5LnN1YnN0cigwLCAxKSkpKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChpbnZhbGlkS2V5KSB7XG4gICAgICAgICAgICBjbGVhbmVkS2V5ID0gZ2V0U2FmZVJvdXRlS2V5KClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByb3V0ZUtleXNbY2xlYW5lZEtleV0gPSBrZXlcbiAgICAgICAgICByZXR1cm4gcmVwZWF0XG4gICAgICAgICAgICA/IG9wdGlvbmFsXG4gICAgICAgICAgICAgID8gYCg/Oi8oPzwke2NsZWFuZWRLZXl9Pi4rPykpP2BcbiAgICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+Lis/KWBcbiAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9PlteL10rPylgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuam9pbignJylcblxuICAgIHJldHVybiB7XG4gICAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICAgIGdyb3VwcyxcbiAgICAgIHJvdXRlS2V5cyxcbiAgICAgIG5hbWVkUmVnZXg6IGBeJHtuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCxcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgIGdyb3VwcyxcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5jb21pbmdNZXNzYWdlLCBTZXJ2ZXJSZXNwb25zZSB9IGZyb20gJ2h0dHAnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgZm9ybWF0VXJsIH0gZnJvbSAnLi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybCdcbmltcG9ydCB7IE1hbmlmZXN0SXRlbSB9IGZyb20gJy4uL3NlcnZlci9sb2FkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgRW52IH0gZnJvbSAnQG5leHQvZW52J1xuaW1wb3J0IHsgQnVpbGRNYW5pZmVzdCB9IGZyb20gJy4uL3NlcnZlci9nZXQtcGFnZS1maWxlcydcbmltcG9ydCB7IERvbWFpbkxvY2FsZXMgfSBmcm9tICcuLi9zZXJ2ZXIvY29uZmlnJ1xuXG4vKipcbiAqIFR5cGVzIHVzZWQgYnkgYm90aCBuZXh0IGFuZCBuZXh0LXNlcnZlclxuICovXG5cbmV4cG9ydCB0eXBlIE5leHRDb21wb25lbnRUeXBlPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPiA9IENvbXBvbmVudFR5cGU8UD4gJiB7XG4gIC8qKlxuICAgKiBVc2VkIGZvciBpbml0aWFsIHBhZ2UgbG9hZCBkYXRhIHBvcHVsYXRpb24uIERhdGEgcmV0dXJuZWQgZnJvbSBgZ2V0SW5pdGlhbFByb3BzYCBpcyBzZXJpYWxpemVkIHdoZW4gc2VydmVyIHJlbmRlcmVkLlxuICAgKiBNYWtlIHN1cmUgdG8gcmV0dXJuIHBsYWluIGBPYmplY3RgIHdpdGhvdXQgdXNpbmcgYERhdGVgLCBgTWFwYCwgYFNldGAuXG4gICAqIEBwYXJhbSBjdHggQ29udGV4dCBvZiBgcGFnZWBcbiAgICovXG4gIGdldEluaXRpYWxQcm9wcz8oY29udGV4dDogQyk6IElQIHwgUHJvbWlzZTxJUD5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIERvY3VtZW50Q29udGV4dCxcbiAgRG9jdW1lbnRJbml0aWFsUHJvcHMsXG4gIERvY3VtZW50UHJvcHNcbj4gJiB7XG4gIHJlbmRlckRvY3VtZW50KFxuICAgIERvY3VtZW50OiBEb2N1bWVudFR5cGUsXG4gICAgcHJvcHM6IERvY3VtZW50UHJvcHNcbiAgKTogUmVhY3QuUmVhY3RFbGVtZW50XG59XG5cbmV4cG9ydCB0eXBlIEFwcFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQXBwQ29udGV4dFR5cGUsXG4gIEFwcEluaXRpYWxQcm9wcyxcbiAgQXBwUHJvcHNUeXBlXG4+XG5cbmV4cG9ydCB0eXBlIEFwcFRyZWVUeXBlID0gQ29tcG9uZW50VHlwZTxcbiAgQXBwSW5pdGlhbFByb3BzICYgeyBbbmFtZTogc3RyaW5nXTogYW55IH1cbj5cblxuLyoqXG4gKiBXZWIgdml0YWxzIHByb3ZpZGVkIHRvIF9hcHAucmVwb3J0V2ViVml0YWxzIGJ5IENvcmUgV2ViIFZpdGFscyBwbHVnaW4gZGV2ZWxvcGVkIGJ5IEdvb2dsZSBDaHJvbWUgdGVhbS5cbiAqIGh0dHBzOi8vbmV4dGpzLm9yZy9ibG9nL25leHQtOS00I2ludGVncmF0ZWQtd2ViLXZpdGFscy1yZXBvcnRpbmdcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dFdlYlZpdGFsc01ldHJpYyA9IHtcbiAgaWQ6IHN0cmluZ1xuICBsYWJlbDogc3RyaW5nXG4gIG5hbWU6IHN0cmluZ1xuICBzdGFydFRpbWU6IG51bWJlclxuICB2YWx1ZTogbnVtYmVyXG59XG5cbmV4cG9ydCB0eXBlIEVuaGFuY2VyPEM+ID0gKENvbXBvbmVudDogQykgPT4gQ1xuXG5leHBvcnQgdHlwZSBDb21wb25lbnRzRW5oYW5jZXIgPVxuICB8IHtcbiAgICAgIGVuaGFuY2VBcHA/OiBFbmhhbmNlcjxBcHBUeXBlPlxuICAgICAgZW5oYW5jZUNvbXBvbmVudD86IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuICAgIH1cbiAgfCBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZVJlc3VsdCA9IHtcbiAgaHRtbDogc3RyaW5nXG4gIGhlYWQ/OiBBcnJheTxKU1guRWxlbWVudCB8IG51bGw+XG59XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2UgPSAoXG4gIG9wdGlvbnM/OiBDb21wb25lbnRzRW5oYW5jZXJcbikgPT4gUmVuZGVyUGFnZVJlc3VsdCB8IFByb21pc2U8UmVuZGVyUGFnZVJlc3VsdD5cblxuZXhwb3J0IHR5cGUgQmFzZUNvbnRleHQgPSB7XG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIFtrOiBzdHJpbmddOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgTkVYVF9EQVRBID0ge1xuICBwcm9wczogUmVjb3JkPHN0cmluZywgYW55PlxuICBwYWdlOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGJ1aWxkSWQ6IHN0cmluZ1xuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBydW50aW1lQ29uZmlnPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfVxuICBuZXh0RXhwb3J0PzogYm9vbGVhblxuICBhdXRvRXhwb3J0PzogYm9vbGVhblxuICBpc0ZhbGxiYWNrPzogYm9vbGVhblxuICBkeW5hbWljSWRzPzogc3RyaW5nW11cbiAgZXJyPzogRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfVxuICBnc3A/OiBib29sZWFuXG4gIGdzc3A/OiBib29sZWFuXG4gIGN1c3RvbVNlcnZlcj86IGJvb2xlYW5cbiAgZ2lwPzogYm9vbGVhblxuICBhcHBHaXA/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICBkb21haW5Mb2NhbGVzPzogRG9tYWluTG9jYWxlc1xufVxuXG4vKipcbiAqIGBOZXh0YCBjb250ZXh0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dFBhZ2VDb250ZXh0IHtcbiAgLyoqXG4gICAqIEVycm9yIG9iamVjdCBpZiBlbmNvdW50ZXJlZCBkdXJpbmcgcmVuZGVyaW5nXG4gICAqL1xuICBlcnI/OiAoRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfSkgfCBudWxsXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVxdWVzdCBvYmplY3QuXG4gICAqL1xuICByZXE/OiBJbmNvbWluZ01lc3NhZ2VcbiAgLyoqXG4gICAqIGBIVFRQYCByZXNwb25zZSBvYmplY3QuXG4gICAqL1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICAvKipcbiAgICogUGF0aCBzZWN0aW9uIG9mIGBVUkxgLlxuICAgKi9cbiAgcGF0aG5hbWU6IHN0cmluZ1xuICAvKipcbiAgICogUXVlcnkgc3RyaW5nIHNlY3Rpb24gb2YgYFVSTGAgcGFyc2VkIGFzIGFuIG9iamVjdC5cbiAgICovXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICAvKipcbiAgICogYFN0cmluZ2Agb2YgdGhlIGFjdHVhbCBwYXRoIGluY2x1ZGluZyBxdWVyeS5cbiAgICovXG4gIGFzUGF0aD86IHN0cmluZ1xuICAvKipcbiAgICogYENvbXBvbmVudGAgdGhlIHRyZWUgb2YgdGhlIEFwcCB0byB1c2UgaWYgbmVlZGluZyB0byByZW5kZXIgc2VwYXJhdGVseVxuICAgKi9cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbn1cblxuZXhwb3J0IHR5cGUgQXBwQ29udGV4dFR5cGU8UiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyPiA9IHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQ+XG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG4gIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gIHJvdXRlcjogUlxufVxuXG5leHBvcnQgdHlwZSBBcHBJbml0aWFsUHJvcHMgPSB7XG4gIHBhZ2VQcm9wczogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzVHlwZTxcbiAgUiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyLFxuICBQID0ge31cbj4gPSBBcHBJbml0aWFsUHJvcHMgJiB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0LCBhbnksIFA+XG4gIHJvdXRlcjogUlxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudENvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQgJiB7XG4gIHJlbmRlclBhZ2U6IFJlbmRlclBhZ2Vcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRJbml0aWFsUHJvcHMgPSBSZW5kZXJQYWdlUmVzdWx0ICYge1xuICBzdHlsZXM/OiBSZWFjdC5SZWFjdEVsZW1lbnRbXSB8IFJlYWN0LlJlYWN0RnJhZ21lbnRcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRQcm9wcyA9IERvY3VtZW50SW5pdGlhbFByb3BzICYge1xuICBfX05FWFRfREFUQV9fOiBORVhUX0RBVEFcbiAgZGFuZ2Vyb3VzQXNQYXRoOiBzdHJpbmdcbiAgZG9jQ29tcG9uZW50c1JlbmRlcmVkOiB7XG4gICAgSHRtbD86IGJvb2xlYW5cbiAgICBNYWluPzogYm9vbGVhblxuICAgIEhlYWQ/OiBib29sZWFuXG4gICAgTmV4dFNjcmlwdD86IGJvb2xlYW5cbiAgfVxuICBidWlsZE1hbmlmZXN0OiBCdWlsZE1hbmlmZXN0XG4gIGFtcFBhdGg6IHN0cmluZ1xuICBpbkFtcE1vZGU6IGJvb2xlYW5cbiAgaHlicmlkQW1wOiBib29sZWFuXG4gIGlzRGV2ZWxvcG1lbnQ6IGJvb2xlYW5cbiAgZHluYW1pY0ltcG9ydHM6IE1hbmlmZXN0SXRlbVtdXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIGNhbm9uaWNhbEJhc2U6IHN0cmluZ1xuICBoZWFkVGFnczogYW55W11cbiAgdW5zdGFibGVfcnVudGltZUpTPzogZmFsc2VcbiAgdW5zdGFibGVfSnNQcmVsb2FkPzogZmFsc2VcbiAgZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmc6IHN0cmluZ1xuICBzY3JpcHRMb2FkZXI6IHsgZGVmZXI/OiBzdHJpbmdbXTsgZWFnZXI/OiBhbnlbXSB9XG4gIGxvY2FsZT86IHN0cmluZ1xufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVxdWVzdFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRBcGlSZXF1ZXN0IGV4dGVuZHMgSW5jb21pbmdNZXNzYWdlIHtcbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgcXVlcnlgIHZhbHVlcyBmcm9tIHVybFxuICAgKi9cbiAgcXVlcnk6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXVxuICB9XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYGNvb2tpZXNgIGZyb20gaGVhZGVyXG4gICAqL1xuICBjb29raWVzOiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nXG4gIH1cblxuICBib2R5OiBhbnlcblxuICBlbnY6IEVudlxuXG4gIHByZXZpZXc/OiBib29sZWFuXG4gIC8qKlxuICAgKiBQcmV2aWV3IGRhdGEgc2V0IG9uIHRoZSByZXF1ZXN0LCBpZiBhbnlcbiAgICogKi9cbiAgcHJldmlld0RhdGE/OiBhbnlcbn1cblxuLyoqXG4gKiBTZW5kIGJvZHkgb2YgcmVzcG9uc2VcbiAqL1xudHlwZSBTZW5kPFQ+ID0gKGJvZHk6IFQpID0+IHZvaWRcblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlc3BvbnNlXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlSZXNwb25zZTxUID0gYW55PiA9IFNlcnZlclJlc3BvbnNlICYge1xuICAvKipcbiAgICogU2VuZCBkYXRhIGBhbnlgIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIHNlbmQ6IFNlbmQ8VD5cbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBganNvbmAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAganNvbjogU2VuZDxUPlxuICBzdGF0dXM6IChzdGF0dXNDb2RlOiBudW1iZXIpID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdCh1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdChzdGF0dXM6IG51bWJlciwgdXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cblxuICAvKipcbiAgICogU2V0IHByZXZpZXcgZGF0YSBmb3IgTmV4dC5qcycgcHJlcmVuZGVyIG1vZGVcbiAgICovXG4gIHNldFByZXZpZXdEYXRhOiAoXG4gICAgZGF0YTogb2JqZWN0IHwgc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICAvKipcbiAgICAgICAqIFNwZWNpZmllcyB0aGUgbnVtYmVyIChpbiBzZWNvbmRzKSBmb3IgdGhlIHByZXZpZXcgc2Vzc2lvbiB0byBsYXN0IGZvci5cbiAgICAgICAqIFRoZSBnaXZlbiBudW1iZXIgd2lsbCBiZSBjb252ZXJ0ZWQgdG8gYW4gaW50ZWdlciBieSByb3VuZGluZyBkb3duLlxuICAgICAgICogQnkgZGVmYXVsdCwgbm8gbWF4aW11bSBhZ2UgaXMgc2V0IGFuZCB0aGUgcHJldmlldyBzZXNzaW9uIGZpbmlzaGVzXG4gICAgICAgKiB3aGVuIHRoZSBjbGllbnQgc2h1dHMgZG93biAoYnJvd3NlciBpcyBjbG9zZWQpLlxuICAgICAgICovXG4gICAgICBtYXhBZ2U/OiBudW1iZXJcbiAgICB9XG4gICkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIGNsZWFyUHJldmlld0RhdGE6ICgpID0+IE5leHRBcGlSZXNwb25zZTxUPlxufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgaGFuZGxlclxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpSGFuZGxlcjxUID0gYW55PiA9IChcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8VD5cbikgPT4gdm9pZCB8IFByb21pc2U8dm9pZD5cblxuLyoqXG4gKiBVdGlsc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZXhlY09uY2U8VCBleHRlbmRzICguLi5hcmdzOiBhbnlbXSkgPT4gUmV0dXJuVHlwZTxUPj4oXG4gIGZuOiBUXG4pOiBUIHtcbiAgbGV0IHVzZWQgPSBmYWxzZVxuICBsZXQgcmVzdWx0OiBSZXR1cm5UeXBlPFQ+XG5cbiAgcmV0dXJuICgoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBpZiAoIXVzZWQpIHtcbiAgICAgIHVzZWQgPSB0cnVlXG4gICAgICByZXN1bHQgPSBmbiguLi5hcmdzKVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH0pIGFzIFRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2F0aW9uT3JpZ2luKCkge1xuICBjb25zdCB7IHByb3RvY29sLCBob3N0bmFtZSwgcG9ydCB9ID0gd2luZG93LmxvY2F0aW9uXG4gIHJldHVybiBgJHtwcm90b2NvbH0vLyR7aG9zdG5hbWV9JHtwb3J0ID8gJzonICsgcG9ydCA6ICcnfWBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVSTCgpIHtcbiAgY29uc3QgeyBocmVmIH0gPSB3aW5kb3cubG9jYXRpb25cbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICByZXR1cm4gaHJlZi5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERpc3BsYXlOYW1lPFA+KENvbXBvbmVudDogQ29tcG9uZW50VHlwZTxQPikge1xuICByZXR1cm4gdHlwZW9mIENvbXBvbmVudCA9PT0gJ3N0cmluZydcbiAgICA/IENvbXBvbmVudFxuICAgIDogQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNSZXNTZW50KHJlczogU2VydmVyUmVzcG9uc2UpIHtcbiAgcmV0dXJuIHJlcy5maW5pc2hlZCB8fCByZXMuaGVhZGVyc1NlbnRcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRHZXRJbml0aWFsUHJvcHM8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+KEFwcDogTmV4dENvbXBvbmVudFR5cGU8QywgSVAsIFA+LCBjdHg6IEMpOiBQcm9taXNlPElQPiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKEFwcC5wcm90b3R5cGU/LmdldEluaXRpYWxQcm9wcykge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgIEFwcFxuICAgICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBpcyBkZWZpbmVkIGFzIGFuIGluc3RhbmNlIG1ldGhvZCAtIHZpc2l0IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2dldC1pbml0aWFsLXByb3BzLWFzLWFuLWluc3RhbmNlLW1ldGhvZCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgICB9XG4gIH1cbiAgLy8gd2hlbiBjYWxsZWQgZnJvbSBfYXBwIGBjdHhgIGlzIG5lc3RlZCBpbiBgY3R4YFxuICBjb25zdCByZXMgPSBjdHgucmVzIHx8IChjdHguY3R4ICYmIGN0eC5jdHgucmVzKVxuXG4gIGlmICghQXBwLmdldEluaXRpYWxQcm9wcykge1xuICAgIGlmIChjdHguY3R4ICYmIGN0eC5Db21wb25lbnQpIHtcbiAgICAgIC8vIEB0cy1pZ25vcmUgcGFnZVByb3BzIGRlZmF1bHRcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhZ2VQcm9wczogYXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhjdHguQ29tcG9uZW50LCBjdHguY3R4KSxcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHt9IGFzIElQXG4gIH1cblxuICBjb25zdCBwcm9wcyA9IGF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoY3R4KVxuXG4gIGlmIChyZXMgJiYgaXNSZXNTZW50KHJlcykpIHtcbiAgICByZXR1cm4gcHJvcHNcbiAgfVxuXG4gIGlmICghcHJvcHMpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgIEFwcFxuICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgc2hvdWxkIHJlc29sdmUgdG8gYW4gb2JqZWN0LiBCdXQgZm91bmQgXCIke3Byb3BzfVwiIGluc3RlYWQuYFxuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aCA9PT0gMCAmJiAhY3R4LmN0eCkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBgJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgICBBcHBcbiAgICAgICAgKX0gcmV0dXJuZWQgYW4gZW1wdHkgb2JqZWN0IGZyb20gXFxgZ2V0SW5pdGlhbFByb3BzXFxgLiBUaGlzIGRlLW9wdGltaXplcyBhbmQgcHJldmVudHMgYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24uIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2VtcHR5LW9iamVjdC1nZXRJbml0aWFsUHJvcHNgXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHByb3BzXG59XG5cbmV4cG9ydCBjb25zdCB1cmxPYmplY3RLZXlzID0gW1xuICAnYXV0aCcsXG4gICdoYXNoJyxcbiAgJ2hvc3QnLFxuICAnaG9zdG5hbWUnLFxuICAnaHJlZicsXG4gICdwYXRoJyxcbiAgJ3BhdGhuYW1lJyxcbiAgJ3BvcnQnLFxuICAncHJvdG9jb2wnLFxuICAncXVlcnknLFxuICAnc2VhcmNoJyxcbiAgJ3NsYXNoZXMnLFxuXVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0V2l0aFZhbGlkYXRpb24odXJsOiBVcmxPYmplY3QpOiBzdHJpbmcge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICBpZiAodXJsICE9PSBudWxsICYmIHR5cGVvZiB1cmwgPT09ICdvYmplY3QnKSB7XG4gICAgICBPYmplY3Qua2V5cyh1cmwpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAodXJsT2JqZWN0S2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgYFVua25vd24ga2V5IHBhc3NlZCB2aWEgdXJsT2JqZWN0IGludG8gdXJsLmZvcm1hdDogJHtrZXl9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZm9ybWF0VXJsKHVybClcbn1cblxuZXhwb3J0IGNvbnN0IFNQID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJ1xuZXhwb3J0IGNvbnN0IFNUID1cbiAgU1AgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1hcmsgPT09ICdmdW5jdGlvbicgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1lYXN1cmUgPT09ICdmdW5jdGlvbidcbiIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMubm9ybWFsaXplUGF0aFNlcD1ub3JtYWxpemVQYXRoU2VwO2V4cG9ydHMuZGVub3JtYWxpemVQYWdlUGF0aD1kZW5vcm1hbGl6ZVBhZ2VQYXRoO2Z1bmN0aW9uIG5vcm1hbGl6ZVBhdGhTZXAocGF0aCl7cmV0dXJuIHBhdGgucmVwbGFjZSgvXFxcXC9nLCcvJyk7fWZ1bmN0aW9uIGRlbm9ybWFsaXplUGFnZVBhdGgocGFnZSl7cGFnZT1ub3JtYWxpemVQYXRoU2VwKHBhZ2UpO2lmKHBhZ2Uuc3RhcnRzV2l0aCgnL2luZGV4LycpKXtwYWdlPXBhZ2Uuc2xpY2UoNik7fWVsc2UgaWYocGFnZT09PScvaW5kZXgnKXtwYWdlPScvJzt9cmV0dXJuIHBhZ2U7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzLm1hcCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsIlxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgTWFpblNjcm9sbFBhZ2UgZnJvbSAnLi4vc3JjL3BhZ2VzL01haW5TY3JvbGxQYWdlJ1xuXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL3NyYy9jb21wb25lbnQvaGVhZGVyL0hlYWRlcidcbmltcG9ydCBNZXRhSGVhZGVyIGZyb20gJy4uL3NyYy9jb21wb25lbnQvTWV0YUhlYWRlcidcblxuaW1wb3J0IHBvbHlmaWxsIGZyb20gJy4uL3NyYy9wb2x5ZmlsbCdcblxuaW1wb3J0ICcuLi9zcmMvQXBwLmNzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4ICgpIHtcbiAgdXNlRWZmZWN0KHBvbHlmaWxsKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8TWV0YUhlYWRlcj48L01ldGFIZWFkZXI+XG4gICAgICA8SGVhZGVyPjwvSGVhZGVyPlxuICAgICAgPE1haW5TY3JvbGxQYWdlPjwvTWFpblNjcm9sbFBhZ2U+XG4gICAgPC8+XG4gIClcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5mdW5jdGlvbiBJbWFnZSh7IHNyYywgYWx0LCBjbGFzc05hbWUgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8cGljdHVyZT5cclxuICAgICAgPHNvdXJjZSBzcmNTZXQ9e2Ake3NyY30ud2VicGB9IHR5cGU9XCJpbWFnZS93ZWJwXCIgLz5cclxuICAgICAgPGltZyBkcmFnZ2FibGU9XCJmYWxzZVwiIHNyYz17c3JjfSBhbHQ9e2FsdCB8fCAnJ30gY2xhc3NOYW1lPXtjbGFzc05hbWV9IC8+XHJcbiAgICA8L3BpY3R1cmU+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbWFnZVxyXG4iLCJpbXBvcnQgcXMgZnJvbSAncXVlcnktc3RyaW5nJ1xyXG5cclxuY2xhc3MgTG9jYXRpb24ge1xyXG4gIHN0YXRpYyBxcyhyb3V0ZXIpIHtcclxuICAgIHJldHVybiBxcy5wYXJzZSh3aW5kb3cubG9jYXRpb24uc2VhcmNoKVxyXG4gIH1cclxuXHJcbiAgc3RhdGljIHBhdGhuYW1lKHJvdXRlcikge1xyXG4gICAgY29uc29sZS5sb2coJ1BBVEhOQU1FJywgcm91dGVyLCBMb2NhdGlvbi5saW5rc1swXS5saW5rKVxyXG4gICAgcmV0dXJuIHJvdXRlci5xdWVyeS5wYWdlIHx8IExvY2F0aW9uLmxpbmtzWzBdLmxpbmtcclxuICB9XHJcbn1cclxuXHJcbkxvY2F0aW9uLmxpbmtzID0gW3tcclxuICBsaW5rOiAnaG9tZScsXHJcbiAgbGFiZWw6ICdIb21lJyxcclxufSwge1xyXG4gIGxpbms6ICd3b3JrJyxcclxuICBsYWJlbDogJ1dvcmsnLFxyXG59LCB7XHJcbiAgbGluazogJ3NraWxscycsXHJcbiAgbGFiZWw6ICdTa2lsbHMnLFxyXG59LCB7XHJcbiAgbGluazogJ2V4cGVyaWVuY2VzJyxcclxuICBsYWJlbDogJ0V4cGVyaWVuY2VzJyxcclxufV1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvY2F0aW9uXHJcbiIsImNsYXNzIFdpbmRvd1NpemUge1xyXG4gIHN0YXRpYyBnZXRXaWR0aCgpIHtcclxuICAgIHJldHVybiB3aW5kb3cuaW5uZXJXaWR0aCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXS5jbGllbnRXaWR0aFxyXG4gIH1cclxuXHJcbiAgc3RhdGljIGlzTGFyZ2UoKSB7XHJcbiAgICByZXR1cm4gV2luZG93U2l6ZS5nZXRXaWR0aCgpID49IFdpbmRvd1NpemUuY2VpbFxyXG4gIH1cclxuXHJcbiAgc3RhdGljIGlzU2FmYXJpKCkge1xyXG4gICAgcmV0dXJuIC9jb25zdHJ1Y3Rvci9pLnRlc3Qod2luZG93LkhUTUxFbGVtZW50KVxyXG4gICAgICB8fCAoIXdpbmRvdy5zYWZhcmkgfHwgKHR5cGVvZiB3aW5kb3cuc2FmYXJpICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuc2FmYXJpLnB1c2hOb3RpZmljYXRpb24pKS50b1N0cmluZygpID09PSAnW29iamVjdCBTYWZhcmlSZW1vdGVOb3RpZmljYXRpb25dJztcclxuICB9XHJcbn1cclxuXHJcbldpbmRvd1NpemUuY2VpbCA9IDgxMlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV2luZG93U2l6ZVxyXG4iLCJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcblxuIGNsYXNzIE1ldGFIZWFkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHdpbmRvdy5kYXRhTGF5ZXIgPSB3aW5kb3cuZGF0YUxheWVyIHx8IFtdO1xuICAgIGZ1bmN0aW9uIGd0YWcoKSB7XG4gICAgICBkYXRhTGF5ZXIucHVzaChhcmd1bWVudHMpXG4gICAgfVxuICAgIGd0YWcoJ2pzJywgbmV3IERhdGUoKSk7XG5cbiAgICBndGFnKCdjb25maWcnLCAnVUEtMTQ0NjU5NDMyLTEnKTtcbiAgfVxuICBcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8SGVhZD5cbiAgICAgICAgPHNjcmlwdCBhc3luYyBzcmM9XCJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbS9ndGFnL2pzP2lkPVVBLTE0NDY1OTQzMi0xXCI+PC9zY3JpcHQ+XG4gICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJVVEYtOFwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cInNob3J0Y3V0IGljb25cIiBocmVmPVwiJVBVQkxJQ19VUkwlL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9J29nOmltYWdlJyBjb250ZW50PVwiJVBVQkxJQ19VUkwlL2Zhdmljb24uaWNvXCIvPlxuICAgICAgICA8bWV0YVxuICAgICAgICAgIG5hbWU9XCJ2aWV3cG9ydFwiXG4gICAgICAgICAgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLCBzaHJpbmstdG8tZml0PW5vXCJcbiAgICAgICAgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInRoZW1lLWNvbG9yXCIgY29udGVudD1cIiMyOTE1NGVcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJtYW5pZmVzdFwiIGhyZWY9XCIlUFVCTElDX1VSTCUvbWFuaWZlc3QuanNvblwiIC8+XG4gIFxuICBcbiAgICAgICAgPG1ldGEgbmFtZT1cInJvYm90c1wiIGNvbnRlbnQ9XCJub2ltYWdlaW5kZXhcIiAvPlxuICAgICAgICBcbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJEw6l2ZWxvcHBldXIgRnJlZWxhbmNlIGJhc8OpIMOgIE1hcnNlaWxsZS4gSmUgdm91cyBhY2NvbXBhZ25lIGRhbnMgbGEgcsOpYWxpc2F0aW9uIGRlIHZvdHJlIHByb2pldCBudW3DqXJpcXVlLCBzaXRlIGludGVybmV0LCBhcHBsaWNhdGlvbiBtb2JpbGUuXCIgLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJ0d2l0dGVyOmRlc2NyaXB0aW9uXCIgY29udGVudD1cIkTDqXZlbG9wcGV1ciBGcmVlbGFuY2UgYmFzw6kgw6AgTWFyc2VpbGxlLiBKZSB2b3VzIGFjY29tcGFnbmUgZGFucyBsYSByw6lhbGlzYXRpb24gZGUgdm90cmUgcHJvamV0IG51bcOpcmlxdWUsIHNpdGUgaW50ZXJuZXQsIGFwcGxpY2F0aW9uIG1vYmlsZS5cIiAvPlxuICAgICAgICA8bWV0YSBkZXNjcmlwdGlvbiBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiRMOpdmVsb3BwZXVyIEZyZWVsYW5jZSBiYXPDqSDDoCBNYXJzZWlsbGUuIEplIHZvdXMgYWNjb21wYWduZSBkYW5zIGxhIHLDqWFsaXNhdGlvbiBkZSB2b3RyZSBwcm9qZXQgbnVtw6lyaXF1ZSwgc2l0ZSBpbnRlcm5ldCwgYXBwbGljYXRpb24gbW9iaWxlLlwiIC8+XG4gICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvOjEwMCw0MDB8TWFqb3IrTW9ubytEaXNwbGF5fEVCK0dhcmFtb25kfE9zd2FsZDo3MDBcIiByZWw9XCJzdHlsZXNoZWV0XCIvPlxuICAgICAgICA8dGl0bGU+TWVoZGkgTWVkZG91ciB8IETDqXZlbG9wcGV1ciBGcmVlbGFuY2UgV0VCIC8gTU9CSUxFIC8gTE9HSUNJRUw8L3RpdGxlPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD1cIk1laGRpIE1lZGRvdXIgfCBEw6l2ZWxvcHBldXIgRnJlZWxhbmNlIFdFQiAvIE1PQklMRSAvIExPR0lDSUVMXCIvPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cInR3aXR0ZXI6dGl0bGVcIiBjb250ZW50PVwiTWVoZGkgTWVkZG91ciB8IETDqXZlbG9wcGV1ciBGcmVlbGFuY2UgV0VCIC8gTU9CSUxFIC8gTE9HSUNJRUxcIi8+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6c2l0ZV9uYW1lXCIgY29udGVudD1cIk1laGRpIE1lZGRvdXJcIi8+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dXJsXCIgY29udGVudD1cImh0dHBzOi8vbWVkZG91LmNvbVwiLz5cbiAgXG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dHlwZVwiIGNvbnRlbnQ9XCJ3ZWJzaXRlXCIgLz5cbiAgXG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwidHdpdHRlcjppbWFnZVwiIGNvbnRlbnQ9XCJodHRwczovL21lZGRvdS5jb20vaW1hZ2VzLXdlYnAvbWVoZGkucG5nXCIvPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlXCIgY29udGVudD1cImh0dHBzOi8vbWVkZG91LmNvbS9pbWFnZXMtd2VicC9tZWhkaS5wbmdcIi8+XG4gIFxuICAgICAgPC9IZWFkPlxuICAgICkgIFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1ldGFIZWFkZXIiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcclxuXHJcbmltcG9ydCAnLi9Qcm9ncmVzc1JpbmcuY3NzJ1xyXG5cclxuY2xhc3MgUHJvZ3Jlc3NSaW5nIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpXHJcblxyXG4gICAgY29uc3QgeyBzaWRlIH0gPSB0aGlzLnByb3BzXHJcblxyXG4gICAgdGhpcy5jaXJjdW1mZXJlbmNlID0gc2lkZSAqIDRcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgc3Ryb2tlLCBwcm9ncmVzcywgc2lkZSB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICBjb25zdCBzdHJva2VEYXNob2Zmc2V0ID0gdGhpcy5jaXJjdW1mZXJlbmNlIC0gKHByb2dyZXNzIC8gMTAwKSAqIHRoaXMuY2lyY3VtZmVyZW5jZTtcclxuICAgIGNvbnN0IHN0cm9rZUNvbG9yID0gJyNmZmFiMDAnXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPHN2Z1xyXG4gICAgICAgIHN0eWxlPXt7IG92ZXJmbG93OiAndmlzaWJsZScgfX1cclxuICAgICAgICBoZWlnaHQ9e3NpZGV9XHJcbiAgICAgICAgd2lkdGg9e3NpZGV9XHJcbiAgICAgID5cclxuICAgICAgICA8cmVjdFxyXG4gICAgICAgICAgc3Ryb2tlPXtzdHJva2VDb2xvcn1cclxuICAgICAgICAgIGZpbGw9XCJ0cmFuc3BhcmVudFwiXHJcbiAgICAgICAgICBzdHJva2VXaWR0aD17c3Ryb2tlfVxyXG4gICAgICAgICAgc3Ryb2tlRGFzaGFycmF5PXtgJHt0aGlzLmNpcmN1bWZlcmVuY2V9ICR7dGhpcy5jaXJjdW1mZXJlbmNlfWB9XHJcbiAgICAgICAgICBzdHlsZT17eyBzdHJva2VEYXNob2Zmc2V0IH19XHJcbiAgICAgICAgICB3aWR0aD17c2lkZX1cclxuICAgICAgICAgIGhlaWdodD17c2lkZX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L3N2Zz5cclxuICAgIClcclxuICB9XHJcbn1cclxuXHJcblByb2dyZXNzUmluZy5wcm9wVHlwZXMgPSB7XHJcbiAgc2lkZTogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxyXG4gIHN0cm9rZTogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxyXG4gIHByb2dyZXNzOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2dyZXNzUmluZ1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcclxuXHJcbmNsYXNzIFNjcm9sbGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpXHJcblxyXG4gICAgdGhpcy5jb250YWluZXJSZWYgPSBSZWFjdC5jcmVhdGVSZWYoKVxyXG4gICAgdGhpcy5zZWN0aW9uUmVmcyA9IFtdXHJcbiAgICB0aGlzLmxhc3RTY3JvbGxUb3AgPSAwXHJcbiAgICB0aGlzLmlzU2Nyb2xsaW5nID0gZmFsc2VcclxuICAgIHRoaXMuY2FuU2Nyb2xsID0gdHJ1ZVxyXG5cclxuICAgIHRoaXMuc2Nyb2xsVGltZW91dCA9IHVuZGVmaW5lZFxyXG4gICAgdGhpcy5zY3JvbGxUaW1lciA9IHVuZGVmaW5lZFxyXG4gICAgdGhpcy5jYW5TY3JvbGxUaW1lb3V0ID0gdW5kZWZpbmVkXHJcblxyXG4gICAgdGhpcy5zZWN0aW9ucyA9IFJlYWN0LkNoaWxkcmVuLm1hcChwcm9wcy5jaGlsZHJlbiwgKGNoaWxkKSA9PiB7XHJcbiAgICAgIGNvbnN0IHJlZiA9IFJlYWN0LmNyZWF0ZVJlZigpXHJcblxyXG4gICAgICB0aGlzLnNlY3Rpb25SZWZzLnB1c2gocmVmKVxyXG4gICAgICByZXR1cm4gPGRpdiByZWY9e3JlZn0+e2NoaWxkfTwvZGl2PlxyXG4gICAgfSlcclxuXHJcbiAgICB0aGlzLmluZGV4ID0gcHJvcHMuaW5kZXggfHwgMFxyXG5cclxuICAgIHRoaXMubmV4dEluZGV4ID0gcHJvcHMuaW5kZXggfHwgMFxyXG5cclxuICAgIHRoaXMuc2Nyb2xsVGltZXJGeCA9IHRoaXMuc2Nyb2xsVGltZXJGeC5iaW5kKHRoaXMpXHJcbiAgICBjb25zb2xlLmxvZygnSU4gQ1RPUicpXHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHRoaXMuY29udGFpbmVyID0gd2luZG93XHJcblxyXG4gICAgY29uc29sZS5sb2codGhpcy5pbmRleClcclxuICAgIHRoaXMuc2Nyb2xsVG9FbGVtZW50KHRoaXMuc2VjdGlvblJlZnNbdGhpcy5pbmRleF0uY3VycmVudCwgdGhpcy5pbmRleCwgZmFsc2UpXHJcbiAgICB0aGlzLmJpbmRMaXN0ZW5lcigpXHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRVcGRhdGUoKSB7XHJcbiAgICBjb25zdCB7IGluZGV4IH0gPSB0aGlzLnByb3BzXHJcblxyXG4gICAgY29uc29sZS5sb2coaW5kZXgsIHRoaXMubmV4dEluZGV4KVxyXG4gICAgaWYgKHRoaXMubmV4dEluZGV4ICE9PSBpbmRleCkge1xyXG4gICAgICAvLyB0aGlzLmluZGV4ID0gaW5kZXhcclxuICAgICAgdGhpcy5pc1Njcm9sbGluZyA9IHRydWVcclxuICAgICAgdGhpcy5zY3JvbGxUb0VsZW1lbnQodGhpcy5zZWN0aW9uUmVmc1t0aGlzLmluZGV4XS5jdXJyZW50LCBpbmRleClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG4gICAgdGhpcy51bmJpbmRMaXN0ZW5lcigpXHJcbiAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHRoaXMuc2Nyb2xsVGltZW91dClcclxuICAgIHdpbmRvdy5jbGVhclRpbWVvdXQodGhpcy5jYW5TY3JvbGxUaW1lb3V0KVxyXG4gIH1cclxuXHJcbiAgb25TY3JvbGwoZSkge1xyXG4gICAgY29uc3Qgc2Nyb2xsRGlyZWN0aW9uQ29lZmYgPSB0aGlzLmdldFNjcm9sbERpcmVjdGlvbigpID09PSB0cnVlID8gMSA6IC0xXHJcblxyXG4gICAgaWYgKCh0aGlzLmluZGV4ICsgc2Nyb2xsRGlyZWN0aW9uQ29lZmYpIDwgdGhpcy5zZWN0aW9uUmVmcy5sZW5ndGhcclxuICAgICAgJiYgKHRoaXMuaW5kZXggKyBzY3JvbGxEaXJlY3Rpb25Db2VmZikgPj0gMCAmJiBlLnRpbWVTdGFtcCA+PSAxMDAwKSB7XHJcbiAgICAgIGNvbnN0IG5leHRJbmRleCA9IHRoaXMuaW5kZXggKyBzY3JvbGxEaXJlY3Rpb25Db2VmZlxyXG5cclxuICAgICAgY29uc3QgbmV4dEVsZW1lbnQgPSB0aGlzLnNlY3Rpb25SZWZzW25leHRJbmRleF0uY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxyXG5cclxuICAgICAgaWYgKChzY3JvbGxEaXJlY3Rpb25Db2VmZiA9PT0gMSlcclxuICAgICAgfHwgKHNjcm9sbERpcmVjdGlvbkNvZWZmID09PSAtMSAmJiBuZXh0RWxlbWVudC50b3AgKyBuZXh0RWxlbWVudC5oZWlnaHQgPj0gMCkpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXHJcbiAgICAgICAgdGhpcy5uZXh0SW5kZXggPSBuZXh0SW5kZXhcclxuICAgICAgICB0aGlzLm5vdGlmeU9uU2Nyb2xsKG5leHRJbmRleClcclxuICAgICAgICB0aGlzLnNjcm9sbFRvRWxlbWVudCh0aGlzLnNlY3Rpb25SZWZzW25leHRJbmRleF0uY3VycmVudCwgbmV4dEluZGV4KVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRDb250YWluZXJCb3VuZGluZygpIHtcclxuICAgIHJldHVybiB0aGlzLmNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxyXG4gIH1cclxuXHJcbiAgZ2V0Q29udGFpbmVyU2Nyb2xsVG9wKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuY29udGFpbmVyLnNjcm9sbFRvcCB8fCB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcFxyXG4gIH1cclxuXHJcbiAgZ2V0U2Nyb2xsRGlyZWN0aW9uKCkge1xyXG4gICAgY29uc3Qgc3QgPSB0aGlzLmdldENvbnRhaW5lclNjcm9sbFRvcCgpXHJcbiAgICBjb25zdCByZXQgPSBzdCA+IHRoaXMubGFzdFNjcm9sbFRvcFxyXG5cclxuICAgIHRoaXMubGFzdFNjcm9sbFRvcCA9IHN0IDw9IDAgPyAwIDogc3RcclxuICAgIHJldHVybiByZXRcclxuICB9XHJcblxyXG4gIHNjcm9sbFRvRWxlbWVudChlbGVtZW50LCBpbmRleCwgaXNTbW9vdGggPSB0cnVlKSB7XHJcbiAgICBjb25zdCB0b3AgPSB0aGlzLmdldENvbnRhaW5lclNjcm9sbFRvcCgpXHJcbiAgICBjb25zdCBlbGVtZW50UmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcclxuXHJcbiAgICAvLyB0aGlzLmlzU2Nyb2xsaW5nID0gdHJ1ZVxyXG4gICAgdGhpcy5jb250YWluZXIuc2Nyb2xsVG8oe1xyXG4gICAgICBiZWhhdmlvcjogaXNTbW9vdGggPyAnc21vb3RoJyA6ICdpbnN0YW50JyxcclxuICAgICAgbGVmdDogMCxcclxuICAgICAgdG9wOiB0b3AgKyBlbGVtZW50UmVjdC50b3AsXHJcbiAgICB9KVxyXG5cclxuICAgIHRoaXMuaW5kZXggPSBpbmRleFxyXG4gICAgdGhpcy5uZXh0SW5kZXggPSBpbmRleFxyXG4gICAgd2luZG93Lm9sZEluZGV4ID0gaW5kZXhcclxuICB9XHJcblxyXG4gIG5vdGlmeU9uU2Nyb2xsKGluZGV4KSB7XHJcbiAgICBjb25zdCB7IG9uU2Nyb2xsIH0gPSB0aGlzLnByb3BzXHJcblxyXG4gICAgaWYgKG9uU2Nyb2xsKSB7XHJcbiAgICAgIG9uU2Nyb2xsKGluZGV4KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2Nyb2xsVGltZXJGeChlKSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZygnSU4gU0NST0xMJylcclxuICAgIGlmICh0aGlzLmNhblNjcm9sbCkge1xyXG4gICAgICAvKipcclxuICAgICAgICogQExJTksgaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNDYyMDkwNi9ob3ctZG8taS1rbm93LXdoZW4taXZlLXN0b3BwZWQtc2Nyb2xsaW5nXHJcbiAgICAgICAqL1xyXG4gICAgICBpZiAodGhpcy5zY3JvbGxUaW1lciAhPT0gbnVsbCkge1xyXG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnNjcm9sbFRpbWVyKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnNjcm9sbFRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNTY3JvbGxpbmcpIHtcclxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdTQ1JPTEwgRU5EJyk7XHJcbiAgICAgICAgICB0aGlzLmNhblNjcm9sbCA9IGZhbHNlXHJcbiAgICAgICAgICB0aGlzLmdldFNjcm9sbERpcmVjdGlvbigpXHJcbiAgICAgICAgICB0aGlzLmlzU2Nyb2xsaW5nID0gZmFsc2VcclxuICAgICAgICAgIHRoaXMuY2FuU2Nyb2xsVGltZW91dCA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jYW5TY3JvbGwgPSB0cnVlXHJcbiAgICAgICAgICB9LCA1MClcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgLy8gY29uc29sZS5sb2coJ1NDUk9MTCBTVEFSVCcpO1xyXG4gICAgICAgICAgdGhpcy5pc1Njcm9sbGluZyA9IHRydWVcclxuICAgICAgICAgIHRoaXMub25TY3JvbGwoZSlcclxuICAgICAgICB9XHJcbiAgICAgIH0sIDE1MCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmdldFNjcm9sbERpcmVjdGlvbigpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBiaW5kTGlzdGVuZXIoKSB7XHJcbiAgICB0aGlzLmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLnNjcm9sbFRpbWVyRngpXHJcbiAgfVxyXG5cclxuICB1bmJpbmRMaXN0ZW5lcigpIHtcclxuICAgIHRoaXMuY29udGFpbmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuc2Nyb2xsVGltZXJGeClcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgY2xhc3NOYW1lIH0gPSB0aGlzLnByb3BzXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiByZWY9e3RoaXMuY29udGFpbmVyUmVmfSBjbGFzc05hbWU9e1snc2Nyb2xsZXItbWFpbi1jb250YWluZXInLCBjbGFzc05hbWUgfHwgJyddLmpvaW4oJyAnKX0+XHJcbiAgICAgICAgeyB0aGlzLnNlY3Rpb25zLm1hcCgoY2hpbGQpID0+IGNoaWxkKSB9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuU2Nyb2xsZXIucHJvcFR5cGVzID0ge1xyXG4gIGluZGV4OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXHJcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQpLmlzUmVxdWlyZWQsXHJcbiAgb25TY3JvbGw6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNjcm9sbGVyXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xyXG5cclxuaW1wb3J0ICcuL0Rlc2NyaXB0aW9uLmNzcydcclxuXHJcbmZ1bmN0aW9uIERlc2NyaXB0aW9uKHsgdGV4dCwgbm9NYXJnaW4sIHN0eWxlIH0pIHtcclxuICBjb25zdCBlVGV4dCA9IHRleHQucmVwbGFjZSgvKD86XFxyXFxufFxccnxcXG4pL2csICc8YnIgLz4nKVxyXG4gIGNvbnN0IGNsYXNzZXMgPSBbJ2Rlc2NyaXB0aW9uJ11cclxuXHJcbiAgaWYgKG5vTWFyZ2luKSB7XHJcbiAgICBjbGFzc2VzLnB1c2goJ25vTWFyZ2luJylcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxyXG4gICAgPHAgY2xhc3NOYW1lPXtjbGFzc2VzLmpvaW4oJyAnKX0gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBlVGV4dCB9fSBzdHlsZT17c3R5bGV9IC8+XHJcbiAgKVxyXG59XHJcblxyXG5EZXNjcmlwdGlvbi5wcm9wVHlwZXMgPSB7XHJcbiAgdGV4dDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIG5vTWFyZ2luOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxyXG4gIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0T2YoUHJvcFR5cGVzLmFueSkuaXNSZXF1aXJlZCxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGVzY3JpcHRpb25cclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5cclxuaW1wb3J0IE1lZGlhcyBmcm9tICcuLi9tZWRpYXMvTWVkaWFzJ1xyXG5cclxuaW1wb3J0ICcuL0Zvb3Rlci5jc3MnXHJcblxyXG5jbGFzcyBGb290ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHN0YXRpYyBvblByb2plY3RDbGljaygpIHtcclxuICAgIHdpbmRvdy5ndGFnKCdldmVudCcsICdjb250YWN0Jywge1xyXG4gICAgICBldmVudF9jYXRlZ29yeTogJ2NvbnRhY3QnLFxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLWNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLWJ1dHRvbi1jb250YWluZXJcIj5cclxuICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJhc2ljLWJ1dHRvblwiIG9uQ2xpY2s9e3RoaXMub25Qcm9qZWN0Q2xpY2t9PjxhIGNsYXNzTmFtZT1cIm1lZGlhLWJ1dHRvblwiIGFyaWEtbGFiZWw9XCJFbnZpZSBkZSBtZSBwcm9wb3NlciB1biBwcm9qZXQgP1wiIGhyZWY9XCJtYWlsdG86Y29udGFjdEBtZWRkb3UuY29tXCI+TWUgcHJvcG9zZXIgdW4gcHJvamV0ID88L2E+PC9idXR0b24+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb3B5cmlnaHRcIj5Db3B5cmlnaHQgQCBNZWhkaSBNZWRkb3VyPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IDAsIG92ZXJmbG93OiAndmlzaWJsZScgfX0+XHJcbiAgICAgICAgICA8TWVkaWFzIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyXHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHsgd2l0aFJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5pbXBvcnQgTG9jYXRpb24gZnJvbSAnLi4vLi4vTG9jYXRpb24nXHJcblxyXG5pbXBvcnQgTWVkaWFzIGZyb20gJy4uL21lZGlhcy9NZWRpYXMnXHJcblxyXG5pbXBvcnQgJy4vSGVhZGVyLmNzcydcclxuXHJcbmNsYXNzIEhlYWRlciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBpc0NvbGxhcHNlZDogZmFsc2UsXHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5saW5rcyA9IExvY2F0aW9uLmxpbmtzXHJcbiAgICB0aGlzLmNvbGxhcHNlSWZUcnVlID0gdGhpcy5jb2xsYXBzZUlmVHJ1ZS5iaW5kKHRoaXMpXHJcbiAgICB0aGlzLmNvbGxhcHNlID0gdGhpcy5jb2xsYXBzZS5iaW5kKHRoaXMpXHJcbiAgICB0aGlzLnZpc2libGVJZCA9ICdob21lJ1xyXG4gIH1cclxuXHJcbiAgb25MaW5rQ2xpY2sobGluaykge1xyXG4gICAgY29uc3QgeyBvbkxpbmtDbGljayB9ID0gdGhpcy5wcm9wc1xyXG5cclxuICAgIG9uTGlua0NsaWNrPy4obGluay5saW5rKVxyXG4gIH1cclxuXHJcbiAgY29sbGFwc2UoKSB7XHJcbiAgICBjb25zdCB7IGlzQ29sbGFwc2VkIH0gPSB0aGlzLnN0YXRlXHJcblxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGlzQ29sbGFwc2VkOiAhaXNDb2xsYXBzZWQsXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgY29sbGFwc2VJZlRydWUoKSB7XHJcbiAgICBjb25zdCB7IGlzQ29sbGFwc2VkIH0gPSB0aGlzLnN0YXRlXHJcblxyXG4gICAgaWYgKGlzQ29sbGFwc2VkID09PSB0cnVlKSB7XHJcbiAgICAgIHRoaXMuY29sbGFwc2UoKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICB0aGlzLnZpc2libGVJZCA9IExvY2F0aW9uLnBhdGhuYW1lKHRoaXMucHJvcHMucm91dGVyKVxyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50V2lsbFVwZGF0ZSgpIHtcclxuICAgIHRoaXMudmlzaWJsZUlkID0gTG9jYXRpb24ucGF0aG5hbWUodGhpcy5wcm9wcy5yb3V0ZXIpXHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IGlzQ29sbGFwc2VkIH0gPSB0aGlzLnN0YXRlXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGhlYWRlciBpZD1cImhlYWRlclwiIGNsYXNzTmFtZT17aXNDb2xsYXBzZWQgPT09IHRydWUgPyAnY29sbGFwc2VkJyA6ICcnfT5cclxuICAgICAgICA8ZGl2IGlkPVwiaGVhZGVyLWxvZ28tY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGlkPVwiaGVhZGVyLWZpcnN0XCIgLz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWxvZ28tc3ViLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1sb2dvLXBhZGRpbmctdG9wXCIgLz5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzLXdlYnAvbG9nby1oZWFkZXIucG5nXCIgaWQ9XCJoZWFkZXItbG9nb1wiIGFsdD1cIk1laGRpIE1lZGRvdXIgbG9nb1wiIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgaWQ9XCJoZWFkZXItbGFzdFwiIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBpZD1cImhlYWRlci1idXR0b24tY29udGFpbmVyXCI+XHJcbiAgICAgICAgICB7IHRoaXMubGlua3MubWFwKChsaW5rLCBpZHgpID0+IChcclxuICAgICAgICAgICAgPExpbmsgYXJpYS1sYWJlbD17bGluay5saW5rfSBrZXk9e2xpbmsubGlua30gaHJlZj17YC8ke2xpbmsubGlua31gfSBvbkNsaWNrPXt0aGlzLmNvbGxhcHNlSWZUcnVlfT5cclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BoZWFkZXItYnV0dG9uICR7aWR4ID09PSAwID8gJ2ZpcnN0JyA6ICcnfVxyXG4gICAgICAgICAgICAgICAgJHtpZHggPj0gdGhpcy5saW5rcy5sZW5ndGggLSAxID8gJ2xhc3QnIDogJyd9XHJcbiAgICAgICAgICAgICAgICAke3RoaXMudmlzaWJsZUlkID09PSBsaW5rLmxpbmsgPyAnYWN0aXZlJyA6ICcnfWB9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge2xpbmsubGFiZWx9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItbWVkaWEtY29udGFpbmVyIGJwLXNtYWxsXCI+XHJcbiAgICAgICAgICAgIDxNZWRpYXMgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIGlkPVwiaGVhZGVyLWhhbWJ1cmdlci1jb250YWluZXJcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtpc0NvbGxhcHNlZCA9PT0gdHJ1ZSA/ICdvcGVuJyA6ICcnfVxyXG4gICAgICAgICAgb25DbGljaz17dGhpcy5jb2xsYXBzZX1cclxuICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxzcGFuIC8+XHJcbiAgICAgICAgICA8c3BhbiAvPlxyXG4gICAgICAgICAgPHNwYW4gLz5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9oZWFkZXI+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKEhlYWRlcilcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnLi4vLi4vSW1hZ2UnXHJcblxyXG5mdW5jdGlvbiBFbWFpbCgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEltYWdlIHNyYz1cIi9pbWFnZXMtd2VicC9lbWFpbC5wbmdcIiBhbHQ9XCJFbWFpbFwiIC8+XHJcbiAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEVtYWlsXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEltYWdlIGZyb20gJy4uLy4uL0ltYWdlJ1xyXG5cclxuZnVuY3Rpb24gR2l0aHViKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8SW1hZ2Ugc3JjPVwiL2ltYWdlcy13ZWJwL2dpdGh1Yi5wbmdcIiBhbHQ9XCJHaXRodWJcIiAvPlxyXG4gIClcclxufVxyXG5leHBvcnQgZGVmYXVsdCBHaXRodWJcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnLi4vLi4vSW1hZ2UnXHJcblxyXG5mdW5jdGlvbiBMaW5rZWRpbigpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEltYWdlIHNyYz1cIi9pbWFnZXMtd2VicC9saW5rZWRpbi5wbmdcIiBhbHQ9XCJMaW5rZWRJblwiIC8+XHJcbiAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IExpbmtlZGluXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEltYWdlIGZyb20gJy4uLy4uL0ltYWdlJ1xyXG5cclxuZnVuY3Rpb24gTWVkaXVtKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8SW1hZ2Ugc3JjPVwiL2ltYWdlcy13ZWJwL21lZGl1bS5wbmdcIiBhbHQ9XCJNZWRpdW1cIiAvPlxyXG4gIClcclxufVxyXG5leHBvcnQgZGVmYXVsdCBNZWRpdW1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuaW1wb3J0IExpbmtlZGluIGZyb20gJy4uL2ljb24vTGlua2VkaW4nXHJcbmltcG9ydCBHaXRodWIgZnJvbSAnLi4vaWNvbi9HaXRodWInXHJcbmltcG9ydCBFbWFpbCBmcm9tICcuLi9pY29uL0VtYWlsJ1xyXG5pbXBvcnQgTWVkaXVtIGZyb20gJy4uL2ljb24vTWVkaXVtJ1xyXG5cclxuaW1wb3J0ICcuL01lZGlhcy5jc3MnXHJcblxyXG5mdW5jdGlvbiBNZWRpYXMoeyBjbGFzc05hbWUgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3BhbiBjbGFzc05hbWU9e2BtZWRpYS1idXR0b24tY29udGFpbmVyICR7Y2xhc3NOYW1lIHx8ICcnfWB9IHN0eWxlPXt7IG1hcmdpbkxlZnQ6ICdhdXRvJyB9fT5cclxuICAgICAgPGEgY2xhc3NOYW1lPVwibWVkaWEtYnV0dG9uXCIgYXJpYS1sYWJlbD1cIkVtYWlsXCIgaHJlZj1cIm1haWx0bzpjb250YWN0QG1lZGRvdS5jb21cIj5cclxuICAgICAgICA8RW1haWwgLz5cclxuICAgICAgPC9hPlxyXG4gICAgICA8YSBjbGFzc05hbWU9XCJtZWRpYS1idXR0b25cIiBhcmlhLWxhYmVsPVwiTGlua2VkaW5cIiBocmVmPVwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL21lZGRvdVwiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5cclxuICAgICAgICA8TGlua2VkaW4gLz5cclxuICAgICAgPC9hPlxyXG4gICAgICA8YSBjbGFzc05hbWU9XCJtZWRpYS1idXR0b25cIiBhcmlhLWxhYmVsPVwiR2l0aHViXCIgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9tZWRkb3VcIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+XHJcbiAgICAgICAgPEdpdGh1YiAvPlxyXG4gICAgICA8L2E+XHJcbiAgICAgIDxhIGNsYXNzTmFtZT1cIm1lZGlhLWJ1dHRvblwiIGFyaWEtbGFiZWw9XCJNZWRpdW1cIiBocmVmPVwiaHR0cHM6Ly9tZWRpdW0uY29tL0BtZWRkb3VcIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+XHJcbiAgICAgICAgPE1lZGl1bSAvPlxyXG4gICAgICA8L2E+XHJcbiAgICA8L3NwYW4+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZWRpYXNcclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5cclxuaW1wb3J0IEltYWdlIGZyb20gJy4uLy4uL0ltYWdlJ1xyXG5cclxuaW1wb3J0ICcuL1Byb2plY3QuY3NzJ1xyXG5cclxuY2xhc3MgUHJvamVjdCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgc3RhdGljIGlzV2hpdGUoYykge1xyXG4gICAgY29uc3QgcmdiID0gcGFyc2VJbnQoYywgMTYpOyAvLyBjb252ZXJ0IHJyZ2diYiB0byBkZWNpbWFsXHJcbiAgICBjb25zdCByID0gKHJnYiA+PiAxNikgJiAweGZmOyAvLyBleHRyYWN0IHJlZFxyXG4gICAgY29uc3QgZyA9IChyZ2IgPj4gOCkgJiAweGZmOyAvLyBleHRyYWN0IGdyZWVuXHJcbiAgICBjb25zdCBiID0gKHJnYiA+PiAwKSAmIDB4ZmY7IC8vIGV4dHJhY3QgYmx1ZVxyXG5cclxuICAgIGNvbnN0IGx1bWEgPSAwLjIxMjYgKiByICsgMC43MTUyICogZyArIDAuMDcyMiAqIGI7IC8vIHBlciBJVFUtUiBCVC43MDlcclxuXHJcbiAgICByZXR1cm4gbHVtYSA+PSAyMjBcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgYmFja2dyb3VuZENvbG9yLCBiYWNrZ3JvdW5kSW1hZ2UsIGxvZ28sIG5hbWUsIGlzSG92ZXJhYmxlLCBmdWxsU2l6ZSxcclxuICAgIH0gPSB0aGlzLnByb3BzXHJcbiAgICBjb25zdCBpc1doaXRlID0gYmFja2dyb3VuZENvbG9yID8gUHJvamVjdC5pc1doaXRlKGJhY2tncm91bmRDb2xvci5zbGljZSgxKSkgOiBmYWxzZVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxzcGFuPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgcm91bmRlZCBwcm9qZWN0LWNvbnRhaW5lciAke2Z1bGxTaXplID8gJ2Z1bGwtc2l6ZScgOiAnJ31gfSBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3IsIGJhY2tncm91bmRJbWFnZSB9fT5cclxuICAgICAgICAgIDxJbWFnZSBhbHQ9e25hbWV9IGNsYXNzTmFtZT1cInByb2plY3QtaW1hZ2VcIiBzcmM9e2AvaW1hZ2VzLXdlYnAvcHJvamVjdC8ke2xvZ299LWxvZ28ucG5nYH0gLz5cclxuICAgICAgICAgIHsgaXNIb3ZlcmFibGUgIT09IGZhbHNlXHJcbiAgICAgICAgICAgICYmIChcclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHJvamVjdC1vdmVybGF5XCIgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yLCBiYWNrZ3JvdW5kSW1hZ2UsIGNvbG9yOiBpc1doaXRlID8gJ2JsYWNrJyA6ICd3aGl0ZScgfX0+XHJcbiAgICAgICAgICAgICAgPHNwYW4+e25hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvc3Bhbj5cclxuICAgIClcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2plY3RcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuaW1wb3J0IEltYWdlIGZyb20gJy4uLy4uL0ltYWdlJ1xyXG5cclxuaW1wb3J0ICcuL1Byb2plY3RPdmVybGF5LmNzcydcclxuXHJcbmZ1bmN0aW9uIFByb2plY3RPdmVybGF5KHtcclxuICBpc1Zpc2libGUsIGJhY2tncm91bmRDb2xvciwgaW5UcmFuc2l0aW9uLCBvdXRUcmFuc2l0aW9uLCBuYW1lLCBsb2dvLFxyXG59KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzcGFuPlxyXG4gICAgICB7IGlzVmlzaWJsZVxyXG4gICAgICAmJiAoXHJcbiAgICAgIDxkaXYgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yIH19IGNsYXNzTmFtZT17YHByb2plY3QtYmFja2dyb3VuZC1vdmVybGF5ICR7aW5UcmFuc2l0aW9uID8gJ2luJyA6ICcnfSAgJHtvdXRUcmFuc2l0aW9uID8gJ291dCcgOiAnJ31gfT5cclxuICAgICAgICA8SW1hZ2Ugc3JjPXtgL2ltYWdlcy13ZWJwL3Byb2plY3QvJHtsb2dvfS1sb2dvLTI1NngyNTYucG5nYH0gYWx0PXtuYW1lfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgIDwvc3Bhbj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2plY3RPdmVybGF5XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5cclxuaW1wb3J0IEltYWdlIGZyb20gJy4uLy4uL0ltYWdlJ1xyXG5cclxuaW1wb3J0IFByb2dyZXNzUmluZyBmcm9tICcuLi9Qcm9ncmVzc1JpbmcnXHJcbmltcG9ydCBXaW5kb3dTaXplIGZyb20gJy4uLy4uL1dpbmRvd1NpemUnXHJcblxyXG5pbXBvcnQgJy4vU2tpbGwuY3NzJ1xyXG5cclxuY2xhc3MgU2tpbGwgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHNpZGUgPSAwXHJcbiAgbGFyZ2VTaWRlID0gMFxyXG4gIHNtYWxsU2lkZSA9IDBcclxuICBsYXJnZVN0cm9rZSA9IDBcclxuICBzbWFsbFN0cm9rZSA9IDBcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpXHJcbiAgICB0aGlzLmxhcmdlU2lkZSA9IE1hdGguZmxvb3IoMTY0IC8gMy41KVxyXG4gICAgdGhpcy5zbWFsbFNpZGUgPSBNYXRoLmZsb29yKHRoaXMubGFyZ2VTaWRlIC8gMS42KVxyXG4gICAgdGhpcy5sYXJnZVN0cm9rZSA9IFNraWxsLmdldFN0cm9rZSh0aGlzLmxhcmdlU2lkZSlcclxuICAgIHRoaXMuc21hbGxTdHJva2UgPSBTa2lsbC5nZXRTdHJva2UodGhpcy5zbWFsbFNpZGUpICBcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXRTdHJva2Uoc2lkZSkge1xyXG4gICAgcmV0dXJuIChzaWRlICogMTIuNSkgLyAxNjRcclxuICB9XHJcblxyXG4gIHN0YXRpYyBjYWxjRXhwZXJpZW5jZVNpZGUoc2lkZSkge1xyXG4gICAgcmV0dXJuIHNpZGUgLyAyXHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcblxyXG4gICAgY29uc3Qge1xyXG4gICAgICBpc0xpdHRsZSxcclxuICAgICAgc2hvd0V4cGVyaWVuY2UsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcixcclxuICAgICAgaXNTZWxlY3RlZCxcclxuICAgICAgbG9nbyxcclxuICAgICAgbmFtZSxcclxuICAgICAgYmFja2dyb3VuZEltYWdlLFxyXG4gICAgICBleHBlcmllbmNlLFxyXG4gICAgfSA9IHRoaXMucHJvcHNcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnIH19PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgc2tpbGwtc3VwZXItY29udGFpbmVyICR7aXNMaXR0bGUgPyAnbGl0dGxlJyA6ICcnfSAke3Nob3dFeHBlcmllbmNlID8gJ3ByLW1hcmdlZCcgOiAnJ31gfT5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgXHJcbiAgICAgICAgICAgIHJvdW5kZWQgc2tpbGwtY29udGFpbmVyICR7c2hvd0V4cGVyaWVuY2UgPyAnc2tpbGwtY29udGFpbmVyLXdpdGgtcHInIDogJyd9XHJcbiAgICAgICAgICAgICR7aXNTZWxlY3RlZCA/ICdzZWxlY3RlZCcgOiAnJ31cclxuICAgICAgICAgICAgJHtpc0xpdHRsZSA/ICdsaXR0bGUnIDogJyd9YH1cclxuICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgc2tpbGwtc3ViLWNvbnRhaW5lciAke2lzTGl0dGxlID8gJ2xpdHRsZScgOiAnJ31gfT5cclxuICAgICAgICAgICAgICA8SW1hZ2UgYWx0PXtuYW1lfSBjbGFzc05hbWU9XCJza2lsbC1pbWFnZVwiIHNyYz17YC9pbWFnZXMtd2VicC9za2lsbHMvJHtsb2dvfS5wbmdgfSAvPlxyXG4gICAgICAgICAgICAgIHsgIWlzTGl0dGxlXHJcbiAgICAgICAgICAgICAgICAgICYmIChcclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2tpbGwtb3ZlcmxheVwiIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvciwgYmFja2dyb3VuZEltYWdlIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNraWxsLW92ZXJsYXktdGV4dFwiPntuYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHsgc2hvd0V4cGVyaWVuY2VcclxuICAgICAgICAmJiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcG9zaXRpb246ICdhYnNvbHV0ZScsIHRvcDogLVNraWxsLmNhbGNFeHBlcmllbmNlU2lkZSh0aGlzLmxhcmdlU2lkZSksIHJpZ2h0OiBTa2lsbC5jYWxjRXhwZXJpZW5jZVNpZGUodGhpcy5sYXJnZVNpZGUpIH19IGNsYXNzTmFtZT1cImJwLWxhcmdlXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2tpbGwtZXhwZXJpZW5jZS1hc2lkZS1jb250YWluZXJcIiBzdHlsZT17e3dpZHRoOiB0aGlzLmxhcmdlU2lkZSwgaGVpZ2h0OiB0aGlzLmxhcmdlU2lkZX19PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2tpbGwtcHItY29udGFpbmVyXCI+PFByb2dyZXNzUmluZyBzaWRlPXtNYXRoLmZsb29yKHRoaXMubGFyZ2VTaWRlKX0gc3Ryb2tlPXt0aGlzLmxhcmdlU3Ryb2tlfSBwcm9ncmVzcz17KGV4cGVyaWVuY2UgKiAxMDApIC8gNX0gLz48L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNraWxsLWV4cGVyaWVuY2UtYXNpZGUtdGV4dC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2tpbGwtZXhwZXJpZW5jZS1hc2lkZS10ZXh0LW51bVwiPntleHBlcmllbmNlfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJza2lsbC1leHBlcmllbmNlLWFzaWRlLXRleHQteWVhcnNcIj57ZXhwZXJpZW5jZSA+IDEgPyAnQU5Ow4lFUycgOiAnQU5Ow4lFJ308L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcG9zaXRpb246ICdhYnNvbHV0ZScsIHRvcDogLVNraWxsLmNhbGNFeHBlcmllbmNlU2lkZSh0aGlzLnNtYWxsU2lkZSksIHJpZ2h0OiBTa2lsbC5jYWxjRXhwZXJpZW5jZVNpZGUodGhpcy5zbWFsbFNpZGUpIH19IGNsYXNzTmFtZT1cImJwLXNtYWxsXCI+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJza2lsbC1leHBlcmllbmNlLWFzaWRlLWNvbnRhaW5lclwiIHN0eWxlPXt7d2lkdGg6IHRoaXMuc21hbGxTaWRlLCBoZWlnaHQ6IHRoaXMuc21hbGxTaWRlfX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2tpbGwtcHItY29udGFpbmVyXCI+PFByb2dyZXNzUmluZyBzaWRlPXtNYXRoLmZsb29yKHRoaXMuc21hbGxTaWRlKX0gc3Ryb2tlPXt0aGlzLnNtYWxsU3Ryb2tlfSBwcm9ncmVzcz17KGV4cGVyaWVuY2UgKiAxMDApIC8gNX0gLz48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJza2lsbC1leHBlcmllbmNlLWFzaWRlLXRleHQtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJza2lsbC1leHBlcmllbmNlLWFzaWRlLXRleHQtbnVtXCI+e2V4cGVyaWVuY2V9PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJza2lsbC1leHBlcmllbmNlLWFzaWRlLXRleHQteWVhcnNcIj57ZXhwZXJpZW5jZSA+IDEgPyAnQU5Ow4lFUycgOiAnQU5Ow4lFJ308L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC8+XHJcbiAgICAgICAgKX1cclxuXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2tpbGxcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuaW1wb3J0ICcuL1RpdGxlLmNzcydcclxuXHJcbmZ1bmN0aW9uIFRpdGxlKHsgbm9NYXJnaW4sIHRleHQsIG15U3R5bGUgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8aDEgY2xhc3NOYW1lPXtgdGl0bGUgJHtub01hcmdpbiA/ICcnIDogJ21hcmdpbi10b3AnfWB9IHN0eWxlPXtteVN0eWxlfT57dGV4dH08L2gxPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGl0bGVcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuaW1wb3J0ICcuL0l0ZW0uY3NzJ1xyXG5cclxuZnVuY3Rpb24gSXRlbSh7IG9uQ2xpY2ssIHN0eWxlLCBjaGlsZHJlbiB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxidXR0b24gY2xhc3NOYW1lPVwiaXRlbVwiIG9uQ2xpY2s9e29uQ2xpY2t9IHN0eWxlPXtzdHlsZX0gdHlwZT1cInN1Ym1pdFwiPlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L2J1dHRvbj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEl0ZW1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuaW1wb3J0ICcuL1Jvdy5jc3MnXHJcblxyXG5mdW5jdGlvbiBSb3coe1xyXG4gIHNwYWNlQXJvdW5kTW9iLCBub1dyYXAsIGNsYXNzTmFtZSwgY2VudGVyLCBzdHlsZSwgY3VzdG9tUmVmLCBjaGlsZHJlbixcclxufSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT17YFxyXG4gICAgICByb3dcclxuICAgICAgJHtzcGFjZUFyb3VuZE1vYiA/ICdyb3ctc3BhY2UtYXJvdW5kLW1vYicgOiAnJ31cclxuICAgICAgJHtub1dyYXAgPyAnbm9XcmFwJyA6ICcnfVxyXG4gICAgICAke2NsYXNzTmFtZSB8fCAnJ31cclxuICAgICAgJHtjZW50ZXIgPyAncm93LWNlbnRlcicgOiAnJ31gfVxyXG4gICAgICBzdHlsZT17c3R5bGV9XHJcbiAgICAgIHJlZj17Y3VzdG9tUmVmfVxyXG4gICAgPlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJvd1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcblxyXG5pbXBvcnQgJy4vQmFzaWNQYWdlLmNzcydcclxuXHJcbmNsYXNzIEJhc2ljUGFnZSBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXHJcbiAgcmVuZGVyQ29udGVudCgpIHtcclxuICAgIHJldHVybiB1bmRlZmluZWRcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFzaWMtcGFnZVwiIHN0eWxlPXt0aGlzLnN0eWxlfT5cclxuICAgICAgICB7dGhpcy5yZW5kZXJDb250ZW50KCl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmFzaWNQYWdlXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuaW1wb3J0IHsgVmVydGljYWxUaW1lbGluZSwgVmVydGljYWxUaW1lbGluZUVsZW1lbnQgfSBmcm9tICdyZWFjdC12ZXJ0aWNhbC10aW1lbGluZS1jb21wb25lbnQnXHJcblxyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnLi4vSW1hZ2UnXHJcbmltcG9ydCBUaXRsZSBmcm9tICcuLi9jb21wb25lbnQvdGl0bGUvVGl0bGUnXHJcbmltcG9ydCBEZXNjcmlwdGlvbiBmcm9tICcuLi9jb21wb25lbnQvZGVzY3JpcHRpb24vRGVzY3JpcHRpb24nXHJcblxyXG5pbXBvcnQgRXhwZXJpYW5jZVNlcnZpY2UgZnJvbSAnLi4vc2VydmljZXMvRXhwZXJpYW5jZSdcclxuXHJcbmltcG9ydCBCYXNpY1BhZ2UgZnJvbSAnLi9CYXNpY1BhZ2UnXHJcblxyXG5pbXBvcnQgJ3JlYWN0LXZlcnRpY2FsLXRpbWVsaW5lLWNvbXBvbmVudC9zdHlsZS5taW4uY3NzJ1xyXG5cclxuaW1wb3J0ICcuLi9WZXJ0aWNhbFRpbWVsaW5lLmNzcydcclxuXHJcbmNsYXNzIEV4cGVyaWVuY2UgZXh0ZW5kcyBCYXNpY1BhZ2Uge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcylcclxuXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBleHBlcmlhbmNlczogRXhwZXJpYW5jZVNlcnZpY2UuZ2V0KCksXHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zdHlsZSA9IHtcclxuICAgICAgcGFkZGluZ0JvdHRvbTogMCxcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbmRlckNvbnRlbnQoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1Yi1iYXNpYy1wYWdlIGV4cGVyaWVuY2UtcGFnZVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXhwZXJpZW5jZS1iYWNrZ3JvdW5kXCIgLz5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmdUb3A6ICc2NHB4JyB9fT5cclxuICAgICAgICAgIDxUaXRsZSB0ZXh0PVwiTWVzIGV4cMOpcmllbmNlc1wiIG5vTWFyZ2luIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPFZlcnRpY2FsVGltZWxpbmUgbGF5b3V0PVwiMS1jb2x1bW5cIj5cclxuICAgICAgICAgIHsgdGhpcy5zdGF0ZS5leHBlcmlhbmNlcy5tYXAoKGV4cGVyaWFuY2UsIGlkeCkgPT4gKFxyXG4gICAgICAgICAgICA8VmVydGljYWxUaW1lbGluZUVsZW1lbnRcclxuICAgICAgICAgICAgICBrZXk9e2V4cGVyaWFuY2UudGl0bGV9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgdmVydGljYWwtdGltZWxpbmUtZWxlbWVudCAke2lkeCA9PT0gMCA/ICdlbGVtZW50LWNvbnRlbnQtZmlyc3QnIDogJyd9YH1cclxuICAgICAgICAgICAgICBkYXRlPXsoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmtcIj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4+e2V4cGVyaWFuY2UuZGF0ZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIHtleHBlcmlhbmNlLnByb2plY3RVcmwgPyAnIHwgJyA6ICcnfVxyXG4gICAgICAgICAgICAgICAgICB7ZXhwZXJpYW5jZS5wcm9qZWN0VXJsICYmIChcclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17ZXhwZXJpYW5jZS5wcm9qZWN0VXJsfSBjbGFzc05hbWU9XCJ2ZXJ0aWNhbC10aW1lbGluZS1lbGVtZW50LWxpbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICBWT0lSIExFIFBST0pFVFxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIGljb25TdHlsZT17eyBiYWNrZ3JvdW5kOiAnIzMzMWM1ZCcsIGNvbG9yOiAnI2ZmZicgfX1cclxuICAgICAgICAgICAgICBpY29uPXtcclxuICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e2BpbWFnZXMtd2VicC9leHBlcmlhbmNlcy8ke2V4cGVyaWFuY2UubG9nb31gfSBhbHQ9e2V4cGVyaWFuY2UudGl0bGV9IC8+XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInZlcnRpY2FsLXRpbWVsaW5lLWVsZW1lbnQtdGl0bGVcIj57ZXhwZXJpYW5jZS50aXRsZX08L2gzPlxyXG4gICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ2ZXJ0aWNhbC10aW1lbGluZS1lbGVtZW50LXN1YnRpdGxlXCI+e2V4cGVyaWFuY2Uuc3VidGl0bGV9PC9oND5cclxuICAgICAgICAgICAgICA8RGVzY3JpcHRpb24gdGV4dD17ZXhwZXJpYW5jZS50ZXh0fSAvPlxyXG4gICAgICAgICAgICA8L1ZlcnRpY2FsVGltZWxpbmVFbGVtZW50PlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9WZXJ0aWNhbFRpbWVsaW5lPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEV4cGVyaWVuY2VcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuaW1wb3J0IE1lZGlhcyBmcm9tICcuLi9jb21wb25lbnQvbWVkaWFzL01lZGlhcydcclxuXHJcbmltcG9ydCBSb3cgZnJvbSAnLi4vbGF5b3V0L3Jvdy9Sb3cnXHJcbmltcG9ydCBJbWFnZSBmcm9tICcuLi9JbWFnZSdcclxuXHJcbmltcG9ydCBEZXNjcmlwdGlvbiBmcm9tICcuLi9jb21wb25lbnQvZGVzY3JpcHRpb24vRGVzY3JpcHRpb24nXHJcblxyXG5pbXBvcnQgQmFzaWNQYWdlIGZyb20gJy4vQmFzaWNQYWdlJ1xyXG5cclxuaW1wb3J0ICcuL0xhbmRpbmcuY3NzJ1xyXG5cclxuY2xhc3MgTGFuZGluZyBleHRlbmRzIEJhc2ljUGFnZSB7XHJcbiAgLy8gYmVjYXVzZSBpJ20gbGF6eSA6KVxyXG4gIHN0YXRpYyBnZXRBZ2UoKSB7XHJcbiAgICBjb25zdCBiaXJ0aGRheSA9ICtuZXcgRGF0ZSgnMTk5Ni0xMS0xNCcpO1xyXG4gICAgcmV0dXJuICgoRGF0ZS5ub3coKSAtIGJpcnRoZGF5KSAvICgzMTU1NzYwMDAwMCkpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGlzRGF5KCkge1xyXG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKClcclxuICAgIGNvbnN0IGhvdXJzID0gZGF0ZS5nZXRIb3VycygpXHJcblxyXG4gICAgcmV0dXJuIGhvdXJzID49IDYgJiYgaG91cnMgPCAxN1xyXG4gIH1cclxuXHJcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXHJcbiAgcmVuZGVyQ29udGVudCgpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFuZGluZy1jb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhbmRpbmctYmFja2dyb3VuZFwiIC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLXRleHQtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJmaXJzdC10ZXh0XCI+XHJcbiAgICAgICAgICAgICAge0xhbmRpbmcuaXNEYXkoKSA/ICdCb25qb3VyJyA6ICdCb25zb2lyJ31cclxuICAgICAgICAgICAgICAsIGplIHN1aXMgTWVoZGkuXHJcbiAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgIDxoMT5Ew6l2ZWxvcHBldXIgRnJlZWxhbmNlIFdFQiAvIE1PQklMRS48L2gxPlxyXG4gICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBtYXJnaW5Ub3A6ICc4cHgnIH19PlxyXG4gICAgICAgICAgICAgIDxEZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgZm9udFNpemU6ICcxLjc1ZW0nLCBtYXJnaW46ICcyZW0gMCcgfX1cclxuICAgICAgICAgICAgICAgIHRleHQ9XCJNZXMgZXhww6lyaWVuY2VzIMOgIHRyYXZlcnMgdW5lIG11bHRpdHVkZSBkZSB0ZWNobm9sb2dpZXMgbSdvbnQgcGVybWlzIGTigJlhY3F1w6lyaXIgdW5lIGV4cGVydGlzZSBkZXMgbGFuZ2FnZXMgZGUgZMOpdmVsb3BwZW1lbnQgZGUgc2l0ZSBpbnRlcm5ldCBldCBkJ2FwcGxpY2F0aW9uIG1vYmlsZS48YnIvPkplIHZvdXMgYWNjb21wYWduZSBkYW5zIGxhIHLDqWFsaXNhdGlvbiBkZSB2b3RyZSBwcm9qZXQgZGUgc2EgY29uY2VwdGlvbiDDoCBzYSBsaXZyYWlzb24uXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDxSb3cgY2xhc3NOYW1lPVwibWVkaWEtY29udGFpbmVyLXJvd1wiPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxpbmtcIj5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvd29ya1wiID5Wb2lyIG1lcyBwcm9qZXRzPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8TWVkaWFzIGNsYXNzTmFtZT1cImJwLWxhcmdlXCIgLz5cclxuICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGFsaWduU2VsZjogJ2NlbnRlcicsIHpJbmRleDogMiB9fT5cclxuICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICBzcmM9XCIvaW1hZ2VzLXdlYnAvbWVoZGkucG5nXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibGFuZGluZy1hdmF0YXItaW1hZ2VcIlxyXG4gICAgICAgICAgICBhbHQ9XCJNZWhkaSBNZWRkb3VyXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGFuZGluZ1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcbmltcG9ydCBMYW5kaW5nUGFnZSBmcm9tICcuL0xhbmRpbmcnXHJcbmltcG9ydCBQcm9qZWN0TGlzdFBhZ2UgZnJvbSAnLi9Qcm9qZWN0TGlzdCdcclxuaW1wb3J0IFNraWxsUGFnZSBmcm9tICcuL1NraWxsJ1xyXG5pbXBvcnQgRXhwZXJpZW5jZVBhZ2UgZnJvbSAnLi9FeHBlcmllbmNlJ1xyXG5cclxuaW1wb3J0IFNjcm9sbGVyIGZyb20gJy4uL2NvbXBvbmVudC9TY3JvbGxlcidcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnQvZm9vdGVyL0Zvb3RlcidcclxuXHJcbmltcG9ydCBMb2NhdGlvbiBmcm9tICcuLi9Mb2NhdGlvbidcclxuXHJcbmltcG9ydCAnLi9NYWluU2Nyb2xsUGFnZS5jc3MnXHJcblxyXG5jbGFzcyBNYWluU2Nyb2xsUGFnZSBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKVxyXG4gICAgdGhpcy5wYWdlSWRzID0gTG9jYXRpb24ubGlua3MubWFwKChsKSA9PiBsLmxpbmspXHJcbiAgICB0aGlzLm9uU2Nyb2xsID0gdGhpcy5vblNjcm9sbC5iaW5kKHRoaXMpXHJcbiAgICB0aGlzLnBhdGhuYW1lID0gTG9jYXRpb24ucGF0aG5hbWUocHJvcHMucm91dGVyKVxyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50V2lsbFVwZGF0ZSgpIHtcclxuICAgIHRoaXMucGF0aG5hbWUgPSBMb2NhdGlvbi5wYXRobmFtZSh0aGlzLnByb3BzLnJvdXRlcilcclxuICB9XHJcblxyXG4gIG9uU2Nyb2xsKGluZGV4KSB7XHJcbiAgICBjb25zdCB7IHJvdXRlciB9ID0gdGhpcy5wcm9wc1xyXG5cclxuICAgIHJvdXRlci5wdXNoKGAvJHt0aGlzLnBhZ2VJZHNbaW5kZXhdfWAsIHVuZGVmaW5lZCwgeyBzaGFsbG93OiB0cnVlIH0pXHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8U2Nyb2xsZXIgY2xhc3NOYW1lPVwibWFpbi1zY3JvbGxlclwiIG9uU2Nyb2xsPXt0aGlzLm9uU2Nyb2xsfSBpbmRleD17dGhpcy5wYWdlSWRzLmluZGV4T2YodGhpcy5wYXRobmFtZSl9PlxyXG4gICAgICAgIDxkaXYgaWQ9XCJzY3JvbGwtaG9tZS1jb250YWluZXJcIiBjbGFzc05hbWU9XCJjaGlsZHJlblwiPlxyXG4gICAgICAgICAgPExhbmRpbmdQYWdlIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBpZD1cInNjcm9sbC13b3JrLWNvbnRhaW5lclwiIGNsYXNzTmFtZT1cImNoaWxkcmVuXCI+XHJcbiAgICAgICAgICA8UHJvamVjdExpc3RQYWdlIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBpZD1cInNjcm9sbC1za2lsbHMtY29udGFpbmVyXCIgY2xhc3NOYW1lPVwiY2hpbGRyZW5cIj5cclxuICAgICAgICAgIDxTa2lsbFBhZ2UgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGlkPVwic2Nyb2xsLWV4cGVyaWVuY2VzLWNvbnRhaW5lclwiIGNsYXNzTmFtZT1cImNoaWxkcmVuXCI+XHJcbiAgICAgICAgICA8RXhwZXJpZW5jZVBhZ2UgLz5cclxuICAgICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9TY3JvbGxlcj5cclxuICAgIClcclxuICB9XHJcbn1cclxuXHJcbi8vIE1haW5TY3JvbGxQYWdlLnByb3BUeXBlcyA9IHtcclxuLy8gICBoaXN0b3J5OiBQcm9wVHlwZXMub2JqZWN0T2YoUHJvcFR5cGVzLmFueSkuaXNSZXF1aXJlZCxcclxuLy8gfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihNYWluU2Nyb2xsUGFnZSlcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5pbXBvcnQgTG9jYXRpb24gZnJvbSAnLi4vTG9jYXRpb24nXHJcblxyXG5pbXBvcnQgUHJvamVjdHMgZnJvbSAnLi4vZGF0YS9wcm9qZWN0cy5qc29uJ1xyXG5cclxuaW1wb3J0IFRpdGxlIGZyb20gJy4uL2NvbXBvbmVudC90aXRsZS9UaXRsZSdcclxuaW1wb3J0IFByb2plY3QgZnJvbSAnLi4vY29tcG9uZW50L3Byb2plY3QvUHJvamVjdCdcclxuaW1wb3J0IFByb2plY3RPdmVybGF5IGZyb20gJy4uL2NvbXBvbmVudC9wcm9qZWN0L1Byb2plY3RPdmVybGF5J1xyXG5pbXBvcnQgU2tpbGwgZnJvbSAnLi4vY29tcG9uZW50L3NraWxsL1NraWxsJ1xyXG5cclxuaW1wb3J0IFJvdyBmcm9tICcuLi9sYXlvdXQvcm93L1JvdydcclxuaW1wb3J0IEl0ZW0gZnJvbSAnLi4vbGF5b3V0L2l0ZW0vSXRlbSdcclxuXHJcbmltcG9ydCBCYXNpY1BhZ2UgZnJvbSAnLi9CYXNpY1BhZ2UnXHJcblxyXG5pbXBvcnQgU2tpbGxTZXJ2aWNlIGZyb20gJy4uL3NlcnZpY2VzL1NraWxsJ1xyXG5cclxuaW1wb3J0ICcuL0Jhc2ljUGFnZS5jc3MnXHJcbmltcG9ydCAnLi9Qcm9qZWN0TGlzdC5jc3MnXHJcblxyXG5jbGFzcyBQcm9qZWN0TGlzdFBhZ2UgZXh0ZW5kcyBCYXNpY1BhZ2Uge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcylcclxuXHJcbiAgICB0aGlzLmhhc01vcmVTa2lsbCA9IGZhbHNlXHJcblxyXG4gICAgdGhpcy5wcm9qZWN0cyA9IFByb2plY3RzLmZpbHRlcigocCkgPT4gcC5pc1Zpc2libGUgIT09IGZhbHNlKVxyXG4gICAgdGhpcy5za2lsbHMgPSBTa2lsbFNlcnZpY2UuZ2V0RmlsdGVyYWJsZSgpXHJcblxyXG4gICAgdGhpcy5maWx0ZXJzID0gW11cclxuXHJcbiAgICB0aGlzLmZpbHRlcnNHcm91cCA9IFsnaU9TJywgJ05vZGVKUycsICdBbmd1bGFyJywgJ0xhcmF2ZWwnLCAnTW9uZ29EQicsICdDKysnXVxyXG5cclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIHByb2plY3RzOiB0aGlzLnByb2plY3RzLnNsaWNlKDApLFxyXG4gICAgICBza2lsbHM6IHRoaXMuc2tpbGxzLnNsaWNlKDApLFxyXG4gICAgICBzZWxlY3RlZFByb2plY3Q6IHVuZGVmaW5lZCxcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFkZFNraWxsRnJvbVFTKCkge1xyXG4gICAgY29uc3QgcGFyYW1Ta2lsbHMgPSBMb2NhdGlvbi5xcyh0aGlzLnByb3BzLnJvdXRlcikuc2tpbGwgPyBQcm9qZWN0TGlzdFBhZ2Uuc2tpbGxUb0FycmF5KExvY2F0aW9uLnFzKHRoaXMucHJvcHMucm91dGVyKS5za2lsbCkgOiBbXVxyXG4gICAgY29uc3QgbmV3U2tpbGxzID0gdGhpcy5zdGF0ZS5za2lsbHMuc2xpY2UoMClcclxuXHJcbiAgICBsZXQgcGFyYW1Ta2lsbE9ialxyXG5cclxuICAgIGNvbnN0IHNraWxsQ21wID0gKHNlY29uZCkgPT4gKGZpcnN0KSA9PiBmaXJzdC5uYW1lID09PSBzZWNvbmRcclxuXHJcbiAgICBpZiAocGFyYW1Ta2lsbHMgJiYgcGFyYW1Ta2lsbHMubGVuZ3RoID4gMCkge1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcmFtU2tpbGxzLmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICAgICAgcGFyYW1Ta2lsbE9iaiA9IFNraWxsU2VydmljZS5nZXRGcm9tTmFtZShwYXJhbVNraWxsc1tpXSlcclxuXHJcbiAgICAgICAgaWYgKG5ld1NraWxscy5maW5kSW5kZXgoc2tpbGxDbXAocGFyYW1Ta2lsbHNbaV0pKSA9PT0gLTEpIHtcclxuICAgICAgICAgIGlmICh0aGlzLmhhc01vcmVTa2lsbCA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgdGhpcy5maWx0ZXJzR3JvdXAudW5zaGlmdChwYXJhbVNraWxsc1tpXSlcclxuICAgICAgICAgICAgdGhpcy5oYXNNb3JlU2tpbGwgPSB0cnVlXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBuZXdTa2lsbHMudW5zaGlmdChwYXJhbVNraWxsT2JqKVxyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHNraWxsczogbmV3U2tpbGxzLFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGhhc1NraWxscyh0b0ZpbmQpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG9GaW5kLmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICAgIGlmICh0aGlzLmZpbHRlcnMuaW5kZXhPZih0b0ZpbmRbaV0pID09PSAtMSkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZVxyXG4gIH1cclxuXHJcbiAgZmlsdGVyRnJvbVFTKG5lZWRDbGVhckZpbHRlcnMgPSBmYWxzZSkge1xyXG4gICAgY29uc3QgcGFyYW1Ta2lsbHMgPSBMb2NhdGlvbi5xcyh0aGlzLnByb3BzLnJvdXRlcikuc2tpbGxcclxuXHJcbiAgICBpZiAocGFyYW1Ta2lsbHMgJiYgIXRoaXMuaGFzU2tpbGxzKFByb2plY3RMaXN0UGFnZS5za2lsbFRvQXJyYXkocGFyYW1Ta2lsbHMpKSkge1xyXG4gICAgICBpZiAobmVlZENsZWFyRmlsdGVycykge1xyXG4gICAgICAgIHRoaXMuZmlsdGVycyA9IFtdXHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5maWx0ZXJQcm9qZWN0cyhwYXJhbVNraWxscylcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdGhpcy5hZGRTa2lsbEZyb21RUygpXHJcbiAgICB0aGlzLmZpbHRlckZyb21RUygpXHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRVcGRhdGUoKSB7XHJcbiAgICB0aGlzLmFkZFNraWxsRnJvbVFTKClcclxuICAgIHRoaXMuZmlsdGVyRnJvbVFTKHRydWUpXHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZm10U2tpbGxzKHNraWxsKSB7XHJcbiAgICBpZiAoc2tpbGwpIHtcclxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoc2tpbGwpKSB7XHJcbiAgICAgICAgcmV0dXJuIHNraWxsXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBbc2tpbGxdXHJcbiAgICB9XHJcbiAgICByZXR1cm4gW11cclxuICB9XHJcblxyXG4gIHN0YXRpYyBza2lsbFRvQXJyYXkoc2tpbGwpIHtcclxuICAgIGNvbnN0IHNraWxscyA9IHRoaXMuZm10U2tpbGxzKHNraWxsKVxyXG4gICAgcmV0dXJuIHNraWxscy5tYXAoKG1Ta2lsbCkgPT4gZGVjb2RlVVJJQ29tcG9uZW50KG1Ta2lsbCkpXHJcbiAgfVxyXG5cclxuICBmaWx0ZXJQcm9qZWN0cyhza2lsbCwgbmVlZFRvVXBkYXRlVXJsID0gZmFsc2UpIHtcclxuICAgIGNvbnN0IGZpbHRlcmVkID0gW11cclxuICAgIGNvbnN0IHNraWxscyA9IFByb2plY3RMaXN0UGFnZS5za2lsbFRvQXJyYXkoc2tpbGwpXHJcbiAgICBsZXQgaWR4XHJcbiAgICBsZXQgaXNNYXRjaGluZyA9IHRydWVcclxuXHJcbiAgICBmb3IgKGxldCBrID0gMDsgayA8IHNraWxscy5sZW5ndGg7IGsgKz0gMSkge1xyXG4gICAgICBpZHggPSB0aGlzLmZpbHRlcnMuaW5kZXhPZihza2lsbHNba10pXHJcbiAgICAgIGlmIChza2lsbHNba10gJiYgaWR4ID09PSAtMSkge1xyXG4gICAgICAgIHRoaXMuZmlsdGVycy5wdXNoKHNraWxsc1trXSlcclxuICAgICAgfSBlbHNlIGlmIChza2lsbHNba10pIHtcclxuICAgICAgICB0aGlzLmZpbHRlcnMuc3BsaWNlKGlkeCwgMSlcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wcm9qZWN0cy5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgICBpc01hdGNoaW5nID0gdHJ1ZVxyXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuZmlsdGVycy5sZW5ndGg7IGogKz0gMSkge1xyXG4gICAgICAgIGlmICh0aGlzLnByb2plY3RzW2ldLmxhbmd1YWdlcy5pbmRleE9mKHRoaXMuZmlsdGVyc1tqXSkgPT09IC0xKSB7XHJcbiAgICAgICAgICBpc01hdGNoaW5nID0gZmFsc2VcclxuICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChpc01hdGNoaW5nKSB7XHJcbiAgICAgICAgZmlsdGVyZWQucHVzaCh0aGlzLnByb2plY3RzW2ldKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAobmVlZFRvVXBkYXRlVXJsKSB7XHJcbiAgICAgIHRoaXMucHJvcHMucm91dGVyLnJlcGxhY2UoYC93b3JrPyR7dGhpcy5maWx0ZXJzLm1hcCgoZikgPT4gYHNraWxsPSR7ZW5jb2RlVVJJQ29tcG9uZW50KGYpfWApLmpvaW4oJyYnKX1gKVxyXG4gICAgfVxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHByb2plY3RzOiBmaWx0ZXJlZCxcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBnZXRTa2lsbEdyb3VwZWQoKSB7XHJcbiAgICBjb25zdCBncm91cGVkID0gdGhpcy5zdGF0ZS5za2lsbHMuc2xpY2UoMClcclxuICAgIGNvbnN0IGdyb3VwcyA9IFt7IGdyb3VwOiBbXSwgaWQ6IC0xIH1dXHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBncm91cGVkLmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICAgIGdyb3Vwc1tncm91cHMubGVuZ3RoIC0gMV0uZ3JvdXAucHVzaChncm91cGVkW2ldKVxyXG4gICAgICBpZiAodGhpcy5maWx0ZXJzR3JvdXAuaW5kZXhPZihncm91cGVkW2ldLm5hbWUpICE9PSAtMSkge1xyXG4gICAgICAgIGdyb3Vwcy5wdXNoKHsgZ3JvdXA6IFtdLCBpZDogZ3JvdXBzLmxlbmd0aCB9KVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGdyb3Vwc1xyXG4gIH1cclxuXHJcbiAgZ29Ub1Byb2plY3QocHJvamVjdCwgZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgc2VsZWN0ZWRQcm9qZWN0OiBwcm9qZWN0LFxyXG4gICAgfSwgKCkgPT4ge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB3aW5kb3cucHJvamVjdExpc3RUb1Byb2plY3RUcmFuc2l0aW9uID0gdHJ1ZVxyXG4gICAgICAgIHRoaXMucHJvcHMucm91dGVyLnB1c2goYC93b3JrLyR7cHJvamVjdC5uYW1lfWAsIHVuZGVmaW5lZCwgeyBzaGFsbG93OiB0cnVlIH0pXHJcbiAgICAgIH0sIDUwMClcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBjbGVhckZpbHRlcnMoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICB0aGlzLnByb3BzLnJvdXRlci5yZXBsYWNlKCcvd29yaycpXHJcbiAgICB0aGlzLmZpbHRlcnMgPSBbXVxyXG4gICAgdGhpcy5maWx0ZXJQcm9qZWN0cyh1bmRlZmluZWQpXHJcbiAgfVxyXG5cclxuICByZW5kZXJDb250ZW50KCkge1xyXG4gICAgY29uc3QgZmFrZVByb2plY3RzID0gbmV3IEFycmF5KDEwKS5tYXAoKHYsIGlkeCkgPT4gKHtcclxuICAgICAgLi4udGhpcy5wcm9qZWN0c1swXSxcclxuICAgICAgbmFtZTogYGZha2V8JHtpZHh9YCxcclxuICAgIH0pKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3ViLWJhc2ljLXBhZ2UgcHJvamVjdC1saXN0LWNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdC1iYWNrZ3JvdW5kXCIgLz5cclxuXHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nVG9wOiAnNjRweCcgfX0+XHJcbiAgICAgICAgICA8VGl0bGUgdGV4dD1cIk1lcyBwcm9qZXRzXCIgbm9NYXJnaW4gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Um93IHN0eWxlPXt7IG1hcmdpblRvcDogJzE2cHgnIH19PlxyXG4gICAgICAgICAgPFJvdyBjbGFzc05hbWU9XCJmaWx0ZXItY29udGFpbmVyIGJwLWxhcmdlXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImZpbHRlci10ZXh0XCIgc3R5bGU9e3sgY3Vyc29yOiBgJHt0aGlzLmZpbHRlcnMubGVuZ3RoID4gMCA/ICdwb2ludGVyJyA6ICdub3JtYWwnfWAgfX0gb25DbGljaz17dGhpcy5jbGVhckZpbHRlcnMuYmluZCh0aGlzKX0+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3ViVGl0bGVcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IHZpc2liaWxpdHk6IHRoaXMuZmlsdGVycy5sZW5ndGggPiAwID8gJ3Zpc2libGUnIDogJ2hpZGRlbicgfX0+KFgpIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIEZJTFRSRVNcclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICB7IHRoaXMuZ2V0U2tpbGxHcm91cGVkKCkubWFwKChncm91cCkgPT4gKFxyXG4gICAgICAgICAgICAgIDxSb3cgY2xhc3NOYW1lPVwiZmlsdGVyLXJvd1wiIGtleT17Z3JvdXAuaWR9PlxyXG4gICAgICAgICAgICAgICAge2dyb3VwLmdyb3VwLm1hcCgoc2tpbGwpID0+IChcclxuICAgICAgICAgICAgICAgICAgPEl0ZW0ga2V5PXtza2lsbC5uYW1lfSBvbkNsaWNrPXsoKSA9PiB0aGlzLmZpbHRlclByb2plY3RzKHNraWxsLm5hbWUsIHRydWUpfT5cclxuICAgICAgICAgICAgICAgICAgICA8U2tpbGxcclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e3NraWxsLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U9e3NraWxsLmJhY2tncm91bmRJbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcj17c2tpbGwuYmFja2dyb3VuZENvbG9yfVxyXG4gICAgICAgICAgICAgICAgICAgICAgbG9nbz17c2tpbGwubG9nb31cclxuICAgICAgICAgICAgICAgICAgICAgIGV4cGVyaWVuY2U9e3NraWxsLmV4cGVyaWVuY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICBpc1NlbGVjdGVkPXt0aGlzLmZpbHRlcnMuaW5kZXhPZihza2lsbC5uYW1lKSAhPT0gLTF9XHJcbiAgICAgICAgICAgICAgICAgICAgICBpc0xpdHRsZVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvSXRlbT5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvUm93PlxyXG5cclxuICAgICAgICAgIDxSb3cgY2VudGVyIGNsYXNzTmFtZT1cInByb2plY3QtbGlzdC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgeyB0aGlzLnN0YXRlLnByb2plY3RzLm1hcCgocHJvamVjdCkgPT4gKFxyXG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIG9uQ2xpY2s9eyhlKSA9PiB0aGlzLmdvVG9Qcm9qZWN0KHByb2plY3QsIGUpfSBrZXk9e3Byb2plY3QubmFtZX0gY2xhc3NOYW1lPVwicHJvamVjdC1jaGlsZC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxJdGVtPlxyXG4gICAgICAgICAgICAgICAgICA8UHJvamVjdFxyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcj17cHJvamVjdC5iYWNrZ3JvdW5kQ29sb3J9XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlPXtwcm9qZWN0LmJhY2tncm91bmRJbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICBuYW1lPXtwcm9qZWN0Lm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgbG9nbz17cHJvamVjdC5sb2dvfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9JdGVtPlxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgeyB0aGlzLnN0YXRlLnByb2plY3RzLmxlbmd0aCA9PT0gMCAmJiAoXHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibm8tcHJvamVjdC10ZXh0LWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gcm9sZT1cImltZ1wiIGFyaWEtbGFiZWw9XCJQYXMgZGUgcHJvamV0XCIgY2xhc3NOYW1lPVwiZW1vamktY29udGFpbmVyXCI+8J+YpTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzdWI+QXVjdW4gcHJvamV0PC9zdWI+XHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgPFByb2plY3RPdmVybGF5XHJcbiAgICAgICAgICBpblRyYW5zaXRpb25cclxuICAgICAgICAgIGlzVmlzaWJsZT17ISF0aGlzLnN0YXRlLnNlbGVjdGVkUHJvamVjdH1cclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcj17XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuc2VsZWN0ZWRQcm9qZWN0ID8gdGhpcy5zdGF0ZS5zZWxlY3RlZFByb2plY3QuYmFja2dyb3VuZENvbG9yIDogdW5kZWZpbmVkXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBsb2dvPXt0aGlzLnN0YXRlLnNlbGVjdGVkUHJvamVjdCA/IHRoaXMuc3RhdGUuc2VsZWN0ZWRQcm9qZWN0LmxvZ28gOiB1bmRlZmluZWR9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKFByb2plY3RMaXN0UGFnZSlcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXHJcblxyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcblxyXG5pbXBvcnQgVGl0bGUgZnJvbSAnLi4vY29tcG9uZW50L3RpdGxlL1RpdGxlJ1xyXG5pbXBvcnQgU2tpbGwgZnJvbSAnLi4vY29tcG9uZW50L3NraWxsL1NraWxsJ1xyXG5cclxuaW1wb3J0IFJvdyBmcm9tICcuLi9sYXlvdXQvcm93L1JvdydcclxuaW1wb3J0IEl0ZW0gZnJvbSAnLi4vbGF5b3V0L2l0ZW0vSXRlbSdcclxuXHJcbmltcG9ydCBCYXNpY1BhZ2UgZnJvbSAnLi9CYXNpY1BhZ2UnXHJcblxyXG5pbXBvcnQgU2tpbGxTZXJ2aWNlIGZyb20gJy4uL3NlcnZpY2VzL1NraWxsJ1xyXG5pbXBvcnQgV2luZG93U2l6ZSBmcm9tICcuLi9XaW5kb3dTaXplJ1xyXG5cclxuaW1wb3J0ICcuL1NraWxsUGFnZS5jc3MnXHJcblxyXG5mdW5jdGlvbiBGYWtlQ29udGFpbmVyKHsgY2hpbGRyZW4gfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbkZha2VDb250YWluZXIucHJvcFR5cGVzID0ge1xyXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkKS5pc1JlcXVpcmVkLFxyXG59XHJcblxyXG5jbGFzcyBTa2lsbFBhZ2UgZXh0ZW5kcyBCYXNpY1BhZ2Uge1xyXG4gIENvbnRhaW5lciA9IEZha2VDb250YWluZXJcclxuXHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKVxyXG4gICAgdGhpcy5za2lsbHMgPSBTa2lsbFNlcnZpY2UuZ2V0U2hvd2FibGUoKVxyXG5cclxuICAgIHRoaXMuZmFrZVNraWxscyA9IG5ldyBBcnJheSgxMCkubWFwKCh2LCBpZHgpID0+ICh7XHJcbiAgICAgIC4uLnRoaXMuc2tpbGxzWzBdLFxyXG4gICAgICBuYW1lOiBgZmFrZXwke2lkeH1gLFxyXG4gICAgfSkpXHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHRoaXMuQ29udGFpbmVyID0gV2luZG93U2l6ZS5pc0xhcmdlKCkgPyBMaW5rIDogRmFrZUNvbnRhaW5lclxyXG4gIH1cclxuXHJcbiAgcmVuZGVyQ29udGVudCgpIHtcclxuICAgIGNvbnN0IENvbnRhaW5lciA9IHRoaXMuQ29udGFpbmVyXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWItYmFzaWMtcGFnZVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2tpbGwtYmFja2dyb3VuZFwiIC8+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nVG9wOiAnNjRweCcgfX0+XHJcbiAgICAgICAgICA8VGl0bGUgdGV4dD1cIk1lcyBza2lsbHNcIiBub01hcmdpbiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VidGV4dC1jb250YWluZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXhwZXJpYW5jZS1wcmV2aWV3XCIgLz5cclxuICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRTaXplOiAnMjJweCcsIHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnIH19PkFubsOpZXMgZCYjMzk7ZXhww6lyaWVuY2U8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPFJvdyBzdHlsZT17eyBtYXJnaW5Ub3A6ICc2NHB4JyB9fSBjZW50ZXI+XHJcbiAgICAgICAgICB7IHRoaXMuc2tpbGxzLm1hcCgoc2tpbGwpID0+IChcclxuICAgICAgICAgICAgPEl0ZW0ga2V5PXtza2lsbC5uYW1lfT5cclxuICAgICAgICAgICAgICA8Q29udGFpbmVyIHRvPXtgL3dvcms/c2tpbGw9JHtlbmNvZGVVUklDb21wb25lbnQoc2tpbGwubmFtZSl9YH0+XHJcbiAgICAgICAgICAgICAgICA8U2tpbGxcclxuICAgICAgICAgICAgICAgICAgbmFtZT17c2tpbGwubmFtZX1cclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yPXtza2lsbC5iYWNrZ3JvdW5kQ29sb3J9XHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZT17c2tpbGwuYmFja2dyb3VuZEltYWdlfVxyXG4gICAgICAgICAgICAgICAgICBleHBlcmllbmNlPXtza2lsbC5leHBlcmllbmNlfVxyXG4gICAgICAgICAgICAgICAgICBsb2dvPXtza2lsbC5sb2dvfVxyXG4gICAgICAgICAgICAgICAgICBzaG93RXhwZXJpZW5jZVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgPC9JdGVtPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgICB7IHRoaXMuZmFrZVNraWxscy5tYXAoKHNraWxsKSA9PiAoXHJcbiAgICAgICAgICAgIDxJdGVtIGtleT17c2tpbGwubmFtZX0gc3R5bGU9e3sgdmlzaWJpbGl0eTogJ2hpZGRlbicsIGhlaWdodDogJzBweCcgfX0+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC93b3JrP3NraWxsPSR7ZW5jb2RlVVJJQ29tcG9uZW50KHNraWxsLm5hbWUpfWB9PlxyXG4gICAgICAgICAgICAgICAgPFNraWxsXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9e3NraWxsLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcj17c2tpbGwuYmFja2dyb3VuZENvbG9yfVxyXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U9e3NraWxsLmJhY2tncm91bmRJbWFnZX1cclxuICAgICAgICAgICAgICAgICAgZXhwZXJpZW5jZT17c2tpbGwuZXhwZXJpZW5jZX1cclxuICAgICAgICAgICAgICAgICAgbG9nbz17c2tpbGwubG9nb31cclxuICAgICAgICAgICAgICAgICAgc2hvd0V4cGVyaWVuY2VcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L0l0ZW0+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L1Jvdz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTa2lsbFBhZ2VcclxuIiwiaW1wb3J0IHNtb290aHNjcm9sbCBmcm9tICdzbW9vdGhzY3JvbGwtcG9seWZpbGwnO1xyXG5pbXBvcnQgJ2ludGVyc2VjdGlvbi1vYnNlcnZlcic7XHJcblxyXG5pbXBvcnQgJ2NvcmUtanMnO1xyXG5cclxuY29uc3QgcG9seWZpbGwgPSAoKSA9PiBzbW9vdGhzY3JvbGwucG9seWZpbGwoKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcG9seWZpbGwiLCJpbXBvcnQgZXhwZXJpZW5jZXMgZnJvbSAnLi4vZGF0YS9leHBlcmlhbmNlcy5qc29uJ1xyXG5cclxuY2xhc3MgRXhwZXJpZW5jZVNlcnZpY2Uge1xyXG4gIHN0YXRpYyBnZXQoKSB7XHJcbiAgICByZXR1cm4gZXhwZXJpZW5jZXNcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEV4cGVyaWVuY2VTZXJ2aWNlXHJcbiIsImltcG9ydCBza2lsbHMgZnJvbSAnLi4vZGF0YS9za2lsbHMuanNvbidcclxuXHJcbmNsYXNzIFNraWxsU2VydmljZSB7XHJcbiAgc3RhdGljIGdldCgpIHtcclxuICAgIHJldHVybiBza2lsbHNcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXRTaG93YWJsZSgpIHtcclxuICAgIHJldHVybiBza2lsbHMuZmlsdGVyKChza2lsbCkgPT4gc2tpbGwuaXNTaG93YWJsZSAhPT0gZmFsc2UpXHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0RmlsdGVyYWJsZSgpIHtcclxuICAgIHJldHVybiBza2lsbHMuZmlsdGVyKChza2lsbCkgPT4gc2tpbGwuaXNGaWx0ZXJhYmxlICE9PSBmYWxzZSlcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXRGcm9tTmFtZShuYW1lKSB7XHJcbiAgICByZXR1cm4gc2tpbGxzLmZpbmQoKHNraWxsKSA9PiBza2lsbC5uYW1lID09PSBuYW1lKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2tpbGxTZXJ2aWNlXHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaW50ZXJzZWN0aW9uLW9ic2VydmVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInF1ZXJ5LXN0cmluZ1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC12ZXJ0aWNhbC10aW1lbGluZS1jb21wb25lbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNtb290aHNjcm9sbC1wb2x5ZmlsbFwiKTsiXSwic291cmNlUm9vdCI6IiJ9