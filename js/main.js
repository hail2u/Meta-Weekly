var context = [
    {"title": "JavaScript Weekly", "url": "http://javascriptweekly.com/", "updated": "weekly", "type": "mail", "keywords": ["JavaScript", "Library", "Tools"], "rss": "http://javascriptweekly.com/rss", "twitter": "https://twitter.com/JavaScriptDaily"},
    {"title": "Dart Weekly", "url": "http://dartweekly.com/", "updated": "weekly", "type": "mail", "keywords": ["Dart", "JavaScript"], "rss": "", "twitter": ""},
    {"title": "HTML5 Weekly", "url": "http://html5weekly.com/", "updated": "weekly", "type": "mail", "keywords": ["HTML5"], "rss": "http://html5weekly.com/rss", "twitter": ""},
    {"title": "Node Weekly", "url": "http://nodeweekly.com/", "updated": "weekly", "type": "mail", "keywords": ["Node", "JavaScript"], "rss": "", "twitter": ""},
    {"title": "Web Tools Weekly ", "url": "http://webtoolsweekly.com/", "updated": "weekly", "type": "mail", "keywords": ["HTML", "CSS", "JavaScript", "Tools"], "rss": "http://us5.campaign-archive1.com/feed?u=ea228d7061e8bbfa8639666ad&id=104d6bcc2d", "twitter": "https://twitter.com/WebToolsWeekly"},
    {"title": "Open Web Platform Daily Digest", "url": "http://webplatformdaily.org/", "updated": "daily", "type": "web", "keywords": ["Web", "Spec", "HTML", "CSS", "JavaScript", "SNS"], "rss": "", "twitter": "https://twitter.com/simevidas"},
    {"title": "JS Central", "url": "http://jscentral.org/", "updated": "other", "type": "twitter", "keywords": ["Twitter", "JavaScript"], "rss": "", "twitter": "https://twitter.com/jscentral"},
    {"title": "The Morning Brew", "url": "http://blog.cwa.me.uk/", "updated": "daily", "type": "web", "keywords": [".NET", "JavaScript"], "rss": "http://blog.cwa.me.uk/feed/", "twitter": ""},
    {"title": "JSter", "url": "http://jster.net/blog", "updated": "monthly", "type": "web", "keywords": ["JavaScript", "Library"], "rss": "http://feeds.feedburner.com/jster", "twitter": ""},
    {"title": "Web Design Weekly", "url": "http://web-design-weekly.com/", "updated": "weekly", "type": "mail", "keywords": ["Design", "CSS"], "rss": "http://feeds.feedburner.com/webdesignweekly", "twitter": "https://twitter.com/wdweekly"},
    {"title": "Responsive Design Weekly", "url": "http://responsivedesignweekly.com/", "updated": "weekly", "type": "mail", "keywords": ["Design", "CSS"], "rss": "http://responsivedesignweekly.com/feed/", "twitter": "https://twitter.com/reswebdes"},
    {"title": "ng-newsletter", "url": "http://www.ng-newsletter.com/", "updated": "weekly", "type": "mail", "keywords": ["AngularJS", "JavaScript"], "rss": "", "twitter": "https://twitter.com/ngnewsletter"},
    {"title": "Peter Beverloo", "url": "http://peter.sh/", "updated": "weekly", "type": "web", "keywords": ["Chrome", "Blink", "Browser"], "rss": "http://peter.sh/feed/", "twitter": "https://twitter.com/beverloo"},
    {"title": "Surfin' Safari - The WebKit Blog", "url": "https://www.webkit.org/blog/", "updated": "weekly", "type": "web", "keywords": ["Webkit", "Safari", "Browser"], "rss": "https://www.webkit.org/blog/feed/", "twitter": ""},
    {"title": "DarKtears", "url": "http://darktears.wordpress.com/", "updated": "weekly", "type": "web", "keywords": ["Chrome", "Blink", "Browser"], "rss": "http://darktears.wordpress.com/feed/", "twitter": ""},
    {"title": "JSer.info", "url": "http://jser.info/", "updated": "weekly", "type": "web", "keywords": ["HTML", "CSS", "JavaScript", "Browser", "Tools"], "rss": "http://jser.info/rss", "twitter": "https://twitter.com/jser_info"},
    {"title": "斉藤祐也の海外WEBテク定点観測", "url": "http://html5experts.jp/cssradar/", "updated": "fortnightly", "type": "web", "keywords": ["HTML", "CSS", "JavaScript", "Browser", "Tools"], "rss": "http://html5experts.jp/feed/", "twitter": "https://twitter.com/html5exp"},
    {"title": "News Links | Unformed Building", "url": "http://unformedbuilding.com/articles/news/", "updated": "monthly", "type": "web", "keywords": ["Design", "HTML", "CSS"], "rss": "http://unformedbuilding.com/feed/", "twitter": "https://twitter.com/ub_pnr"},
    {"title": "Titanium News", "url": "http://ti-news.hatenablog.jp/", "updated": "weekly", "type": "web", "keywords": ["JavaScript", "Titanium"], "rss": "http://ti-news.hatenablog.jp/feed", "twitter": ""},
    {"title": "Remote Synthesis", "url": "http://www.remotesynthesis.com/", "updated": "weekly", "type": "web", "keywords": ["HTML", "CSS", "JavaScript", "Mobile"], "rss": "http://www.remotesynthesis.com/feeds/rss.cfm", "twitter": "https://twitter.com/remotesynth"},
    {"title": "JavaScript Jabber", "url": "http://javascriptjabber.com/", "updated": "weekly", "type": "web\n", "keywords": ["JavaScript", "Podcast"], "rss": "http://feeds.feedburner.com/JavascriptJabber", "twitter": ""},
    {"title": "DailyJS ", "url": "http://dailyjs.com/", "updated": "daily", "type": "web", "keywords": ["JavaScript"], "rss": "http://feeds.feedburner.com/dailyjs", "twitter": "https://twitter.com/dailyjs"},
    {"title": "JSMag", "url": "http://www.jsmag.com/", "updated": "monthly", "type": "web", "keywords": ["JavaScript"], "rss": "http://www.jsmag.com/blog/feed/rss/", "twitter": "https://twitter.com/jsmag"},
    {"title": "CSS WG Blog", "url": "http://www.w3.org/blog/CSS/", "updated": "weekly", "type": "web", "keywords": ["CSS", "Spec"], "rss": "http://www.w3.org/blog/CSS/feed/atom/", "twitter": ""},
    {"title": "W3C News", "url": "http://www.w3.org/News/", "updated": "other", "type": "web", "keywords": ["Spec"], "rss": "http://www.w3.org/News/news.rss", "twitter": "https://twitter.com/W3C"}
];
Handlebars.registerHelper('rssLink', function (rssURL, title) {
    if (typeof rssURL === "undefined" || rssURL.length == 0) {
        return;
    }
    return new Handlebars.SafeString('<span class="site-rss"><a href="' + rssURL + '" title="' + title + '"><img src="img/rss-256.png" /></a></span>');

});
Handlebars.registerHelper('twitterLink', function (text) {
    if (typeof text === "undefined" || text.length == 0) {
        return;
    }
    var splitURL = text.split("/");
    var userName = splitURL.pop();
    return new Handlebars.SafeString('@<a href="' + text + '">' + userName + '</a>');
});
var source = document.getElementById("Handlebars-Template").innerHTML;
var template = Handlebars.compile(source);
var html = template(context);
document.getElementById("main").innerHTML = html;

