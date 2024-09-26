// cypress/support/e2e.js
// このファイルにはE2Eテスト用のグローバルな設定やカスタムコマンドを記述します

// 例: カスタムコマンドの追加
// Cypress.Commands.add('login', (email, password) => { ... })
Cypress.on('uncaught:exception', (err, runnable) => {
  if (err.message.includes('Hydration failed because the initial UI does not match what was rendered on the server.')) {
    return false
  }
  // その他のエラーは通常通り処理
  return true
})

// 例: グローバルな設定
// beforeEach(() => { ... })
