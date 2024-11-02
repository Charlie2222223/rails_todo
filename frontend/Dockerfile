# ベースイメージとして Node.js を使用
FROM node:18-bullseye

# 作業ディレクトリの作成
WORKDIR /app

# package.json と package-lock.json をコピー
COPY package.json yarn.lock /app/

# 依存関係をインストール
RUN yarn install

# ソースコード全体をコピー
COPY . .

# 開発用サーバーを起動
CMD ["yarn", "run", "serve"]

# コンテナがホストに公開するポート番号
EXPOSE 5173