# snipe_alarm_bookmarklet
JST日本標準時のサイトに簡単なアラーム機能を付けるブックマークレットです。

パソコンのChromeブラウザでたぶん動きます。スマホタブレットや他のブラウザでも動いたら嬉しいです。

iPadのSafariとChromeではおおよそ合ってる時間で鳴ったり鳴らなかったりします。これはできたら修正したい。


# 使い方

わかりやすい詳しい説明は準備中です...

分かる人向けの説明。

以下のブックマークレットを、次のURL先で実行してください。

http://www.nict.go.jp/JST/JST5.html


`javascript:(function(url){s=document.createElement('script');s.src=url;document.body.appendChild(s);})('https://cdn.jsdelivr.net/gh/roloa/snipe_alarm_bookmarklet@main/snipe_alarm.js')`

（トリプルクリックすると選択がカンタンです）

ブックマークレット本体は、リポジトリの同ディレクトリ内にある「snipe_alarm.js」です。

# 機能について

日本標準時のサイトでブックマークレットが正しく実行されると、

サイト内の「あなたのコンピュータの内蔵時計」の表示の下に、スナイプ予定時刻と設定フォームが表示されます

設定フォームにスナイプ時刻の分と秒を入力して[設定]ボタンを押すとスナイプ時刻が設定され、

指定した時刻の10秒前から「ポン」のような音が1秒ごとに鳴ります。4秒前から少し高い音に変わり、設定時刻ちょうどにさらに高い音が鳴ります。

どんな音が鳴るかは、音確認ボタンを押して確認してください。
