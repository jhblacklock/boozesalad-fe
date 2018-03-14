// const isProduction: boolean = process.env.NODE_ENV === "production";
//
// const additionalLoaders = [
//   {
//     test: /\.(scss)$/,
//     use: [
//       "style-loader",
//       `css-loader?importLoaders=2${isProduction ? "" : "&sourceMap"}`,
//       "resolve-url-loader",
//       "postcss-loader",
//       `sass-loader${
//         isProduction
//           ? ""
//           : "?outputStyle=expanded&sourceMap=true&sourceMapContents=true"
//       }`,
//     ],
//   },
//   {
//     test: /\.(css)$/,
//     use: [
//       "style-loader",
//       `css-loader?importLoaders=1${isProduction ? "" : "&sourceMap"}`,
//       "resolve-url-loader",
//       "postcss-loader",
//     ],
//   },
//   {
//     test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
//     loader: "url-loader?limit=10000&mimetype=application/font-woff",
//   },
//   {
//     test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
//     loader: "file-loader",
//   },
// ];
//
// const webpackClientConfig = config => ({
//   ...config,
//   module: {
//     ...config.module,
//     rules: [...config.module.rules, ...additionalLoaders],
//   },
// });
//
// const webpackServerConfig = config => ({
//   ...config,
//   module: {
//     ...config.module,
//     rules: [...config.module.rules, ...additionalLoaders],
//   },
// });

export default {
  webpackClientConfig: [],
  webpackServerConfig: [],
  webpackVendorDllConfig: [],
};
