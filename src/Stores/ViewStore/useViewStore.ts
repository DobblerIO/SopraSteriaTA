import { useEffect, useState } from "react"
import { ViewStore, type ViewName } from "./ViewStore"

export const useViewStore = () => {

    const [data, setData] = useState(ViewStore.getActiveView());

    useEffect(() => {
        const handleChange = () => {
            setData(ViewStore.getActiveView());
        }

        ViewStore.onChange(handleChange);

        return () => {
            ViewStore.offChange(handleChange);
        }
    }, [])

    return {
        activeView: data,
        setActiveView: (view: ViewName | null) => ViewStore.setActiveView(view),
    }
}