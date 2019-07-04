// In production, we register a service worker to serve assets from local cache.
// 在生产中，我们注册一个服务工作者来从本地缓存中提供资产。

// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on the "N+1" visit to a page, since previously
// cached resources are updated in the background.
// 这可以让应用程序在生产中的后续访问中加载更快，并给出
// 离线功能 但是，它也意味着开发人员（和用户）
// 只会在之前的“N + 1”访问页面时看到已部署的更新
// 缓存资源在后台更新。

// To learn more about the benefits of this model, read https://goo.gl/KwvDNy.
// This link also includes instructions on opting out of this behavior.
// 要了解有关此模型的好处的更多信息，请阅读https://goo.gl/KwvDNy。
// 此链接还包含有关选择退出此行为的说明。

// 是否使用的 localhost
// 其实就是通过匹配当前地址段，然后将其强制转化成 Boolean 型常量来确定是否是本地环境
const isLocalhost = Boolean(
  window.location.hostname === 'localhost' ||
    // [::1] is the IPv6 localhost address.
    window.location.hostname === '[::1]' ||
    // 127.0.0.1/8 is considered localhost for IPv4.
    window.location.hostname.match(
      /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
);

// 注册 service worker
export default function register() {
  // 如果当前是产品环境且浏览器支持 service worker 那么就进行注册操作
  // 之所以要是产品环境是因为开发环境总是进行缓存那么开发者要频繁的清空缓存才能获取最新的内容，这样不利于快速开发
  // 如果浏览器不支持 service worker 那么巧妇难为无米之炊，只能放弃注册
  if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
    // The URL constructor is available in all browsers that support SW.
    // URL构造函数在所有支持SW的浏览器中都可用。

    // 生成静态文件夹的路径，service worker 主要是用于缓存静态文件
    // 关于 URL 对象可以参考 https://developer.mozilla.org/zh-CN/docs/Web/API/URL/URL
    const publicUrl = new URL(process.env.PUBLIC_URL, window.location);
    // 如果静态文件与当前环境不是在同一个域下，那么注册没什么意义，那么直接返回
    if (publicUrl.origin !== window.location.origin) {
      // Our service worker won't work if PUBLIC_URL is on a different origin
      // from what our page is served on. This might happen if a CDN is used to
      // serve assets; see https://github.com/facebookincubator/create-react-app/issues/2374
      // 如果PUBLIC_URL位于不同的原点，我们的服务工作者将无法工作
      // 来自我们的页面。 如果使用CDN，可能会发生这种情况
      // 服务资产; 请参阅https://github.com/facebookincubator/create-react-app/issues/2374
      return;
    }

    // 当页面加载完毕之后才执行 service worker 的一番操作，主要是为了避免阻塞页面的加载
    window.addEventListener('load', () => {
      const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;

      if (!isLocalhost) {
        // Is not local host. Just register service worker
        // 不是本地域名。 只需注册 service worker
        registerValidSW(swUrl);
      } else {
        // This is running on localhost. Lets check if a service worker still exists or not.
        // 这是在localhost上运行的。 让我们检查 service worker 是否仍然存在。
        checkValidServiceWorker(swUrl);
      }
    });
  }
}

// 注册有效的 service worker
// 其中主要是通过注册 service worker 然后使用 service worker 提供的 API 来进行操作
// 比如发现有内容的更新，那么就会自动在后台进行安装，当安装结束之后再判断安装状态分别用用户进行提示
// 当然，也有异常处理，如果发生了异常，那么直接提示错误
function registerValidSW(swUrl) {
  navigator.serviceWorker
    .register(swUrl)
    .then(registration => {
      registration.onupdatefound = () => {
        const installingWorker = registration.installing;
        installingWorker.onstatechange = () => {
          if (installingWorker.state === 'installed') {
            if (navigator.serviceWorker.controller) {
              // At this point, the old content will have been purged and
              // the fresh content will have been added to the cache.
              // It's the perfect time to display a "New content is
              // available; please refresh." message in your web app.

              //此时，旧内容将被清除
              //新内容将被添加到缓存中。
              //这是展示“新内容”的最佳时机
              //可用; 请刷新。“您的网络应用中的消息。
              console.log('New content is available; please refresh.');
            } else {
              // At this point, everything has been precached.
              // It's the perfect time to display a
              // "Content is cached for offline use." message.
              //此时，所有内容都已被预先处理。
              //这是展示自己的最佳时机
              //“内容被缓存以供离线使用。” 信息。
              console.log('Content is cached for offline use.');
            }
          }
        };
      };
    })
    .catch(error => {
      console.error('Error during service worker registration:', error);
    });
}

// 检查 service worker 的状态
// 向 service worker 的后台服务申请资源，如果网络连接失败，
// 或者没有获取到 javascript 那么当 service worker 状态就绪的时候取消其注册状态，
// 并重新加载页面，如果申请到资源，那么就调用 registerValidSW 方法来进行加载。
function checkValidServiceWorker(swUrl) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl)
    .then(response => {
      // Ensure service worker exists, and that we really are getting a JS file.
      if (
        response.status === 404 ||
        response.headers.get('content-type').indexOf('javascript') === -1
      ) {
        // No service worker found. Probably a different app. Reload the page.
        navigator.serviceWorker.ready.then(registration => {
          registration.unregister().then(() => {
            window.location.reload();
          });
        });
      } else {
        // Service worker found. Proceed as normal.
        registerValidSW(swUrl);
      }
    })
    .catch(() => {
      console.log(
        'No internet connection found. App is running in offline mode.'
      );
    });
}

// 取消 service worker 的注册
export function unregister() {
  // 如果浏览器支持 service worker 且 service worker 处于就绪状态的时候，那么调用其提供的取消注册方法来进行操作
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    });
  }
}
