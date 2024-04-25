+++
insert_anchor_links = "left"
+++

<!-- <div class="dark-hero full-width" classes="add appear">
  <span class="logo dark">&lt;<span class="blue">/</span>&gt; <span class="no-mobile">htm<span class="blue">x</span></span></span>
  <sub class="no-mobile"><i>high power tools for HTML</i></sub>
</div> -->

<div class="news-box">
<strong>NEWS:</strong> htmx finished 2nd in the <a href="https://risingstars.js.org/2023/en#section-framework">2023 
JavaScript Rising Stars</a> "Front-end Frameworks" category, just behind React (htmx is a library, btw) and <a href="https://risingstars.js.org/2023/en#section-all">#10 overall</a>!
Thank you to everyone who <a href="https://github.com/bigskysoftware/htmx">starred</a> us!
</div>

<h2>introduction</h2>

htmx gives you access to [AJAX](@/docs.md#ajax), [CSS Transitions](@/docs.md#css_transitions), [WebSockets](@/docs.md#websockets) and [Server Sent Events](@/docs.md#sse) 
directly in HTML, using [attributes](@/reference.md#attributes), so you can build 
[modern user interfaces](@/examples/_index.md) with the [simplicity](https://en.wikipedia.org/wiki/HATEOAS) and 
[power](https://www.ics.uci.edu/~fielding/pubs/dissertation/rest_arch_style.htm) of hypertext

htmx is small ([~14k min.gz'd](https://unpkg.com/htmx.org/dist/)), 
[dependency-free](https://github.com/bigskysoftware/htmx/blob/master/package.json),
[extendable](@/extensions/_index.md), 
IE11 compatible & has **reduced** code base sizes by [67% when compared with react](@/essays/a-real-world-react-to-htmx-port.md)

<h2>motivation</h2>

* Why should only [`<a>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a) & [`<form>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form) be able to make HTTP requests?
* Why should only [`click`](https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event) & [`submit`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit_event) events trigger them?
* Why should only [`GET`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/GET) & [`POST`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/POST) methods be [available](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)?
* Why should you only be able to replace the **entire** screen?

By removing these constraints, htmx completes HTML as a [hypertext](https://en.wikipedia.org/wiki/Hypertext)

<h2>quick start</h2>

```html
  <script src="https://unpkg.com/htmx.org@1.9.12"></script>
  <!-- have a button POST a click via AJAX -->
  <button hx-post="/clicked" hx-swap="outerHTML">
    Click Me
  </button>
```

The [`hx-post`](@/attributes/hx-post.md) and [`hx-swap`](@/attributes/hx-swap.md) attributes on
this button tell htmx:

> "When a user clicks on this button, issue an AJAX request to /clicked, and replace the entire button with the HTML response"

htmx is the successor to [intercooler.js](http://intercoolerjs.org)

Read the [docs introduction](@/docs.md#introduction) for a more in-depth... introduction.

<h2><a name='book'></a>book</h2>

We are happy to announce the release of [Hypermedia Systems](https://hypermedia.systems), a book on how to build 
[Hypermedia-Driven Applications](@/essays/hypermedia-driven-applications.md) using htmx & more:

<div style="text-align: center;padding: 24px">
<a href="https://www.amazon.com/dp/B0C9S88QV6/ref=sr_1_1?crid=1P0I3GXQK32TN"><img src="/img/hypermedia-systems.png" alt="hypermedia systems"></a>
</div>

<h2 class="row justify-between items-center">sponsors <a href="https://github.com/sponsors/bigskysoftware?o=esb" class="btn btn-sponsor"><svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-heart color-fg-sponsors">
    <path d="m8 14.25.345.666a.75.75 0 0 1-.69 0l-.008-.004-.018-.01a7.152 7.152 0 0 1-.31-.17 22.055 22.055 0 0 1-3.434-2.414C2.045 10.731 0 8.35 0 5.5 0 2.836 2.086 1 4.25 1 5.797 1 7.153 1.802 8 3.02 8.847 1.802 10.203 1 11.75 1 13.914 1 16 2.836 16 5.5c0 2.85-2.045 5.231-3.885 6.818a22.066 22.066 0 0 1-3.744 2.584l-.018.01-.006.003h-.002ZM4.25 2.5c-1.336 0-2.75 1.164-2.75 3 0 2.15 1.58 4.144 3.365 5.682A20.58 20.58 0 0 0 8 13.393a20.58 20.58 0 0 0 3.135-2.211C12.92 9.644 14.5 7.65 14.5 5.5c0-1.836-1.414-3-2.75-3-1.373 0-2.609.986-3.029 2.456a.749.749 0 0 1-1.442 0C6.859 3.486 5.623 2.5 4.25 2.5Z"></path>
</svg> become a sponsor</a></h2>


htmx development can be supported via [GitHub Sponsors](https://github.com/sponsors/bigskysoftware?o=esb)


Thank you to all our generous <a href="https://github.com/sponsors/bigskysoftware?o=esb">supporters</a>, including:

<style>
#sponsor-table td {
  text-align: center;
  padding: 16px;
  min-height: 100px;
  border-bottom: none;
  vertical-align: middle;
}

@media only screen and (max-width: 760px)  {

	/* Force table to not be like tables anymore */
	table, thead, tbody, th, td, tr { 
		display: block; 
	}

}

</style>
<div style="overflow-x: auto">
<table id="sponsor-table">
<tr>
<td colspan="3">
        <a data-github-account="NotASithLord" href="https://hydrahost.com"><img src="/img/hydra-hosting.svg" alt="The GPU Marketplace" style="width:100%;"></a>
</td>
</tr>
<tr>
<td>
        <a data-github-account="JetBrainsOfficial" href="https://www.jetbrains.com"><img src="/img/jetbrains.png" alt="Jetbrains" style="max-width:30%;min-width:100px;"></a>
</td>
<td>
        <a data-github-account="commspace" href="https://www.commspace.co.za"><img src="/img/commspace.svg" alt="commspace" style="min-width:200px"></a>
</td>
<td>
        <a href="https://github.blog/2023-04-12-github-accelerator-our-first-cohort-and-whats-next"><img src="https://htmx.org/img/Github_Logo.png" alt="GitHub" style="max-width:30%;min-width:100px;"></a>
</td>
</tr>
<tr>
<td>
        <a data-github-account="craftcms" href="https://craftcms.com"><img src="/img/logo-craft-cms.svg" alt="craft cms" style="width:90%;max-width:200px"></a>
</td>
<td>
        <a data-github-account="ButterCMS" href="https://buttercms.com/?utm_campaign=sponsorship&utm_medium=banner&utm_source=htmxhome">
          <img src="/img/butter-cms.svg" alt="ButterCMS" style="width:100%;max-width:200px">
        </a>
</td>
<td>
        <a data-github-account="Black-HOST" href="https://black.host">
          <img src="/img/blackhost-logo.svg" alt="Black Host" style="width:100%;max-width:200px">
        </a>
</td>
</tr>
<tr>
<td>
        <a href="https://www.v7n.com/">
          <img alt="V7N" src="/img/v7n-logo.png" style="width:100%;max-width:200px">
        </a>
</td>
<td>
      <a data-github-account="sekunho" href="https://twitter.com/sekunho_/"><img src="/img/sekun-doggo.jpg" alt="Hiro The Doggo" style="border: 2px solid lightgray; border-radius:20px; width:100%;max-width:150px"></a>
</td>
<td>
        <a href="https://dasfilter.shop/pages/partner-program">
          <img alt="Das Filter" src="/img/das-filter.svg" style="width:100%;max-width:300px">
        </a>
</td>
</tr>
<tr>
<td>
      <a href="https://www.pullapprove.com/?utm_campaign=sponsorship&utm_medium=banner&utm_source=htmx">
        <img src="/img/pullapprove-logo.svg" alt="PullApprove" style="width:100%;max-width:200px">
      </a>
</td>
<td>
        <a data-github-account="transloadit" href=" https://transloadit.com/?utm_source=htmx&utm_medium=referral&utm_campaign=sponsorship&utm_content=website/">
          <img alt="Transloadit" src="/img/logos-transloadit-default.svg" style="width:100%;max-width:200px">
        </a>
</td>
<td>
      <a data-github-account="uibakery" href="https://uibakery.io"><img src="/img/ui-bakery.png" alt="UI Bakery" style="width:100%;max-width:250px"></a>
</td>
</tr>
<tr>
<td>
        <a data-github-account="jai-deepsource" href=" https://deepsource.com/">
          <img alt="Deepsource" src="/img/deepsource.svg" style="width:100%;max-width:250px">
        </a>
</td>
<td>
      <a data-github-account="pubkey" href="https://rxdb.info/?utm_source=sponsor&utm_medium=githubsponsor&utm_campaign=githubsponsor-htmx">
        <img src="/img/rxdb.svg" alt="RxDB JavaScript Database" style="width:100%;max-width:150px"></a>
</td>
<td>
      <a href="https://www.ohne-makler.net/"><img src="/img/ohne-makler.svg" alt="Ohne-Makler" style="width:100%;max-width:150px"></a>
</td>
</tr>
<tr>
<td>
        <a data-github-account="codacy" href="https://www.codacy.com//">
          <img alt="Deepsource" src="/img/codacy.svg" style="width:100%;max-width:250px">
        </a>
</td>
<td>
        <a data-github-account="apesternikov" href="https://codereviewbot.ai/">
          <img alt="AI Code Review Bot" src="/img/codereviewbot.svg" style="width:100%;max-width:250px">
        </a>
</td>
<td>
        <a data-github-account="llcorg" href="https://www.llc.org/">
          <img alt="How to start an LLC - a guide from LLC.org, proud open source sponsor" src="/img/llc-org.svg" style="width:100%;max-width:250px">
        </a>
</td>
</tr>
<tr>
<td>
        <a data-github-account="VPSServerCom" href="https://www.vpsserver.com/">
          <img alt="VPS Server Hosting in the Cloud: Cost Efficiency" src="/img/vps-server-logo.svg" style="width:100%;max-width:250px">
        </a>
</td>
</tr>
</table>
</div>

<div style="text-align: center;font-style: italic;margin-top: 26px;">ʕ •ᴥ•ʔ made in montana</div>
