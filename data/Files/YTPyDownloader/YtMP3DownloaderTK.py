from tkinter import messagebox
import youtube_dl
from tkinter import *
#Conteneur de données
playlist=[]
name_playlist=[]
#--------------------Fenetre---------------------#
m_window=Tk()
m_window.title('Téléchargeur de vidéos Youtube')
m_window.geometry('800x500')
m_window.resizable(width=False,height=False)
work_table = Canvas(m_window,width=810,height=610,background='#607285')
work_table.place(x=-10,y=-10)
label = Label(text='Téléchargeur de vidéos Youtube MP3',font=('Alef', 14, 'bold'))
label.place(x=250,y=100)
link = Entry(work_table,width=117)
link.place(x=55,y=200)
#--------------------------Fonctions de l'application-----------------------------#

def valide_link(link):
    if 'youtube' in link and 'music.youtube' not in link and len(link)>=33:
            return True
    else:
        messagebox.showwarning('Avertissement',"Merci d'utiliser un lien Youtube valide")
        return False

def addtoplaylist():
    global playlist,link,name_playlist
    if len(link.get())>=33:
        if 'youtube' in link.get() and 'music.youtube' not in link.get():
            playlist.append(link.get())
            video_info = youtube_dl.YoutubeDL().extract_info(
                url = link.get(),download=False
            )
            name_playlist.append(video_info['title'])
            link.delete(0,END)
            messagebox.showinfo(video_info['title']+"a été ajouté à votre playlist")
        else:
            messagebox.showwarning('Avertissement',"Merci d'utiliser un lien Youtube valide")
            link.delete(0,END)
    else:
        messagebox.showwarning('Avertissement',"Merci d'utiliser un lien Youtube valide")
        link.delete(0,END)

def show_playlist():
    global name_playlist
    text=""
    for element in name_playlist:
        text=text+("=> "+element+"\n")
    messagebox.showinfo("Informations","Les éléments présents dans votre playlist sont :\n"+text)

def download():
    global playlist,link
    if len(playlist)>=1:
        options={}
        filename='nothing'
        for element in playlist:
            video_info = youtube_dl.YoutubeDL().extract_info(
                url = element,download=False
            )
            filename = f"{video_info['title']}.mp3"
            options={
                'format':'bestaudio/best',
                'keepvideo':False,
                'outtmpl':filename,
            }
            with youtube_dl.YoutubeDL(options) as ydl:
                ydl.download([video_info['webpage_url']])
            messagebox.showinfo("Téléchargement Complété","Téléchargement complété pour : {}".format(filename))
    else:
        if valide_link(link.get())==True:
            video_url = link.get()
            video_info = youtube_dl.YoutubeDL().extract_info(
                url = video_url,download=False
            )
            filename = f"{video_info['title']}.mp3"
            options={
            'format':'bestaudio/best',
            'keepvideo':False,
            'outtmpl':filename,
            }
            with youtube_dl.YoutubeDL(options) as ydl:
                ydl.download([video_info['webpage_url']])
            messagebox.showinfo("Téléchargement Complété","Téléchargement complété pour : {}".format(filename))
            link.delete(0,END)
        else:
            link.delete(0,END)

def infos_show():
    messagebox.showinfo('Informations',"Application développé par GuGules, Téléchargeur de musique MP3 Youtube")
#---------------------------------------------------------------------------------#
convert_button=Button(work_table,width=10,height=2,text='Télécharger',font=('Alef', 14, 'bold'),command=download)
convert_button.place(x=110,y=300)
add_to_playlist_button=Button(work_table,width=15,height=2,text='Ajouter à la playlist',font=('Alef', 14, 'bold'),command=addtoplaylist)
add_to_playlist_button.place(x=250,y=300)
end_button=Button(work_table,width=8,height=2,text='Quitter',font=('Alef', 14, 'bold'),command=m_window.destroy)
end_button.place(x=590,y=300)
info_button=Button(work_table,width=10,height=2,text='Infos',font=('Alef', 14, 'bold'),command=infos_show)
info_button.place(x=450,y=300)
show_playlist_button=Button(work_table,width=15,height=2,text='Afficher la playlist',font=('Alef', 14, 'bold'),command=show_playlist)
show_playlist_button.place(x=250,y=375)
#---------------------------Execution de l'application----------------------------#
m_window.mainloop()