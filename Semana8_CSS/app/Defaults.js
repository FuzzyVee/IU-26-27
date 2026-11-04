import {d as S, u as B, r as a, o as C, c as r, a as m, b as t, w as c, n as I, e as u, f, v as p, i as x, F as g, g as y, t as h} from "#entry";
const T = {
    class: "font-medium z-10"
}
  , _ = {
    class: "flex flex-row mt-3"
}
  , j = {
    class: "grid grid-cols-1 md:grid-cols-2 gap-3 mt-6"
}
  , A = {
    class: "tori-card p-3"
}
  , q = {
    class: "list-disc list-inside text-sm text-stone-300"
}
  , L = {
    class: "tori-card p-3"
}
  , M = {
    class: "list-disc list-inside text-sm text-stone-300"
}
  , N = S({
    __name: "index",
    setup(R) {
        const v = B()
          , i = a("")
          , n = a("")
          , l = a(!1)
          , d = a("/frame0.webp");
        C( () => {
            const o = new Image;
            o.src = "/constellations-bg.avif",
            o.onload = () => {
                d.value = "/constellations-bg.avif"
            }
        }
        );
        const b = async () => {
            if (l.value)
                return;
            l.value = !0;
            const o = await $fetch("/api/ama", {
                method: "POST",
                body: {
                    question: i.value,
                    author: n.value
                }
            });
            if (l.value = !1,
            o.success)
                v.push({
                    path: "/ama/preview",
                    query: {
                        question: i.value,
                        author: n.value || "Anonymous"
                    }
                });
            else {
                alert(o.message);
                return
            }
        }
          , k = ["Musk", "Hypnosis", "Bad Ends", "Mind Control", "Rimjobs", "Ass-focused play", "Profile play", "Corruption", "Humiliation", "Crotch Sniffing", "Objectification", "Coercion / Blackmail", "Speech Restrictions", "Chastity", "Basically any kink that involves me losing control over myself, personality, memories, etc is hot as fuck"]
          , w = ["Farts", "Piss", "Blood", "Literally any liquid leaving the body other than cum"];
        return (o, e) => (m(),
        r("div", T, [t("h1", {
            class: "text-5xl items-self-center md:text-[5rem] lg:text-[5rem] font-bold bg-clip-text text-transparent bg-cover bg-center tracking-tighter leading-[1]",
            style: I(`background-color: var(--ui-color-primary-500);background-image: url('${u(d)}');`)
        }, " Queen of Rimjobs. Suki. ", 4), e[6] || (e[6] = t("div", {
            class: "tori-card mt-6"
        }, [t("p", {
            class: "text-sm text-stone-300"
        }, [f(" Hi! I'm Suki!! I'm a 26 year old software engineer who's super into horny stuff. This is my NSFW website where all of my horny projects will live. "), t("br"), t("br"), f(" Please keep in mind that i'm a sub, so all of my kinks n stuff are from a submissive perspective. I very much do enjoy having control taken from me <3 ")])], -1)), c(t("textarea", {
            class: "tori-card ring:transparent ring-0 outline-none text-sm w-full mt-6",
            placeholder: "Ask me anything!!! I'll answer on my Twitter @seri_knot <3",
            "onUpdate:modelValue": e[0] || (e[0] = s => x(i) ? i.value = s : null)
        }, null, 512), [[p, u(i)]]), t("div", _, [c(t("input", {
            class: "tori-card ring:transparent ring-0 outline-none text-xs w-full mr-3",
            placeholder: "Your name <3",
            "onUpdate:modelValue": e[1] || (e[1] = s => x(n) ? n.value = s : null)
        }, null, 512), [[p, u(n)]]), t("a", {
            class: "px-3 py-1.5 bg-primary-500 text-stone-200 rounded-lg cursor-pointer text-sm block flex-shrink-0 flex items-center justify-center",
            onClick: b
        }, " Submit question ")]), t("div", j, [t("div", A, [e[2] || (e[2] = t("h2", {
            class: "text-xl font-bold text-primary-500 mb-1"
        }, " Stuff i'm into. ", -1)), e[3] || (e[3] = t("p", {
            class: "text-xs text-stone-500 mb-3"
        }, " The higher the kink, the more i'm into it. ", -1)), t("ul", q, [(m(),
        r(g, null, y(k, s => t("li", {
            key: s
        }, h(s), 1)), 64))])]), t("div", L, [e[4] || (e[4] = t("h2", {
            class: "text-xl font-bold text-red-500 mb-1"
        }, " Stuff i'm not. ", -1)), e[5] || (e[5] = t("p", {
            class: "text-xs text-stone-500 mb-3"
        }, " Anything on this is a hard no for me. ", -1)), t("ul", M, [(m(),
        r(g, null, y(w, s => t("li", {
            key: s
        }, h(s), 1)), 64))])])]), e[7] || (e[7] = t("small", {
            class: "text-xs text-stone-600 mt-3 block"
        }, " No LLMs were used in the making of this website. ", -1))]))
    }
});
export {N as default};
