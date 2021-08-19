# creamy-swagger
creamy バックエンドAPI仕様書

## 実行方法
```bash
git clone https://github.com/creamy-inc/creamy-swagger.git
cd creamy-swagger
yarn install
yarn start
```

http://localhost:3000 にアクセスする


## Swaggerファイル編集方法
```bash
yarn watch
```

docsフォルダ内のyamlファイルを編集すると、public/swagger.yamlが自動生成される
