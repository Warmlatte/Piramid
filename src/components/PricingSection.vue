<script setup></script>

<template>
  <section id="pricing" class="flex w-full">
    <div class="w-1/4 h-full pt-[10vh]">
      <img
        class="bg-white object-cover ml-3"
        src="@/assets/images/pricingText.png"
        alt="Pricing Text"
      />
    </div>

    <div class="w-3/4 h-full pt-[10vh] bg-[#334ac9] border-l-[7px] border-[#ff96fd]">
      <div class="flex flex-row justify-center break-words p-14">
        <!-- 品項大字 -->
        <div class="mr-5">
          <span class="!text-6xl">品</span>
          <br />
          <span class="!text-6xl">項</span>
        </div>

        <!-- 品項內文 -->
        <div class="mr-10 mt-6 w-2/5 space-y-8">
          <ul>
            <span>頭像</span>
            <li>一般委託</li>
            <li>700</li>
            <li>塗鴉/黑白/驚喜包</li>
            <li>400</li>
          </ul>

          <ul>
            <span>半身</span>
            <li>一般委託</li>
            <li>1000</li>
            <li>塗鴉/黑白/驚喜包</li>
            <li>700</li>
          </ul>

          <ul>
            <span>Q版</span>
            <li>一般委託</li>
            <li>300</li>
            <li>黑白/驚喜包</li>
            <li>150</li>
          </ul>

          <ul>
            <span>全身</span>
            <li>一般委託</li>
            <li>1300</li>
            <li>塗鴉/黑白/驚喜包</li>
            <li>1000</li>
          </ul>

          <ul>
            <span>服設</span>
            <li>一般委託</li>
            <li>1500(含三視圖)</li>
            <li>驚喜包</li>
            <li>1200(含三視圖)</li>
          </ul>
        </div>

        <!-- 須知大字 -->
        <div class="mr-5">
          <span class="!text-6xl">須</span>
          <br />
          <span class="!text-6xl">知</span>
        </div>

        <!-- 流程內文 -->
        <div class="mr-10 mt-6 space-y-6 process">
          <ul>
            <span>流程</span>
            <li>
              討論構圖→靈魂草圖→支付訂金(70%)之後才會繼續畫→中間兩匯報進度→支付尾款→成圖email寄出
            </li>
            <li>請一定要在討論階段給資料不然無法進入草圖的部分，什麼都沒有是無法通靈的</li>
          </ul>

          <ul>
            <span>排單</span>
            <li class="leading-[0.75] mb-[0.3rem] !mt-1">
              <span class="!text-[1rem] !text-[#ff96fd] !font-semibold">先付後排</span
              >但不影響給草圖的時間，資料什麼時候傳我就什麼時候畫
            </li>
            <li>只要還沒付訂金都可以取消交易，真的不合沒關係</li>
            <li>訂金在空檔之前給就行，如果到了還沒給就會問延後或是取消</li>
          </ul>

          <ul>
            <span>展示</span>
            <li>沒有特別要求作品都會丟到個板，如果標示繪師會收到我感恩的心</li>
          </ul>

          <ul>
            <span>禮儀</span>
            <li>
              我會追求對話效率所以打字口吻會比較直接，有需求會直接提出，比方說要委託資訊之類的。如果覺得太直接可以告訴我可以改的
            </li>
            <li>麻煩不要在半夜傳東西，一律等早上才看，除非不怕我漏看</li>
          </ul>

          <ul>
            <span>其他</span>
            <li>希望有遇到任何問題都可以提出，因為敝人我不擅長通靈</li>
            <li>每張圖畫風可能都會不一樣，因為我沒有在刻意穩定畫風</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
ul,
li,
p {
  @apply text-white;
  @apply text-[1.2vw];
}

span {
  @apply text-white;
  @apply text-2xl;
}

.process ul li {
  @apply ml-5;
  @apply mb-3;
  @apply list-disc;
}

.process ul li:nth-of-type(1) {
  @apply mt-2;
}
</style>
