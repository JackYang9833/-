package pragraph4;

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;
import java.util.Scanner;

/**
 * @项目名称 仿KTV点歌系统
 * @日期 2021/6/9
 */


public class KTVByLKlist {
    int position;
    /**
     * 初始化歌单
     */
    public void initList() {
        LinkedList list = new LinkedList();
        System.out.print("\r");
        list.add("明天你好");
        list.add("破茧");
        list.add("虫儿飞");

        do {
            System.out.println("\n-----------WELCOME----------------");
            String menu[] = new String[]{"退出","添加", "置顶", "前置"};
            System.out.println(list);
            for (int i = 0; i < menu.length; i++) {
                System.out.println(i+1+"--" + menu[i]);
            }
            System.out.print("\t请选择>>");
            int command=new Scanner(System.in).nextInt();
            switch (command) {
                case 1:
                    addSong(list);
                    break;
                case 2:
                    setTop(list);
                    break;
                case 3:
                    setFront(list);
                    break;
                case 0:
                    System.exit(-1);
                    break;
                default:
                    System.out.print("指令错误");
            }
        } while (true);
    }

    /**
     * 添加歌曲
     */
    public void addSong(LinkedList list){
        System.out.print("请输入要添加的歌曲>>");
      String songName = new Scanner(System.in).nextLine();
      position = list.indexOf(songName);
        if (position< 0) {
            list.addLast(songName);
            System.out.println("添加成功！");
        }else{
            System.out.println("列表已存在该歌曲");
        }
        System.out.println(list);
    }


    /**
     *置顶
     */
    public void setTop(LinkedList list){
        System.out.print("请输入要置顶的歌曲名称>>");
        String songName = new Scanner(System.in).nextLine();
        position = list.indexOf(songName);
        if(position<0){
            System.out.println("无此歌曲");
        }else{
            list.remove(songName);
            list.addFirst(songName);
            System.out.println(list);
        }
    }


    /**
     * 前置1位
     */
    public void setFront(LinkedList list){
        System.out.print("请输入要前置的歌曲名称>>");
        String songName = new Scanner(System.in).nextLine();
        position = list.indexOf(songName);
        if(position<0){
            System.out.println("无此歌曲");
        }else{
            list.remove(songName);
           list.add(position-1,songName);
        }
    }

}
