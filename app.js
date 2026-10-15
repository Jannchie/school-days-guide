
const DATA = window.DATA;
const NAMES = DATA.names, GL = DATA.gloss, CUE = DATA.cue, TT = DATA.titles, BL = DATA.blocks;
const IC = {"check": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"1em\" height=\"1em\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" class=\"ic\"><path d=\"M4.8 12l4.8 4.8 9.6-9.6\"/></svg>", "x": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"1em\" height=\"1em\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" class=\"ic\"><path d=\"M6 6L18 18M18 6L6 18\"/></svg>", "save": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"1em\" height=\"1em\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" class=\"ic\"><path d=\"M5.5 3.5H15.67a2 2 0 011.42.59l2.82 2.82a2 2 0 01.59 1.42V18.5a2 2 0 01-2 2H5.5a2 2 0 01-2-2V5.5a2 2 0 012-2zm2 0v3a1 1 0 001 1h5a1 1 0 001-1v-3m-7 17v-6a1 1 0 011-1h7a1 1 0 011 1v6\"/></svg>", "arrow": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"1em\" height=\"1em\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" class=\"ic\"><path d=\"M4.3 12H18.64M13.1 5.4l6.25 6.25a.5.5 0 010 .7L13.1 18.6\"/></svg>", "github": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"1em\" height=\"1em\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" class=\"ic\"><path d=\"M9.5 20.5V18c0-1 .25-1.75 1-2.5-3.75-.5-6-2.5-6-5.5 0-1.25.5-2.25 1-2.75L6 3.5l3.5 2c1.5-.25 3.5-.25 5 0l3.5-2 .5 3.75c.5.5 1 1.5 1 2.75 0 3-2.25 5-6 5.5.75.75 1 1.5 1 2.5v2.5m-5-2.25c-3 1-3.25-1.75-5.5-1.75\"/></svg>", "ext": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"1em\" height=\"1em\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" class=\"ic\"><path d=\"M11 4.5H6.5a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2V13m-8-.5l8.25-8.25M15.5 3.5H20a.5.5 0 01.5.5V8.5\"/></svg>"};
const INTRO = {"zh": ["这是一份面向《School Days REMASTERED》（スクールデイズ 重制版）的全结局攻略。", "网上能找到的 School Days 攻略，大多是针对 HQ 版或更早版本写的。笔者照着这些攻略玩重制版，始终打不出想要的路线。于是笔者逆向了游戏程序，取出了全部好感度数值和路线分歧条件，并用游戏原本的分歧代码逐条重放验证，在此基础上整理出这份完整的全结局攻略：22 个结局各自的选项路线、每个选项对世界和言叶好感的影响、每个分歧点的判定条件，以及一次打完全部结局的存档顺序。", "如果发现错误，欢迎通过页面底部的 X 或 GitHub 联系笔者。"], "ja": ["『School Days REMASTERED』（スクールデイズ リマスター版）の全エンディング攻略です。", "ネットで見つかるスクールデイズの攻略は、多くが HQ 版やそれ以前のバージョン向けです。筆者はそれらを見ながらリマスター版をプレイしましたが、どうしても狙ったルートに入れませんでした。そこでゲームのプログラムを解析し、すべての好感度の数値とルート分岐の条件を取り出し、ゲーム本来の分岐処理で一つずつ再生して確認したうえで、この全エンディング攻略をまとめました。22 個のエンディングそれぞれの選択肢、各選択肢による世界・言葉の好感度の変化、各分岐の判定条件、そして全エンディングを順に回収するためのセーブ手順を載せています。", "間違いを見つけたら、ページ下部の X か GitHub からご連絡ください。"], "en": ["This is a complete walkthrough of every ending in School Days REMASTERED.", "Most School Days guides online were written for the HQ edition or older releases. Following them in the remaster, I could never get the routes I wanted. So I reverse-engineered the game itself, pulled out every affection value and every branch condition, and replayed each route through the game's own branching code to check it. This guide is built on that: the choices for all 22 endings, how each choice changes Sekai's and Kotonoha's affection, the condition at every branch, and a save order for collecting every ending in one sitting.", "If you find a mistake, contact me on X or GitHub at the bottom of the page."]};
const KAN = ["一","二","三","四","五"];
const WHO = {"誠":["诚","誠","Makoto"],"世界":["世界","世界","Sekai"],"言葉":["言叶","言葉","Kotonoha"],"刹那":["刹那","刹那","Setsuna"],"泰介":["泰介","泰介","Taisuke"],"乙女":["乙女","乙女","Otome"],"光":["光","光","Hikari"],"七海":["七海","七海","Nanami"],"心":["心","心","Kokoro"],"誠の母":["诚的母亲","誠の母","Makoto's mother"]};

const I = {
  zh:{ title:"全结局分歧攻略", seal:"分歧<br>攻略",
    lede:"22 个结局怎么选、每个选项加多少好感、在哪里判定。条件取自游戏程序。",
    tabs:["结局攻略","全结局存档攻略","回想全回收","分歧条件"], repT:"回想全回收", repLede:"全结局存档攻略打完后，49 个回想中有 {have} 个已经解锁。下面的补充游玩可以收齐剩下的 {miss} 个：从标出的存档读档，照着选到「回想解锁」为止即可，不必打到结局。", repList:"回想一览", repWhere:"解锁于", repMain:n=>`全结局存档攻略 其${n}`, repExtra:n=>`本页 其${n}`, repGot:"回想解锁", repLoadMain:s=>`读取全结局存档攻略的存档 ${s}`, repLoadRep:s=>`读取本页的存档 R${s}`, repSave:s=>`在此存档 R${s}`, repHead:["位置","场景","解锁于"], repPos:p=>`第${p.page}页 第${p.row}行第${p.col}列${p.v ? `（${p.v}）` : ""}`,
    notes:[["好感看不到。","世界、言叶、乙女三个数值，开局都是 0。"],["「不选」也算一个选项。","选项出现后什么都不按，等倒计时结束。有些关键分歧必须这样做，有时不选也会加好感。"],["平局算言叶。","大多数分歧比较「世界 > 言叶」，严格大于才成立。"],["不是每个选项都要紧。","标「关键」的必须照选，「凑好感」只影响好感但这些好感是必要的，「随意」的选哪个都行（每次只换一处、其余照旧时的结果）。能选具体选项时就不推荐「不选」；仍推荐「不选」的地方，是因为不选会走到不同的剧情。"]],
    so:"所以", elseW:"不成立则", enter:x=>`进入 ${x}`, appear:x=>`出现选项 ${x}`, toThen:"选这个", flow:"分歧流程图", flowNote:"每一列是一话，方块是这一话可能出现的标题；最右边是结局。点任一方块，会高亮经过它的所有路线。西瓜结局（No.22）是在 No.14 或 No.15 的基础上追加的，图中不单列。", buy:"购买游戏", buyJa:"日文版（Overflow 官方）", buyEn:"英文・中文版（JAST USA）", kp:"要点", kpFeel:n=>`另有 ${n} 处凑好感的选择`, tagFeel:"凑好感", kpRoute:"路线", kpNeed:"须", kpNow:"此时", kpKeys:"关键选择", kpWait:"不选", kpFinal:"最后", kpNone:"本话没有关键选择", pickEnd:"结局一览", steps:"次选择", showLv:"显示好感", onlyPick:"只看要选的", keyOnly:"只看关键选项", tagKey:"关键", tagAny:"随意", alsoOk:"也可以", keyN:"个关键选项",
    none:"不选（等倒计时结束）", judge:"判定", yes:"成立", no:"不成立", toEnd:"结局",
    ep:n=>n==6?"最终话":`第${KAN[n-1]}话`, final:"最终好感", endK:"结局",
    S:"世界", K:"言叶", O:"乙女",
    allTitle:"一次打完全部结局", allLede:"从上往下依次游玩。看到「存档」标记时，在那个选项出现的时候存档。之后的周目从标出的存档读档，改选高亮的选项。",
    sum:["个结局","次游玩","个存档位","次选择"],
    run:n=>`其${n}`, newGame:"从新游戏开始", loadAt:(s,ep)=>`读取存档 ${s}，回到${ep}的这个选项`, saveHere:s=>`在此存档 ${s}`, load:s=>`读取存档 ${s}`, also:"同时达成",
    mech:"机制", thr:"阈值判定点", skel:"路线骨架", endc:"结局最终判定", eps:"各话标题", notesT:"说明",
    thrHead:["位置","条件"], skelHead:["位置","条件","去向"], endHead:["No.","结局","条件"], epsHead:["话","标题","出现在"],
    foot:"数据来源：反编译 Assembly-CSharp.dll 中的 Story.cs（好感表、阈值表和路由状态机）；台词、选项和各话标题卡来自游戏资源。台词和选项下的中文是直译，仅供辨认。" },
  ja:{ title:"全エンディング分岐攻略", seal:"分岐<br>攻略",
    lede:"22 のエンディングへの選び方、各選択肢の好感度、分岐の判定。条件はゲームのプログラムから取り出したもの。",
    tabs:["エンディング別","全エンド・セーブ攻略","回想コンプリート","分岐条件"], repT:"回想コンプリート", repLede:"全エンド・セーブ攻略を終えた時点で、49 個の回想のうち {have} 個が解放済み。残り {miss} 個は下の追加プレイで回収できる。指定のセーブをロードし、「回想解放」まで選べばよく、エンディングまで進める必要はない。", repList:"回想一覧", repWhere:"解放", repMain:n=>`全エンド・セーブ攻略 其の${n}`, repExtra:n=>`このページ 其の${n}`, repGot:"回想解放", repLoadMain:s=>`全エンド・セーブ攻略のセーブ ${s} をロード`, repLoadRep:s=>`このページのセーブ R${s} をロード`, repSave:s=>`ここでセーブ R${s}`, repHead:["位置","シーン","解放"], repPos:p=>`${p.page}ページ目 ${p.row}行${p.col}列${p.v ? `（${p.v}）` : ""}`,
    notes:[["好感度は表示されない。","世界・言葉・乙女の3つ。開始時はすべて0。"],["「選ばない」も選択肢。","選択肢が出ても何も押さず、時間切れを待つ。重要な分岐の中にはこれが必要なものがあり、選ばないことで好感度が上がる場合もある。"],["同点は言葉側。","多くの分岐は「世界 > 言葉」で判定し、より大きい場合のみ成立する。"],["すべての選択肢が重要なわけではない。","「重要」はその通りに選ぶ。「好感度稼ぎ」は展開は変わらないが必要な好感度。「どれでも可」は何を選んでもよい（1か所だけ変えて他はそのままにした場合）。選択肢で済む所では「選ばない」を勧めない。それでも「選ばない」とある所は、選ばないことで展開が変わる。"]],
    so:"なので", elseW:"不成立なら", enter:x=>`${x} に進む`, appear:x=>`${x} の選択肢が出る`, toThen:"これを選ぶと", flow:"分岐フローチャート", flowNote:"各列が1話分で、箱はその話で表示されうるタイトル、右端はエンディング。箱をクリックすると、そこを通るルートが強調される。「西瓜」（No.22）はNo.14かNo.15に追加される形なので、図には含めていない。", buy:"ゲームを購入", buyJa:"日本語版（オーバーフロー公式）", buyEn:"英語・中国語版（JAST USA）", kp:"要点", kpFeel:n=>`ほかに好感度稼ぎの選択 ${n} か所`, tagFeel:"好感度稼ぎ", kpRoute:"ルート", kpNeed:"必要", kpNow:"この時点", kpKeys:"重要な選択", kpWait:"選ばない", kpFinal:"最後に", kpNone:"", pickEnd:"エンディング一覧", steps:"回の選択", showLv:"好感度を表示", onlyPick:"選ぶ項目だけ", keyOnly:"重要な選択肢だけ", tagKey:"重要", tagAny:"どれでも可", alsoOk:"これでも可", keyN:"個の重要な選択肢",
    none:"選ばない（時間切れを待つ）", judge:"判定", yes:"成立", no:"不成立", toEnd:"エンディング",
    ep:n=>n==6?"最終話":`第${KAN[n-1]}話`, final:"最終好感度", endK:"エンディング",
    S:"世界", K:"言葉", O:"乙女",
    allTitle:"全エンディングを順番に回収", allLede:"上から順にプレイする。「セーブ」の印がある選択肢でセーブし、以降の周回では指定のセーブをロードして、強調された選択肢を選び直す。",
    sum:["エンディング","周回","セーブ枠","回の選択"],
    run:n=>`其の${KAN[n-1] ?? n}`.replace(/其の(.+)/,(m,a)=>n<=5?m:`其の${n}`), newGame:"ニューゲームから", loadAt:(s,ep)=>`セーブ ${s} をロードし、${ep}のこの選択肢へ`, saveHere:s=>`ここでセーブ ${s}`, load:s=>`セーブ ${s} をロード`, also:"同時に達成",
    mech:"仕組み", thr:"しきい値の判定", skel:"ルートの骨格", endc:"エンディングの最終判定", eps:"各話タイトル", notesT:"補足",
    thrHead:["位置","条件"], skelHead:["位置","条件","行き先"], endHead:["No.","エンディング","条件"], epsHead:["話","タイトル","表示される場所"],
    foot:"出典：Assembly-CSharp.dll を逆コンパイルした Story.cs（好感度表・しきい値表・分岐ステートマシン）。台詞・選択肢・各話タイトルカードはゲームのリソースより。" },
  en:{ title:"All Endings Route Guide", seal:"ROUTE<br>GUIDE",
    lede:"How to reach each of the 22 endings, what each choice adds to affection, and where the branches are decided. Conditions come from the game's own code.",
    tabs:["By ending","All endings with saves","All replays","Branch rules"], repT:"Unlock every replay", repLede:"After the all-endings save order, {have} of the 49 replays are unlocked. The extra runs below collect the remaining {miss}: load the marked save and follow the picks until the replay unlocks. You don't need to reach an ending.", repList:"Replay list", repWhere:"Unlocked in", repMain:n=>`All endings, run ${n}`, repExtra:n=>`This page, run ${n}`, repGot:"Replay unlocked", repLoadMain:s=>`Load save ${s} from the all-endings guide`, repLoadRep:s=>`Load save R${s} from this page`, repSave:s=>`Save R${s} here`, repHead:["Position","Scene","Unlocked in"], repPos:p=>`Page ${p.page}, row ${p.row}, column ${p.col}${p.v ? ` (${p.v})` : ""}`,
    notes:[["Affection is hidden.","Three values: Sekai, Kotonoha and Otome. All start at 0."],["Not choosing is a choice.","When the options appear, press nothing and let the timer run out. Some key branches need this, and sometimes it gives affection too."],["Ties go to Kotonoha.","Most branches test \"Sekai > Kotonoha\", which only passes when strictly greater."],["Not every choice matters.","Key: pick as shown. Affection: it only changes affection, but you need that affection. Any: pick whatever you like (tested by changing one choice and keeping the rest). Where a real option works, the guide never tells you to wait; where it still says wait, waiting changes the story."]],
    so:"so you", elseW:"otherwise you", enter:x=>`enter ${x}`, appear:x=>`get the options ${x}`, toThen:"leads to", flow:"Branch flowchart", flowNote:"Each column is one episode; each box is a title that episode can have, and the right-hand column is the endings. Click a box to highlight every route through it. Watermelon (No.22) is added on top of No.14 or No.15, so it is not drawn.", buy:"Buy the game", buyJa:"Japanese edition (Overflow, official)", buyEn:"English / Chinese edition (JAST USA)", kp:"Key points", kpFeel:n=>`plus ${n} affection-building pick${n > 1 ? "s" : ""}`, tagFeel:"Affection", kpRoute:"Route", kpNeed:"Need", kpNow:"at this point", kpKeys:"Key picks", kpWait:"don't choose", kpFinal:"Finally", kpNone:"", pickEnd:"Endings", steps:"choices", showLv:"Show affection", onlyPick:"Only the pick", keyOnly:"Key choices only", tagKey:"Key", tagAny:"Any", alsoOk:"also works", keyN:"key choices",
    none:"Don't choose (let the timer run out)", judge:"Check", yes:"pass", no:"fail", toEnd:"ending",
    ep:n=>n==6?"Final Episode":`Episode ${n}`, final:"Final affection", endK:"Ending",
    S:"Sekai", K:"Kotonoha", O:"Otome",
    allTitle:"Every ending in one sitting", allLede:"Play the runs from top to bottom. Where a run shows a save marker, save when those options appear. Later runs load that save and pick the highlighted option instead.",
    sum:["endings","runs","save slots","choices"],
    run:n=>`Run ${n}`, newGame:"Start a new game", loadAt:(s,ep)=>`Load save ${s}, back at this choice in ${ep}`, saveHere:s=>`Save ${s} here`, load:s=>`Load save ${s}`, also:"Also unlocks",
    mech:"How it works", thr:"Threshold checks", skel:"Route skeleton", endc:"Final check for each ending", eps:"Episode titles", notesT:"Notes",
    thrHead:["Where","Condition"], skelHead:["Where","Condition","Leads to"], endHead:["No.","Ending","Condition"], epsHead:["Ep.","Title","Shown at"],
    foot:"Source: Story.cs from the decompiled Assembly-CSharp.dll (affection table, threshold table and routing state machine). Lines, choices and episode title cards come from the game's resources. Choices and lines are in the original Japanese; the English under them is a literal translation for reference only." }
};
I.ja.run = n => `其の${n}`;
I.zh.run = n => `其${n}`;

// 结局最终条件（短句）
const ENDC = [
 {"zh": "最终话最后一个选项不选", "ja": "最終話の最後の選択肢で選ばない", "en": "Final episode: let the last choice time out"},
 {"zh": "最终话最后选「外に出す」", "ja": "最終話の最後で「外に出す」", "en": "Final episode: pick 「外に出す」 at the end"},
 {"zh": "最终话：乙女 ≤ 3，且 世界 > 言叶", "ja": "最終話：乙女 ≤ 3 かつ 世界 > 言葉", "en": "Final episode: Otome ≤ 3 and Sekai > Kotonoha"},
 {"zh": "最终话：乙女 ≤ 3，且 世界 ≤ 言叶", "ja": "最終話：乙女 ≤ 3 かつ 世界 ≤ 言葉", "en": "Final episode: Otome ≤ 3 and Sekai ≤ Kotonoha"},
 {"zh": "最终话：乙女 > 3", "ja": "最終話：乙女 > 3", "en": "Final episode: Otome > 3"},
 {"zh": "最终话：世界 ≤ 言叶", "ja": "最終話：世界 ≤ 言葉", "en": "Final episode: Sekai ≤ Kotonoha"},
 {"zh": "最终话：世界 > 言叶", "ja": "最終話：世界 > 言葉", "en": "Final episode: Sekai > Kotonoha"},
 {"zh": "最终话：世界 > 言叶，或最后的「いいよ」不选", "ja": "最終話：世界 > 言葉、または最後の「いいよ」で選ばない", "en": "Final episode: Sekai > Kotonoha, or let the last 「いいよ」 time out"},
 {"zh": "最终话：世界 ≤ 言叶，最后选「いいよ」", "ja": "最終話：世界 ≤ 言葉、最後に「いいよ」", "en": "Final episode: Sekai ≤ Kotonoha, then 「いいよ」"},
 {"zh": "最终话：世界 ≤ 言叶，最后选「いいよ」", "ja": "最終話：世界 ≤ 言葉、最後に「いいよ」", "en": "Final episode: Sekai ≤ Kotonoha, then 「いいよ」"},
 {"zh": "最终话：选「言葉」，或 世界 ≤ 言叶", "ja": "最終話：「言葉」を選ぶ、または 世界 ≤ 言葉", "en": "Final episode: pick 「言葉」, or Sekai ≤ Kotonoha"},
 {"zh": "最终话：选「世界」或不选", "ja": "最終話：「世界」を選ぶか選ばない", "en": "Final episode: pick 「世界」 or let it time out"},
 {"zh": "最终话：世界 ≤ 言叶，最后选「いいよ」", "ja": "最終話：世界 ≤ 言葉、最後に「いいよ」", "en": "Final episode: Sekai ≤ Kotonoha, then 「いいよ」"},
 {"zh": "最终话：世界 ≤ 言叶", "ja": "最終話：世界 ≤ 言葉", "en": "Final episode: Sekai ≤ Kotonoha"},
 {"zh": "最终话：世界 > 言叶", "ja": "最終話：世界 > 言葉", "en": "Final episode: Sekai > Kotonoha"},
 {"zh": "最终话：世界 > 言叶", "ja": "最終話：世界 > 言葉", "en": "Final episode: Sekai > Kotonoha"},
 {"zh": "最终话：世界 ≤ 言叶", "ja": "最終話：世界 ≤ 言葉", "en": "Final episode: Sekai ≤ Kotonoha"},
 {"zh": "最终话：世界 ≤ 言叶，最后选「いいよ」", "ja": "最終話：世界 ≤ 言葉、最後に「いいよ」", "en": "Final episode: Sekai ≤ Kotonoha, then 「いいよ」"},
 {"zh": "最终话：世界 ≤ 46，或选「いられるよ」", "ja": "最終話：世界 ≤ 46、または「いられるよ」を選ぶ", "en": "Final episode: Sekai ≤ 46, or pick 「いられるよ」"},
 {"zh": "最终话：世界 > 46，且不选「いられるよ」", "ja": "最終話：世界 > 46 かつ「いられるよ」を選ばない", "en": "Final episode: Sekai > 46 and don't pick 「いられるよ」"},
 {"zh": "最终话：两处选项都不选，且 世界 > 言叶", "ja": "最終話：2か所とも選ばず、世界 > 言葉", "en": "Final episode: let both choices time out, and Sekai > Kotonoha"},
 {"zh": "第四话刹那线里一处不选，之后达成 No.14 或 No.15 时追加", "ja": "第四話の刹那ルートで1か所選ばず、その後 No.14 か No.15 で追加", "en": "Let one choice in Setsuna's episode 4 time out; added when you get No.14 or No.15"},
];

const THR = [
 ["01-00-N05","K",11],["01-00-R01","S",8],["02-2K-K00","K",21],["03-A0-B00","K",36],["03-A0-C00","S",36],["03-A1-D07","S",36],["03-A1-E00","S",36],
 ["03-KB-C02","S",24],["03-KB-O08","K",30],["04-SE-K00","O",1],["05-5O-D03","O",2],["05-5O-J02","O",3],["05-SD-B03","S",46]];

// 路线骨架：[位置, 条件, 去向]
const SKEL = [
 [["01-00-U00"],{zh:"世界>言叶",ja:"世界>言葉",en:"Sekai > Kotonoha"},{zh:"成立 → 01-1S → 02-2S；否则 01-1K → 02-2K",ja:"成立 → 01-1S → 02-2S、否 → 01-1K → 02-2K",en:"pass → 01-1S → 02-2S; else 01-1K → 02-2K"}],
 [["02-2K-E04","02-2K-O00"],{zh:"世界>言叶 且 O00 选「じゃあ…」",ja:"世界>言葉 かつ O00で「じゃあ…」",en:"Sekai > Kotonoha and 「じゃあ…」 at O00"},{zh:"03-SB；否则 03-KB",ja:"03-SB、それ以外 → 03-KB",en:"03-SB; otherwise 03-KB"}],
 [["02-2S-T00"],{zh:"世界>言叶",ja:"世界>言葉",en:"Sekai > Kotonoha"},{zh:"03-SA；否则 03-KA → 03-A0 → 03-A1",ja:"03-SA、否 → 03-KA → 03-A0 → 03-A1",en:"03-SA; else 03-KA → 03-A0 → 03-A1"}],
 [["03-A1-F00"],{zh:"世界>言叶",ja:"世界>言葉",en:"Sekai > Kotonoha"},{zh:"03-AS → 04-SA；否则 03-AK → 04-KB",ja:"03-AS → 04-SA、否 → 03-AK → 04-KB",en:"03-AS → 04-SA; else 03-AK → 04-KB"}],
 [["03-A1-E08"],{zh:"不选（不要选「外に出す」）",ja:"選ばない（「外に出す」を選ばない）",en:"Let it time out (don't pick 「外に出す」)"},{zh:"记下刹那标记，之后拿 No.14/15 时追加西瓜结局",ja:"刹那フラグが立ち、No.14/15達成時に「西瓜」が追加",en:"Sets Setsuna's flag; Watermelon is added when you get No.14/15"}],
 [["03-SA-C03"],{zh:"世界>言叶",ja:"世界>言葉",en:"Sekai > Kotonoha"},{zh:"04-SB；否则 03-S0 → 04-KA",ja:"04-SB、否 → 03-S0 → 04-KA",en:"04-SB; else 03-S0 → 04-KA"}],
 [["03-SA-E09","03-SA-F09","03-SA-J02"],{zh:"E09「すぐ行く」/ F09·J02「世界が好きなんだ」",ja:"E09「すぐ行く」/ F09・J02「世界が好きなんだ」",en:"「すぐ行く」 at E09 / 「世界が好きなんだ」 at F09·J02"},{zh:"04-KA",ja:"04-KA",en:"04-KA"}],
 [["03-SA-F04"],{zh:"选「離れる」",ja:"「離れる」",en:"Pick 「離れる」"},{zh:"04-SB，并且之后进不了 05-SD（拿不到 No.19、No.20）",ja:"04-SB。以後05-SDに入れない（No.19・No.20不可）",en:"04-SB, and 05-SD is locked (no No.19 / No.20)"}],
 [["03-KB"],{zh:"世界>24 时才出现「グランドへ」等",ja:"世界>24で「グランドへ」などが出現",en:"「グランドへ」 etc. only appear when Sekai > 24"},{zh:"04-SC；否则 03-BK 或 04-SG",ja:"04-SC、否 → 03-BK または 04-SG",en:"04-SC; otherwise 03-BK or 04-SG"}],
 [["03-SB-A08"],{zh:"世界>言叶",ja:"世界>言葉",en:"Sekai > Kotonoha"},{zh:"04-SC；否则 04-KC（G08 不选 → 03-B2）",ja:"04-SC、否 → 04-KC（G08で選ばない → 03-B2）",en:"04-SC; else 04-KC (G08 timed out → 03-B2)"}],
 [["03-B2-A02"],{zh:"沿用 A01 的选择：「言葉が好きなんだな」",ja:"A01の選択を引き継ぐ：「言葉が好きなんだな」",en:"Reuses the A01 choice: 「言葉が好きなんだな」"},{zh:"03-BK；否则 04-SF → 04-SE",ja:"03-BK、否 → 04-SF → 04-SE",en:"03-BK; else 04-SF → 04-SE"}],
 [["03-BK-K00"],{zh:"世界>言叶",ja:"世界>言葉",en:"Sekai > Kotonoha"},{zh:"04-SE；否则 04-KE",ja:"04-SE、否 → 04-KE",en:"04-SE; else 04-KE"}],
 [["04-SE-K00"],{zh:"乙女>1 → 05-5O；否则 世界>言叶 → 05-SC",ja:"乙女>1 → 05-5O、否なら 世界>言葉 → 05-SC",en:"Otome > 1 → 05-5O; else Sekai > Kotonoha → 05-SC"},{zh:"其余 → 05-5O",ja:"それ以外 → 05-5O",en:"otherwise 05-5O"}],
 [["04-SC-D00"],{zh:"世界>言叶",ja:"世界>言葉",en:"Sekai > Kotonoha"},{zh:"05-SG → 05-SA；否则 04-C1",ja:"05-SG → 05-SA、否 → 04-C1",en:"05-SG → 05-SA; else 04-C1"}],
 [["04-C1-B00"],{zh:"「ごめんな」",ja:"「ごめんな」",en:"「ごめんな」"},{zh:"05-SH → 05-SA；不选 → 04-C0",ja:"05-SH → 05-SA、選ばない → 04-C0",en:"05-SH → 05-SA; timed out → 04-C0"}],
 [["04-C0-A02","04-C0-I00"],{zh:"「世界が好きだから」或「拒む」",ja:"「世界が好きだから」または「拒む」",en:"「世界が好きだから」 or 「拒む」"},{zh:"05-KI；「受け入れる」或不选 → 05-KC",ja:"05-KI、「受け入れる」か選ばない → 05-KC",en:"05-KI; 「受け入れる」 or timed out → 05-KC"}],
 [["04-KB-D00"],{zh:"世界>言叶",ja:"世界>言葉",en:"Sekai > Kotonoha"},{zh:"05-SB；否则 05-KI",ja:"05-SB、否 → 05-KI",en:"05-SB; else 05-KI"}],
 [["04-KC-D00"],{zh:"世界>言叶",ja:"世界>言葉",en:"Sekai > Kotonoha"},{zh:"05-SB；否则 05-KB（H02 不选 → 05-SA）",ja:"05-SB、否 → 05-KB（H02で選ばない → 05-SA）",en:"05-SB; else 05-KB (H02 timed out → 05-SA)"}],
 [["04-KE-F01","04-KE-I00"],{zh:"世界>言叶 且「抱きしめる」",ja:"世界>言葉 かつ「抱きしめる」",en:"Sekai > Kotonoha and 「抱きしめる」"},{zh:"B00/B03 选过「する」（或 B03 不选）→ 05-SE，否则 05-KF；其余 → 05-SB",ja:"B00/B03で「する」（またはB03で選ばない）→ 05-SE、否 → 05-KF、それ以外 → 05-SB",en:"「する」 at B00/B03 (or B03 timed out) → 05-SE, else 05-KF; otherwise 05-SB"}],
 [["04-SB-C06","04-SB-C10"],{zh:"没选过「離れる」且 世界>言叶",ja:"「離れる」未選択 かつ 世界>言葉",en:"never picked 「離れる」 and Sekai > Kotonoha"},{zh:"05-SD；否则 C10「俺も、言葉が好きだ！」→ 05-KG → 05-G0，不选 → 05-5H",ja:"05-SD、否 → C10「俺も、言葉が好きだ！」→ 05-KG → 05-G0、選ばない → 05-5H",en:"05-SD; else 「俺も、言葉が好きだ！」 at C10 → 05-KG → 05-G0, timed out → 05-5H"}],
 [["04-KA"],{zh:"—",ja:"—",en:"—"},{zh:"05-KA → 05-A2",ja:"05-KA → 05-A2",en:"05-KA → 05-A2"}],
];

const MECH = {
 zh:["好感有三个：世界、言叶、乙女，开局都是 0。","加分发生在选项导向的场景上：选了某项后进入的场景如果在好感表里，就加对应的分。所以「不选」也可能加分。","阈值判定都是严格大于。","乙女好感只在 04-SE 和 05-5O 两段里能加。"],
 ja:["好感度は世界・言葉・乙女の3つで、開始時はすべて0。","加点は選択肢の行き先シーンで起きる。選んだ先のシーンが好感度表にあれば加算されるので、「選ばない」でも加点されることがある。","しきい値判定はすべて「より大きい」。","乙女の好感度が上がるのは04-SEと05-5Oの中だけ。"],
 en:["There are three affection values: Sekai, Kotonoha and Otome. All start at 0.","Points are added by the scene a choice leads to. If that scene is in the affection table, its points are added, so letting the timer run out can give points too.","Every threshold check is strictly greater than.","Otome affection can only rise inside 04-SE and 05-5O."],
};
const NOTES = {
 zh:["攻略是对全部选项组合穷举后求出的路线，并用原版路由代码重放确认能到达对应结局。","选项下方的中文是直译，只为了帮助辨认，不是官方翻译。"],
 ja:["攻略は全選択肢の組み合わせを総当たりして求めたルートで、オリジナルの分岐コードで再生して到達を確認済み。"],
 en:["Each route was found by exhaustively exploring every choice combination, then replayed through the original routing code to confirm it reaches its ending.","The English under each choice is a literal translation to help you recognise it, not the official translation."],
};
const BUGT = {
 zh:{t:"可能有 BUG 的选项", d:"第四话学园祭后、与言叶独处时的选项「処女？」/「えっちだな」，选完后程序会跳到不存在的剧本（数组越界），实际游戏中可能卡住或出错。本攻略的所有路线都避开了这里。以下是到达这个选项的一条路线，供复现：", at:"出问题的选项"},
 ja:{t:"バグの可能性がある選択肢", d:"第四話、学園祭のあと言葉と二人きりの場面の選択肢「処女？」/「えっちだな」。選んだ後に存在しないスクリプトへ飛ぶ（配列の範囲外）ため、実機では止まったりエラーになったりする可能性がある。この攻略のルートはすべてここを避けている。再現用に、この選択肢に到達するルートを以下に示す。", at:"問題の選択肢"},
 en:{t:"A choice that may be bugged", d:"In episode 4, after the festival, alone with Kotonoha: the choice 「処女？」/「えっちだな」. After it, the code jumps to a script that doesn't exist (an out-of-range array index), so the real game may freeze or error. Every route in this guide avoids it. To reproduce, here is one route that reaches it:", at:"The bugged choice"},
};



let L = "zh", TAB = "guide", SEL = 13;
try { const s = localStorage.getItem("sd-lang"); if (s && I[s]) L = s; else if (!/^zh/i.test(navigator.language || "")) L = /^ja/i.test(navigator.language) ? "ja" : "en"; } catch (e) {}
const PAGE = window.PAGE || null;
(function autoLang() {
  if (!PAGE || /bot|crawl|spider|slurp|preview|lighthouse|jsdom/i.test(navigator.userAgent || "") || navigator.webdriver) return;
  let chosen = null;
  try { chosen = localStorage.getItem("sd-lang-chosen"); } catch (e) { return; }
  if (chosen) return;
  const langs = (navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || ""]).map(x => String(x).toLowerCase());
  let pref = "en";
  for (const l of langs) { if (l.startsWith("ja")) { pref = "ja"; break; } if (l.startsWith("zh")) { pref = "zh"; break; } if (l.startsWith("en")) { pref = "en"; break; } }
  try { localStorage.setItem("sd-lang-chosen", pref); } catch (e) {}
  if (pref !== PAGE.lang) {
    const b = pref === "ja" ? "/" : `/${pref}/`, t = PAGE.tab;
    const to = t === "all" ? b + "save-order/" : t === "rules" ? b + "branches/" : t === "reps" ? b + "replays/" : PAGE.sel == null ? b : `${b}ending/${PAGE.sel + 1}/`;
    location.replace(to + location.hash);
  }
})();
if (PAGE) { L = PAGE.lang; TAB = PAGE.tab; if (PAGE.sel != null) SEL = PAGE.sel; }
function href(lang, tab, sel) {
  const b = lang === "ja" ? "/" : `/${lang}/`;
  if (tab === "all") return b + "save-order/";
  if (tab === "rules") return b + "branches/";
  if (tab === "reps") return b + "replays/";
  return sel == null ? b : `${b}ending/${sel + 1}/`;
}
function parsePath(path) {
  const m = /^\/(?:(zh|en)\/)?(?:(save-order|branches|replays)\/|ending\/(\d+)\/)?$/.exec(path);
  if (!m) return null;
  return { lang: m[1] || "ja", tab: m[2] === "save-order" ? "all" : m[2] === "branches" ? "rules" : m[2] === "replays" ? "reps" : "guide", sel: m[3] ? +m[3] - 1 : null };
}
let showLv = true, onlyPick = false, keyOnly = false;
try { showLv = localStorage.getItem("sd-lv") !== "0"; onlyPick = localStorage.getItem("sd-op") === "1"; keyOnly = localStorage.getItem("sd-key") === "1"; } catch (e) {}

const $ = (s, r = document) => r.querySelector(s);
const esc = s => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const T = () => I[L];
const li = L => L === "zh" ? 0 : L === "ja" ? 1 : 2;
const endName = n => L === "ja" ? NAMES[n][1] : L === "zh" ? NAMES[n][2] : NAMES[n][0];
const endAlt = n => L === "en" ? NAMES[n][1] : NAMES[n][0];
const ttl = sc => TT[sc][L];
const ttlAlt = sc => L === "en" ? TT[sc].ja : TT[sc].en;
const who = c => T()[c];
const FL = {1:"S", 2:"K", 4:"O"};
const q = s => L === "en" ? `“${s}”` : `「${s}」`;

function optList(sc) {
  const o = (DATA.copt[sc] || []).filter(t => t && t !== "NULL");
  return o.map(t => `<span lang="ja">${esc(q(t))}</span>` + (L !== "ja" && GL[t] ? `<span class="sm">（${esc(GL[t][L === "zh" ? 0 : 1])}）</span>` : "")).join(L === "en" ? " / " : "");
}
function determinate(end, fromSc) {
  if (end === "END" || end.slice(0, 5) === fromSc.slice(0, 5)) return true;
  const x = BL[end.slice(0, 5)]; if (!x) return false;
  if (x.ends) return x.ends.length === 1;
  const own = x.cards.filter(c => c.startsWith(end.slice(0, 5)));
  return new Set((own.length ? own : x.cards).map(c => TT[c].en)).size === 1;
}
function destText(end, fromSc) {
  if (end === "END") return esc(T().toEnd);
  if (end.slice(0, 5) !== fromSc.slice(0, 5)) return T().enter(blockLabel(end.slice(0, 5)));
  if (DATA.copt[end]) return T().appear(optList(end));
  return "";
}
function epName(ep, eps) {
  if (!eps || eps[ep] == null) return "";
  return ep === 6 ? endName(eps[6]) : ttl(eps[ep]);
}
function blockLabel(b) {
  const x = BL[b]; if (!x) return esc(b);
  const ep = +b.slice(0, 2) + 1;
  let names;
  if (x.ends) names = x.ends.map(n => `No.${n + 1} ${endName(n)}`);
  else {
    const own = x.cards.filter(c => c.startsWith(b));
    const uniq = [...new Set((own.length ? own : x.cards).map(ttl))];
    names = uniq.map(q);
  }
  const jn = x.ends ? (L === "en" ? " / " : "、") : (L === "en" ? " / " : "");
  const shown = names.length > 3 ? names.slice(0, 3).join(jn) + "…" : names.join(jn);
  return `<span class="bk"><span class="bt">${esc(T().ep(ep))} ${esc(shown)}</span><span class="code">${b}</span></span>`;
}
function codes(t) {
  return esc(t).replace(/\b(0[0-5]-[0-9A-Z]{2})(-[A-Z][0-9]{2}(?:\/[A-Z][0-9]{2})?)?\b/g, (m, b, s) => s ? `${blockLabel(b)}<span class="code">${s.slice(1)}</span>` : blockLabel(b));
}

function delta(d) {
  const p = [];
  [["S",0],["K",1],["O",2]].forEach(([k,i]) => { if (d[i]) p.push(`<span class="d${k}">${who(k)}${d[i] > 0 ? "+" : ""}${d[i]}</span>`); });
  return p.length ? p.join(" ") : "±0";
}
let SHOW_O = false;
const hasOtome = tl => tl.some(x => x.k === "d" ? x.f === 4 : x.k === "s" && (x.b[2] || x.o.some(o => o.d[2])));
function vsBar(sv, kv) {
  const a = Math.max(sv, 0), b = Math.max(kv, 0), tot = a + b;
  const pk = tot ? b / tot * 100 : 50;
  return `<div class="vs"><div class="vl"><b class="dK">${esc(who("K"))} ${kv}</b><b class="dS">${sv} ${esc(who("S"))}</b></div><div class="vb"><span class="k" style="width:${pk}%"></span><span class="s" style="width:${100 - pk}%"></span></div></div>`;
}
function lv(b) {
  return vsBar(b[0], b[1]) + (SHOW_O ? `<div class="ov dO">${esc(who("O"))} ${b[2]}</div>` : "");
}
function stepRow(x) {
  const c = CUE[x.sc];
  const alt = x.alt || [], others = x.o.filter(o => o.c !== x.c);
  const any = !!x.free;
  const key = alt.length === 0;
  const cls = any ? " any" : key ? " key" : "";
  const tag = any ? `<div class="tag">${esc(T().tagAny)}</div>` : "";
  const cue = c ? `<div class="cue"><span class="who">${esc((WHO[c[0]] || [c[0],c[0],c[0]])[li(L)])}</span><span class="q" lang="ja">${esc(q(c[1]))}</span>${L === "ja" ? "" : `<span class="tr">${esc(c[L === "zh" ? 2 : 3])}</span>`}</div>` : "";
  const opts = x.o.map(o => {
    const pk = o.c === x.c ? " pk" : "";
    const gd = pk && x.og ? x.og[String(o.c)] : null;
    const go = gd && determinate(gd, x.sc) ? `<span class="ok">${IC.arrow} ${destText(gd, x.sc)}</span>` : "";
    const ok = go;
    if (o.c < 0) return `<div class="o none${pk}"><span class="m">${pk ? "●" : "○"}</span><span class="t">${esc(T().none)}${ok}</span><span class="g"></span><span class="d">${delta(o.d)}</span></div>`;
    const g = L === "ja" ? "" : esc(GL[o.t][L === "zh" ? 0 : 1]);
    return `<div class="o${pk}"><span class="m">${pk ? "●" : "○"}</span><span class="t" lang="ja">${esc(o.t)}${ok}</span><span class="g">${g}</span><span class="d">${delta(o.d)}</span></div>`;
  }).join("");
  const sv = (x.save || []).map(s => `<div class="save">${IC.save} ${esc(T().saveHere(s))}</div>`).join("") + (x.rsave || []).map(s => `<div class="save">${IC.save} ${esc(T().repSave(s))}</div>`).join("");
  return `<div class="st step${cls}" title="${x.sc}"><span class="dot"></span><div class="sb"><div class="lv">${lv(x.b)}</div>${sv}${tag}${cue}<div class="opts">${opts}</div></div></div>`;
}
function judgeRow(x) {
  let expr, ok;
  if (x.k === "c") { ok = x.s > x.kk; expr = `${who("S")} ${x.s} &gt; ${who("K")} ${x.kk}`; }
  else { ok = x.v > x.th; expr = `${who(FL[x.f])} ${x.v} &gt; ${x.th}`; }
  let so = "", el = "";
  if (x.go) {
    const a = destText(x.go, x.sc), b0 = (x.els || []).map(e => destText(e, x.sc)).filter(Boolean), b = b0.filter(t => t !== a);
    if (a && b.length) { so = `${esc(T().so)} ${a}`; if (b.length) el = `${esc(T().elseW)}${L === "en" ? " " : "："}${[...new Set(b)].join(L === "en" ? "; " : "；")}`; }
  } else if (x.to && x.to !== "END" && x.to.slice(0, 5) !== x.sc.slice(0, 5)) so = "→ " + blockLabel(x.to.slice(0, 5));
  return `<div class="st jg" title="${x.sc}"><span class="dot"></span><div class="b"><span class="l">${esc(T().judge)}</span><span class="x">${expr}</span><span class="${ok ? "y" : "n"}">${ok ? IC.check + " " + esc(T().yes) : IC.x + " " + esc(T().no)}</span>${so ? `<span class="to">${so}</span>` : ""}${el ? `<span class="to els">${L === "en" ? `(${el})` : `（${el}）`}</span>` : ""}</div><div></div></div>`;
}
function epRow(ep, eps) {
  const nm = epName(ep, eps);
  const alt = !eps || eps[ep] == null ? "" : ep === 6 ? endAlt(eps[6]) : ttlAlt(eps[ep]);
  return `<div class="st ep"><span class="dot"></span><div class="t"><span class="k hmin">${esc(T().ep(ep))}</span><span class="ttl hmin">${esc(q(nm))}<span class="sub">${esc(alt)}</span></span></div><div></div></div>`;
}
function timeline(tl, eps, full) {
  SHOW_O = hasOtome(full || tl);
  let h = "", ep = null;
  for (const x of tl) {
    const e = +x.sc.slice(0, 2) + 1;
    if (e !== ep) { ep = e; h += epRow(e, eps); }
    h += x.k === "s" ? stepRow(x) : judgeRow(x);
  }
  return h;
}
function endRow(ends, fin) {
  const main = ends.find(n => n !== 21) ?? 21;
  const also = ends.filter(n => n !== main);
  return `<div class="st end"><span class="dot"></span><div><div class="k">${esc(T().endK)} · No.${main + 1}</div><div class="ttl hmin">${esc(endName(main))}</div>${also.length ? `<div class="k">${esc(T().also)} · No.${also.map(n => n + 1).join(", ")} ${esc(also.map(endName).join(" / "))}</div>` : ""}<div class="fin">${esc(T().final)}</div><div class="lv" style="margin-top:4px">${lv(fin)}</div></div><div></div></div>`;
}
function toggles() {
  return `<div class="toggles"><label><input type="checkbox" id="opt-lv" ${showLv ? "checked" : ""}> ${esc(T().showLv)}</label><label><input type="checkbox" id="opt-op" ${onlyPick ? "checked" : ""}> ${esc(T().onlyPick)}</label><label><input type="checkbox" id="opt-key" ${keyOnly ? "checked" : ""}> ${esc(T().keyOnly)}</label></div>`;
}
function bindToggles() {
  $("#opt-lv").onchange = e => { showLv = e.target.checked; try { localStorage.setItem("sd-lv", showLv ? "1" : "0"); } catch (_) {} applyView(); };
  $("#opt-op").onchange = e => { onlyPick = e.target.checked; try { localStorage.setItem("sd-op", onlyPick ? "1" : "0"); } catch (_) {} applyView(); };
  $("#opt-key").onchange = e => { keyOnly = e.target.checked; try { localStorage.setItem("sd-key", keyOnly ? "1" : "0"); } catch (_) {} applyView(); };
}
function applyView() { $("#main").classList.toggle("hide-lv", !showLv); $("#main").classList.toggle("only-pick", onlyPick); $("#main").classList.toggle("key-only", keyOnly); }

function keyPoints(r) {
  const t = T(), sep = L === "en" ? ", " : "、", CO = L === "en" ? ": " : "：", SC = L === "en" ? "; " : "；", P = x => L === "en" ? ` (${x})` : `（${x}）`, EP = e => L === "en" ? `${t.ep(e)} ` : t.ep(e);
  const chain = [1, 2, 3, 4, 5].map(e => `${EP(e)}${q(epName(e, r.eps))}`).join(" → ") + ` → ${q(endName(r.eps[6]))}`;
  const items = [`<li><span class="need">${esc(t.kpRoute)}${CO}</span>${esc(chain)}</li>`];
  for (let e = 1; e <= 6; e++) {
    const xs = r.tl.filter(x => +x.sc.slice(0, 2) + 1 === e);
    const needs = xs.filter(x => x.k !== "s" && x.go).map(x => {
      const a = destText(x.go, x.sc), b = [...new Set((x.els || []).map(e => destText(e, x.sc)).filter(t => t && t !== a))];
      if (!a || b.every(t => t === a)) return null;
      let txt;
      if (x.k === "c") txt = x.s > x.kk ? `${who("S")} > ${who("K")}` : `${who("S")} ≤ ${who("K")}`;
      else { const ok = x.v > x.th; txt = `${who(FL[x.f])} ${ok ? ">" : "≤"} ${x.th}`; }
      const now = x.k === "c" ? `${who("K")} ${x.kk} : ${who("S")} ${x.s}` : `${who(FL[x.f])} ${x.v}`;
      const goal = L === "en" ? `To ${a}` : L === "ja" ? `${a}には` : `要${a}`;
      return `<div>${goal}${CO}<span class="need">${esc(t.kpNeed)} ${esc(txt)}</span> <span class="sm">${P(`${esc(t.kpNow)} ${esc(now)}`)}</span>${b.length ? `<span class="sm">${SC}${esc(t.elseW)}${L === "en" ? " " : ""}${b.join(SC)}</span>` : ""}</div>`;
    }).filter(Boolean);
    const feel = xs.filter(x => x.k === "s" && !(x.alt || []).length && x.feel);
    const keys = xs.filter(x => x.k === "s" && !(x.alt || []).length && !x.feel).map(x => {
      if (x.c < 0) return esc(t.kpWait);
      const o = x.o.find(o => o.c === x.c);
      const go = x.og && x.og[String(x.c)] && determinate(x.og[String(x.c)], x.sc) ? ` → ${destText(x.og[String(x.c)], x.sc)}` : "";
      return `<span lang="ja">${esc(q(o.t))}</span>` + (L === "ja" ? "" : `<span class="sm">${P(esc(GL[o.t][L === "zh" ? 0 : 1]))}</span>`) + go;
    });
    if (!needs.length && !keys.length && !feel.length) continue;
    const parts = [];
    if (needs.length) parts.push(needs.join(""));
    if (keys.length) parts.push(`${esc(t.kpKeys)}${CO}${keys.join(sep)}`);
    if (feel.length) {
      const sum = [0, 0, 0];
      feel.forEach(x => { const o = x.o.find(o => o.c === x.c); o.d.forEach((v, i) => sum[i] += v); });
      if (sum.some(v => v)) parts.push(`<span class="sm">${esc(t.kpFeel(feel.length))}${P(delta(sum))}</span>`);
    }
    items.push(`<li><span class="need">${esc(EP(e))}${esc(q(epName(e, r.eps)))}</span><div class="kpb">${parts.map(x => `<div>${x}</div>`).join("")}</div></li>`);
  }
  items.push(`<li><span class="need">${esc(t.kpFinal)}${CO}</span>${esc(ENDC[r.n][L])}</li>`);
  return `<section class="kp"><h3 class="hmin">${esc(t.kp)}</h3><ul>${items.join("")}</ul></section>`;
}
function viewGuide() {
  const t = T();
  const notes = t.notes.map(([a, b]) => `<li><b>${esc(a)}</b>${esc(b)}</li>`).join("");
  const idx = NAMES.map((_, n) => `<a class="ix" href="${PAGE ? href(L, "guide", n) : "#e" + (n + 1)}" data-e="${n}" aria-pressed="${(pathSel || !PAGE) && n === SEL}"><span class="n">No.${String(n + 1).padStart(2, "0")}</span><span class="nm hmin">${esc(endName(n))}</span><span class="c">${esc(ENDC[n][L])}</span></a>`).join("");
  const r = DATA.routes[SEL];
  const n = r.tl.filter(x => x.k === "s").length;
  const nk = r.tl.filter(x => x.k === "s" && !(x.alt || []).length).length;
  if (PAGE && !pathSel) return `<h2 class="hmin">${esc(t.pickEnd)}</h2><div class="index">${idx}</div>`;
  return `${PAGE ? "" : `<h2 class="hmin">${esc(t.pickEnd)}</h2><div class="index">${idx}</div>`}
  <div class="bar" id="route"><h2 class="hmin"><span class="no">No.${SEL + 1}</span>${esc(endName(SEL))}</h2>${toggles()}<div class="meta">${esc(endAlt(SEL))} · ${n} ${esc(t.steps)}${L === "en" ? ", " : L === "ja" ? "、" : "，"}${nk} ${esc(t.keyN)} · ${esc(ENDC[SEL][L])}</div></div>
  ${keyPoints(r)}<div class="line">${timeline(r.tl, r.eps)}${endRow(r.ends, r.fin)}</div>`;
}

function viewAll() {
  const t = T(), runs = DATA.runs;
  const total = runs.reduce((a, r) => a + r.tl.filter(x => x.k === "s").length, 0);
  const slots = new Set(runs.map(r => r.from).filter(Boolean)).size;
  const items = runs.map((r, i) => {
    const n = r.tl.filter(x => x.k === "s").length;
    const ep = +r.tl[0].sc.slice(0, 2) + 1;
    const how = r.from == null ? t.newGame : t.loadAt(r.from, t.ep(ep));
    const main = r.ends.find(e => e !== 21) ?? 21;
    return `<details class="run"${i === 0 ? " open" : ""}><summary><span class="rn">${esc(t.run(i + 1))}</span><span class="nm hmin">No.${main + 1} ${esc(endName(main))}${r.ends.includes(21) ? `　+ No.22 ${esc(endName(21))}` : ""}</span><span class="cnt">${n} ${esc(t.steps)}</span><span class="how">${esc(how)}</span></summary>
      <div class="inner">${r.from != null ? `<div class="load"><span class="save">${IC.save} ${esc(t.load(r.from))}</span></div>` : ""}<div class="line">${timeline(r.tl, r.eps)}${endRow(r.ends, r.fin)}</div></div></details>`;
  }).join("");
  return `<h2 class="hmin">${esc(t.allTitle)}</h2><ul class="notes"><li>${esc(t.allLede)}</li></ul>
  <div class="sum"><div><b>22</b><span>${esc(t.sum[0])}</span></div><div><b>${runs.length}</b><span>${esc(t.sum[1])}</span></div><div><b>${slots}</b><span>${esc(t.sum[2])}</span></div><div><b>${total}</b><span>${esc(t.sum[3])}</span></div></div>
  <div class="bar" style="margin-top:14px;border-bottom:0">${toggles()}</div>${items}`;
}

function flowNodeLabel(n) {
  return n.ep === 6 ? `No.${+n.id.split("|")[1] + 1} ${endName(+n.id.split("|")[1])}` : q(n.t[L]);
}
function flowOrder() {
  const F = DATA.flow, by = {};
  for (let ep = 1; ep <= 6; ep++) by[ep] = F.nodes.filter(n => n.ep === ep);
  const idx = () => { const m = {}; for (let ep = 1; ep <= 6; ep++) by[ep].forEach((n, i) => m[n.id] = i / Math.max(1, by[ep].length - 1)); return m; };
  for (let it = 0; it < 8; it++) {
    let m = idx();
    for (let ep = 2; ep <= 6; ep++) {
      const bc = n => { const ps = F.edges.filter(e => e[1] === n.id).map(e => m[e[0]]); return ps.length ? ps.reduce((a, b) => a + b) / ps.length : m[n.id]; };
      by[ep].sort((a, b) => bc(a) - bc(b)); m = idx();
    }
    for (let ep = 5; ep >= 1; ep--) {
      const bc = n => { const cs = F.edges.filter(e => e[0] === n.id).map(e => m[e[1]]); return cs.length ? cs.reduce((a, b) => a + b) / cs.length : m[n.id]; };
      by[ep].sort((a, b) => bc(a) - bc(b)); m = idx();
    }
  }
  return by;
}
function viewFlow() {
  const F = DATA.flow, t = T();
  const ord = flowOrder();
  const cols = [1, 2, 3, 4, 5, 6].map(ep => `<div class="fc"><div class="fh hmin">${esc(t.ep(ep))}</div><div class="fb">${ord[ep].map(n => `<button type="button" class="fn" data-id="${esc(n.id)}">${esc(flowNodeLabel(n))}</button>`).join("")}</div></div>`).join("");
  return `<h2 class="hmin">${esc(t.flow)}</h2><p class="note">${esc(t.flowNote)}</p><div class="flow" id="flow"><svg class="fl" id="flsvg"></svg><div class="fcs">${cols}</div></div>`;
}
let FLOW_SEL = null;
function drawFlow() {
  const box = $("#flow"); if (!box) return;
  const svg = $("#flsvg"), F = DATA.flow, br = box.getBoundingClientRect();
  svg.setAttribute("width", box.scrollWidth); svg.setAttribute("height", box.scrollHeight);
  const pos = {};
  box.querySelectorAll(".fn").forEach(el => { const r = el.getBoundingClientRect(); pos[el.dataset.id] = {l: r.left - br.left + box.scrollLeft, r: r.right - br.left + box.scrollLeft, y: r.top - br.top + r.height / 2}; });
  let on = null;
  if (FLOW_SEL) {
    on = new Set([FLOW_SEL]);
    let ch = true; while (ch) { ch = false; for (const [a, b] of F.edges) { if (on.has(a) && !on.has(b) && +b.split("|")[0] > +FLOW_SEL.split("|")[0]) { on.add(b); ch = true; } } }
    const up = new Set([FLOW_SEL]); ch = true; while (ch) { ch = false; for (const [a, b] of F.edges) { if (up.has(b) && !up.has(a)) { up.add(a); ch = true; } } }
    up.forEach(x => on.add(x));
  }
  svg.innerHTML = F.edges.map(([a, b]) => {
    const A = pos[a], B = pos[b]; if (!A || !B) return "";
    const hit = on && on.has(a) && on.has(b), mx = (A.r + B.l) / 2;
    return `<path d="M${A.r} ${A.y}C${mx} ${A.y} ${mx} ${B.y} ${B.l} ${B.y}" class="${on ? (hit ? "hi" : "lo") : ""}"/>`;
  }).join("");
  box.querySelectorAll(".fn").forEach(el => { el.classList.toggle("lo", !!on && !on.has(el.dataset.id)); el.classList.toggle("hi", FLOW_SEL === el.dataset.id); });
}
function bugNote() {
  const B = BUGT[L], st = DATA.bug;
  let ep = null, h = "";
  st.forEach((x, i) => {
    const e = +x.sc.slice(0, 2) + 1;
    if (e !== ep) { if (ep) h += "</ol>"; ep = e; h += `<div class="bep hmin">${esc(T().ep(e))}</div><ol class="bsteps">`; }
    const last = i === st.length - 1;
    const pick = x.t == null ? esc(T().none) : `<span lang="ja">${esc(q(x.t))}</span>` + (L !== "ja" && GL[x.t] ? ` <span class="sm">${esc(GL[x.t][L === "zh" ? 0 : 1])}</span>` : "");
    h += last ? `<li class="bad">${esc(B.at)}：${(DATA.copt[x.sc] || []).filter(t => t !== "NULL").map(t => `<span lang="ja">${esc(q(t))}</span>`).join(" / ")}</li>` : `<li>${pick}</li>`;
  });
  h += "</ol>";
  return `<h2 class="hmin">${esc(B.t)}</h2><p class="note">${esc(B.d)}</p><div class="bug">${h}</div>`;
}
function repLabel(file) {
  const ep = +file.slice(0, 2) + 1, c = CUE[file];
  return `${esc(T().ep(ep))}${c ? ` <span lang="ja">${esc(q(c[1]))}</span>` : ""} <span class="code">${file}</span>`;
}
function viewReps() {
  const t = T(), R = DATA.reps, have = R.all.filter(x => x.where[0] === "main").length;
  const rows = [...R.all].sort((a, b) => a.pos.page - b.pos.page || a.pos.row - b.pos.row || a.pos.col - b.pos.col || a.pos.v.localeCompare(b.pos.v)).map(x => `<tr><td style="white-space:nowrap">${esc(t.repPos(x.pos))}</td><td>${repLabel(x.file)}</td><td>${x.where[0] === "main" ? esc(t.repMain(x.where[1] + 1)) : `<b>${esc(t.repExtra(x.where[1] + 1))}</b>`}</td></tr>`).join("");
  const items = R.runs.map((r, i) => {
    const n = r.tl.filter(x => x.k === "s").length;
    const how = !r.from ? t.newGame : r.from.main ? t.repLoadMain(r.from.main) : t.repLoadRep(r.from.rep);
    const names = r.reps.map(k => t.repPos(R.all.find(x => x.key === k).pos));
    return `<details class="run"${i === 0 ? " open" : ""}><summary><span class="rn">${esc(t.run(i + 1))}</span><span class="nm">${esc(t.repGot)}：${esc(names.join(L === "en" ? "; " : "、"))}</span><span class="cnt">${n} ${esc(t.steps)}</span><span class="how">${esc(how)}</span></summary>
      <div class="inner">${r.from ? `<div class="load"><span class="save">${IC.save} ${esc(how)}</span></div>` : ""}<div class="line">${timeline(r.tl, r.eps)}<div class="st end"><span class="dot"></span><div><div class="k">${esc(t.repGot)}</div><div class="ttl" style="font-size:18px">${names.map(esc).join("<br>")}</div></div></div></div></div></details>`;
  }).join("");
  return `<h2>${esc(t.repT)}</h2><ul class="notes"><li>${esc(t.repLede.replace("{have}", have).replace("{miss}", R.all.length - have))}</li></ul>
  <div class="bar" style="margin-top:14px;border-bottom:0">${toggles()}</div>${items}
  <h2>${esc(t.repList)}</h2><div class="tbl"><table><thead><tr>${t.repHead.map(x => `<th>${x}</th>`).join("")}</tr></thead><tbody>${rows}</tbody></table></div>`;
}
function viewRules() {
  const t = T();
  const epsRows = [];
  const seen = new Set();
  Object.keys(TT).sort().forEach(sc => {
    const ep = +sc.slice(0, 2) + 1, k = ep + TT[sc].en;
    if (seen.has(k)) return; seen.add(k);
    epsRows.push(`<tr><td class="hmin" style="white-space:nowrap">${esc(t.ep(ep))}</td><td><b class="hmin">${esc(q(ttl(sc)))}</b> <span class="code">${esc(ttlAlt(sc))}</span></td><td class="code">${sc}</td></tr>`);
  });
  const thr = THR.map(([sc, c, v]) => `<tr><td>${codes(sc)}</td><td><span class="chip d${c}">${who(c)}</span> &gt; ${v}</td></tr>`).join("");
  const sk = SKEL.map(([w, c, d]) => `<tr><td>${w.map(codes).join("<br>")}</td><td>${codes(c[L])}</td><td>${codes(d[L])}</td></tr>`).join("");
  const ec = NAMES.map((_, n) => `<tr><td class="mono">${n + 1}</td><td><b class="hmin">${esc(endName(n))}</b><br><span class="code">${esc(endAlt(n))}</span></td><td>${codes(ENDC[n][L])}</td></tr>`).join("");
  return `${viewFlow()}<h2 class="hmin">${esc(t.mech)}</h2><ul class="prose">${MECH[L].map(x => `<li>${esc(x)}</li>`).join("")}</ul>
  <h2 class="hmin">${esc(t.eps)}</h2><div class="tbl"><table><thead><tr>${t.epsHead.map(x => `<th>${x}</th>`).join("")}</tr></thead><tbody>${epsRows.join("")}<tr><td class="hmin">${esc(t.ep(6))}</td><td colspan="2">${esc(L === "en" ? "Named after the ending you reach" : L === "ja" ? "到達したエンディング名" : "以到达的结局命名")}</td></tr></tbody></table></div>
  <h2 class="hmin">${esc(t.thr)}</h2><div class="tbl"><table><thead><tr><th>${t.thrHead[0]}</th><th>${t.thrHead[1]}</th></tr></thead><tbody>${thr}</tbody></table></div>
  <h2 class="hmin">${esc(t.skel)}</h2><div class="tbl"><table><thead><tr>${t.skelHead.map(x => `<th>${x}</th>`).join("")}</tr></thead><tbody>${sk}</tbody></table></div>
  <h2 class="hmin">${esc(t.endc)}</h2><div class="tbl"><table><thead><tr>${t.endHead.map(x => `<th>${x}</th>`).join("")}</tr></thead><tbody>${ec}</tbody></table></div>
  <h2 class="hmin">${esc(t.notesT)}</h2><ul class="prose">${NOTES[L].map(x => `<li>${esc(x)}</li>`).join("")}</ul>`;
}

function render() {
  const t = T();
  document.documentElement.lang = L === "zh" ? "zh-CN" : L;
  document.title = TAB === "guide" && pathSel ? `No.${SEL + 1} ${endName(SEL)} ${L === "en" ? "Guide" : "攻略"} | School Days REMASTERED` : TAB === "all" ? `${t.tabs[1]} | School Days REMASTERED` : TAB === "rules" ? `${t.tabs[3]} | School Days REMASTERED` : TAB === "reps" ? `${t.tabs[2]} | School Days REMASTERED` : "School Days REMASTERED " + t.title;
  $("#h1").textContent = t.title; $("#lede").innerHTML = INTRO[L].map(x => `<p>${esc(x)}</p>`).join(""); 
  document.querySelectorAll(".langs button").forEach(b => b.setAttribute("aria-pressed", b.dataset.l === L));
  if (PAGE) document.querySelectorAll(".langs a[data-lang]").forEach(a => a.onclick = () => { try { localStorage.setItem("sd-lang-chosen", a.dataset.lang); } catch (e) {} });
  if (PAGE) document.querySelectorAll("#tabs a").forEach(a => a.onclick = ev => {
    if (ev.metaKey || ev.ctrlKey || ev.shiftKey || ev.button) return;
    ev.preventDefault(); TAB = a.dataset.tab; pathSel = false; history.pushState(null, "", a.getAttribute("href")); render(); window.scrollTo(0, 0);
  });
  const ids = ["guide", "all", "reps", "rules"];
  $("#buyl").textContent = t.buy; $("#buyja").textContent = t.buyJa; $("#buyen").textContent = t.buyEn;
  $("#byl").textContent = L === "en" ? "Guide by" : L === "ja" ? "攻略作成：" : "攻略作者：";
  $("#tabs").innerHTML = ids.map((id, i) => `<a href="${PAGE ? href(L, id, null) : "#" + id}" data-tab="${id}"${id === TAB ? ' aria-current="page"' : ""}>${esc(t.tabs[i])}</a>`).join("");
  const isHome = !!PAGE && TAB === "guide" && !pathSel;
  $("#home").hidden = !!PAGE && !isHome;
  $("#endsum").textContent = t.pickEnd;
  $("#endbox").open = !(window.matchMedia && matchMedia("(max-width: 860px)").matches);
  $("#endnav").innerHTML = `<div class="nh">${esc(t.pickEnd)}</div>` + NAMES.map((_, n) => `<a href="${PAGE ? href(L, "guide", n) : "#e" + (n + 1)}" data-e="${n}"${TAB === "guide" && (pathSel || !PAGE) && n === SEL ? ' aria-current="page"' : ""}><span class="n">${String(n + 1).padStart(2, "0")}</span><span>${esc(endName(n))}</span></a>`).join("");
  if (PAGE) $(".langs").innerHTML = [["ja", "日本語"], ["zh", "中文"], ["en", "English"]].map(([l, n]) => `<a data-lang="${l}" href="${href(l, TAB, TAB === "guide" && pathSel ? SEL : null)}" hreflang="${l === "zh" ? "zh-CN" : l}" lang="${l === "zh" ? "zh-CN" : l}"${l === L ? ' aria-current="true"' : ""}>${n}</a>`).join("");
  $("#main").innerHTML = TAB === "guide" ? viewGuide() : TAB === "all" ? viewAll() : TAB === "reps" ? viewReps() : viewRules();
  if ($("#opt-lv")) bindToggles();
  if ($("#flow")) {
    document.querySelectorAll(".fn").forEach(b => b.onclick = () => { FLOW_SEL = FLOW_SEL === b.dataset.id ? null : b.dataset.id; drawFlow(); });
    requestAnimationFrame(drawFlow);
  }
  applyView();
  document.querySelectorAll("a[data-e]").forEach(b => b.onclick = ev => {
    if (ev.metaKey || ev.ctrlKey || ev.shiftKey || ev.button) return;
    ev.preventDefault();
    SEL = +b.dataset.e; pathSel = true; TAB = "guide";
    if (PAGE) history.pushState(null, "", href(L, "guide", SEL)); else history.replaceState(null, "", "#e" + (SEL + 1));
    render();
    window.scrollTo(0, 0);
  });
}
function fromHash() {
  const h = location.hash.slice(1), m = /^e(\d+)$/.exec(h);
  if (m && +m[1] >= 1 && +m[1] <= 22) { TAB = "guide"; SEL = +m[1] - 1; }
  else if (h === "all" || h === "rules" || h === "guide" || h === "reps") TAB = h;
}
document.querySelectorAll(".langs button").forEach(b => b.onclick = () => { L = b.dataset.l; try { localStorage.setItem("sd-lang", L); } catch (e) {} render(); });
if (PAGE) { try { localStorage.removeItem("sd-lang"); } catch (e) {} }
window.addEventListener("hashchange", () => { if (!PAGE) { fromHash(); render(); } });
window.addEventListener("popstate", () => { if (!PAGE) return; const st = parsePath(location.pathname); if (!st) return; L = st.lang; TAB = st.tab; pathSel = st.sel != null; if (pathSel) SEL = st.sel; render(); });
window.addEventListener("resize", () => drawFlow());
let pathSel = !!(PAGE && PAGE.sel != null);
if (!PAGE) fromHash();
render();
