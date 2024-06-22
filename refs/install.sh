#!/bin/bash

# Function to prompt user to press Enter to continue and display the command
prompt_continue() {
    echo -e "\n\nThe command to be executed: $1\npress ENTER to continue\n"
    read -p ""
}

# Step 1: Update the package list
CMD="sudo apt-get update"
prompt_continue "$CMD"
echo "Updating package list..."
$CMD
if [ $? -ne 0 ]; then
    echo "Error updating package list. Exiting."
    exit 1
fi
echo "Package list updated successfully."


# Step 2: Upgrade installed packages
CMD="sudo apt-get upgrade -y"
prompt_continue "$CMD"
echo "Upgrading installed packages..."
$CMD
if [ $? -ne 0 ]; then
    echo "Error upgrading packages. Exiting."
    exit 1
fi
echo "Packages upgraded successfully."


# Step 3: Check the kernel version
CMD="uname -r | awk -F. '{print \$1\".\"\$2}'"
prompt_continue "$CMD"
echo "Checking kernel version..."
KERNEL_VERSION=$(eval $CMD)
if (( $(echo "$KERNEL_VERSION > 5.6" | bc -l) )); then
    echo "Kernel version is greater than 5.6. Continuing to the next step..."
else
    echo "Error: Kernel version is not greater than 5.6. Exiting."
    exit 1
fi


# Step 4: Check Ubuntu version
CMD="lsb_release -a"
prompt_continue "$CMD"
echo "Checking Ubuntu version..."
UBUNTU_VERSION=$(eval $CMD | grep "Release" | awk '{print $2}')
UBUNTU_CODENAME=$(eval $CMD | grep "Codename" | awk '{print $2}')
if [[ "$UBUNTU_VERSION" == "24.04" && "$UBUNTU_CODENAME" == "noble" ]]; then
    echo "Ubuntu version is 24.04 (noble). Continuing to the next step..."
else
    echo "Error: Ubuntu version is not 24.04 (noble). Exiting."
    exit 1
fi


# Step 5: Install wireguard-tools
CMD="sudo apt-get install -y wireguard-tools"
prompt_continue "$CMD"
echo "Installing wireguard-tools..."
$CMD
if [ $? -ne 0 ]; then
    echo "Error installing wireguard-tools. Exiting."
    exit 1
fi
echo "wireguard-tools installed successfully."


# Step 6: Get default interface name
CMD="ip route list default | awk '/default/ {print \$5}'"
prompt_continue "$CMD"
echo "Retrieving default interface name..."
INTERFACE_NAME=$(eval $CMD)
echo "Default interface name is: $INTERFACE_NAME"


# Step 7: Prompt user for ListenPort
echo -e "\n"  # Adding a newline before the prompt
read -p "Please enter the ListenPort value: " LISTEN_PORT
echo -e "\n"  # Adding a newline before the prompt

# Step 8: Create wg0.conf file
prompt_continue "Create wg0.conf"
echo "Creating wg0.conf file..."
CONF_FILE="/etc/wireguard/wg0.conf"
echo "[Interface]" > $CONF_FILE
echo "Address = 10.0.0.1/24" >> $CONF_FILE
echo "ListenPort = $LISTEN_PORT" >> $CONF_FILE
echo "PrivateKey = EF8peoqTeZyhPo7bh6PKsiNhUYcQcjKFC+wz3bVgSFc=" >> $CONF_FILE
echo "PostUp = iptables -A FORWARD -i %i -j ACCEPT; iptables -t nat -A POSTROUTING -o $INTERFACE_NAME -j MASQUERADE; sysctl -w net.ipv4.ip_forward=1" >> $CONF_FILE
echo "PostDown = iptables -D FORWARD -i %i -j ACCEPT; iptables -t nat -D POSTROUTING -o $INTERFACE_NAME -j MASQUERADE; sysctl -w net.ipv4.ip_forward=0" >> $CONF_FILE
echo "" >> $CONF_FILE
echo "[Peer]" >> $CONF_FILE
echo "PublicKey = iPEJcwejmq/JHlMnxyK8YdbZqN4qCiUT8njE8tBkoSU=" >> $CONF_FILE
echo "AllowedIPs = 10.0.0.2/32" >> $CONF_FILE
echo "" >> $CONF_FILE
echo "[Peer]" >> $CONF_FILE
echo "PublicKey = q6dF8TGPJnzLS5zeJrJ8LEPiBLz+GcVXKynGd5On2ww=" >> $CONF_FILE
echo "AllowedIPs = 10.0.0.3/32" >> $CONF_FILE

echo "wg0.conf file created successfully."


# Step 9: Allow ListenPort through UFW
CMD="sudo ufw allow $LISTEN_PORT/udp"
prompt_continue "$CMD"
echo "Allowing ListenPort $LISTEN_PORT through UFW..."
$CMD
if [ $? -ne 0 ]; then
    echo "Error allowing ListenPort through UFW. Exiting."
    exit 1
fi
echo "ListenPort $LISTEN_PORT allowed through UFW successfully."


# Step 10: Enable WireGuard interface
CMD="sudo systemctl enable wg-quick@wg0"
prompt_continue "$CMD"
echo "Enabling WireGuard interface..."
$CMD
if [ $? -ne 0 ]; then
    echo "Error enabling WireGuard interface. Exiting."
    exit 1
fi
echo "WireGuard interface enabled successfully."


prompt_continue "REBOOT"
# Reboot the system
echo "Rebooting the system..."
sudo reboot
