import path from "path";
import dotenv from 'dotenv';

export function loadEnv() {
  const defaultEnv = dotenv.config({
    path: '.env.defaults',
  }) as any;

  const privEnv = dotenv.config({
    path: path.join('.env.private'),
  }) as any;

  return {
    ...defaultEnv.parsed,
    ...privEnv.parsed,
  };
}

export function loadParams(network: string) {
  return require(path.join(
    __dirname,
    '../deployments',
    network,
    'params.json',
  ));
}