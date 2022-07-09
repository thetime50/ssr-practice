export default function LocaleRoutesModule() {
  // 引入就报错
  this.nuxt.hook("pages:extend", (pages: Array<any>) => {
    const localeRoutes = [
      {
        path: "/",
        redirect: "/home",
      },
    ];
    // localeRoutes = localeRoutes.concat( pages.reduce((all,page) => {
    //     if(page.name == 'err404'){
    //         all.push({
    //             name: '404',
    //             path: '*',
    //             file: page.file
    //         })
    //     }
    //     return all
    // },[]))
    pages.push(...localeRoutes);
  });
}
