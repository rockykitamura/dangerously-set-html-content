(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react/jsx-runtime'), require('react')) :
    typeof define === 'function' && define.amd ? define(['react/jsx-runtime', 'react'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.DangerouslySetHtmlContent = factory(global.jsxRuntime, global.React));
})(this, (function (jsxRuntime, react) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function DangerouslySetHtmlContent(_a) {
      var html = _a.html;
          _a.dangerouslySetInnerHTML;
          var rest = __rest(_a, ["html", "dangerouslySetInnerHTML"]); // We remove 'dangerouslySetInnerHTML' from props passed to the div


      var divRef = react.useRef(null);
      react.useEffect(function () {
        if (!html || !divRef.current) throw "html prop cant't be null";
        var slotHtml = document.createRange().createContextualFragment(html); // Create a 'tiny' document and parse the html string

        divRef.current.innerHTML = ''; // Clear the container

        divRef.current.appendChild(slotHtml); // Append the new content
      }, [html, divRef]);
      return jsxRuntime.jsx("div", __assign({}, rest, {
        ref: divRef
      }), void 0);
    }

    return DangerouslySetHtmlContent;

}));
