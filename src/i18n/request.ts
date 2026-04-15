import {getRequestConfig} from 'next-intl/server';
import {routing} from './routing';
const common ="common"
const namespaces = ['init'];
export default getRequestConfig(async ({requestLocale}) => {
  let locale = await requestLocale;
  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }
  let messages: any = {};
  try {
    const Common =(await import (`../locales/${locale}/${common}.json`)).default
messages = { ...Common };
  } catch (error) {
    console.error(`Default namespace "${common}" not found ${error}`);
  }
  await Promise.all(
    namespaces.map(async (namespace) => {
      messages[namespace] = (
        await import(`../locales/${locale}/${namespace}.json`)
      ).default;
    })
  );
  return {
    locale,
    messages
  };
});