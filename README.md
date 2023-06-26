# Nuxt 3 SSR + Sanctum Login Package

參考來源：https://github.com/amrnn90/breeze-nuxt

## 基本

確認完整安裝 Nuxt 3

## 安裝
檔案資料結構專案，可複製到你自己的專案中

## 設定
在 nuxt.config.ts 中，加入前後端的 public urls

## 範例
請參考 myLogin.vue 以及 myMember.vue 頁面

## 後端 Sanctum 設置注意
### config/cors.php
'supports_credentials' => true,

### app/http/kernel.php
'api' => [
    \Laravel\Sanctum\Http\Middleware\EnsureFrontendRequestsAreStateful::class,
    \Illuminate\Routing\Middleware\ThrottleRequests::class . ':api',
    \Illuminate\Routing\Middleware\SubstituteBindings::class,
],

### 需要身份保護的路徑 api.php，使用  middleware('auth:sanctum')
Route::middleware('auth:sanctum')->get('/user', function () {
    return request()->user();
});

### Sanctum Domain 及 Stateful 設置
SESSION_DOMAIN=localhost
SANCTUM_STATEFUL_DOMAINS=localhost:3000
