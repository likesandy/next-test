import Image from 'next/image'
import fn from 'public/images/fn.png'

// 累计布局偏移（CLS）Web性能衡量指标
// Next.js默认导入帮我们添加了 width 和 height，目的就是为了防止累计布局偏移
// 动态导入我们就得显示指定 width 和 height 或者通过 fill 填充
export default function Home() {
  return (
    <>
      <Image src={fn} alt="fn" priority />

      <div className="w-[500px] h-[500px] bg-red-300 relative ">
        {/* object-contain: 保持宽高比 */}
        <Image src={fn} alt="fn" fill className="object-contain" />
      </div>

      {/* sizes */}
      <div className="w-[500px] h-[500px] bg-red-300 relative ">
        <Image
          src={fn}
          alt="fn"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* grid */}
      <div className="grid gap-[8px] grid-cols-auto-fit-minmax mt-[100px]">
        {Array(5)
          .fill(0)
          .map((item) => {
            return (
              <div className="relative h-[400px]" key={'item' + item}>
                <Image
                  alt="fn"
                  src={fn}
                  fill
                  sizes="(min-width: 808px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            )
          })}
      </div>
    </>
  )
}
