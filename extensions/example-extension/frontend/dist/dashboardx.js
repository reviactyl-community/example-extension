const React = window.React;
if (!React) throw new Error('window.React is not available for extension module rendering.');
export default function DashboardExtensionWidget() {
    return (React.createElement("div", { className: 'rounded-ui border border-gray-600 bg-gray-700 p-4 mt-4' },
        React.createElement("h2", { className: 'text-lg font-bold' }, "Hello Rext!"),
        React.createElement("p", { className: 'text-sm text-gray-300' }, "yipie it works! Innjected at dashboard:router:below")));
}
