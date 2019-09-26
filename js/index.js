if(location.href.indexOf('url=')!==-1 && decodeURIComponent(location.href.replace('%20','').replace(' ','').split('url=')[1])===location.href.replace('%20','').replace(' ','').split('url=')[1])
    {
        if(location.href.replace('%20','').replace(' ','').split('url=')[1].indexOf('?')!==-1){
          var urlTmp = location.href.replace('%20','').replace(' ','').split('url=')[1].split('?');
          location.replace(location.href.split('url=')[0]+'url='+ encodeURIComponent(urlTmp[0]) + encodeURIComponent("?") + urlTmp[1].replace('=','%3D'));
        }
    }
function isStg() {
        return /test-b-fat/.test(window.location.host) ? 'test-b-fat' : 'b';
    }
    var jump = function () {
        window.location.href = 'https://bank-static.pingan.com.cn/ca/ccssa/Lkpg/html/1859b19a58094f2585a9dd6dee203fdc.html?linkId=1859b19a58094f2585a9dd6dee203fdc&source=xykwx&outerSource=fushuka-201803&channel_source=02';
    };
    var jumpa = function () {
        window.location.href = 'https://bank-static.pingan.com.cn/ca/ccssa/Lkpg/html/681843f6e94e4a3fb96b0133af47e177.html?linkId=681843f6e94e4a3fb96b0133af47e177&source=kdapp&outerSource=mgm4-201712&channel_source=01';
    };
    var jump2 = function () {
        window.location.href = 'https://bank-static.pingan.com.cn/creditcard/life/marketing/ShoppingRegiment4MGM/ShoppingRegiment4MGM.html?outerid=ou0000009&cid=ci0000019#/m1';
    };
    var jump3 = function () {
        window.location.href = 'https://b.pingan.com.cn/kuaizhan/page/ccapply/wx/20190403/h3652.html?campaignid=201904004442&scc=940000422&mt=94422003XHDLB&channel_source=94422003XHDLB';
    };
    var jump4 = function () {
        window.location.href = 'https://b.pingan.com.cn/kuaizhan/page/ccapply/wx/20190411/h3933.html?&scc=940000245&mt=94245012SYBN&outerSource=94245012SYBN';
    };
    var jumptui = function () {
        window.location.href = 'https://b.pingan.com.cn/kuaizhan/page/ccapply/wx/20190701/h8166.html?outerSource=qkzfx201907&channel_source=01';
    };
    var wsdjump = function () {
        window.location.href = 'https://b.pingan.com.cn/kuaizhan/page/ccapply/wx/20190410/h3888.html?campaignid=201904004692&scc=940000422&mt=94422001JXYBKYL&channel_source=94422001JXYBKYL'
    };
    var ynkjump = function () {
        window.location.href = 'https://b.pingan.com.cn/kuaizhan/page/ccapply/wx/20190410/h3897.html?campaignid=201904004693&scc=940000422&mt=94422002JXYBKYL&channel_source=94422002JXYBKYL'
    };
    var hb = function () {
        window.location.href = 'https://c.pingan.com/ca/index?sign=5963edfae10d85e76714a1486a4d2b22&versionNo=R10310&scc=940000422&channel=WX&onlineSQFlag=N&mt=94422001JXYLB&url=5LLwYPKbpfLQdplCjQtvb7tyqs2c1vodyGUTEBOIVG7EttK1Dtp5VONGg%2BSxdIvyGUQsjyPGJC54ZIj1HWXOSg%3D%3D&channel_source=94422001JXYLB'
    };
    var ptbanner = function () {
        window.location.href = 'https://b.pingan.com.cn/creditcard/life/marketing/ShoppingRegiment/ShoppingRegiment.html?outerSource=ptmgm201907&channel_source=18#/m1'
    };
    var jchd = function () {
        window.location.href = 'https://b.pingan.com.cn/kuaizhan/page/ccapply/wx/20190701/h8166.html?outerSource=qkzfx201907&channel_source=01'
    }
    var bkylLink1 = function () {
        window.location.href = 'https://b.pingan.com.cn/kuaizhan/page/ccapply/wx/20190724/h9619.html?scc=940000252&mt=94252001JXY'
    }
    var bkylLink2 = function () {
        window.location.href = "https://" + isStg() + ".pingan.com.cn/creditcard/lp/201907/lovers/index.shtml" + window.location.search
    }

    var openUrl = function (a) {
        window.location.replace(a)
    }
    var hrefUrl = function (a) {
        window.location.replace(a)
    }
    // 卡片跳转区分生产，测试环境
    var paynkjump = function () {
        return "https://"+ isStg() +".pingan.com.cn/creditcard/huodong/paynkjs/index.shtml"
    };
    var yzkjump = function () {
        window.location.href = "https://"+ isStg() +".pingan.com.cn/creditcard/huodong/wxzxbkaqy4/yzkbd/index.shtml"+window.location.search
    };
    var gdkjump = function () {
        window.location.href = "https://"+ isStg() +".pingan.com.cn/creditcard/huodong/wxzxbkaqy4/gdkbd/index.shtml"+window.location.search
    };
    var txjump = function () {
        return "https://"+ isStg() +".pingan.com.cn/creditcard/huodong/kpjstxspjk/index.shtml"
    };
    var spztkjump = function () {
        return "https://"+ isStg() +".pingan.com.cn/creditcard/lp/201907/spztk/index.shtml"
    };
    var loversjump = function () {
        return "https://"+ isStg() +".pingan.com.cn/creditcard/lp/201907/lovers/index.shtml"
    };
    var czkjump = function () {
        return "https://"+ isStg() +".pingan.com.cn/creditcard/huodong/kpjsczk/index.shtml"
    };
    var bzkjump = function () {
        return "https://"+ isStg() +".pingan.com.cn/creditcard/huodong/kpjsbzk/index.shtml"
    };
    var mlkjump = function () {
        return "https://"+ isStg() +".pingan.com.cn/creditcard/huodong/kpjsmlhmbj/index.shtml"
    };
    var jybjkjump = function () {
        return "https://"+ isStg() +".pingan.com.cn/creditcard/huodong/kpjsjybj/index.shtml"
    };
    var bjkjump = function () {
        return "https://"+ isStg() +".pingan.com.cn/creditcard/huodong/kpjsdbj/index.shtml"
    };
    var czbjkjump = function () {
        return "https://"+ isStg() +".pingan.com.cn/creditcard/huodong/kpjsczkbj/index.shtml"
    };
    var ytmyjump = function () {
        return "https://"+ isStg() +".pingan.com.cn/creditcard/huodong/kpjsytmybj/index.shtml"
    };
    var wsdmyjump = function () {
        return "https://"+ isStg() +".pingan.com.cn/creditcard/huodong/kpjswsdmybj/index.shtml"
    };
    var xclmkjump = function () {
        return "https://"+ isStg() +".pingan.com.cn/creditcard/huodong/kpjsxclmk/index.shtml"
    };
    var costcojk = function () {
        return "https://"+ isStg() +".pingan.com.cn/creditcard/lp/201907/costcolmjk/index.shtml"
    };
    var costcobjk = function () {
        return "https://"+ isStg() +".pingan.com.cn/creditcard/lp/201906/costcoLmk/index.shtml"
    };
    // 异步加载js  begin
    function loadWTScript(a, domId, b) {
        var c = document.createElement("script");
        c.type = "text/javascript";
        c.async = true;
        c.src = a;
        c.id = domId;
        dcsReady(c, b);
        document.getElementsByTagName("head")[0].appendChild(c);
    }
    function dcsReady(a, b) {
        if (a.readyState) {
            a.onreadystatechange = function () {
                ("loaded" == a.readyState || "complete" == a.readyState) && (a.onreadystatechange = null, b())
            }
        } else {
            a.onload = function () {
                b && b();
            }
        }
    }
    (function () {
        if (!navigator.userAgent.toLowerCase().match('paebank')) { // 站外...设置
            newnine()
        }else {
            nonewnine()
        }
        // 异步加载js  end
        if ('addEventListener' in document) {
            document.addEventListener('DOMContentLoaded', function () {
                loadWTScript('https://' + isStg() + '.pingan.com.cn/creditcard/huodong/loadPublic.js?dss=20190807', 'JS-loadPu', initjs);
                loadWTScript('./libs/swiper.min.js','swipergroup',swipergroup);
            })
        }

    })()
    function swipergroup (){
        var swiper = new Swiper('.swiper-container', {
            slidesPerView: 3,
            spaceBetween: 30,
            freeMode: true,
        });
        // 当轮播图只有一帧禁止滑动效果
        // if ($('.swiper-container2 .swiper-slide').length > 1) {
        //     var swiper2 = new Swiper('.swiper-container2', {
        //         paginationClickable: true,
        //         spaceBetween: 30,
        //         autoplay: 3000,
        //         autoplayDisableOnInteraction: false,
        //         loop: false
        //     })
        // }
        var swiper2 = new Swiper('.swiper-container2', {
            paginationClickable: true,
            autoplay: 3000,
            autoplayDisableOnInteraction: false,
            loop: true,
            pagination: '.swiper-pagination'
        })
        var swiper3 = new Swiper('.swiper-container3', {
            paginationClickable: true,
            autoplay: 3000,
            autoplayDisableOnInteraction: false,
            loop: true,
            pagination: '.swiper-pagination'
        })
    }
    // 异步加载组件
    var initjs = function () {
        var shareData = navigator.userAgent.toLowerCase().match('paebank') ? true : false;
        window.yxkk(false, shareData, function () {  // 第一个参数直达显示， 第二个参数分享显示， 第三个分享回调
            var options = {
                shareObj: {
                    title: '不想错过的高人气平安信用卡',
                    content: '免费视频会员、加油88折，超值权益尽在平安信用卡',
                    picture: window.location.href.replace(/index.shtml|indexA.shtml|indexB1.shtml|indexB2.shtml/g, "images/shareA.jpg")
                },
                pactivityId: 'V0366',
                shareUrlObj: {
                    url:"https://"+isStg()+".pingan.com.cn/creditcard/huodong/wxzxbkaqy4/index.shtml"
                    // search: window.location.search
                }
            };
            window.sharePublicInit(options);
        });
        if (!navigator.userAgent.toLowerCase().match('paebank')) { // 站外...设置
            loadWTScript('https://b.pingan.com.cn/creditcard/huodong/jweixin-1.0.0.js', 'wexin-asy', addwexin);
            hot();
        }
        shine();
        getprocess() // 记住滚动条
        // var banner2 = docunment.getElementById("banner2");
        // banner2.onclick = function (){
        //     var ua = window.navigator.userAgent.toLocaleLowerCase();
        //   if (ua.indexOf('paebank') > -1 && typeof aladdin === 'object') {
        //     window.aladdin && window.aladdin.navigator.forward({
        //           tpl: 'webview',
        //           url: url
        //         })
        //       } else {
        //         // window.open(url);
        //         window.location.href = url;
        //       }
        //     }
    };
    // 站外可以看到火爆栏位
    function hot() {
        document.getElementsByClassName('hot')[0].style.height = .9 + 'rem';
    }
    // 口袋内 轮播新户9元购
    function newnine() {
        document.getElementsByClassName('swiper-container2')[0].classList.remove('swiper-none');
    }
    // 口袋外 轮播新户9元购
    function nonewnine() {
        document.getElementsByClassName('swiper-container3')[0].classList.remove('swiper-none');
    }
    function shine() {
        var txts = [
            '姚**成功申请平安车主卡',
            '邓**成功申请平安车主卡',
            '龚**成功申请平安车主卡',
            '余**成功申请平安车主卡',
            '贾**成功申请平安车主卡',
            '孟**成功申请平安车主卡',
            '宋*成功申请平安车主卡',
            '彭*成功申请平安车主卡',
            '林**成功申请平安车主卡',
            '范**成功申请平安车主卡',
            '河**成功申请平安车主卡',
            '杨**成功申请平安车主卡',
            '侯**成功申请平安车主卡',
            '许**成功申请平安车主卡',
            '夏*成功申请平安车主卡',
            '谭*成功申请平安车主卡',
            '夏**成功申请平安车主卡',
            '顾**成功申请平安车主卡',
            '傅**成功申请平安车主卡',
            '曹**成功申请平安车主卡',
            '陈**成功申请平安车主卡',
            '吴**成功申请平安车主卡',
            '叶*成功申请平安车主卡',
            '蒋*成功申请平安车主卡',
            '马**成功申请平安车主卡',
            '孟**成功申请平安车主卡',
            '贾**成功申请平安车主卡',
            '阎**成功申请平安车主卡',
            '陶**成功申请平安车主卡',
            '朱**成功申请平安车主卡',
            '龚*成功申请平安车主卡',
            '尹*成功申请平安车主卡',
            '段**成功申请平安车主卡',
            '曾**成功申请平安车主卡',
            '高**成功申请平安车主卡',
            '李**成功申请平安车主卡',
            '林**成功申请平安车主卡',
            '河**成功申请平安车主卡',
            '贾*成功申请平安车主卡',
            '宋*成功申请平安车主卡',
            '戴**成功申请平安车主卡',
            '叶**成功申请平安车主卡',
            '陶**成功申请平安车主卡',
            '邹**成功申请平安车主卡',
            '龙**成功申请平安车主卡',
            '冯**成功申请平安车主卡',
            '卢*成功申请平安车主卡',
            '丁*成功申请平安车主卡',
            '谭**成功申请平安车主卡',
            '谢**成功申请平安车主卡',
            '秦**成功申请腾讯视频金卡',
            '梁**成功申请腾讯视频金卡',
            '杜**成功申请腾讯视频金卡',
            '郝**成功申请腾讯视频金卡',
            '任*成功申请腾讯视频金卡',
            '段*成功申请腾讯视频金卡',
            '杨**成功申请腾讯视频金卡',
            '姚**成功申请腾讯视频金卡',
            '任**成功申请腾讯视频金卡',
            '董**成功申请腾讯视频金卡',
            '戴**成功申请腾讯视频金卡',
            '周**成功申请腾讯视频金卡',
            '马*成功申请腾讯视频金卡',
            '丁*成功申请腾讯视频金卡',
            '任**成功申请腾讯视频金卡',
            '邱**成功申请腾讯视频金卡',
            '韦**成功申请腾讯视频金卡',
            '卢**成功申请腾讯视频金卡',
            '傅**成功申请腾讯视频金卡',
            '冯**成功申请腾讯视频金卡',
            '程*成功申请腾讯视频金卡',
            '孟*成功申请腾讯视频金卡',
            '任**成功申请腾讯视频金卡',
            '贾**成功申请腾讯视频金卡',
            '谢**成功申请腾讯视频金卡',
            '韦**成功申请腾讯视频金卡',
            '丁**成功申请腾讯视频金卡',
            '张**成功申请腾讯视频金卡',
            '杜*成功申请腾讯视频金卡',
            '任*成功申请腾讯视频金卡',
            '谢**成功申请腾讯视频金卡',
            '顾**成功申请腾讯视频金卡',
            '周**成功申请腾讯视频金卡',
            '吕**成功申请腾讯视频金卡',
            '吕**成功申请腾讯视频金卡',
            '梁**成功申请腾讯视频金卡',
            '熊*成功申请腾讯视频金卡',
            '孙*成功申请腾讯视频金卡',
            '黎**成功申请腾讯视频金卡',
            '朱**成功申请腾讯视频金卡',
            '傅**成功申请平安标准金卡',
            '宋**成功申请平安标准金卡',
            '钟**成功申请平安标准金卡',
            '白**成功申请平安标准金卡',
            '董*成功申请平安标准金卡',
            '丁*成功申请平安标准金卡',
            '孙**成功申请平安标准金卡',
            '覃**成功申请平安标准金卡',
            '莫**成功申请平安标准金卡',
            '龙**成功申请平安标准金卡',
            '宋**成功申请平安标准金卡',
            '高**成功申请平安标准金卡',
            '孙*成功申请平安标准金卡',
            '丁*成功申请平安标准金卡',
            '崔**成功申请平安标准金卡',
            '郑**成功申请平安标准金卡',
            '梁**成功申请平安标准金卡',
            '钱**成功申请平安标准金卡',
            '程**成功申请平安标准金卡',
            '杜**成功申请平安标准金卡',
            '龙*成功申请平安标准金卡',
            '吕*成功申请平安标准金卡',
            '秦**成功申请平安标准金卡',
            '谭**成功申请平安标准金卡',
            '韦**成功申请平安标准金卡',
            '杜**成功申请平安标准金卡',
            '胡**成功申请平安标准金卡',
            '何**成功申请平安标准金卡',
            '邓*成功申请平安标准金卡',
            '卢*成功申请平安标准金卡',
            '卢**成功申请平安由你卡',
            '雷**成功申请平安由你卡',
            '陶**成功申请平安由你卡',
            '卢**成功申请平安由你卡',
            '陈**成功申请平安由你卡',
            '卢**成功申请平安由你卡',
            '崔*成功申请平安由你卡',
            '苏*成功申请平安由你卡',
            '郭**成功申请平安由你卡',
            '段**成功申请平安由你卡',
            '龙**成功申请平安由你卡',
            '梁**成功申请平安由你卡',
            '陶**成功申请平安由你卡',
            '薛**成功申请平安由你卡',
            '姜*成功申请平安由你卡',
            '蒋*成功申请平安由你卡',
            '沈**成功申请平安由你卡',
            '阎**成功申请平安由你卡',
            '丁**成功申请平安由你卡',
            '龙**成功申请平安由你卡',
            '韩**成功申请曼联红魔白金卡',
            '熊**成功申请曼联红魔白金卡',
            '贺*成功申请曼联红魔白金卡',
            '徐*成功申请曼联红魔白金卡',
            '黄**成功申请曼联红魔白金卡',
            '吴**成功申请曼联红魔白金卡',
            '丁**成功申请曼联红魔白金卡',
            '金**成功申请曼联红魔白金卡',
            '江**成功申请曼联红魔白金卡',
            '萧**成功申请曼联红魔白金卡',
            '罗*成功申请曼联红魔白金卡',
            '董*成功申请曼联红魔白金卡',
            '丁**成功申请曼联红魔白金卡',
            '邵**成功申请曼联红魔白金卡',
            '史**成功申请曼联红魔白金卡',
            '范**成功申请曼联红魔白金卡',
            '陶**成功申请曼联红魔白金卡',
            '汪**成功申请曼联红魔白金卡',
            '余*成功申请曼联红魔白金卡',
            '陶*成功申请曼联红魔白金卡',
            '薛**成功申请平安精英白金卡',
            '龚**成功申请平安精英白金卡',
            '阎**成功申请平安精英白金卡',
            '彭**成功申请平安精英白金卡',
            '李**成功申请平安精英白金卡',
            '潘**成功申请平安精英白金卡',
            '袁*成功申请平安精英白金卡',
            '谭*成功申请平安精英白金卡',
            '董**成功申请平安精英白金卡',
            '彭**成功申请平安精英白金卡',
            '钟**成功申请平安精英白金卡',
            '郑**成功申请平安精英白金卡',
            '段**成功申请平安精英白金卡',
            '陆**成功申请平安精英白金卡',
            '余*成功申请平安精英白金卡',
            '姚*成功申请平安精英白金卡',
            '刘**成功申请平安精英白金卡',
            '曾**成功申请平安精英白金卡',
            '卢**成功申请平安精英白金卡',
            '萧**成功申请平安精英白金卡',
            '梁**成功申请平安白金卡',
            '金**成功申请平安白金卡',
            '姚*成功申请平安白金卡',
            '李*成功申请平安白金卡',
            '董**成功申请平安白金卡',
            '莫**成功申请平安白金卡',
            '梁**成功申请平安白金卡',
            '许**成功申请平安白金卡',
            '覃**成功申请平安白金卡',
            '覃**成功申请平安白金卡',
            '余*成功申请平安白金卡',
            '傅*成功申请平安白金卡',
            '史**成功申请平安白金卡',
            '郭**成功申请平安白金卡',
            '侯**成功申请平安白金卡',
            '唐**成功申请平安车主白金卡',
            '毛**成功申请平安车主白金卡',
            '崔**成功申请平安车主白金卡',
            '胡*成功申请平安车主白金卡',
            '唐*成功申请平安车主白金卡',
            '顾**成功申请平安车主白金卡',
            '孙**成功申请平安车主白金卡',
            '徐**成功申请平安车主白金卡',
            '罗**成功申请平安车主白金卡',
            '梁**成功申请平安车主白金卡',
            '侯**成功申请平安车主白金卡',
            '夏*成功申请平安车主白金卡',
            '钱*成功申请平安车主白金卡',
            '杜**成功申请平安车主白金卡',
            '沈**成功申请平安车主白金卡',
            '严**成功申请平安爱奇艺金卡',
            '黄**成功申请平安爱奇艺金卡',
            '郭**成功申请平安爱奇艺金卡',
            '魏**成功申请平安爱奇艺金卡',
            '毛*成功申请平安爱奇艺金卡',
            '江*成功申请平安爱奇艺金卡',
            '侯**成功申请平安爱奇艺金卡',
            '沈**成功申请平安爱奇艺金卡',
            '蔡**成功申请平安爱奇艺金卡',
            '阎**成功申请平安爱奇艺金卡',
            '周**成功申请平安爱奇艺金卡',
            '卢**成功申请平安爱奇艺金卡',
            '胡*成功申请平安爱奇艺金卡',
            '唐*成功申请平安爱奇艺金卡',
            '龙**成功申请平安爱奇艺金卡',
            '阎**成功申请平安爱奇艺金卡',
            '陶**成功申请平安爱奇艺金卡',
            '郑**成功申请平安爱奇艺金卡',
            '段**成功申请平安爱奇艺金卡',
            '郝**成功申请平安爱奇艺金卡',
            '陈*成功申请平安携程商旅金卡',
            '孙*成功申请平安携程商旅金卡',
            '傅**成功申请平安携程商旅金卡',
            '王**成功申请平安携程商旅金卡',
            '崔**成功申请平安携程商旅金卡',
            '沈**成功申请平安携程商旅金卡',
            '袁**成功申请平安携程商旅金卡',
            '汪**成功申请平安携程商旅金卡',
            '何*成功申请平安携程商旅金卡',
            '秦*成功申请平安携程商旅金卡',
            '魏**成功申请平安携程商旅金卡',
            '邱**成功申请平安携程商旅金卡',
            '吕**成功申请平安携程商旅金卡',
            '杜**成功申请平安携程商旅金卡',
            '孟**成功申请平安携程商旅金卡',
            '向**成功申请平安携程商旅金卡',
            '龚*成功申请平安携程商旅金卡',
            '任*成功申请平安携程商旅金卡',
            '邵**成功申请平安携程商旅金卡',
            '曾**成功申请平安携程商旅金卡',
            '崔**成功申请平安BE@RBRICK时尚卡',
            '向**成功申请平安BE@RBRICK时尚卡',
            '龙**成功申请平安BE@RBRICK时尚卡',
            '熊**成功申请平安BE@RBRICK时尚卡',
            '董*成功申请平安BE@RBRICK时尚卡',
            '尹*成功申请平安BE@RBRICK时尚卡',
            '崔**成功申请平安BE@RBRICK时尚卡',
            '孙**成功申请平安BE@RBRICK时尚卡',
            '史**成功申请平安BE@RBRICK时尚卡',
            '丁**成功申请平安BE@RBRICK时尚卡',
            '高**成功申请平安BE@RBRICK时尚卡',
            '孟**成功申请平安BE@RBRICK时尚卡',
            '苏*成功申请平安BE@RBRICK时尚卡',
            '黄*成功申请平安BE@RBRICK时尚卡',
            '林**成功申请平安BE@RBRICK时尚卡',
            '魏**成功申请平安BE@RBRICK时尚卡',
            '罗**成功申请平安BE@RBRICK时尚卡',
            '戴**成功申请平安BE@RBRICK时尚卡',
            '邱**成功申请平安BE@RBRICK时尚卡',
            '龙**成功申请平安BE@RBRICK时尚卡',
            '朱*成功申请平安腾讯视频白金卡',
            '顾*成功申请平安腾讯视频白金卡',
            '刘**成功申请平安腾讯视频白金卡',
            '邵**成功申请平安腾讯视频白金卡',
            '潘**成功申请平安腾讯视频白金卡',
            '方**成功申请平安腾讯视频白金卡',
            '吴**成功申请平安腾讯视频白金卡',
            '白**成功申请平安腾讯视频白金卡',
            '丁*成功申请平安腾讯视频白金卡',
            '卢*成功申请平安腾讯视频白金卡',
            '汪**成功申请平安腾讯视频白金卡',
            '史**成功申请平安腾讯视频白金卡',
            '吕**成功申请平安腾讯视频白金卡',
            '范**成功申请平安腾讯视频白金卡',
            '胡**成功申请平安腾讯视频白金卡',
            '何**成功申请平安腾讯视频白金卡',
            '姜*成功申请平安腾讯视频白金卡',
            '张*成功申请平安腾讯视频白金卡',
            '黎**成功申请平安腾讯视频白金卡',
            '马**成功申请平安腾讯视频白金卡',
            '侯**成功申请平安证券财富白金卡',
            '夏**成功申请平安证券财富白金卡',
            '曹**成功申请平安证券财富白金卡',
            '杨**成功申请平安证券财富白金卡',
            '尹*成功申请平安证券财富白金卡',
            '邱*成功申请平安证券财富白金卡',
            '袁**成功申请平安证券财富白金卡',
            '孟**成功申请平安证券财富白金卡',
            '徐**成功申请平安证券财富白金卡',
            '潘**成功申请平安证券财富白金卡',
            '魏**成功推荐一名朋友办理车主卡',
            '薛**成功推荐一名朋友办理车主卡',
            '廖*成功推荐一名朋友办理车主卡',
            '谭*成功推荐一名朋友办理车主卡',
            '汤**成功推荐一名朋友办理车主卡',
            '王**成功推荐一名朋友办理车主卡',
            '江**成功推荐一名朋友办理车主卡',
            '魏**成功推荐一名朋友办理车主卡',
            '罗**成功推荐一名朋友办理车主卡',
            '叶**成功推荐一名朋友办理车主卡',
            '熊*成功推荐一名朋友办理车主卡',
            '冯*成功推荐一名朋友办理车主卡',
            '韦**成功推荐一名朋友办理车主卡',
            '尹**成功推荐一名朋友办理车主卡',
            '侯**成功推荐一名朋友办理车主卡',
            '罗**成功推荐一名朋友办理车主卡',
            '严**成功推荐一名朋友办理车主卡',
            '谢**成功推荐一名朋友办理车主卡',
            '邹*成功推荐一名朋友办理车主卡',
            '高*成功推荐一名朋友办理车主卡',
            '杜**成功推荐一名朋友办理车主卡',
            '韩**成功推荐一名朋友办理车主卡',
            '江**成功推荐一名朋友办理车主卡',
            '孙**成功推荐一名朋友办理车主卡',
            '钟**成功推荐一名朋友办理车主卡',
            '郝**成功推荐一名朋友办理车主卡',
            '赵*成功推荐一名朋友办理车主卡',
            '石*成功推荐一名朋友办理车主卡',
            '刘**成功推荐一名朋友办理车主卡',
            '周**成功推荐一名朋友办理车主卡',
            '陶**成功推荐一名朋友办理由你卡',
            '夏**成功推荐一名朋友办理由你卡',
            '魏**成功推荐一名朋友办理由你卡',
            '许**成功推荐一名朋友办理由你卡',
            '孙*成功推荐一名朋友办理由你卡',
            '陈*成功推荐一名朋友办理由你卡',
            '毛**成功推荐一名朋友办理由你卡',
            '谢**成功推荐一名朋友办理由你卡',
            '沈**成功推荐一名朋友办理由你卡',
            '汤**成功推荐一名朋友办理由你卡',
            '贺**成功推荐一名朋友办理由你卡',
            '韦**成功推荐一名朋友办理由你卡',
            '陶*成功推荐一名朋友办理由你卡',
            '苏*成功推荐一名朋友办理由你卡',
            '陆**成功推荐一名朋友办理由你卡',
            '邱**成功推荐一名朋友办理由你卡',
            '贾**成功推荐一名朋友办理由你卡',
            '高**成功推荐一名朋友办理由你卡',
            '黎**成功推荐一名朋友办理由你卡',
            '阎**成功推荐一名朋友办理由你卡',
            '向*成功推荐一名朋友办理由你卡',
            '龚*成功推荐一名朋友办理由你卡',
            '阎**成功推荐一名朋友办理由你卡',
            '萧**成功推荐一名朋友办理由你卡',
            '余**成功推荐一名朋友办理由你卡',
            '姜**成功推荐一名朋友办理由你卡',
            '韦**成功推荐一名朋友办理由你卡',
            '刘**成功推荐一名朋友办理由你卡',
            '向*成功推荐一名朋友办理由你卡',
            '范*成功推荐一名朋友办理由你卡',
            '蒋**成功推荐一名朋友办理由你卡',
            '金**成功推荐一名朋友办理由你卡',
            '彭**成功推荐一名朋友办理由你卡',
            '彭**成功推荐一名朋友办理由你卡',
            '顾**成功推荐一名朋友办理由你卡',
            '薛**成功推荐一名朋友办理腾讯视频金卡',
            '秦*成功推荐一名朋友办理腾讯视频金卡',
            '钟*成功推荐一名朋友办理腾讯视频金卡',
            '任**成功推荐一名朋友办理腾讯视频金卡',
            '江**成功推荐一名朋友办理腾讯视频金卡',
            '魏**成功推荐一名朋友办理腾讯视频金卡',
            '陈**成功推荐一名朋友办理腾讯视频金卡',
            '孙**成功推荐一名朋友办理腾讯视频金卡',
            '周**成功推荐一名朋友办理腾讯视频金卡',
            '孟*成功推荐一名朋友办理腾讯视频金卡',
            '孔*成功推荐一名朋友办理腾讯视频金卡',
            '郑**成功推荐一名朋友办理腾讯视频金卡',
            '薛**成功推荐一名朋友办理腾讯视频金卡',
            '唐**成功推荐一名朋友办理腾讯视频金卡',
            '林**成功推荐一名朋友办理腾讯视频金卡',
            '龚**成功推荐一名朋友办理腾讯视频金卡',
            '莫**成功推荐一名朋友办理腾讯视频金卡',
            '邱*成功推荐一名朋友办理腾讯视频金卡',
            '谢*成功推荐一名朋友办理腾讯视频金卡',
            '余**成功推荐一名朋友办理腾讯视频金卡',
            '苏**成功推荐一名朋友办理腾讯视频金卡',
            '江**成功推荐一名朋友办理腾讯视频金卡',
            '孔**成功推荐一名朋友办理腾讯视频金卡',
            '廖**成功推荐一名朋友办理腾讯视频金卡',
            '沈**成功推荐一名朋友办理腾讯视频金卡',
            '熊*成功推荐一名朋友办理标准金卡',
            '宋*成功推荐一名朋友办理标准金卡',
            '许**成功推荐一名朋友办理标准金卡',
            '钟**成功推荐一名朋友办理标准金卡',
            '萧**成功推荐一名朋友办理标准金卡',
            '高**成功推荐一名朋友办理标准金卡',
            '姚**成功推荐一名朋友办理标准金卡',
            '邹**成功推荐一名朋友办理标准金卡',
            '范*成功推荐一名朋友办理标准金卡',
            '杨*成功推荐一名朋友办理标准金卡',
            '邹**成功推荐一名朋友办理标准金卡',
            '许**成功推荐一名朋友办理标准金卡',
            '陈**成功推荐一名朋友办理标准金卡',
            '龙**成功推荐一名朋友办理标准金卡',
            '谭**成功推荐一名朋友办理标准金卡',
            '龙**成功推荐一名朋友办理标准金卡',
            '胡*成功推荐一名朋友办理标准金卡',
            '秦*成功推荐一名朋友办理标准金卡',
            '黎**成功推荐一名朋友办理标准金卡',
            '范**成功推荐一名朋友办理标准金卡',
            '蔡**成功推荐一名朋友办理标准金卡',
            '河**成功推荐一名朋友办理标准金卡',
            '向**成功推荐一名朋友办理标准金卡',
            '郭**成功推荐一名朋友办理标准金卡',
            '莫*成功推荐一名朋友办理标准金卡',
            '薛*成功推荐一名朋友办理标准金卡',
            '陆**成功推荐一名朋友办理标准金卡',
            '许**成功推荐一名朋友办理标准金卡',
            '孙**成功推荐一名朋友办理标准金卡',
            '崔**成功推荐一名朋友办理标准金卡',
            '覃**成功获得推荐办卡活动1188元返现金',
            '曹**成功获得推荐办卡活动1188元返现金',
            '叶*成功获得推荐办卡活动1188元返现金',
            '潘*成功获得推荐办卡活动1188元返现金',
            '钱**成功获得推荐办卡活动1188元返现金',
            '史**成功获得推荐办卡活动1188元返现金',
            '胡**成功获得推荐办卡活动1188元返现金',
            '苏**成功获得推荐办卡活动1188元返现金',
            '郑**成功获得推荐办卡活动1188元返现金',
            '王**成功获得推荐办卡活动1188元返现金',
            '蔡*成功获得推荐办卡活动1188元返现金',
            '任*成功获得推荐办卡活动1188元返现金',
            '宋**成功获得推荐办卡活动1188元返现金',
            '谭**成功获得推荐办卡活动1188元返现金',
            '汪**成功获得推荐办卡活动1188元返现金',
            '曹**成功获得推荐办卡活动1188元返现金',
            '沈**成功获得推荐办卡活动1188元返现金',
            '谢**成功获得推荐办卡活动1188元返现金',
            '孟*成功获得推荐办卡活动1188元返现金',
            '罗*成功获得推荐办卡活动1188元返现金',
            '冯**成功获得推荐办卡活动1188元返现金',
            '田**成功获得推荐办卡活动1188元返现金',
            '陶**成功获得推荐办卡活动1188元返现金',
            '罗**成功获得推荐办卡活动1188元返现金',
            '王**成功获得推荐办卡活动1188元返现金',
            '吕**成功获得推荐办卡活动1188元返现金',
            '侯*成功获得推荐办卡活动1188元返现金',
            '吴*成功获得推荐办卡活动1188元返现金',
            '汪**成功获得推荐办卡活动1188元返现金',
            '邱**成功获得推荐办卡活动1188元返现金',
            '姚**成功获得推荐办卡活动1100元返现金',
            '崔**成功获得推荐办卡活动1100元返现金',
            '郑**成功获得推荐办卡活动1100元返现金',
            '薛**成功获得推荐办卡活动1100元返现金',
            '许**成功获得推荐办卡活动1100元返现金',
            '刘**成功获得推荐办卡活动1100元返现金',
            '钱**成功获得推荐办卡活动1100元返现金',
            '高**成功获得推荐办卡活动1100元返现金',
            '王**成功获得推荐办卡活动1100元返现金',
            '陈**成功获得推荐办卡活动1100元返现金',
            '夏**成功获得推荐办卡活动1100元返现金',
            '谢**成功获得推荐办卡活动1100元返现金',
            '唐**成功获得推荐办卡活动1100元返现金',
            '侯**成功获得推荐办卡活动1100元返现金',
            '蒋**成功获得推荐办卡活动1100元返现金',
            '任**成功获得推荐办卡活动1100元返现金',
            '胡**成功获得推荐办卡活动1100元返现金',
            '周**成功获得推荐办卡活动1100元返现金',
            '潘**成功获得推荐办卡活动1100元返现金',
            '姚**成功获得推荐办卡活动1100元返现金',
            '毛**成功获得推荐办卡活动88元返现金',
            '蒋**成功获得推荐办卡活动88元返现金',
            '程**成功获得推荐办卡活动88元返现金',
            '傅**成功获得推荐办卡活动88元返现金',
            '郭**成功获得推荐办卡活动88元返现金',
            '林**成功获得推荐办卡活动88元返现金',
            '杨**成功获得推荐办卡活动88元返现金',
            '王**成功获得推荐办卡活动88元返现金',
            '谢**成功获得推荐办卡活动88元返现金',
            '钱**成功获得推荐办卡活动88元返现金',
            '郑**成功获得推荐办卡活动88元返现金',
            '熊**成功获得推荐办卡活动88元返现金',
            '陶**成功获得推荐办卡活动88元返现金',
            '宋**成功获得推荐办卡活动88元返现金',
            '李**成功获得推荐办卡活动88元返现金',
            '马**成功获得推荐办卡活动88元返现金',
            '宋**成功获得推荐办卡活动88元返现金',
            '朱**成功获得推荐办卡活动88元返现金',
            '白**成功获得推荐办卡活动88元返现金',
            '史**成功获得推荐办卡活动88元返现金',
            '曾**成功获得推荐办卡活动88元商城券',
            '谭**成功获得推荐办卡活动88元商城券',
            '沈**成功获得推荐办卡活动88元商城券',
            '谢**成功获得推荐办卡活动88元商城券',
            '尹**成功获得推荐办卡活动88元商城券',
            '梁**成功获得推荐办卡活动88元商城券',
            '黄**成功获得推荐办卡活动88元商城券',
            '韦**成功获得推荐办卡活动88元商城券',
            '史**成功获得推荐办卡活动88元商城券',
            '周**成功获得推荐办卡活动88元商城券'
        ];
        var index = Math.floor((Math.random() * txts.length));// 页面加载随机数据索引
        $('.shine').find('span').text(txts[index]);
        $('.shine').addClass('shine2');
        setInterval(function () {
            $('.shine').addClass('shine1').removeClass('shine2');
            var index = Math.floor((Math.random() * txts.length));// 定时器随机数据索引
            $('.shine').find('span').text(txts[index]);
        }, 6000);
    }
    function addwexin() {
        $(function () {
            $.ajax({
                url: "https://eim.pingan.com.cn/paxyk/getSignature",
                data: {
                    openid: "oaJbgjvUVPVZjYOZa58eXxRikRDM",
                    weappNo: "PAXYK95511_01"
                },
                type: "GET",
                dataType: "jsonp",
                success: function (data, status, xhr) {
                    var d = JSON.parse(data);
                    wx.config({
                        debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                        appId: "wx358d02ca3eee5e76", // 必填，公众号的唯一标识
                        timestamp: d['timestamp'], // 必填，生成签名的时间戳
                        nonceStr: d['nonce'], // 必填，生成签名的随机串
                        signature: d['signature'],
                        jsApiList: ['onMenuShareAppMessage', 'onMenuShareTimeline', 'hideMenuItems']
                    });
                    var wxShareData = {
                        title: "不想错过的高人气平安信用卡", // 分享标题
                        desc: '免费视频会员、加油88折，超值权益尽在平安信用卡', // 分享描述
                        // link: "https://"+isStg()+".pingan.com.cn/creditcard/huodong/wxzxbkaqy4/index.shtml" + window.location.search, // 分享链接
                        link: '', // 分享链接
                        imgUrl: window.location.href.replace(/index.shtml|indexA.shtml|indexB1.shtml|indexB2.shtml/g, "images/shareA.jpg?v=1.16"), // 分享图标
                        type: '', // 分享类型,music、video或link，不填默认为link
                        dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
                        success: function () {
                            // 用户确认分享后执行的回调函数
//                                                                                  alert("好友分享成功");
                        },
                        cancel: function () {
                            // 用户取消分享后执行的回调函数
//                                                                                  alert("好友取消分享成功");
                        }
                    };
                    wx.ready(function () {
                        wx.onMenuShareTimeline(wxShareData);       //分享到朋友圈
                        wx.onMenuShareAppMessage(wxShareData);    //分享给朋友
                        wx.onMenuShareQQ(wxShareData);            //分享到QQ
                        wx.onMenuShareWeibo(wxShareData);         //分享到腾讯微博
                        wx.onMenuShareQZone(wxShareData);           //分享到QQ空间
                    });
                },
                error: function (response, xl) {
                }
            });
        });
    }
    function hrefurl(url) {
        if (navigator.userAgent.toLowerCase().indexOf('paebank') > -1) {//判断是否是口袋银行
            aladdin && aladdin.navigator && aladdin.navigator.forward({
                url: url
            }, function (err) {
                if (err) {
                    aladdin.toast.show({message: err.message});
                }
            })
        }else{
            window.open(url);
        }
    }
function getprocess() {
    var u = navigator.userAgent;
    var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    var defaultscroll = sessionStorage.getItem('kpjxtop') || 0;
    if (isIOS) {
        console.log('ios')
        window.onscroll = function () {
            sessionStorage.setItem('kpjxtop', document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset);
        }
        document.documentElement.scrollTop = Number(defaultscroll);
        document.body.scrollTop = Number(defaultscroll);
        window.pageYOffset = Number(defaultscroll);
    }
}