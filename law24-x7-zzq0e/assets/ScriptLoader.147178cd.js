import {
  k as j,
  o as r,
  d as u,
  l as T,
  m as q,
  p as A,
  q as U,
  e as m,
  t as S,
  f as y,
  g as p,
  j as P,
  s as g,
  r as V,
  x as z,
  y as f,
  F as E,
} from "./vendor-vue.1ba39ed5.js";
import { _ as D } from "./UiButton.811fc2a3.js";
const G = {
    __name: "MetaPixel",
    props: { metaPixelId: { type: String, default: "" } },
    setup(n) {
      const e = n;
      return (
        j(() => {
          (function (t, i, c, a, o, l, s) {
            t.fbq ||
              ((o = t.fbq =
                function () {
                  o.callMethod
                    ? o.callMethod.apply(o, arguments)
                    : o.queue.push(arguments);
                }),
              t._fbq || (t._fbq = o),
              (o.push = o),
              (o.loaded = !0),
              (o.version = "2.0"),
              (o.queue = []),
              (l = i.createElement(c)),
              (l.async = !0),
              (l.src = a),
              (s = i.getElementsByTagName(c)[0]),
              s.parentNode.insertBefore(l, s));
          })(
            window,
            document,
            "script",
            "https://connect.facebook.net/en_US/fbevents.js"
          ),
            fbq("init", e == null ? void 0 : e.metaPixelId),
            fbq("track", "PageView");
        }),
        (t, i) => (
          r(),
          u(
            "noscript",
            null,
            `<img
      height="1"
      width="1"
      style="display: none"
      :src="\`https://www.facebook.com/tr?id=\${metaPixelId}&ev=PageView&noscript=1\`"
  />`
          )
        )
      );
    },
  },
  K = ["src"],
  R = {
    __name: "GoogleTagManager",
    props: { gtmId: { type: String, default: "" } },
    setup(n) {
      const e = n;
      if (
        (j(() => {
          (function (t, i, c, a, o) {
            (t[a] = t[a] || []),
              t[a].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
            var l = i.getElementsByTagName(c)[0],
              s = i.createElement(c),
              d = a != "dataLayer" ? "&l=" + a : "";
            (s.async = !0),
              (s.src = "https://www.googletagmanager.com/gtm.js?id=" + o + d),
              l.parentNode.insertBefore(s, l);
          })(
            window,
            document,
            "script",
            "dataLayer",
            e == null ? void 0 : e.gtmId
          );
        }),
        e != null && e.gtmId)
      ) {
        let t = function () {
          window != null && window.dataLayer && dataLayer.push(arguments);
        };
        (window.dataLayer = window.dataLayer || []),
          t("js", new Date()),
          t("config", e == null ? void 0 : e.gtmId);
      }
      return (t, i) => (
        r(),
        u(
          "iframe",
          {
            src: `https://www.googletagmanager.com/ns.html?id=${
              e == null ? void 0 : e.gtmId
            }`,
            height: "0",
            width: "0",
            style: { display: "none", visibility: "hidden" },
          },
          null,
          8,
          K
        )
      );
    },
  },
  F = {
    __name: "GoogleAnalytics",
    props: { g4aId: { type: String, default: "" } },
    setup(n) {
      const e = n;
      T({
        script: {
          src: `https://www.googletagmanager.com/gtag/js?id='${
            e == null ? void 0 : e.g4aId
          }');`,
          async: !0,
        },
      }),
        (window.dataLayer = window.dataLayer || []);
      function t() {
        window != null && window.dataLayer && dataLayer.push(arguments);
      }
      return (
        e != null &&
          e.g4aId &&
          (t("js", new Date()), t("config", e == null ? void 0 : e.g4aId)),
        (i, c) => null
      );
    },
  },
  H = {
    key: 0,
    class: "pointer-events-none fixed inset-x-0 bottom-0 z-50 px-6 pb-6",
  },
  O = {
    class:
      "pointer-events-auto max-w-xl rounded-xl bg-white p-6 shadow-lg ring-1 ring-gray-900/10",
  },
  J = { class: "text-sm leading-6 text-gray-900" },
  Q = { class: "mt-4 flex items-center gap-x-4" },
  W = q({
    __name: "CookieConsent",
    props: {
      content: { type: String, default: "" },
      policyLabel: { type: String, default: "" },
      policyLink: { type: String, default: "" },
      storageKey: { type: String, required: !0 },
      visible: { type: Boolean, default: !1 },
    },
    emits: ["consent"],
    setup(n, { emit: e }) {
      const t = n,
        [i] = A();
      let c = null;
      (c =
        window == null
          ? void 0
          : window.localStorage.getItem(t == null ? void 0 : t.storageKey)),
        t != null && t.visible && c === null && (i.value = !0);
      const a = () => {
        (i.value = !1),
          window == null ||
            window.localStorage.setItem(
              t == null ? void 0 : t.storageKey,
              "true"
            ),
          e("consent", !0);
      };
      return (o, l) => {
        const s = D;
        return U(i)
          ? (r(),
            u("div", H, [
              m("div", O, [
                m("p", J, S(n.content), 1),
                m("div", Q, [
                  y(
                    s,
                    { theme: "primary", onClick: a },
                    { default: p(() => [P(" Accept all ")]), _: 1 }
                  ),
                  y(
                    s,
                    {
                      theme: "link",
                      href: n.policyLink,
                      class: "text-secondary",
                    },
                    { default: p(() => [P(S(n.policyLabel), 1)]), _: 1 },
                    8,
                    ["href"]
                  ),
                  g(` <button
          @click="onReject"
          type="button"
          class="text-sm font-semibold leading-6 text-gray-900"
        >
          Reject all
        </button> `),
                ]),
              ]),
            ]))
          : g("v-if", !0);
      };
    },
  }),
  ee = q({
    __name: "ScriptLoader",
    props: {
      siteConfig: {
        type: Object,
        default() {
          return {};
        },
      },
      siteUrl: { type: String, default: "" },
    },
    setup(n) {
      var l, s, d, w, _;
      const e = n;
      window != null && window.zaraz && window.zaraz.set("ignore_gtm", !0);
      const t =
          (e == null ? void 0 : e.siteUrl) &&
          new URL(e == null ? void 0 : e.siteUrl),
        i = `${
          (l = t == null ? void 0 : t.hostname) == null
            ? void 0
            : l.replace("www.", "")
        }${t == null ? void 0 : t.pathname}-cookie-accept`;
      let c = null;
      c = window == null ? void 0 : window.localStorage.getItem(i);
      const a = V(!1);
      (d =
        (s = e == null ? void 0 : e.siteConfig) == null
          ? void 0
          : s.cookieConsent) != null &&
      d.visible &&
      c === "true"
        ? (a.value = !0)
        : (_ =
            (w = e == null ? void 0 : e.siteConfig) == null
              ? void 0
              : w.cookieConsent) != null && _.visible
        ? (a.value = !1)
        : (a.value = !0);
      const o = (h) => {
        h === !0 && (a.value = !0);
      };
      return (h, X) => {
        var x, v, I, C, k, b, L;
        const B = W,
          $ = F,
          N = R,
          M = G;
        return (
          r(),
          u(
            E,
            null,
            [
              y(
                B,
                z((x = n.siteConfig) == null ? void 0 : x.cookieConsent, {
                  onConsent: o,
                  storageKey: i,
                }),
                null,
                16
              ),
              a.value && (v = n.siteConfig) != null && v.g4aId
                ? (r(),
                  f(
                    $,
                    {
                      key: 0,
                      g4aId: (I = n.siteConfig) == null ? void 0 : I.g4aId,
                    },
                    null,
                    8,
                    ["g4aId"]
                  ))
                : g("v-if", !0),
              a.value && (C = n.siteConfig) != null && C.gtmId
                ? (r(),
                  f(
                    N,
                    {
                      key: 1,
                      gtmId: (k = n.siteConfig) == null ? void 0 : k.gtmId,
                    },
                    null,
                    8,
                    ["gtmId"]
                  ))
                : g("v-if", !0),
              a.value && (b = n.siteConfig) != null && b.metaPixelId
                ? (r(),
                  f(
                    M,
                    {
                      key: 2,
                      metaPixelId:
                        (L = n.siteConfig) == null ? void 0 : L.metaPixelId,
                    },
                    null,
                    8,
                    ["metaPixelId"]
                  ))
                : g("v-if", !0),
            ],
            64
          )
        );
      };
    },
  });
export { ee as _ };
