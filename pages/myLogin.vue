<template>
	<div class="flex h-screen flex-col items-center justify-center">
		<!-- 顯示 user 如果有資訊 -->
		<div>SSR 已經登入成功</div>
		<div>你的 email 是 {{ user.email }}</div>
	</div>
</template>

<script setup>
definePageMeta({ middleware: ['auth'] });

const user = useUser();

</script>
