import { Bot, Context, session, SessionFlavor } from "grammy";
import { I18n, I18nFlavor } from "@grammyjs/i18n";
import { BOT_TOKEN } from "./constants";
import { dataSource } from "./data-source";

interface SessionData {
  __language_code?: string;
}

type CustomContext = Context & SessionFlavor<SessionData> & I18nFlavor;
const bot = new Bot<CustomContext>(BOT_TOKEN);

const i18n = new I18n<CustomContext>({
  directory: 'src/locales',
  useSession: true,
  defaultLocale: 'en',
})

bot.use(session({
  initial() {
    return {};
  },
}))

bot.use(i18n);

bot.command('start', (ctx: CustomContext) => {
  ctx.reply(ctx.t('welcome'));
})

bot.command("language", async (ctx) => {
  if (ctx.match === "") {
    return await ctx.reply(ctx.t("language.specify-a-locale"));
  }

  // `i18n.locales` contains all the locales that have been registered
  if (!i18n.locales.includes(ctx.match)) {
    return await ctx.reply(ctx.t("language.invalid-locale"));
  }

  // `ctx.i18n.getLocale` returns the locale currently using.
  if ((await ctx.i18n.getLocale()) === ctx.match) {
    return await ctx.reply(ctx.t("language.already-set"));
  }

  await ctx.i18n.setLocale(ctx.match);
  await ctx.reply(ctx.t("language.language-set"));
});

dataSource
  .initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
    bot.start();
  })
  .catch((error) => {
    console.error('Error during Data Source initialization:', error);
  });
