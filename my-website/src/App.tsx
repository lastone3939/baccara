import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, Info, Mail, BookOpen, Code, Zap, Brain } from "lucide-react";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <header className="bg-white shadow-md rounded-lg p-4 mb-8">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Devin入門ガイド</h1>
          <nav className="flex space-x-4">
            <Button variant="ghost" className="flex items-center gap-2">
              <Home size={18} />
              ホーム
            </Button>
            <Button variant="ghost" className="flex items-center gap-2">
              <Info size={18} />
              Devinとは
            </Button>
            <Button variant="ghost" className="flex items-center gap-2">
              <BookOpen size={18} />
              用語解説
            </Button>
            <Button variant="ghost" className="flex items-center gap-2">
              <Mail size={18} />
              お問い合わせ
            </Button>
          </nav>
        </div>
      </header>
      
      <main className="container mx-auto">
        <section className="mb-12 bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-center mb-8">Devinへようこそ！</h2>
          <p className="text-lg text-center mb-8">
            Devinは、プログラミングの知識がなくても使える<span className="font-bold">AIソフトウェアエンジニア</span>です。<br />
            専門用語が多くて難しく感じるかもしれませんが、このサイトで基本から丁寧に解説します。
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="text-blue-500" size={24} />
                  Devinとは何か？
                </CardTitle>
                <CardDescription>AIによるソフトウェア開発の革命</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Devinは、人間のように考え、コードを書き、問題を解決するAIエンジニアです。プログラミングの知識がなくても、自然な言葉で指示するだけで、ウェブサイトやアプリを作成できます。</p>
              </CardContent>
              <CardFooter>
                <Button>詳しく見る</Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="text-green-500" size={24} />
                  専門用語解説
                </CardTitle>
                <CardDescription>わかりやすく解説します</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li><span className="font-bold">リポジトリ</span>：プログラムのファイルを保存する場所</li>
                  <li><span className="font-bold">デプロイ</span>：作ったウェブサイトをインターネットで公開すること</li>
                  <li><span className="font-bold">フロントエンド</span>：ウェブサイトの見た目の部分</li>
                  <li><span className="font-bold">React</span>：ウェブサイトを作るための道具</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button>もっと用語を見る</Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="text-yellow-500" size={24} />
                  Devinの使い方
                </CardTitle>
                <CardDescription>初心者でも簡単に始められます</CardDescription>
              </CardHeader>
              <CardContent>
                <ol className="list-decimal list-inside space-y-2">
                  <li>Devinに自然な言葉で指示する</li>
                  <li>Devinが理解して作業を進める</li>
                  <li>わからないことがあれば質問する</li>
                  <li>完成したものを確認・修正する</li>
                </ol>
              </CardContent>
              <CardFooter>
                <Button>使い方ガイドを見る</Button>
              </CardFooter>
            </Card>
          </div>
        </section>
        
        <section className="mb-12 bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6">Devinでできること</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border rounded-lg p-4">
              <h3 className="text-xl font-semibold mb-3">ウェブサイト作成</h3>
              <p>このサイトのように、美しいウェブサイトを簡単な指示だけで作成できます。デザインや機能を細かく指定することも可能です。</p>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="text-xl font-semibold mb-3">アプリ開発</h3>
              <p>スマートフォンやパソコン用のアプリケーションを開発できます。複雑な機能も自然言語で指示するだけです。</p>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="text-xl font-semibold mb-3">バグ修正</h3>
              <p>既存のプログラムの問題を見つけて修正します。エラーメッセージを伝えるだけで解決策を提案します。</p>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="text-xl font-semibold mb-3">コード説明</h3>
              <p>難しいプログラムコードを初心者にもわかりやすく説明します。専門用語も丁寧に解説します。</p>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="bg-gray-800 text-white p-6 mt-12 rounded-lg">
        <div className="container mx-auto">
          <p className="text-center">© 2025 Devin入門ガイド. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App
