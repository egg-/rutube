## Classes
<dl>
<dt><a href="#Rutube">Rutube</a></dt>
<dd></dd>
</dl>
## Members
<dl>
<dt><a href="#url">url</a> : <code>string</code></dt>
<dd></dd>
</dl>
<a name="Rutube"></a>
## Rutube
**Kind**: global class  

* [Rutube](#Rutube)
  * [new Rutube()](#new_Rutube_new)
  * [.request(uri, opts, cb)](#Rutube+request)
  * [.searchVideo(opts, cb)](#Rutube+searchVideo)

<a name="new_Rutube_new"></a>
### new Rutube()
Rutube api implement for nodejs

<a name="Rutube+request"></a>
### rutube.request(uri, opts, cb)
request

**Kind**: instance method of <code>[Rutube](#Rutube)</code>  

| Param | Type | Description |
| --- | --- | --- |
| uri | <code>string</code> |  |
| opts | <code>object</code> |  |
| opts.method | <code>string</code> | `POST`, `GET` default is `GET` |
| opts.data | <code>object</code> |  |
| cb | <code>function</code> | function(err, data) |

<a name="Rutube+searchVideo"></a>
### rutube.searchVideo(opts, cb)
search videos

**Kind**: instance method of <code>[Rutube](#Rutube)</code>  
**Link**: http://rutube.ru/info/to_developers/#item10  

| Param | Type | Description |
| --- | --- | --- |
| opts | <code>object</code> |  |
| opts.query | <code>string</code> |  |
| [opts.page] | <code>number</code> | default 1 |
| [opts.limit] | <code>number</code> | default 10 |
| [opts.filter] | <code>object</code> |  |
| [opts.filter.author_id] | <code>number</code> |  |
| [opts.filter.tag_id] | <code>string</code> |  |
| [opts.filter.category_id] | <code>number</code> |  |
| [opts.filter.duration] | <code>string</code> | `short`, `medium`, `long` (5 mins, 5 to 20 mins, 20 mins) |
| [opts.filter.created] | <code>string</code> | `week`, `month`, `year` |
| [opts.filter.only_hd] | <code>boolean</code> |  |
| [opts.filter.no_adult] | <code>boolean</code> |  |
| [opts.sort] | <code>number</code> | `rank`, `hits`, `created` (revelance,  viewed, creation data) |
| cb | <code>function</code> | function(err, result) |

<a name="url"></a>
## url : <code>string</code>
**Kind**: global variable  
