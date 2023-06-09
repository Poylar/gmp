import { create } from 'zustand'

const useLang = create(set => ({
	lang: 'en-US',
	changeLang: newLang => set(state => ({ lang: newLang })),
}))

export default useLang
