import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronUp, DollarSign, TrendingUp, Zap, Brain, Users, Award, Briefcase } from "lucide-react";
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-red-800 to-black p-4 sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-3xl font-bold text-white">LastOne</span>
            <span className="text-xl font-light text-red-400">ギブファースト</span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <Button variant="ghost" className="text-white hover:text-red-400">企業理念</Button>
            <Button variant="ghost" className="text-white hover:text-red-400">事業概要</Button>
            <Button variant="ghost" className="text-white hover:text-red-400">会社概要</Button>
            <Button variant="ghost" className="text-white hover:text-red-400">新着一覧</Button>
            <Button variant="ghost" className="text-white hover:text-red-400">店舗のご案内</Button>
            <Button variant="default" className="bg-red-600 hover:bg-red-700">お問合わせ</Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-b from-black to-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/poker-cards.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-4 h-full flex flex-col justify-center relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
              <span className="text-red-500">AI</span>×<span className="text-red-500">ポーカー</span>×<span className="text-red-500">ビジネス</span>で<br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-yellow-500">トリリオン</span>を目指す
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              ラスワン 清水望がリードする会社で、時価総額１００億を<br />
              みんなで目指すギャンブル魂
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
                お気持ち顧問 月10万円
              </Button>
              <Button size="lg" variant="outline" className="border-red-500 text-red-500 hover:bg-red-900/20">
                詳細を見る
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronUp className="text-white" size={32} />
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-yellow-500">ABOUT</span>
            </h2>
            <p className="text-xl text-gray-400">私たちの会社について</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-gray-900 border-red-800 shadow-[0_0_15px_rgba(220,38,38,0.3)]">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <Brain className="text-red-500" />
                  ポーカー×ビジネスの融合
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300">
                <p>独自の発想でポーカーとビジネス両材を組み合わせ、革新的な事業モデルを展開しております。</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-900 border-red-800 shadow-[0_0_15px_rgba(220,38,38,0.3)]">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <Zap className="text-red-500" />
                  アミューズメントポーカーのプロフェッショナル
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300">
                <p>業界をリードするアミューズメントポーカー運営を通じて、お客様に最高のエンターテイメントを提供します。</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-900 border-red-800 shadow-[0_0_15px_rgba(220,38,38,0.3)]">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <Users className="text-red-500" />
                  多角的な企業支援
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300">
                <p>幅広い分野の企業の顧問役として、経営戦略や事業開発をサポートし、共に成長を目指します。</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Business Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-yellow-500">OUR BUSINESS</span>
            </h2>
            <p className="text-xl text-gray-400">事業概要</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-gray-900 p-8 rounded-lg border border-red-800 shadow-[0_0_15px_rgba(220,38,38,0.3)]">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-red-600 p-3 rounded-full">
                  <Award className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white">ポーカー事業</h3>
              </div>
              <p className="text-gray-300 mb-6">
                アミューズメントポーカー運営を通じて、ポーカーの魅力を広め、ビジネスとしての可能性を追求します。戦略的思考とリスク管理の精神を育みます。
              </p>
              <Button variant="outline" className="border-red-500 text-red-500 hover:bg-red-900/20">
                詳細を見る
              </Button>
            </div>
            
            <div className="bg-gray-900 p-8 rounded-lg border border-red-800 shadow-[0_0_15px_rgba(220,38,38,0.3)]">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-red-600 p-3 rounded-full">
                  <Briefcase className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white">お気持ち顧問サービス</h3>
              </div>
              <p className="text-gray-300 mb-6">
                月額10万円で、ビジネス戦略、マーケティング、組織開発など多角的な視点からアドバイスを提供。ポーカーから学んだ戦略的思考を活かしたコンサルティングを行います。
              </p>
              <Button variant="outline" className="border-red-500 text-red-500 hover:bg-red-900/20">
                詳細を見る
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/poker-chips.jpg')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-yellow-500">VISION</span>
            </h2>
            <p className="text-xl text-gray-400">私たちのビジョン</p>
          </div>
          
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-8 text-white">時価総額100億円を目指して</h3>
            <p className="text-xl text-gray-300 mb-8">
              ポーカーとビジネスの融合による革新的なアプローチで、新たな価値を創造し続けます。
              AIを活用した戦略的思考と、ギャンブル魂を持った挑戦者精神で、業界の常識を覆します。
            </p>
            <div className="flex justify-center gap-8 mt-12">
              <div className="text-center">
                <DollarSign className="mx-auto text-red-500 mb-4" size={48} />
                <h4 className="text-xl font-bold text-white">収益性</h4>
                <p className="text-gray-400">持続可能な成長</p>
              </div>
              <div className="text-center">
                <TrendingUp className="mx-auto text-red-500 mb-4" size={48} />
                <h4 className="text-xl font-bold text-white">成長性</h4>
                <p className="text-gray-400">市場拡大戦略</p>
              </div>
              <div className="text-center">
                <Zap className="mx-auto text-red-500 mb-4" size={48} />
                <h4 className="text-xl font-bold text-white">革新性</h4>
                <p className="text-gray-400">常識を覆す発想</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-yellow-500">CONTACT</span>
            </h2>
            <p className="text-xl text-gray-400">お問い合わせ</p>
          </div>
          
          <div className="max-w-2xl mx-auto bg-gray-900 p-8 rounded-lg border border-red-800 shadow-[0_0_15px_rgba(220,38,38,0.3)]">
            <h3 className="text-2xl font-bold mb-6 text-white">お気持ち顧問サービスについて</h3>
            <p className="text-gray-300 mb-8">
              月額10万円で、ビジネス戦略から組織開発まで、あなたの企業の成長をサポートします。
              ポーカーから学んだ戦略的思考と、ビジネス経験を活かした実践的なアドバイスを提供します。
            </p>
            <Button size="lg" className="w-full bg-red-600 hover:bg-red-700">
              お問い合わせはこちら
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl font-bold text-white">LastOne</span>
                <span className="text-lg font-light text-red-400">ギブファースト</span>
              </div>
              <p className="text-gray-500">
                AI×ポーカー×ビジネスでトリリオンを目指す
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-4 text-white">企業情報</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>企業理念</li>
                  <li>事業概要</li>
                  <li>会社概要</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4 text-white">サービス</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>ポーカー事業</li>
                  <li>お気持ち顧問</li>
                  <li>企業支援</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4 text-white">お問い合わせ</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>お問い合わせフォーム</li>
                  <li>採用情報</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
            <p>© 2025 株式会社ギブファースト All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App
