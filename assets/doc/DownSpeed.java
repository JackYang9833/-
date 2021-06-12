package pragraph4;

import java.util.Random;
import java.util.Scanner;

/**
 * @ Author:jack
 * @ Version:1.0
 * @ Date:2021/6/11
 */
public class DownSpeed {
    public double speed;
    public double left_time;
    public double sizeOfFile;
    int orgSize;
    public static void downSpeed() {

    }

    /**
     * @return计算剩余下载耗时
     */
    public double calculator() {
        left_time =(sizeOfFile / speed);
        return left_time;
    }

    /**
     * @return 用随机数模拟现实中的网速
     */
    public double calcSpeed() {
        Random rand = new Random();
        double networkSpeed = rand.nextInt(10);
        if (networkSpeed == 0) {
            networkSpeed = calcSpeed();
        }
        return speed = networkSpeed;
    }

    public String getContent() {
        String crack = "";
            crack = "文件总大小为" + orgSize+"Mib\t"+(orgSize-sizeOfFile)+"Mib已下载"+"Mib"+"网速为"+speed + "Mib/s"+"完成了"+(100-(sizeOfFile/orgSize%100*100))+"%"+"还剩"+(int)left_time +"秒";
        return crack;
    }

    /**
     * 打印结果
     */
    public void result() {
        System.out.print("请输入文件大小>>");
        orgSize = new Scanner(System.in).nextInt();
        sizeOfFile = orgSize;
        do {
            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            System.out.print("=");
            speed = calcSpeed();
            left_time = calculator();
            sizeOfFile = sizeOfFile - 1;
            System.out.println(getContent());
        } while (sizeOfFile != 0);
    }


    /**
     * 延时效果
     */
    public void delay(){
        for (int i=100;i>0;i--)
            delay();
    }
}
