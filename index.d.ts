import 'laravel-mix';
import type { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

declare module 'laravel-mix' {
  interface Api {
    isWatching(): boolean;
    bundleAnalyzer(options: BundleAnalyzerPlugin.Options): this;
  }
}
