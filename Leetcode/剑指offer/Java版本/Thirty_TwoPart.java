package 剑指offer;


import 剑指offer.PublicClass.TreeNode;

import java.util.*;

/**
 * 面试题32 - II. 从上到下打印二叉树 II
 * 从上到下按层打印二叉树，同一层的节点按从左到右的顺序打印，每一层打印到一行。
 */
public class Thirty_TwoPart {

  /**
   * 第一版
   */
  public List<List<Integer>> levelOrder(TreeNode root) {
    if (root == null) {
      return Collections.EMPTY_LIST;
    }
    Queue<TreeNode> queue = new LinkedList<>();
    Queue<Integer> depthQueue = new LinkedList<>();
    queue.offer(root);
    depthQueue.offer(0);
    Map<Integer, List<Integer>> depthMap = new HashMap<>();
    while (!queue.isEmpty()) {
      TreeNode val = queue.poll();
      int depth = depthQueue.poll();
      if (val.left != null) {
        queue.offer(val.left);
        depthQueue.offer(depth + 1);
      }
      if (val.right != null) {
        queue.offer(val.right);
        depthQueue.offer(depth + 1);
      }
      if (depthMap.containsKey(depth)) {
        List<Integer> vals = new ArrayList<>(depthMap.get(depth));
        vals.add(val.val);
        depthMap.put(depth, vals);
      } else {
        depthMap.put(depth, Arrays.asList(new Integer[]{val.val}));
      }
    }
    List<List<Integer>> list = new ArrayList<>();
    for (Map.Entry<Integer, List<Integer>> entry : depthMap.entrySet()) {
      list.add(entry.getValue());
    }
    return list;
  }


  /**
   * 第二版
   */
  public List<List<Integer>> levelOrderSecond(TreeNode root) {
    if (root == null) {
      return Collections.EMPTY_LIST;
    }
    Queue<TreeNode> queue = new LinkedList<>();
    Queue<Integer> depthQueue = new LinkedList<>();
    queue.offer(root);
    depthQueue.offer(0);
    List<List<Integer>> list = new ArrayList<>();
    while (!queue.isEmpty()) {
      TreeNode val = queue.poll();
      int depth = depthQueue.poll();
      if (val.left != null) {
        queue.offer(val.left);
        depthQueue.offer(depth + 1);
      }
      if (val.right != null) {
        queue.offer(val.right);
        depthQueue.offer(depth + 1);
      }
      if (list.size() - 1 >= depth) {
        List<Integer> vals = list.get(depth);
        vals.add(val.val);
      } else {
        List<Integer> dev = new ArrayList<>();
        dev.add(val.val);
        list.add(depth, dev);
      }
    }
    return list;
  }

  /**
   * 第三版 可以参考ThreePart的代码，采用递归
   */

}