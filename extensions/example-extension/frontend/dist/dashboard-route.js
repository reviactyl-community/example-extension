const React = window.React;
if (!React) throw new Error('window.React is not available for extension module rendering.');
const __extReviactylMod0 = window.__REVIACTYL_MODULES?.["reviactyl/ui/Card"];
if (!__extReviactylMod0) throw new Error("Missing Reviactyl runtime module: reviactyl/ui/Card");
const Card = __extReviactylMod0.default ?? __extReviactylMod0;
export default function DashboardRouteExample() {
    return (React.createElement(Card, null,
        React.createElement("h2", { className: 'text-xl font-bold' }, "Dashboard Route Example"),
        React.createElement("p", { className: 'text-sm text-gray-300 mt-2' }, "This page is injected at /account/my-extension.")));
}
