const React = window.React;
if (!React) throw new Error('window.React is not available for extension module rendering.');
export default function ServerRouteExample() {
    return (React.createElement("div", { className: 'rounded-ui border border-gray-600 bg-gray-700 p-6 mt-6' },
        React.createElement("h2", { className: 'text-xl font-bold' }, "Rextension is Here!"),
        React.createElement("p", { className: 'text-sm text-gray-300 mt-2' }, "yes! yes! yes! yes!")));
}
