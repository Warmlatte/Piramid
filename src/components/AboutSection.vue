<script setup></script>

<template>
  <section id="about" class="flex w-full h-[900px]">
    <div class="w-[280px] h-full pt-[80px]">
      <img
        class="bg-white object-cover w-[240px] ml-[30px]"
        src="@/assets/images/aboutText.png"
        alt=""
      />
    </div>

    <div
      class="flex flex-row w-[1020px] h-full pt-[80px] bg-[#334ac9] border-l-[7px] border-[#ff96fd]"
    >
      <!-- 自介 -->
      <div class="ml-[90px] mt-[30px]">
        <!-- avatar -->
        <div class="avatar">
          <div class="w-[130px] h-[130px] rounded-full">
            <img src="@/assets/images/avatar.jpg" />
          </div>
        </div>

        <p style="margin-bottom: 35px">
          香茶 Paung De
          <br />
          偶爾畫圖的非專業繪師，推角右派
        </p>

        <p>
          深坑
          <br />
          女神異聞錄３４５（三位一體也有喔）
          <br />
          主推新約主角，三代都喜歡但是P5R第三學期不予置評
          <br />
          不吃新約主角們之間的西批，友情OK
        </p>

        <p>
          普通
          <br />
          逆轉裁判(成御)&emsp;甲面騎士&emsp;EVA
        </p>

        <p>
          其他
          <br />
          來自深淵&emsp;JOJO&emsp;寶石之國等各大動畫
        </p>

        <p>
          雷點
          <br />
          不喜歡emoji但不阻止他人使用，比較喜歡顏文字
          <br />
          因為吃的西批比較冷門，所以不要跟我聊除非知道我吃哪對
          <br />
          看不懂暗示請直接問
        </p>
      </div>
      <!-- 社群連結 -->
      <div class="flex flex-col items-start text-white space-y-6 mt-[80px] ml-[40px]">
        <p>社群連結</p>

        <nav class="space-y-1">
          <a
            class="flex items-center space-x-4"
            href="https://www.facebook.com/de.paung.754/"
            target="_blank"
          >
            <img
              class="w-[50px] h-[50px]"
              src="@/assets/images/icons/facebook_icon.png"
              alt="Facebook Icon"
            />
            <p class="mb-[18px]">比較常在這裡</p>
          </a>

          <a
            class="flex items-center space-x-4"
            href="https://www.plurk.com/linyo888"
            target="_blank"
          >
            <img
              class="w-[50px] h-[50px]"
              src="@/assets/images/icons/plurk_icon.png"
              alt="Facebook Icon"
            />
            <p class="mb-[18px]">西批向或是日常廢文大多放這</p>
          </a>

          <a
            class="flex items-center space-x-4"
            href="https://www.pixiv.net/users/20727591"
            target="_blank"
          >
            <img
              class="w-[50px] h-[50px]"
              src="@/assets/images/icons/pixiv_icon.png"
              alt="Facebook Icon"
            />
            <p class="mb-[18px]">整理完之後一次丟上去，更新較慢</p>
          </a>
        </nav>
      </div>
    </div>
  </section>
</template>

<style scoped>
p {
  font-family: sans-serif;
  @apply text-white;
  @apply text-[17px];
  @apply mt-[20px];
}
</style>
