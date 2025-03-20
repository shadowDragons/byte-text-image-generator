'use client'
import { useTranslations } from 'next-intl'
import { useEffect, useRef, useState } from 'react'

// Image size options
const sizeOptions = [
  { width: 1080, height: 1350, key: 'default' },
  { width: 1080, height: 1080, key: 'square' },
  { width: 1920, height: 1080, key: 'landscape' },
  { width: 800, height: 600, key: 'medium' },
  { width: 500, height: 500, key: 'small' },
]

// Template definitions
const templates = [
  {
    id: 1,
    key: 'solid',
    type: 'solid',
    backgroundColor: '#2c3e50',
    textPosition: { x: 0.5, y: 0.5 },
  },
  {
    id: 2,
    key: 'gradient1',
    type: 'gradient',
    backgroundColor: 'linear-gradient(45deg, #ff6b6b, #4ecdc4)',
    textPosition: { x: 0.5, y: 0.5 },
  },
  {
    id: 3,
    key: 'gradient2',
    type: 'gradient',
    backgroundColor: 'linear-gradient(120deg, #f6d365, #fda085)',
    textPosition: { x: 0.5, y: 0.5 },
  },
  {
    id: 4,
    key: 'gradient3',
    type: 'gradient',
    backgroundColor: 'linear-gradient(to right, #8e2de2, #4a00e0)',
    textPosition: { x: 0.5, y: 0.5 },
  },
  {
    id: 5,
    key: 'gradient4',
    type: 'gradient',
    backgroundColor: 'linear-gradient(135deg, #00dbde, #fc00ff)',
    textPosition: { x: 0.5, y: 0.5 },
  },
  {
    id: 6,
    key: 'gradient5',
    type: 'gradient',
    backgroundColor: 'linear-gradient(to right, #2c3e50, #3498db)',
    textPosition: { x: 0.5, y: 0.5 },
  },
  {
    id: 7,
    key: 'gradient6',
    type: 'gradient',
    backgroundColor: 'linear-gradient(60deg, #abecd6, #fbed96)',
    textPosition: { x: 0.5, y: 0.5 },
  },
  {
    id: 8,
    key: 'wave',
    type: 'pattern',
    backgroundColor: '#3498db',
    pattern: 'wave',
    textPosition: { x: 0.5, y: 0.5 },
  },
  {
    id: 9,
    key: 'dots',
    type: 'pattern',
    backgroundColor: '#2ecc71',
    pattern: 'dots',
    textPosition: { x: 0.5, y: 0.5 },
  },
  {
    id: 10,
    key: 'hexagon',
    type: 'pattern',
    backgroundColor: '#9b59b6',
    pattern: 'hexagon',
    textPosition: { x: 0.5, y: 0.5 },
  },
  {
    id: 11,
    key: 'grid',
    type: 'pattern',
    backgroundColor: '#ffffff',
    pattern: 'grid',
    textPosition: { x: 0.5, y: 0.5 },
  },
  {
    id: 12,
    key: 'gradient7',
    type: 'gradient',
    backgroundColor: 'linear-gradient(to right, #4facfe, #00f2fe)',
    textPosition: { x: 0.5, y: 0.5 },
  },
  {
    id: 13,
    key: 'gradient8',
    type: 'gradient',
    backgroundColor: 'linear-gradient(135deg, #667eea, #764ba2)',
    textPosition: { x: 0.5, y: 0.5 },
  },
  {
    id: 14,
    key: 'gradient9',
    type: 'gradient',
    backgroundColor: 'linear-gradient(to right, #ff758c, #ff7eb3)',
    textPosition: { x: 0.5, y: 0.5 },
  },
  {
    id: 15,
    key: 'gradient10',
    type: 'gradient',
    backgroundColor: 'linear-gradient(45deg, #08AEEA, #2AF598)',
    textPosition: { x: 0.5, y: 0.5 },
  },
  {
    id: 16,
    key: 'gradient11',
    type: 'gradient',
    backgroundColor: 'linear-gradient(to right, #434343, #000000)',
    textPosition: { x: 0.5, y: 0.5 },
  },
  {
    id: 17,
    key: 'gradient12',
    type: 'gradient',
    backgroundColor: 'linear-gradient(to right, #93a5cf, #e4efe9)',
    textPosition: { x: 0.5, y: 0.5 },
  },
  {
    id: 18,
    key: 'stripes',
    type: 'pattern',
    backgroundColor: '#f39c12',
    pattern: 'stripes',
    textPosition: { x: 0.5, y: 0.5 },
  },
  {
    id: 19,
    key: 'circles',
    type: 'pattern',
    backgroundColor: '#e74c3c',
    pattern: 'circles',
    textPosition: { x: 0.5, y: 0.5 },
  },
  {
    id: 20,
    key: 'triangles',
    type: 'pattern',
    backgroundColor: '#27ae60',
    pattern: 'triangles',
    textPosition: { x: 0.5, y: 0.5 },
  },
]

// Marker style options
const markerStyles = [
  { id: 'none', color: 'none', key: 'none' },
  { id: 'yellow', color: '#ffd700', key: 'yellow' },
  { id: 'green', color: '#98fb98', key: 'green' },
  { id: 'pink', color: '#ffb6c1', key: 'pink' },
  { id: 'blue', color: '#87cefa', key: 'blue' },
]

// Text color options
const textColorOptions = [
  { id: 'auto', color: 'auto', key: 'auto' },
  { id: 'white', color: '#ffffff', key: 'white' },
  { id: 'black', color: '#000000', key: 'black' },
  { id: 'red', color: '#fab1a0', key: 'red' },
  { id: 'blue', color: '#a6c0fe', key: 'blue' },
  { id: 'green', color: '#b5e6b5', key: 'green' },
  { id: 'yellow', color: '#ffeaa7', key: 'yellow' },
  { id: 'orange', color: '#fad390', key: 'orange' },
  { id: 'purple', color: '#d6a2e8', key: 'purple' },
]

interface CharacterStyle {
  marker: string // Marker style ID
  textColor: string // Text color ID
}

interface Character {
  char: string
  style: CharacterStyle
}

// TextStyle interface definition
interface TextStyle {
  fontSize: number
}

export default function Home() {
  const t = useTranslations('Generator')
  const [characters, setCharacters] = useState<Character[]>([])
  const [selectedIndexes, setSelectedIndexes] = useState<number[]>([])
  const [selectedTemplate, setSelectedTemplate] = useState(templates[0])
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [textStyle, setTextStyle] = useState<TextStyle>({
    fontSize: 48,
  })
  const [selectedSize, setSelectedSize] = useState(sizeOptions[0])
  const [backgroundColor, setBackgroundColor] = useState('#2c3e50')
  const [selectedTextColor, setSelectedTextColor] = useState(textColorOptions[0])
  const [globalTextColor, setGlobalTextColor] = useState('auto')

  // Convert input text to characters array
  const handleTextChange = (e: React.FormEvent<HTMLDivElement>) => {
    const newText = e.currentTarget.textContent || ''
    const newCharacters = newText.split('').map(char => ({
      char,
      style: {
        marker: 'none',
        textColor: globalTextColor,
      },
    }))
    setCharacters(newCharacters)
  }

  // Handle text selection
  const handleTextSelect = (e: React.MouseEvent<HTMLDivElement>) => {
    const selection = window.getSelection()
    if (!selection) return

    const target = e.currentTarget
    const text = target.textContent || ''
    const start = selection.anchorOffset
    const end = selection.focusOffset

    // 确保开始和结束索引在正确范围内
    if (start === end) return

    // 计算选中的字符索引
    const indexes = []
    for (let i = Math.min(start, end); i < Math.max(start, end) && i < text.length; i++) {
      indexes.push(i)
    }

    if (indexes.length > 0) {
      setSelectedIndexes(indexes)
      // 在控制台输出选中的索引，帮助调试
      console.log('Selected indexes:', indexes)
    }
  }

  // Apply marker style
  const applyMarker = (markerId: string) => {
    setCharacters(prev => {
      const newCharacters = [...prev]
      selectedIndexes.forEach(index => {
        if (newCharacters[index]) {
          newCharacters[index] = {
            ...newCharacters[index],
            style: {
              ...newCharacters[index].style,
              marker: markerId,
            },
          }
        }
      })
      return newCharacters
    })
  }

  // Apply text color
  const applyTextColor = (colorId: string) => {
    if (selectedIndexes.length === 0) return

    console.log('Applying color:', colorId, 'to indexes:', selectedIndexes)

    setCharacters(prev => {
      const newCharacters = [...prev]
      selectedIndexes.forEach(index => {
        if (index >= 0 && index < newCharacters.length) {
          newCharacters[index] = {
            ...newCharacters[index],
            style: {
              ...newCharacters[index].style,
              textColor: colorId,
            },
          }
        }
      })
      // 手动触发重新渲染
      generateImage()
      return newCharacters
    })
  }

  // 应用全局文本颜色
  const applyGlobalTextColor = (colorId: string) => {
    setGlobalTextColor(colorId)

    // 更新所有现有字符的颜色
    setCharacters(prev => {
      return prev.map(char => ({
        ...char,
        style: {
          ...char.style,
          textColor: colorId,
        },
      }))
    })
  }

  const wrapText = (context: CanvasRenderingContext2D, characters: Character[], x: number, y: number, maxWidth: number, lineHeight: number) => {
    let currentLine: Character[] = []
    const lines: Character[][] = []

    // Calculate line breaks
    for (let char of characters) {
      const testLine = [...currentLine, char]
      const testText = testLine.map(c => c.char).join('')
      const metrics = context.measureText(testText)
      const testWidth = metrics.width

      if (testWidth > maxWidth && currentLine.length > 0) {
        lines.push(currentLine)
        currentLine = [char]
      } else {
        currentLine.push(char)
      }
    }
    if (currentLine.length > 0) {
      lines.push(currentLine)
    }

    // Calculate total height and center
    const totalHeight = lines.length * lineHeight
    const startY = y - totalHeight / 2 + lineHeight / 2

    // Draw each line of text
    lines.forEach((line, lineIndex) => {
      const lineY = startY + lineIndex * lineHeight
      const lineText = line.map(c => c.char).join('')
      const lineWidth = context.measureText(lineText).width
      let currentX = x - lineWidth / 2

      // Draw character by character
      line.forEach(char => {
        const charWidth = context.measureText(char.char).width

        // Draw marker effect background if present
        if (char.style.marker !== 'none') {
          const markerStyle = markerStyles.find(style => style.id === char.style.marker)
          if (markerStyle) {
            context.save()
            context.fillStyle = markerStyle.color
            context.globalAlpha = 0.3

            // Draw marker effect (rectangle)
            const markerHeight = textStyle.fontSize
            context.fillRect(currentX, lineY - markerHeight / 2, charWidth, markerHeight)

            context.restore()
          }
        }

        // Draw text
        context.save()

        // 使用全局颜色或字符特定颜色
        if (globalTextColor !== 'auto') {
          // 使用全局颜色
          const textColorOption = textColorOptions.find(option => option.id === globalTextColor)
          if (textColorOption && textColorOption.color !== 'auto') {
            context.fillStyle = textColorOption.color
          }
        } else if (char.style.textColor && char.style.textColor !== 'auto') {
          // 使用自定义颜色
          const textColorOption = textColorOptions.find(option => option.id === char.style.textColor)
          if (textColorOption && textColorOption.color !== 'auto') {
            context.fillStyle = textColorOption.color
          }
        } else {
          // 使用自动颜色
          if (selectedTemplate.type === 'solid') {
            const rgb = hexToRgb(backgroundColor)
            if (rgb) {
              const brightness = (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000
              context.fillStyle = brightness > 128 ? '#000000' : '#ffffff'
            }
          } else if (selectedTemplate.type === 'pattern') {
            // 在图案背景上使用黑色文本
            context.fillStyle = '#000000'
          } else {
            context.fillStyle = '#ffffff'
          }
        }

        // Draw text
        context.fillText(char.char, currentX, lineY)

        context.restore()

        // Update X coordinate
        currentX += charWidth
      })
    })
  }

  const generateImage = () => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // 确保清除画布
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    canvas.width = selectedSize.width
    canvas.height = selectedSize.height

    // Draw different backgrounds based on template type
    if (selectedTemplate.type === 'solid') {
      // Solid background uses color picker color
      ctx.fillStyle = backgroundColor
      ctx.fillRect(0, 0, canvas.width, canvas.height)
    } else if (selectedTemplate.type === 'gradient') {
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
      const colors = selectedTemplate.backgroundColor.match(/#[a-fA-F0-9]{6}/g) || ['#000000', '#ffffff']
      gradient.addColorStop(0, colors[0])
      gradient.addColorStop(1, colors[1])
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)
    } else if (selectedTemplate.type === 'pattern') {
      // Fill background first
      ctx.fillStyle = selectedTemplate.backgroundColor
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw different patterns based on pattern type
      switch (selectedTemplate.pattern) {
        case 'wave':
          drawWavePattern(ctx, canvas.width, canvas.height)
          break
        case 'dots':
          drawDotsPattern(ctx, canvas.width, canvas.height)
          break
        case 'hexagon':
          drawHexagonPattern(ctx, canvas.width, canvas.height)
          break
        case 'grid':
          drawGridPattern(ctx, canvas.width, canvas.height)
          break
        case 'stripes':
          drawStripesPattern(ctx, canvas.width, canvas.height)
          break
        case 'circles':
          drawCirclesPattern(ctx, canvas.width, canvas.height)
          break
        case 'triangles':
          drawTrianglesPattern(ctx, canvas.width, canvas.height)
          break
      }
    }

    // Set font
    const fontString = `${textStyle.fontSize}px "Microsoft YaHei"`
    ctx.font = fontString
    ctx.textAlign = 'left' // Change to left alignment, we handle centering manually
    ctx.textBaseline = 'middle' // Keep baseline aligned

    const textX = canvas.width * selectedTemplate.textPosition.x
    const textY = canvas.height * selectedTemplate.textPosition.y

    wrapText(ctx, characters, textX, textY, canvas.width - canvas.width * 0.2, textStyle.fontSize * 1.5)
  }

  // Add pattern drawing functions
  const drawWavePattern = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)'
    ctx.lineWidth = 2

    for (let y = 0; y < height; y += 20) {
      ctx.beginPath()
      ctx.moveTo(0, y)
      for (let x = 0; x < width; x += 10) {
        ctx.lineTo(x, y + Math.sin(x * 0.03) * 10)
      }
      ctx.stroke()
    }
  }

  const drawDotsPattern = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    ctx.fillStyle = 'rgba(255, 255, 255, 0.2)'
    const size = 4
    const spacing = 20

    for (let x = 0; x < width; x += spacing) {
      for (let y = 0; y < height; y += spacing) {
        ctx.beginPath()
        ctx.arc(x, y, size, 0, Math.PI * 2)
        ctx.fill()
      }
    }
  }

  const drawHexagonPattern = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)'
    ctx.lineWidth = 2
    const size = 30

    for (let y = 0; y < height + size * 2; y += size * 1.5) {
      for (let x = 0; x < width + size * 2; x += size * 2) {
        ctx.beginPath()
        for (let i = 0; i < 6; i++) {
          const angle = (i * Math.PI) / 3
          const px = x + size * Math.cos(angle)
          const py = y + size * Math.sin(angle)
          if (i === 0) ctx.moveTo(px, py)
          else ctx.lineTo(px, py)
        }
        ctx.closePath()
        ctx.stroke()
      }
    }
  }

  const drawGridPattern = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    ctx.strokeStyle = 'rgba(0, 0, 0, 0.1)'
    ctx.lineWidth = 1

    const gridSize = 20
    for (let x = 0; x <= width; x += gridSize) {
      ctx.beginPath()
      ctx.moveTo(x, 0)
      ctx.lineTo(x, height)
      ctx.stroke()
    }
    for (let y = 0; y <= height; y += gridSize) {
      ctx.beginPath()
      ctx.moveTo(0, y)
      ctx.lineTo(width, y)
      ctx.stroke()
    }
  }

  const drawStripesPattern = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)'
    ctx.lineWidth = 2
    const gap = 20

    for (let x = 0; x < width + height; x += gap) {
      ctx.beginPath()
      ctx.moveTo(x, 0)
      ctx.lineTo(x - height, height)
      ctx.stroke()
    }
  }

  const drawCirclesPattern = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)'
    ctx.lineWidth = 1
    const size = 30
    const gap = 60

    for (let x = 0; x < width + size; x += gap) {
      for (let y = 0; y < height + size; y += gap) {
        ctx.beginPath()
        ctx.arc(x, y, size, 0, Math.PI * 2)
        ctx.stroke()
      }
    }
  }

  const drawTrianglesPattern = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)'
    ctx.lineWidth = 1
    const size = 30
    const h = size * Math.sqrt(3)

    for (let y = 0; y < height + h; y += h) {
      for (let x = 0; x < width + size * 2; x += size * 2) {
        ctx.beginPath()
        ctx.moveTo(x, y)
        ctx.lineTo(x + size, y)
        ctx.lineTo(x + size / 2, y - h)
        ctx.closePath()
        ctx.stroke()
      }
    }
  }

  // Color conversion helper function
  const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : null
  }

  // Generate image in real-time
  useEffect(() => {
    generateImage()
  }, [characters, selectedTemplate, textStyle, selectedSize, backgroundColor])

  const downloadImage = () => {
    const canvas = canvasRef.current
    if (!canvas) return

    const link = document.createElement('a')
    link.download = 'generated-image.png'
    link.href = canvas.toDataURL()
    link.click()
  }

  // Modify handleFontSizeChange type
  const handleFontSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextStyle(prev => ({ ...prev, fontSize: Number(e.target.value) }))
  }

  return (
    <div className='container mx-auto p-4'>
      {/* Use grid layout to create left-right structure */}
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
        {/* Left settings panel */}
        <div className='space-y-6'>
          {/* Image size selection */}
          <div className='rounded-lg border p-4 bg-white dark:bg-gray-800'>
            <label className='block mb-2 font-medium'>{t('imageSize')}</label>
            <div className='flex overflow-x-auto pl-0.5 pb-4 space-x-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100'>
              {sizeOptions.map((size, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedSize(size)}
                  className={`flex-none px-4 py-2 rounded-lg transition-all ${
                    selectedSize === size
                      ? 'bg-blue-500 text-white shadow-lg transform scale-105'
                      : 'bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-100'
                  }`}
                >
                  {t(`sizes.${size.key}`)}
                </button>
              ))}
            </div>
          </div>

          {/* Template selection */}
          <div className='rounded-lg border p-4 bg-white dark:bg-gray-800'>
            <label className='block mb-2 font-medium'>{t('template')}：</label>
            <div className='flex overflow-x-auto pl-1 pt-1 pb-4 space-x-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100'>
              {templates.map(template => (
                <div
                  key={template.id}
                  className={`flex-none cursor-pointer rounded-lg transition-all hover:shadow-lg ${
                    selectedTemplate.id === template.id ? 'ring-2 ring-blue-500 shadow-lg' : ''
                  }`}
                  onClick={() => setSelectedTemplate(template)}
                >
                  <div
                    className='w-40 h-28 rounded-lg'
                    style={{
                      background: template.backgroundColor,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {template.pattern && <div className='w-12 h-12 rounded-full' style={{ backgroundColor: '#c0392b' }} />}
                  </div>
                  <p className='text-center mt-2 text-sm'>{t(`templates.${template.key}`)}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Background color picker */}
          {selectedTemplate.type === 'solid' && (
            <div className='rounded-lg border p-4 bg-white dark:bg-gray-800'>
              <label className='block mb-2 font-medium'>{t('backgroundColor')}：</label>
              <div className='flex items-center gap-4'>
                <input type='color' value={backgroundColor} onChange={e => setBackgroundColor(e.target.value)} className='w-12 h-12 rounded cursor-pointer' />
                <span className='text-sm'>{backgroundColor.toUpperCase()}</span>
              </div>
            </div>
          )}

          {/* Text style settings */}
          <div className='rounded-lg border p-4 bg-white dark:bg-gray-800'>
            <label className='block mb-2 font-medium'>{t('textStyle')}：</label>
            <div className='space-y-4'>
              <div className='flex flex-wrap gap-2'>
                {markerStyles.map(style => (
                  <button
                    key={style.id}
                    onClick={() => applyMarker(style.id)}
                    className={`px-4 py-2 rounded transition-colors ${
                      style.id === 'none' ? 'bg-gray-200 hover:bg-gray-300' : 'text-gray-800 hover:brightness-95'
                    }`}
                    style={{
                      backgroundColor: style.id === 'none' ? undefined : style.color,
                    }}
                  >
                    {t(`markerStyles.${style.key}`)}
                  </button>
                ))}
              </div>

              {/* Text color selection */}
              <div className='mt-4'>
                <label className='block mb-2'>{t('textColor') || '文字颜色'}：</label>
                <div className='flex flex-wrap gap-2'>
                  {textColorOptions.map(color => (
                    <button
                      key={color.id}
                      onClick={() => {
                        setSelectedTextColor(color)
                        applyGlobalTextColor(color.id)
                      }}
                      className={`px-4 py-2 rounded transition-colors ${color.id === 'auto' ? 'bg-gray-200 hover:bg-gray-300' : 'hover:brightness-95'} ${
                        selectedTextColor.id === color.id ? 'ring-2 ring-blue-500' : ''
                      }`}
                      style={{
                        backgroundColor: color.id === 'auto' ? undefined : color.color,
                        color:
                          color.id === 'auto'
                            ? undefined
                            : color.id === 'black' || color.id === 'blue' || color.id === 'purple' || color.id === 'green'
                            ? 'white'
                            : 'black',
                      }}
                    >
                      {t(`textColors.${color.key}`) || color.key}
                    </button>
                  ))}
                </div>
              </div>

              <div className='flex items-center gap-2'>
                <label>{t('fontSize')}：</label>
                <input type='range' min='20' max='80' value={textStyle.fontSize} onChange={handleFontSizeChange} className='w-48' />
                <span>{textStyle.fontSize}px</span>
              </div>
            </div>
          </div>

          {/* Text input */}
          <div className='rounded-lg border p-4 bg-white dark:bg-gray-800'>
            <label className='block mb-2 font-medium'>{t('inputText')}：</label>
            <div
              className='border p-2 w-full rounded-lg min-h-[8rem] whitespace-pre-wrap'
              contentEditable
              onInput={handleTextChange}
              onMouseUp={handleTextSelect}
              style={{ lineHeight: '1.5' }}
            />
          </div>

          {/* Download button */}
          <div className='flex justify-center'>
            <button onClick={downloadImage} className='bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors'>
              {t('download')}
            </button>
          </div>
        </div>

        {/* Right preview panel - fixed position */}
        <div className='lg:sticky lg:top-6 space-y-4'>
          <div className='rounded-lg border p-4 bg-white dark:bg-gray-800'>
            <canvas ref={canvasRef} className='w-full rounded-lg'></canvas>
          </div>
        </div>
      </div>
    </div>
  )
}
