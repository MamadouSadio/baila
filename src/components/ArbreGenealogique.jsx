/**
 * Exemple d'arbre généalogique pour illustrer Baïla Généa.
 * Clic sur une personne → affichage de ses infos (comme dans l'app).
 */
import { useState } from 'react'

const treeData = [
  { id: '1', name: 'Mamadou', sub: 'Nom Prénom', row: 0, col: 1, isRoot: true },
  { id: '1.1', name: 'Fatou', sub: 'Nom Prénom', row: 1, col: 0, isRoot: false },
  { id: '1.2', name: 'Ibrahima', sub: 'Nom Prénom', row: 1, col: 2, isRoot: false },
  { id: '1.1.1', name: 'Awa', sub: 'Nom Prénom', row: 2, col: 0, isRoot: false },
  { id: '1.1.2', name: 'Moussa', sub: 'Nom Prénom', row: 2, col: 1, isRoot: false },
  { id: '1.2.1', name: 'Oumar', sub: 'Nom Prénom', row: 2, col: 2, isRoot: false },
]

const CARD_WIDTH = 112
const CARD_HEIGHT = 88
const ROW_GAP = 32
const COL_GAP = 24
const COLS = 3
const ROWS = 3

function PhotoPlaceholder({ size = 'sm', className = '' }) {
  const isSm = size === 'sm'
  return (
    <div
      className={`
        flex items-center justify-center rounded-xl bg-slate-100 border border-slate-200/80
        text-slate-400
        ${isSm ? 'w-9 h-9' : 'w-24 h-24 sm:w-28 sm:h-28'}
        ${className}
      `}
      aria-hidden
    >
      <svg
        className={isSm ? 'w-4 h-4' : 'w-10 h-10 sm:w-12 sm:h-12'}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
        aria-hidden
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 3.75 3.75 0 017.5 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    </div>
  )
}

function TreeCard({ node, isSelected, onClick }) {
  const { name, sub, isRoot } = node
  return (
    <button
      type="button"
      onClick={() => onClick(node)}
      className={`
        flex flex-col items-center justify-start rounded-2xl px-2 py-2.5 w-[112px] min-h-[88px]
        transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer
        shadow-md border text-left
        focus:outline-none focus:ring-2 focus:ring-[#1A3B8A] focus:ring-offset-2
        ${isSelected ? 'ring-2 ring-[#1A3B8A] ring-offset-2 scale-105 shadow-lg' : ''}
        ${isRoot
          ? 'bg-gradient-to-br from-amber-50 to-orange-50 border-amber-200/80 text-amber-900 shadow-amber-200/20'
          : 'bg-white border-slate-200/90 text-slate-800 shadow-slate-200/30'
        }
      `}
      aria-pressed={isSelected}
      aria-label={`Voir les infos de ${name}`}
    >
      <PhotoPlaceholder size="sm" className="mb-1.5 shrink-0" />
      {isRoot && (
        <span className="text-amber-600 mb-0.5 text-sm" aria-hidden>🌳</span>
      )}
      <span className="font-semibold text-sm truncate w-full text-center" title={name}>
        {name}
      </span>
      <span className="text-xs text-slate-500 mt-0.5">{sub}</span>
    </button>
  )
}

function TreeConnectors() {
  const w = CARD_WIDTH
  const h = CARD_HEIGHT
  const rg = ROW_GAP
  const cg = COL_GAP
  const cx = (col) => (w + cg) * col + w / 2
  const cy = (row) => (h + rg) * row + h / 2

  const lines = [
    { x1: cx(1), y1: cy(0) + h / 2, x2: cx(1), y2: cy(1) - h / 2 },
    { x1: cx(1), y1: cy(1) - h / 2, x2: cx(0), y2: cy(1) - h / 2 },
    { x1: cx(0), y1: cy(1) - h / 2, x2: cx(0), y2: cy(2) - h / 2 },
    { x1: cx(1), y1: cy(1) - h / 2, x2: cx(1), y2: cy(2) - h / 2 },
    { x1: cx(1), y1: cy(1) - h / 2, x2: cx(2), y2: cy(1) - h / 2 },
    { x1: cx(2), y1: cy(1) - h / 2, x2: cx(2), y2: cy(2) - h / 2 },
  ]

  const width = (w + cg) * (COLS - 1) + w
  const height = (h + rg) * (ROWS - 1) + h

  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="xMidYMid meet"
      aria-hidden
    >
      <defs>
        <linearGradient id="tree-line" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="rgb(180, 180, 200)" />
          <stop offset="100%" stopColor="rgb(148, 163, 184)" />
        </linearGradient>
      </defs>
      {lines.map((line, i) => (
        <line
          key={i}
          x1={line.x1}
          y1={line.y1}
          x2={line.x2}
          y2={line.y2}
          stroke="url(#tree-line)"
          strokeWidth="2"
          strokeLinecap="round"
        />
      ))}
    </svg>
  )
}

function InfoPanel({ node, onClose }) {
  if (!node) return null

  const infos = [
    { label: 'Nom', value: '…' },
    { label: 'Prénom', value: node.name },
    { label: 'Date de naissance', value: '…' },
    { label: 'Lieu', value: '…' },
    { label: 'Lien de parenté', value: '…' },
    { label: 'Profession / Compétence', value: '…' },
    { label: 'Localité', value: '…' },
  ]

  return (
    <div
      className="mt-6 sm:mt-8 p-4 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-lg"
      role="region"
      aria-label={`Informations de ${node.name}`}
    >
      <div className="flex items-center justify-between gap-4 mb-4">
        <h3 className="font-display font-semibold text-lg text-slate-900">
          Fiche de {node.name}
        </h3>
        <button
          type="button"
          onClick={onClose}
          className="shrink-0 rounded-lg p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#1A3B8A]"
          aria-label="Fermer"
        >
          <span className="sr-only">Fermer</span>
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <p className="text-sm text-slate-500 mb-4">
        Dans Baïla Généa, un clic sur une personne affiche ses informations et le lien de parenté.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
        <div className="flex flex-col items-center sm:items-start shrink-0">
          <PhotoPlaceholder size="lg" />
          <span className="text-xs text-slate-400 mt-2">Photo du membre</span>
        </div>
        <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-sm flex-1 min-w-0">
          {infos.map(({ label, value }) => (
            <div key={label} className="flex gap-2">
              <dt className="font-medium text-slate-600 shrink-0">{label} :</dt>
              <dd className="text-slate-800">{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}

const TREE_WIDTH = (CARD_WIDTH + COL_GAP) * (COLS - 1) + CARD_WIDTH
const TREE_HEIGHT = (CARD_HEIGHT + ROW_GAP) * (ROWS - 1) + CARD_HEIGHT

function ArbreGenealogique() {
  const [selectedNode, setSelectedNode] = useState(null)

  return (
    <section id="arbre" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50/80 to-white overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 mb-3">
            Exemple d&apos;arbre généalogique
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Recherchez le lien de parenté entre deux membres quelconques de la famille.
          </p>
          <p className="text-slate-500 text-sm mt-2">
            Cliquez sur une personne pour voir ses infos (exemple).
          </p>
        </div>

        <div className="flex flex-col items-center p-4 sm:p-6 overflow-x-auto">
          <div className="relative rounded-3xl bg-white/80 backdrop-blur-sm p-6 sm:p-10 shadow-xl border border-slate-200/60 shadow-slate-200/20 min-w-0">
            <div
              className="relative mx-auto"
              style={{ width: TREE_WIDTH, height: TREE_HEIGHT }}
            >
              <TreeConnectors />
              <div
                className="absolute inset-0 grid gap-x-6 gap-y-8 place-items-center"
                style={{
                  gridTemplateColumns: `repeat(${COLS}, ${CARD_WIDTH}px)`,
                  gridTemplateRows: `repeat(${ROWS}, ${CARD_HEIGHT}px)`,
                }}
              >
                {treeData.map((node) => (
                  <div
                    key={node.id}
                    className="flex justify-center items-start"
                    style={{
                      gridColumn: node.col + 1,
                      gridRow: node.row + 1,
                    }}
                  >
                    <TreeCard
                      node={node}
                      isSelected={selectedNode?.id === node.id}
                      onClick={setSelectedNode}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <InfoPanel node={selectedNode} onClose={() => setSelectedNode(null)} />
        </div>

        <p className="text-center text-sm text-slate-500 mt-8 max-w-xl mx-auto">
          Dans Baïla Généa, vous créez votre arbre avec les noms de votre famille, visualisez les liens de parenté et consultez les informations de chaque personne.
        </p>
      </div>
    </section>
  )
}

export default ArbreGenealogique
