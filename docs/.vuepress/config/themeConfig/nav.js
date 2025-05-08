// nav
module.exports = [
  { text: "首页", link: "/", icon: "reco-home" },
  {
    text: "前端",
    link: "",
    icon: "",
    items: [
      {
        text: "文档教程",
        items: [
          { text: "Vue 文档", link: "https://cn.vuejs.org/guide/introduction", icon: "reco-blog" },
          { text: "慕课教程", link: "https://www.icourse163.org/", icon: "reco-blog" },
          { text: "网道教程", link: "https://wangdoc.com/", icon: "reco-blog" },
          { text: "echarts实例", link: "https://www.makeapie.cn/echarts", icon: "reco-blog" },
          { text: "DataV可视化组件", link: "http://datav.jiaminghi.com/", icon: "reco-blog" },
          { text: "React 文档", link: "https://react.docschina.org/", icon: "reco-blog" },
          { text: "Node 文档", link: "https://nodejs.org/zh-cn", icon: "reco-blog" },
          { text: "菜鸟教程", link: "https://www.runoob.com/", icon: "reco-blog" },
          { text: "印记中文", link: "https://www.docschina.org/", icon: "reco-blog" },
        ],
      },
    ],
  },

  {
    text: "索引",
    icon: "reco-api",
    items: [
      { text: "分类", link: "/categories/", icon: "reco-category" },
      { text: "标签", link: "/tags/", icon: "reco-tag" },
      { text: "归档", link: "/archives/", icon: "reco-date" },
    ],
  },
  { text: "留言板", link: "/bookshop/message-board/", icon: "reco-suggestion" },
  {
    text: "关于",
    icon: "reco-message",
    items: [
      {
        text: "联系",
        items: [
          { text: "GitHub", link: "https://github.com/wudeh", icon: "reco-github" },
          { text: "关于我", link: "/bookshop/linkme/", icon: "reco-account" },
        ],
      },
      {
        text: "博客",
        items: [
          { text: "本站源码", link: "https://github.com/wudeh/wudeh.github.io", icon: "reco-document" },
          // { text: "老版博客", link: "https://wudeh.github.io/old-blog", icon: "reco-document" },
        ],
      },
      // {
      //   text: "其他",
      //   items: [{ text: "友情链接", link: "/bookshop/friendslink/", icon: "reco-friend" }],
      // },
    ],
  },
];
