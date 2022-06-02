import{_ as e,c as a,o as t,a as r}from"./app.7fd0b966.js";const f='{"title":"\u6A21\u5757\u8BE6\u60C5","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u7ED3\u6784","slug":"\u7ED3\u6784"},{"level":2,"title":"Index.ts","slug":"index-ts"},{"level":3,"title":"\u94FE\u63A5","slug":"\u94FE\u63A5"},{"level":3,"title":"\u65AD\u5F00\u94FE\u63A5","slug":"\u65AD\u5F00\u94FE\u63A5"},{"level":3,"title":"\u83B7\u53D6\u533A\u5757\u94FE\u5757\u6570\u91CF","slug":"\u83B7\u53D6\u533A\u5757\u94FE\u5757\u6570\u91CF"},{"level":3,"title":"\u83B7\u53D6\u533A\u5757\u94FE\u5757\u4FE1\u606F","slug":"\u83B7\u53D6\u533A\u5757\u94FE\u5757\u4FE1\u606F"},{"level":3,"title":"\u83B7\u53D6\u7F51\u7EDC\u4FE1\u606F","slug":"\u83B7\u53D6\u7F51\u7EDC\u4FE1\u606F"},{"level":3,"title":"\u83B7\u53D6\u4EA4\u6613\u8D39\u4EF7\u683C","slug":"\u83B7\u53D6\u4EA4\u6613\u8D39\u4EF7\u683C"},{"level":3,"title":"\u83B7\u53D6\u7528\u6237\u4FE1\u606F","slug":"\u83B7\u53D6\u7528\u6237\u4FE1\u606F"},{"level":3,"title":"\u521D\u59CB\u5316\u5408\u7EA6\u5BF9\u8C61","slug":"\u521D\u59CB\u5316\u5408\u7EA6\u5BF9\u8C61"},{"level":3,"title":"\u4F7F\u7528\u5408\u7EA6\u65B9\u6CD5","slug":"\u4F7F\u7528\u5408\u7EA6\u65B9\u6CD5"},{"level":3,"title":"\u67E5\u770B\u5408\u7EA6\u5730\u5740","slug":"\u67E5\u770B\u5408\u7EA6\u5730\u5740"},{"level":3,"title":"\u53D1\u9001\u4E3B\u94FE\u4EA4\u6613","slug":"\u53D1\u9001\u4E3B\u94FE\u4EA4\u6613"},{"level":3,"title":"\u7B7E\u540D\u4EA4\u6613","slug":"\u7B7E\u540D\u4EA4\u6613"},{"level":3,"title":"\u5408\u7EA6\u90E8\u7F72","slug":"\u5408\u7EA6\u90E8\u7F72"},{"level":3,"title":"\u6DFB\u52A0token\u5230metamask","slug":"\u6DFB\u52A0token\u5230metamask"},{"level":3,"title":"\u5176\u4ED6\u65B9\u6CD5","slug":"\u5176\u4ED6\u65B9\u6CD5"},{"level":2,"title":"Contract","slug":"contract"},{"level":2,"title":"Components","slug":"components"}],"relativePath":"modules/index.md"}',n={},s=r(`<h1 id="\u6A21\u5757\u8BE6\u60C5" tabindex="-1">\u6A21\u5757\u8BE6\u60C5 <a class="header-anchor" href="#\u6A21\u5757\u8BE6\u60C5" aria-hidden="true">#</a></h1><p>chain33Ethers \u662F\u4E00\u4E2A <a href="https://docs.ethers.io/v5/" target="_blank" rel="noopener noreferrer">ethers.js</a> \u884D\u751F\u7684\u5DE5\u5177\u5305, \u6539\u6587\u6863\u53EA\u4F1A\u6807\u6CE8BtyEthers\u548C<a href="https://docs.ethers.io/v5/" target="_blank" rel="noopener noreferrer">ethers.js</a>\u4E0D\u540C\u7684\u5730\u65B9\uFF0C\u5176\u4F59\u65B9\u6CD5\u7684\u8BE6\u7EC6\u4F7F\u7528\u8BF7\u67E5<a href="https://docs.ethers.io/v5/" target="_blank" rel="noopener noreferrer">ethers.js</a>\u7684\u5B98\u7F51\u6587\u6863</p><h2 id="\u7ED3\u6784" tabindex="-1">\u7ED3\u6784 <a class="header-anchor" href="#\u7ED3\u6784" aria-hidden="true">#</a></h2><div class="language-dotnetcli"><pre><code>    - BtyEthers
        - components
            - ...browser views components
        - config.ts
        - Contract
        - Provider
        - Version.ts
        - view.tsx
        - Index.ts
</code></pre></div><h2 id="index-ts" tabindex="-1">Index.ts <a class="header-anchor" href="#index-ts" aria-hidden="true">#</a></h2><p>BtyEthers\u7684\u7ED3\u6784\u4F53\u51FA\u53E3\u6587\u4EF6\uFF0C\u6574\u5408\u4E86\u5927\u91CFEther\u53EF\u7528\u7684\u65B9\u6CD5\uFF0C\u90E8\u5206\u6D41\u7A0B\u4E0A\u7684\u4FEE\u6539\u7528\u4E8E\u9002\u5E94Bth\u94FE\u7684\u517C\u5BB9</p><ul><li><h3 id="\u94FE\u63A5" tabindex="-1">\u94FE\u63A5 <a class="header-anchor" href="#\u94FE\u63A5" aria-hidden="true">#</a></h3><p>connect(_signerType) \u94FE\u63A5\u94B1\u5305\uFF0C\u76EE\u524D\u53EA\u652F\u6301 _signerType = &#39;metamask&#39;,\u540E\u671F\u4F1A\u52A0\u5165\u5176\u4ED6\u7B2C\u4E09\u65B9\u5B89\u5168\u7684\u94B1\u5305</p></li><li><h3 id="\u65AD\u5F00\u94FE\u63A5" tabindex="-1">\u65AD\u5F00\u94FE\u63A5 <a class="header-anchor" href="#\u65AD\u5F00\u94FE\u63A5" aria-hidden="true">#</a></h3><p>disconnect() \u65AD\u5F00\u94FE\u63A5\uFF08\u6CE8\u610F\uFF1Ametamask\u5E76\u4E0D\u4F1A\u88ABdisconnect\u771F\u6B63\u65AD\u5F00\uFF0C\u5982\u679C\u8981\u5B8C\u5168\u767B\u51FAmetamask\u8D26\u53F7\u9700\u624B\u52A8\u64CD\u4F5Cmetamask\u63D2\u4EF6\u6765\u5173\u95ED\uFF0C\u8FD9\u91CC\u7684\u65AD\u5F00\u53EA\u662F\u65AD\u5F00\u7528\u6237\u4F7F\u7528btyEther\u65B9\u6CD5\u7684\u6743\u9650\uFF09</p></li><li><h3 id="\u83B7\u53D6\u533A\u5757\u94FE\u5757\u6570\u91CF" tabindex="-1">\u83B7\u53D6\u533A\u5757\u94FE\u5757\u6570\u91CF <a class="header-anchor" href="#\u83B7\u53D6\u533A\u5757\u94FE\u5757\u6570\u91CF" aria-hidden="true">#</a></h3><p>getBlockNumber() \u5B8C\u5168\u7EE7\u627F\u4E8E<a href="https://docs.ethers.io/v5/" target="_blank" rel="noopener noreferrer">ethers.js</a> getBlockNumber()\u65B9\u6CD5</p></li><li><h3 id="\u83B7\u53D6\u533A\u5757\u94FE\u5757\u4FE1\u606F" tabindex="-1">\u83B7\u53D6\u533A\u5757\u94FE\u5757\u4FE1\u606F <a class="header-anchor" href="#\u83B7\u53D6\u533A\u5757\u94FE\u5757\u4FE1\u606F" aria-hidden="true">#</a></h3><p>getBlock() \u5B8C\u5168\u7EE7\u627F\u4E8E<a href="https://docs.ethers.io/v5/" target="_blank" rel="noopener noreferrer">ethers.js</a> getBlock()\u65B9\u6CD5</p></li><li><h3 id="\u83B7\u53D6\u7F51\u7EDC\u4FE1\u606F" tabindex="-1">\u83B7\u53D6\u7F51\u7EDC\u4FE1\u606F <a class="header-anchor" href="#\u83B7\u53D6\u7F51\u7EDC\u4FE1\u606F" aria-hidden="true">#</a></h3><p>detectNetwork() \u5B8C\u5168\u7EE7\u627F\u4E8E<a href="https://docs.ethers.io/v5/" target="_blank" rel="noopener noreferrer">ethers.js</a> detectNetwork()\u65B9\u6CD5</p></li><li><h3 id="\u83B7\u53D6\u4EA4\u6613\u8D39\u4EF7\u683C" tabindex="-1">\u83B7\u53D6\u4EA4\u6613\u8D39\u4EF7\u683C <a class="header-anchor" href="#\u83B7\u53D6\u4EA4\u6613\u8D39\u4EF7\u683C" aria-hidden="true">#</a></h3><p>getGasPrice() \u5B8C\u5168\u7EE7\u627F\u4E8E<a href="https://docs.ethers.io/v5/" target="_blank" rel="noopener noreferrer">ethers.js</a> getGasPrice()\u65B9\u6CD5</p></li><li><h3 id="\u83B7\u53D6\u7528\u6237\u4FE1\u606F" tabindex="-1">\u83B7\u53D6\u7528\u6237\u4FE1\u606F <a class="header-anchor" href="#\u83B7\u53D6\u7528\u6237\u4FE1\u606F" aria-hidden="true">#</a></h3><p>getSigner() \u5728\u4F7F\u7528metamask\u7684\u65F6\u5019\u8FD4\u56DE window.etherumn</p></li><li><h3 id="\u521D\u59CB\u5316\u5408\u7EA6\u5BF9\u8C61" tabindex="-1">\u521D\u59CB\u5316\u5408\u7EA6\u5BF9\u8C61 <a class="header-anchor" href="#\u521D\u59CB\u5316\u5408\u7EA6\u5BF9\u8C61" aria-hidden="true">#</a></h3><p>setContractInstance(contractAddress: string,abi:any) \u8FD4\u56DE\u4E00\u4E2Aethers.js\u4E2D\u7684<a href="https://docs.ethers.io/v5/api/contract/" target="_blank" rel="noopener noreferrer">Contract</a>\u7ED3\u6784\uFF0C\u7528\u4E8E\u505A\u5408\u7EA6\u64CD\u4F5C</p></li><li><h3 id="\u4F7F\u7528\u5408\u7EA6\u65B9\u6CD5" tabindex="-1">\u4F7F\u7528\u5408\u7EA6\u65B9\u6CD5 <a class="header-anchor" href="#\u4F7F\u7528\u5408\u7EA6\u65B9\u6CD5" aria-hidden="true">#</a></h3><p>callContractMetthod(methodName: string,params?:any[]) \u7F51\u7EDC\u8BF7\u6C42Contract\u5BF9\u8C61\u4E2D\u7684\u65B9\u6CD5</p></li></ul><div class="language-ts"><pre><code>
    <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> btyEther<span class="token punctuation">.</span><span class="token function">callContractMetthod</span><span class="token punctuation">(</span><span class="token string">&#39;transfer&#39;</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token string">&#39;0x89c893e850cff3d531f4c477112F052a536E4843&#39;</span><span class="token punctuation">,</span><span class="token number">14442223</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> res

</code></pre></div><ul><li><h3 id="\u67E5\u770B\u5408\u7EA6\u5730\u5740" tabindex="-1">\u67E5\u770B\u5408\u7EA6\u5730\u5740 <a class="header-anchor" href="#\u67E5\u770B\u5408\u7EA6\u5730\u5740" aria-hidden="true">#</a></h3><p>isContract(contractAddress: string) \u7528\u4E8E\u67E5\u770B\u4E00\u4E2A\u5730\u5740\u662F\u5426\u662F\u5408\u7EA6\u5730\u5740</p></li><li><h3 id="\u53D1\u9001\u4E3B\u94FE\u4EA4\u6613" tabindex="-1">\u53D1\u9001\u4E3B\u94FE\u4EA4\u6613 <a class="header-anchor" href="#\u53D1\u9001\u4E3B\u94FE\u4EA4\u6613" aria-hidden="true">#</a></h3><p>send((params:{to:string,value?:string,data?:string})) \u4E3B\u94FE\u4E0A\u7684\u4EA4\u6613\u53D1\u9001\u51FD\u6570\uFF0C\u5305\u62EC\u6784\u9020-&gt;\u7B7E\u540D\uFF08\u6839\u636E\u767B\u5F55\u65B9\u5F0F\uFF09-&gt;\u53D1\u9001\u7B7E\u540D\u4EA4\u6613</p></li><li><h3 id="\u7B7E\u540D\u4EA4\u6613" tabindex="-1">\u7B7E\u540D\u4EA4\u6613 <a class="header-anchor" href="#\u7B7E\u540D\u4EA4\u6613" aria-hidden="true">#</a></h3><p>signTransaction(data: string) \u6839\u636E\u4E0D\u540C\u7684\u767B\u5F55\u65B9\u5F0F\uFF0C\u5BF9\u4EA4\u6613\u6570\u636E\u8FDB\u884C\u7B7E\u540D</p></li><li><h3 id="\u5408\u7EA6\u90E8\u7F72" tabindex="-1">\u5408\u7EA6\u90E8\u7F72 <a class="header-anchor" href="#\u5408\u7EA6\u90E8\u7F72" aria-hidden="true">#</a></h3><p><code>deploy(abi:any,bytecode:any,options?:any)</code> \u8FDB\u884C\u5408\u7EA6\u7684\u90E8\u7F72\u4EA4\u6613\u53D1\u9001</p></li><li><h3 id="\u6DFB\u52A0token\u5230metamask" tabindex="-1">\u6DFB\u52A0token\u5230metamask <a class="header-anchor" href="#\u6DFB\u52A0token\u5230metamask" aria-hidden="true">#</a></h3><p>addTokenAssets(data:any) \u6839\u636Econfig\u4E2D\u7684\u914D\u7F6E\u5BF9metaMask\u4E2D\u7684token\u663E\u793A\u5217\u8868\u8FDB\u884C\u914D\u7F6E</p></li><li><h3 id="\u5176\u4ED6\u65B9\u6CD5" tabindex="-1">\u5176\u4ED6\u65B9\u6CD5 <a class="header-anchor" href="#\u5176\u4ED6\u65B9\u6CD5" aria-hidden="true">#</a></h3><p>btyEther\u5B8C\u5168\u7EE7\u627F\u4E8E<a href="https://docs.ethers.io/v5/" target="_blank" rel="noopener noreferrer">ethers.js</a>\uFF0C\u6240\u4EE5\u5927\u90E8\u5206ethers.js\u7684\u65B9\u6CD5\u53EF\u4EE5\u901A\u8FC7btyEthers._provider\u6216\u8005btyEthers._contract\u6765\u8FDB\u884C\u8BBF\u95EE\uFF0C\u6CE8\u610F\uFF0CbtyEhters\u6CA1\u6709\u76F8\u540C\u7684signer\u5BF9\u8C61\uFF0C\u56E0\u4E3AbtyEthers\u662F\u6839\u636E\u7528\u6237\u4F7F\u7528\u7684\u7B2C\u4E09\u65B9\u5B89\u5168web3\u63D2\u4EF6\u767B\u5F55\u4FE1\u606F\u6765\u83B7\u53D6signer\u4FE1\u606F\uFF0C\u5E76\u4E0D\u50A8\u5B58signer\u4FE1\u606F</p></li></ul><h2 id="contract" tabindex="-1">Contract <a class="header-anchor" href="#contract" aria-hidden="true">#</a></h2><p>\u5408\u7EA6\u7ED3\u6784\u4F53\u5927\u90E8\u5206\u7EE7\u627F\uFF0C\u4F7F\u7528\u4E86ethers.js\u4E2D\u7684<a href="https://docs.ethers.io/v5/api/contract/" target="_blank" rel="noopener noreferrer">Contract</a>\u6A21\u5757\uFF0C\u5BF9buildSend\u53CA\u76F8\u5173\u7684\u6A21\u5757\u8FDB\u884C\u4E86\u6D41\u7A0B\u4FEE\u6539\u6765\u9002\u5E94btyEther\u8282\u70B9\u7684\u8BBE\u8BA1\uFF0C\u6240\u6709Ethers.js\u652F\u6301\u7684Contract\u65B9\u6CD5\u4F60\u53EF\u4EE5\u5728getContract()\u7684\u8FD4\u56DE\u503C\u4E2D\u83B7\u5F97\u3002</p><h2 id="components" tabindex="-1">Components <a class="header-anchor" href="#components" aria-hidden="true">#</a></h2><p>\u6587\u4EF6\u5939\u5B58\u653E\u4E86\u90E8\u5206\u524D\u7AEFui tempalte,\u5982\u2019\u767B\u5F55\u6846&#39;</p>`,13),i=[s];function o(l,h,d,c,p,u){return t(),a("div",null,i)}var k=e(n,[["render",o]]);export{f as __pageData,k as default};
