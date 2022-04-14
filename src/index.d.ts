import { Plugin } from 'vite';

export default resolveExternals;
declare const resolveExternals: ResolveExternals;

export interface ResolveExternals {
  (externals: Record<string, string | ((id: string) => string | Promise<string>)>): Plugin;
}
