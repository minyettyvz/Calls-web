"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { Pill } from "@/components/pill"
import { Button } from "@/components/ui/button"
import { Users, Plus, Phone, User } from "lucide-react"
import { px } from "@/components/utils"

interface Contact {
  id: string
  name: string
  phone: string
}

interface UserData {
  email: string
  name: string
  minutes: number
  callerId: string
  contacts: Contact[]
}

const FIXED_CONTACTS = [
  { id: "1", name: "Soporte Técnico", phone: "+1 (800) 555-0100" },
  { id: "2", name: "Ventas", phone: "+1 (800) 555-0101" },
  { id: "3", name: "Atención al Cliente", phone: "+1 (800) 555-0102" },
  { id: "4", name: "Facturación", phone: "+1 (800) 555-0103" },
  { id: "5", name: "Emergencias", phone: "+1 (800) 555-0199" },
]

export default function ContactsPage() {
  const [user, setUser] = useState<UserData | null>(null)
  const [contacts, setContacts] = useState<Contact[]>([])
  const [showAddForm, setShowAddForm] = useState(false)
  const [newName, setNewName] = useState("")
  const [newPhone, setNewPhone] = useState("")

  useEffect(() => {
    const userData = localStorage.getItem("ghostCallUser")
    if (userData) {
      const parsed = JSON.parse(userData)
      setUser(parsed)
      setContacts(parsed.contacts || [])
    }
  }, [])

  const handleAddContact = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newName || !newPhone) return

    const newContact: Contact = {
      id: Date.now().toString(),
      name: newName,
      phone: newPhone,
    }

    const updatedContacts = [...contacts, newContact]
    setContacts(updatedContacts)

    // Save to localStorage
    if (user) {
      const updatedUser = { ...user, contacts: updatedContacts }
      localStorage.setItem("ghostCallUser", JSON.stringify(updatedUser))
      setUser(updatedUser)
    }

    setNewName("")
    setNewPhone("")
    setShowAddForm(false)
  }

  const handleDeleteContact = (id: string) => {
    const updatedContacts = contacts.filter((c) => c.id !== id)
    setContacts(updatedContacts)

    if (user) {
      const updatedUser = { ...user, contacts: updatedContacts }
      localStorage.setItem("ghostCallUser", JSON.stringify(updatedUser))
      setUser(updatedUser)
    }
  }

  const polyRoundness = 8

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <Pill className="mb-4">DIRECTORIO</Pill>
        <h1 className="text-3xl sm:text-4xl font-sentient mb-2">
          Directorio de <i className="font-light">Contactos</i>
        </h1>
        <p className="font-mono text-foreground/60">Números de contacto disponibles</p>
      </div>

      {/* Add Contact Button */}
      <div className="mb-6">
        <Button onClick={() => setShowAddForm(!showAddForm)}>
          <Plus className="mr-2 size-4" />
          {showAddForm ? "[Cancelar]" : "[Agregar Contacto]"}
        </Button>
      </div>

      {/* Add Contact Form */}
      {showAddForm && (
        <form onSubmit={handleAddContact} className="p-6 border border-primary bg-background/50 mb-6">
          <h3 className="font-mono text-lg mb-4">Nuevo Contacto</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block font-mono text-sm text-foreground/80 mb-2 uppercase">Nombre</label>
              <input
                type="text"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                style={{ "--poly-roundness": px(polyRoundness) } as React.CSSProperties}
                className="w-full h-12 px-4 bg-background border border-border font-mono text-foreground placeholder:text-foreground/40 focus:border-primary focus:outline-none transition-colors [clip-path:polygon(var(--poly-roundness)_0,calc(100%_-_var(--poly-roundness))_0,100%_var(--poly-roundness),100%_calc(100%_-_var(--poly-roundness)),calc(100%_-_var(--poly-roundness))_100%,var(--poly-roundness)_100%,0_calc(100%_-_var(--poly-roundness)),0_var(--poly-roundness))]"
                placeholder="Juan Pérez"
                required
              />
            </div>
            <div>
              <label className="block font-mono text-sm text-foreground/80 mb-2 uppercase">Teléfono</label>
              <input
                type="tel"
                value={newPhone}
                onChange={(e) => setNewPhone(e.target.value)}
                style={{ "--poly-roundness": px(polyRoundness) } as React.CSSProperties}
                className="w-full h-12 px-4 bg-background border border-border font-mono text-foreground placeholder:text-foreground/40 focus:border-primary focus:outline-none transition-colors [clip-path:polygon(var(--poly-roundness)_0,calc(100%_-_var(--poly-roundness))_0,100%_var(--poly-roundness),100%_calc(100%_-_var(--poly-roundness)),calc(100%_-_var(--poly-roundness))_100%,var(--poly-roundness)_100%,0_calc(100%_-_var(--poly-roundness)),0_var(--poly-roundness))]"
                placeholder="+1234567890"
                required
              />
            </div>
          </div>
          <Button type="submit" size="sm">
            [Guardar Contacto]
          </Button>
        </form>
      )}

      {/* Contacts List */}
      <div className="border border-border bg-background/50">
        <div className="p-4 border-b border-border flex items-center gap-3">
          <Users className="size-5 text-primary" />
          <span className="font-mono text-sm uppercase">Lista de Contactos ({FIXED_CONTACTS.length})</span>
        </div>

        {contacts.length === 0 ? (
          <div className="p-8 text-center">
            <Users className="size-12 text-foreground/20 mx-auto mb-4" />
            <p className="font-mono text-foreground/40">No tienes contactos guardados</p>
            <p className="font-mono text-sm text-foreground/30 mt-1">Haz clic en "Agregar Contacto" para comenzar</p>
          </div>
        ) : (
          <div className="divide-y divide-border">
            {FIXED_CONTACTS.map((contact) => (
              <div
                key={contact.id}
                className="p-4 flex items-center justify-between hover:bg-foreground/5 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-primary/10 flex items-center justify-center">
                    <User className="size-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-mono text-sm font-medium">{contact.name}</p>
                    <p className="font-mono text-xs text-foreground/60 flex items-center gap-1">
                      <Phone className="size-3" />
                      {contact.phone}
                    </p>
                  </div>
                </div>
                {/* <button
                  onClick={() => handleDeleteContact(contact.id)}
                  className="p-2 text-foreground/40 hover:text-destructive transition-colors"
                  aria-label="Eliminar contacto"
                >
                  <Trash2 className="size-5" />
                </button> */}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
