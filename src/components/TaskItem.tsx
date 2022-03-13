import React, { useState, useEffect } from 'react'
import { StyleSheet, TextInput } from 'react-native'

interface TaskProps {
    value: string
    id: number
    saveEdit: (id: number, newTitle: string) => void
}

export function TaskItem({ saveEdit, value, id } : TaskProps) {
    const [edit, setEdit] = useState('')

    useEffect(() => {
        setEdit(value)
    }, [])

    return(
        <TextInput 
            style={styles.TextInput}
            value={edit}
            onChangeText={setEdit}
            onSubmitEditing={() => {saveEdit(id, edit)}}
        />
    )
}

const styles = StyleSheet.create({
    TextInput: {
        color: '#666',
        fontFamily: 'Inter-Medium',
        padding: -1,
        margin: 0,
        zIndex: 10,
    }
})