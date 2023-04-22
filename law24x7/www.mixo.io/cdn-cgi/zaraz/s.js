(function (w, d) {
  zaraz.debug = (eC = "") => {
    document.cookie = `zarazDebug=${eC}; path=/`;
    location.reload();
  };
  window.zaraz._al = function (dR, dS, dT) {
    w.zaraz.listeners.push({ item: dR, type: dS, callback: dT });
    dR.addEventListener(dS, dT);
  };
  zaraz.preview = (dU = "") => {
    document.cookie = `zarazPreview=${dU}; path=/`;
    location.reload();
  };
  zaraz.i = function (et) {
    const eu = d.createElement("div");
    eu.innerHTML = unescape(et);
    const ev = eu.querySelectorAll("script");
    for (let ew = 0; ew < ev.length; ew++) {
      const ex = d.createElement("script");
      ev[ew].innerHTML && (ex.innerHTML = ev[ew].innerHTML);
      for (const ey of ev[ew].attributes) ex.setAttribute(ey.name, ey.value);
      d.head.appendChild(ex);
      ev[ew].remove();
    }
    d.body.appendChild(eu);
  };
  zaraz.f = async function (ez, eA) {
    const eB = { credentials: "include", keepalive: !0, mode: "no-cors" };
    if (eA) {
      eB.method = "POST";
      eB.body = new URLSearchParams(eA);
      eB.headers = { "Content-Type": "application/x-www-form-urlencoded" };
    }
    return await fetch(ez, eB);
  };
  window.zaraz._p = async (a) =>
    new Promise((b) => {
      if (a) {
        a.e &&
          a.e.forEach((c) => {
            try {
              new Function(c)();
            } catch (d) {
              console.error(`Error executing script: ${c}\n`, d);
            }
          });
        Promise.allSettled((a.f || []).map((e) => fetch(e[0], e[1])));
      }
      b();
    });
  zaraz.pageVariables = {};
  zaraz.__zcl = {};
  zaraz.track = async function (dY, dZ, d_) {
    return new Promise((ea, eb) => {
      const ec = { name: dY, data: {} };
      for (const ed of [localStorage, sessionStorage])
        Object.keys(ed || {})
          .filter((ef) => ef.startsWith("_zaraz_"))
          .forEach((ee) => {
            try {
              ec.data[ee.slice(7)] = JSON.parse(ed.getItem(ee));
            } catch {
              ec.data[ee.slice(7)] = ed.getItem(ee);
            }
          });
      Object.keys(zaraz.pageVariables).forEach(
        (eg) => (ec.data[eg] = JSON.parse(zaraz.pageVariables[eg]))
      );
      Object.keys(zaraz.__zcl).forEach(
        (eh) => (ec.data[`__zcl_${eh}`] = zaraz.__zcl[eh])
      );
      ec.data.__zarazMCListeners = zaraz.__zarazMCListeners;
      //
      ec.data = { ...ec.data, ...dZ };
      ec.zarazData = zarazData;
      fetch("/cdn-cgi/zaraz/t", {
        credentials: "include",
        keepalive: !0,
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(ec),
      })
        .catch(() => {
          //
          return fetch("/cdn-cgi/zaraz/t", {
            credentials: "include",
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(ec),
          });
        })
        .then(function (ej) {
          zarazData._let = new Date().getTime();
          ej.ok || eb();
          return 204 !== ej.status && ej.json();
        })
        .then(async (ei) => {
          await zaraz._p(ei);
          "function" == typeof d_ && d_();
        })
        .finally(() => ea());
    });
  };
  zaraz.set = function (ek, el, em) {
    try {
      el = JSON.stringify(el);
    } catch (en) {
      return;
    }
    prefixedKey = "_zaraz_" + ek;
    sessionStorage && sessionStorage.removeItem(prefixedKey);
    localStorage && localStorage.removeItem(prefixedKey);
    delete zaraz.pageVariables[ek];
    if (void 0 !== el) {
      em && "session" == em.scope
        ? sessionStorage && sessionStorage.setItem(prefixedKey, el)
        : em && "page" == em.scope
        ? (zaraz.pageVariables[ek] = el)
        : localStorage && localStorage.setItem(prefixedKey, el);
      zaraz.__watchVar = { key: ek, value: el };
    }
  };
  for (const { m: eo, a: ep } of zarazData.q.filter(({ m: eq }) =>
    ["debug", "set"].includes(eq)
  ))
    zaraz[eo](...ep);
  for (const { m: er, a: es } of zaraz.q) zaraz[er](...es);
  delete zaraz.q;
  delete zarazData.q;
  zaraz.fulfilTrigger = function (cL, cM, cN, cO) {
    zaraz.__zarazTriggerMap || (zaraz.__zarazTriggerMap = {});
    zaraz.__zarazTriggerMap[cL] || (zaraz.__zarazTriggerMap[cL] = "");
    zaraz.__zarazTriggerMap[cL] += "*" + cM + "*";
    zaraz.track(
      "__zarazEmpty",
      { ...cN, __zarazClientTriggers: zaraz.__zarazTriggerMap[cL] },
      cO
    );
  };
  window.dataLayer = w.dataLayer || [];
  zaraz._processDataLayer = (e_) => {
    for (const fa of Object.entries(e_))
      zaraz.set(fa[0], fa[1], { scope: "page" });
    if (e_.event) {
      if (
        zarazData.dataLayerIgnore &&
        zarazData.dataLayerIgnore.includes(e_.event)
      )
        return;
      let fb = {};
      for (let fc of dataLayer.slice(0, dataLayer.indexOf(e_) + 1))
        fb = { ...fb, ...fc };
      delete fb.event;
      e_.event.startsWith("gtm.") || zaraz.track(e_.event, fb);
    }
  };
  const eZ = w.dataLayer.push;
  Object.defineProperty(w.dataLayer, "push", {
    configurable: !0,
    enumerable: !1,
    writable: !0,
    value: function (...fd) {
      let fe = eZ.apply(this, fd);
      zaraz._processDataLayer(fd[0]);
      return fe;
    },
  });
  dataLayer.forEach((ff) => zaraz._processDataLayer(ff));
  zaraz._cts = () => {
    zaraz._timeouts && zaraz._timeouts.forEach((ds) => clearTimeout(ds));
    zaraz._timeouts = [];
  };
  zaraz._rl = function () {
    w.zaraz.listeners &&
      w.zaraz.listeners.forEach((dt) =>
        dt.item.removeEventListener(dt.type, dt.callback)
      );
    window.zaraz.listeners = [];
  };
  history.pushState = function () {
    try {
      zaraz._rl();
      zaraz._cts && zaraz._cts();
    } finally {
      History.prototype.pushState.apply(history, arguments);
      setTimeout(() => {
        zarazData.l = d.location.href;
        zarazData.t = d.title;
        zaraz.pageVariables = {};
        zaraz.__zarazMCListeners = {};
        zaraz.track("__zarazSPA");
      }, 100);
    }
  };
  history.replaceState = function () {
    try {
      zaraz._rl();
      zaraz._cts && zaraz._cts();
    } finally {
      History.prototype.replaceState.apply(history, arguments);
      setTimeout(() => {
        zarazData.l = d.location.href;
        zarazData.t = d.title;
        zaraz.pageVariables = {};
        zaraz.track("__zarazSPA");
      }, 100);
    }
  };
  zaraz._p({
    e: [
      '(function(w,d){w.zarazData.executed.push("e6c6c1d4-626a-4807-8e88-6932f00a16fb");w.zarazData.executed.push("Pageview");})(window,document)',
    ],
  });
})(window, document);
